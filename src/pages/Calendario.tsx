import { Calendar, Camera, Clock } from 'lucide-react'
import { useState, useMemo, useEffect } from 'react'
import calendar2025 from '../assets/calendar/calendar2025.json'
import Portada from '../assets/home.jpg'

function Calendario() {
  const [selectedMonth, setSelectedMonth] = useState<string>('todos')
  const [searchTerm, setSearchTerm] = useState('')
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
  }, [searchTerm, selectedMonth])

  const filteredEvents = useMemo(() => {
    const events = processCalendarEvents()
    return events.filter(event => {
      const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesMonth = selectedMonth === 'todos' || 
        event.startDate.getMonth() === parseInt(selectedMonth)
      return matchesSearch && matchesMonth
    })
  }, [searchTerm, selectedMonth])

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
          {/* Filtros */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8 max-w-2xl mx-auto">
            <div className="flex-1 transform transition-all duration-300 hover:scale-105">
              <input
                type="text"
                placeholder="🔍 Buscar eventos..."
                className="input input-bordered w-full focus:ring-2 focus:ring-accent transition-all duration-300"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <select
              className="select select-bordered w-full sm:w-auto focus:ring-2 focus:ring-accent transition-all duration-300 hover:scale-105"
              value={selectedMonth}
              onChange={(e) => setSelectedMonth(e.target.value)}
            >
              <option value="todos">📆 Todos los meses</option>
              <option value="0">🌟 Enero</option>
              <option value="1">💝 Febrero</option>
              <option value="2">🌸 Marzo</option>
              <option value="3">🌺 Abril</option>
              <option value="4">🌻 Mayo</option>
              <option value="5">☀️ Junio</option>
              <option value="6">🎆 Julio</option>
              <option value="7">🎨 Agosto</option>
              <option value="8">🍂 Septiembre</option>
              <option value="9">🎃 Octubre</option>
              <option value="10">🦃 Noviembre</option>
              <option value="11">🎄 Diciembre</option>
            </select>
          </div>
          {/* Próximos eventos destacados */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold text-primary mb-6 text-center animate-fade-in">
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
            <h3 className="text-xl font-semibold text-primary mb-6 text-center animate-fade-in">
              📋 Calendario Completo 2025
            </h3>
            {isLoading ? (
              <div className="flex justify-center items-center py-12">
                <div className="flex flex-col items-center gap-4">
                  <div className="loading loading-spinner loading-lg text-accent"></div>
                  <p className="text-neutral/60">Cargando eventos...</p>
                </div>
              </div>
            ) : filteredEvents.length === 0 ? (
              <div className="text-center py-8 animate-fade-in">
                <Calendar className="w-16 h-16 text-neutral/40 mx-auto mb-4 animate-pulse" />
                <p className="text-neutral/60">No se encontraron eventos que coincidan con los filtros.</p>
                <p className="text-sm text-neutral/50 mt-2">Intenta cambiar los criterios de búsqueda</p>
              </div>
            ) : (
              <div key={animationKey} className="grid gap-4 animate-fade-in">
                {filteredEvents.map((event, index) => (
                  <div 
                    key={event.id} 
                    className="card bg-white shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-[1.02] hover:-translate-y-1"
                    style={{
                      animationDelay: `${index * 50}ms`,
                      animation: 'slideInLeft 0.6s ease-out forwards'
                    }}
                  >
                    <div className="card-body p-6">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <span className={`badge ${getEventTypeColor(event.type)} hover:scale-110 transition-transform`}>
                              {event.type.replace('_', ' ')}
                            </span>
                            <div className="flex items-center gap-2 text-accent text-sm">
                              <Calendar className="w-4 h-4 animate-pulse" />
                              {formatDateRange(event.startDate, event.endDate)}
                            </div>
                          </div>
                          <h4 className="text-lg font-semibold text-primary mb-1 hover:text-accent transition-colors cursor-pointer">
                            {event.title}
                          </h4>
                          <p className="text-neutral/70 text-sm">
                            {event.category === 'institucional' ? '🏫 Evento Institucional' : event.category}
                          </p>
                        </div>
                        <div className="flex items-center gap-2 text-neutral/60">
                          <Clock className="w-4 h-4 animate-spin" style={{animationDuration: '3s'}} />
                          <span className="text-sm">
                            {event.isAllDay ? '⏰ Todo el día' : '🕐 Horario específico'}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Circulares */}
      <section className="py-16 bg-base-200">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12 font-poppins">
            Circulares
          </h2>
          <div className="flex flex-col items-center justify-center min-h-[180px]">
            <div className="bg-white rounded-xl shadow-lg p-8 text-center max-w-xl w-full animate-fade-in">
              <p className="text-lg text-neutral mb-4">
                Próximamente encontrarás aquí las circulares institucionales y comunicados importantes para la comunidad educativa.
              </p>
              <span className="inline-block text-4xl text-accent animate-bounce">📄</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

// Estilos CSS para animaciones personalizadas
const styles = `
  @keyframes slideInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes slideInLeft {
    from {
      opacity: 0;
      transform: translateX(-30px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  .animate-fade-in {
    animation: fadeIn 0.8s ease-out;
  }

  .line-clamp-2 {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  /* Mejoras para focus y accesibilidad */
  .input:focus, .select:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(var(--accent), 0.3);
  }

  /* Animación suave para el loading */
  .loading-spinner {
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

if (typeof document !== 'undefined') {
  const styleSheet = document.createElement('style');
  styleSheet.type = 'text/css';
  styleSheet.innerText = styles;
  document.head.appendChild(styleSheet);
}

export default Calendario
