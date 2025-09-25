import { User, BookOpen, Calendar, FileText, ExternalLink } from 'lucide-react'
import { Link } from 'react-router-dom'
import StudentsImage from '../assets/home.jpg'

function Students() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero relative flex items-center justify-center overflow-hidden bg-transparent pt-20 lg:pt-0">
        <img
          src={StudentsImage}
          alt="Portal del Estudiante"
          className="block max-w-full h-auto object-contain mx-auto"
        />
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center text-white px-4 pt-20 pb-8 lg:pt-0 lg:pb-12 lg:justify-end">
          <h1 className="text-4xl md:text-6xl text-base-100 font-bold font-poppins mb-6 animate-fade-in">
            Portal del Estudiante
          </h1>
          <p className="text-xl md:text-2xl font-b mb-8 leading-relaxed">
            Accede a todos los recursos y servicios académicos disponibles para ti
          </p>
        </div>
      </section>

      {/* Servicios Disponibles */}
      <section className="py-16 bg-base-200">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12 font-poppins">
            Servicios Disponibles
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Consulta de Notas */}
            <div className="card bg-white shadow-xl hover:shadow-2xl transition-shadow">
              <div className="card-body text-center">
                <FileText className="w-16 h-16 text-accent mx-auto mb-4" />
                <h3 className="card-title justify-center text-primary mb-4">Consulta de Notas</h3>
                <p className="text-neutral mb-6">
                  Revisa tu rendimiento académico y calificaciones en tiempo real.
                </p>
                <div className="card-actions justify-center">
                  <button className="btn btn-primary text-white">
                    Próximamente
                  </button>
                </div>
              </div>
            </div>

            {/* Horarios */}
            <div className="card bg-white shadow-xl hover:shadow-2xl transition-shadow">
              <div className="card-body text-center">
                <Calendar className="w-16 h-16 text-accent mx-auto mb-4" />
                <h3 className="card-title justify-center text-primary mb-4">Horarios de Clase</h3>
                <p className="text-neutral mb-6">
                  Consulta tus horarios de clase y actividades académicas.
                </p>
                <div className="card-actions justify-center">
                  <button className="btn btn-primary text-white">
                    Próximamente
                  </button>
                </div>
              </div>
            </div>

            {/* Recursos Académicos */}
            <div className="card bg-white shadow-xl hover:shadow-2xl transition-shadow">
              <div className="card-body text-center">
                <BookOpen className="w-16 h-16 text-accent mx-auto mb-4" />
                <h3 className="card-title justify-center text-primary mb-4">Recursos Académicos</h3>
                <p className="text-neutral mb-6">
                  Accede a material de estudio, guías y recursos educativos.
                </p>
                <div className="card-actions justify-center">
                  <button className="btn btn-primary text-white">
                    Próximamente
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Información Importante */}
      <section className="py-16 bg-base-100">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 font-poppins">
                Información Importante
              </h2>
              <div className="space-y-6">
                <div className="alert alert-info">
                  <User className="w-6 h-6" />
                  <div>
                    <h3 className="font-bold">Acceso al Portal</h3>
                    <div className="text-sm">El portal estudiantil estará disponible próximamente. Mantente atento a las comunicaciones oficiales.</div>
                  </div>
                </div>
                
                <div className="card bg-base-200 shadow-lg">
                  <div className="card-body">
                    <h3 className="card-title text-primary mb-4">Recursos Actuales</h3>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-accent rounded-full"></span>
                        Comunicación directa con docentes
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-accent rounded-full"></span>
                        Atención personalizada en coordinación
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-accent rounded-full"></span>
                        Seguimiento académico presencial
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="card bg-primary text-primary-content shadow-xl">
              <div className="card-body text-center">
                <h3 className="card-title justify-center text-2xl mb-4">¿Necesitas Ayuda?</h3>
                <p className="mb-6">
                  Nuestro equipo está disponible para apoyarte en tu proceso académico.
                </p>
                <div className="card-actions justify-center">
                  <Link to="/contact" className="btn btn-accent text-white">
                    Contáctanos
                    <ExternalLink className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Students