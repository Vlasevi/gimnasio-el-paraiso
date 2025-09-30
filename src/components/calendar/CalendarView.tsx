import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import type { EventInput } from '@fullcalendar/core'
import { useMemo } from 'react'
import './CalendarView.css'

interface CalendarEvent {
  id: string
  title: string
  type: string
  category: string
  startDate: Date
  endDate: Date
  isAllDay: boolean
}

interface CalendarViewProps {
  events: CalendarEvent[]
  searchTerm: string
}

function CalendarView({ events, searchTerm }: CalendarViewProps) {

  const getEventTypeColor = (type: string) => {
    const colors: Record<string, string> = {
      'academico': '#3b4aa0', // primary - azul institucional
      'evaluacion': '#ff6b35', // warning - naranja cálido
      'acto_civico': '#ffcd3c', // info - amarillo bandera colombiana
      'celebracion': '#52b455', // accent - verde del escudo
      'formacion': '#52b455', // success - verde del escudo
      'evento': '#2d3561', // secondary - azul oscuro
      'graduacion': '#3b4aa0', // primary - azul institucional
      'pedagogico': '#ffcd3c', // info - amarillo bandera
      'reunion': '#2a2a2a', // neutral - negro del borde
      'administrativo': '#2d3561', // secondary - azul oscuro
      'religioso': '#52b455', // accent - verde del escudo
      'conmemorativo': '#2a2a2a' // neutral - negro del borde
    }
    return colors[type] || '#2a2a2a'
  }

  const fullCalendarEvents: EventInput[] = useMemo(() => {
    return events
      .filter(event => 
        searchTerm === '' || 
        event.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .map(event => {
        // Clonar la fecha de fin para no mutar el objeto original
        const endDate = new Date(event.endDate);
        // Si el evento no es de todo el día, FullCalendar maneja la fecha de fin de forma exclusiva.
        // Para eventos que duran varios días, es común querer que el último día se incluya visualmente.
        // Añadir un día a la fecha de fin asegura que se renderice correctamente.
        if (!event.isAllDay || event.startDate.getTime() !== event.endDate.getTime()) {
            endDate.setDate(endDate.getDate() + 1);
        }

        return {
          id: event.id,
          title: event.title,
          start: event.startDate,
          end: endDate,
          allDay: event.isAllDay,
          backgroundColor: getEventTypeColor(event.type),
          borderColor: getEventTypeColor(event.type),
          textColor: '#FFFFFF',
          extendedProps: {
            type: event.type,
            category: event.category
          }
        }
      })
  }, [events, searchTerm])

  const formatEventType = (type: string) => {
    return type.replace('_', ' ').toUpperCase()
  }

  return (
    <div className="calendar-container">
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        headerToolbar={{
          left: 'prev,next today',
          center: 'title',
          right: ''
        }}
        events={fullCalendarEvents}
        height="auto"
        locale="es"
        buttonText={{
          today: 'Hoy'
        }}
        firstDay={1} // Lunes como primer día
        fixedWeekCount={false} // No mostrar semanas adicionales
        showNonCurrentDates={false} // No mostrar fechas de otros meses
        dayMaxEvents={3}
        moreLinkText="más eventos"
        eventDisplay="block"
        displayEventTime={false}
        eventMouseEnter={(info) => {
          // Crear tooltip
          const tooltip = document.createElement('div')
          tooltip.className = 'calendar-tooltip'
          tooltip.innerHTML = `
            <div class="tooltip-content">
              <h4>${info.event.title}</h4>
              <p><strong>Tipo:</strong> ${formatEventType(info.event.extendedProps.type)}</p>
              <p><strong>Fecha:</strong> ${info.event.start?.toLocaleDateString('es-CO', {
                day: 'numeric',
                month: 'long',
                year: 'numeric'
              })}</p>
            </div>
          `
          document.body.appendChild(tooltip)
          
          const rect = info.el.getBoundingClientRect()
          tooltip.style.position = 'fixed'
          tooltip.style.left = `${rect.left + rect.width / 2}px`
          tooltip.style.top = `${rect.top - 10}px`
          tooltip.style.transform = 'translate(-50%, -100%)'
        }}
        eventMouseLeave={() => {
          // Remover tooltip
          const tooltip = document.querySelector('.calendar-tooltip')
          if (tooltip) {
            tooltip.remove()
          }
        }}
        dayCellClassNames={(info) => {
          const today = new Date()
          const cellDate = info.date
          
          if (cellDate.toDateString() === today.toDateString()) {
            return ['today-cell']
          }
          return []
        }}
        eventClassNames={(info) => {
          return [`event-${info.event.extendedProps.type}`]
        }}
      />
    </div>
  )
}

export default CalendarView
