import { Calendar, Clock } from 'lucide-react'
import { useState, useMemo, useEffect } from 'react'
import calendar2025 from '../assets/calendar/calendar2025.json'
import Portada from '../assets/home.jpg'
import CalendarView from '../components/calendar/CalendarView'

function Calendario() {
  const [isLoading, setIsLoading] = useState(false)
  const [animationKey, setAnimationKey] = useState(0)

  const processCalendarEvents = () => {
    const events = calendar2025.calendario_institucional.eventos
    return events
      .map(event => ({
        id: event.id,
        title: event.titulo,
        type: event.tipo,
        category: event.categoria,
        startDate: new Date(event.starts_at),
        endDate: new Date(event.ends_at),
        isAllDay: event.all_day
      }))
      .sort((a, b) => a.startDate.getTime() - b.startDate.getTime())
  }

  const formatDate = (date: Date, includeYear = true) => {
    const options: Intl.DateTimeFormatOptions = {
      day: 'numeric',
      month: 'long',
      ...(includeYear && { year: 'numeric' }),
      timeZone: 'America/Bogota'
    }
    return new Intl.DateTimeFormat('es-CO', options).format(date)
  }

  const formatDateRange = (startDate: Date, endDate: Date) => {
    const isSameDay = startDate.toDateString() === endDate.toDateString()
    if (isSameDay) {
      return formatDate(startDate)
    }
    return `${formatDate(startDate, false)} - ${formatDate(endDate)}`
  }

  const getEventTypeColor = (type: string) => {
    const colors: Record<string, string> = {
      'academico': 'badge-primary',
      'evaluacion': 'badge-warning',
      'acto_civico': 'badge-info',
      'celebracion': 'badge-accent',
      'formacion': 'badge-success',
      'evento': 'badge-secondary',
      'graduacion': 'badge-primary',
      'pedagogico': 'badge-info',
      'reunion': 'badge-neutral',
      'administrativo': 'badge-neutral',
      'religioso': 'badge-accent',
      'conmemorativo': 'badge-secondary'
    }
    return colors[type] || 'badge-neutral'
  }

  useEffect(() => {
    setIsLoading(true)
    const timer = setTimeout(() => {
      setIsLoading(false)
      setAnimationKey(prev => prev + 1)
    }, 300)
    return () => clearTimeout(timer)
  }, [])

  const upcomingEvents = useMemo(() => {
    const today = new Date()
    return processCalendarEvents()
      .filter(event => event.startDate >= today)
      .slice(0, 6)
  }, [])

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero relative flex items-center justify-center overflow-hidden bg-transparent pt-20 lg:pt-0">
        <img
          src={Portada}
          alt="Portada"
          className="block max-w-full h-auto object-contain mx-auto"
        />
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center text-white px-4 pt-20 pb-8 lg:pt-0 lg:pb-12 lg:justify-end">
          <h1 className="text-4xl md:text-6xl text-base-100 font-bold font-poppins mb-6 animate-fade-in">
            Calendario Institucional
          </h1>
          <p className="text-lg md:text-2xl font-b mb-6 md:mb-8 leading-relaxed hidden sm:block">
          Consulta aquí todos los eventos, fechas importantes y circulares del año escolar.
          </p>
        </div>
      </section>

      {/* Eventos escolares y fechas importantes */}
      <section className="py-16 bg-gradient-to-br from-base-200 to-base-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 font-poppins">
              📅 Eventos Escolares y Fechas Importantes
            </h2>
            <p className="text-lg text-neutral/80 max-w-2xl mx-auto">
              Mantente al día con todas las actividades y eventos importantes del año escolar 2025
            </p>
          </div>
          {/* Próximos eventos destacados */}
          <div className="mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-primary mb-6 text-center animate-fade-in font-poppins">
              ⭐ Próximos Eventos Destacados
            </h3>
            {isLoading ? (
              <div className="flex justify-center items-center py-8">
                <div className="loading loading-spinner loading-lg text-accent"></div>
              </div>
            ) : (
              <div key={animationKey} className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 animate-fade-in">
                {upcomingEvents.map((event, index) => (
                  <div 
                    key={event.id} 
                    className="card bg-white shadow-lg hover:shadow-xl transition-all duration-500 border-l-4 border-accent transform hover:scale-105 hover:-translate-y-1"
                    style={{
                      animationDelay: `${index * 100}ms`,
                      animation: 'slideInUp 0.6s ease-out forwards'
                    }}
                  >
                    <div className="card-body p-4">
                      <div className="flex items-start justify-between mb-2">
                        <span className={`badge ${getEventTypeColor(event.type)} badge-sm animate-pulse`}>
                          {event.type.replace('_', ' ')}
                        </span>
                        <Clock className="w-4 h-4 text-neutral/60 animate-bounce" />
                      </div>
                      <h4 className="font-semibold text-primary text-sm mb-2 line-clamp-2 hover:text-accent transition-colors">
                        {event.title}
                      </h4>
                      <div className="flex items-center gap-2 text-accent text-xs">
                        <Calendar className="w-3 h-3" />
                        {formatDateRange(event.startDate, event.endDate)}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
          {/* Lista completa de eventos */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-primary mb-6 text-center animate-fade-in font-poppins">
              📋 Calendario Completo 2025
            </h3>
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Calendario Visual */}
              <div className="lg:col-span-2">
                <CalendarView 
                  events={processCalendarEvents()}
                  searchTerm=""
                />
              </div>
              
              {/* Panel lateral para circulares */}
              <div className="lg:col-span-1">
                <div className="bg-white rounded-xl shadow-lg p-6 sticky top-4">
                  <h4 className="text-lg font-semibold text-primary mb-4 flex items-center gap-2">
                    📄 Circulares Recientes
                  </h4>
                  <div className="space-y-4">
                    <div className="text-center py-8">
                      <div className="text-4xl text-accent mb-4">📋</div>
                      <p className="text-neutral/70 text-sm">
                        Próximamente encontrarás aquí las circulares institucionales más recientes.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Calendario
