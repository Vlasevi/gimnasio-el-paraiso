
import { Award, Target, Eye, Heart, Users, BookOpen, Calendar } from 'lucide-react'

function About() {
  const leaders = [
    {
      name: "María Elena Rodríguez",
      position: "Rectora",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3",
      description: "Magíster en Educación con 25 años de experiencia en dirección académica."
    },
    {
      name: "Carlos Alberto Martínez",
      position: "Coordinador Académico",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3",
      description: "Especialista en Pedagogía y Currículo con énfasis en innovación educativa."
    },
    {
      name: "Ana Patricia González",
      position: "Coordinadora de Convivencia",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3",
      description: "Psicóloga educativa especializada en desarrollo socioemocional."
    },
    {
      name: "Jorge Luis Herrera",
      position: "Coordinador de Preescolar",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3",
      description: "Licenciado en Educación Preescolar con 15 años de experiencia."
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary to-secondary">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-poppins">
            Nosotros
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
            Conoce la historia, misión y equipo que hace posible la excelencia educativa en el Gimnasio el Paraíso
          </p>
        </div>
      </section>

      {/* Historia del Colegio */}
      <section className="py-16 bg-base-100">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 font-poppins">
                Nuestra Historia
              </h2>
              <div className="space-y-6">
                <p className="text-lg leading-relaxed text-neutral">
                  El Gimnasio el Paraíso fue fundado en 1985 por un grupo de educadores visionarios 
                  que soñaban con crear una institución educativa que formara no solo estudiantes 
                  académicamente excelentes, sino también ciudadanos íntegros y comprometidos con su sociedad.
                </p>
                <p className="text-lg leading-relaxed text-neutral">
                  Durante casi cuatro décadas, hemos mantenido nuestro compromiso con la calidad educativa, 
                  adaptándonos a los cambios del mundo moderno sin perder de vista nuestros valores fundacionales: 
                  respeto, responsabilidad, honestidad y excelencia.
                </p>
                <p className="text-lg leading-relaxed text-neutral">
                  Hoy, más de 3,000 egresados dan testimonio de la sólida formación recibida en nuestras aulas, 
                  destacándose en universidades nacionales e internacionales y contribuyendo positivamente 
                  al desarrollo de nuestro país.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-base-200 p-6 rounded-lg text-center">
                <div className="text-3xl font-bold text-primary mb-2">39</div>
                <div className="text-sm text-neutral">Años de experiencia</div>
              </div>
              <div className="bg-base-200 p-6 rounded-lg text-center">
                <div className="text-3xl font-bold text-primary mb-2">3000+</div>
                <div className="text-sm text-neutral">Egresados exitosos</div>
              </div>
              <div className="bg-base-200 p-6 rounded-lg text-center">
                <div className="text-3xl font-bold text-primary mb-2">850</div>
                <div className="text-sm text-neutral">Estudiantes actuales</div>
              </div>
              <div className="bg-base-200 p-6 rounded-lg text-center">
                <div className="text-3xl font-bold text-primary mb-2">65</div>
                <div className="text-sm text-neutral">Docentes calificados</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Horizonte Institucional */}
      <section className="py-16 bg-base-200">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12 font-poppins">
            Horizonte Institucional
          </h2>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Misión */}
            <div className="card bg-white shadow-xl">
              <div className="card-body text-center">
                <Target className="w-16 h-16 text-accent mx-auto mb-4" />
                <h3 className="card-title justify-center text-primary mb-4 text-2xl">Misión</h3>
                <p className="text-neutral leading-relaxed">
                  Formar estudiantes íntegros, críticos y competentes mediante una educación de calidad 
                  que desarrolle sus potencialidades académicas, sociales y emocionales, preparándolos 
                  para ser ciudadanos responsables y líderes transformadores de la sociedad.
                </p>
              </div>
            </div>

            {/* Visión */}
            <div className="card bg-white shadow-xl">
              <div className="card-body text-center">
                <Eye className="w-16 h-16 text-accent mx-auto mb-4" />
                <h3 className="card-title justify-center text-primary mb-4 text-2xl">Visión</h3>
                <p className="text-neutral leading-relaxed">
                  Ser reconocidos como una institución educativa líder en formación integral, 
                  innovación pedagógica y excelencia académica, que contribuya significativamente 
                  al desarrollo social y cultural de Colombia para el año 2030.
                </p>
              </div>
            </div>

            {/* Valores */}
            <div className="card bg-white shadow-xl">
              <div className="card-body text-center">
                <Heart className="w-16 h-16 text-accent mx-auto mb-4" />
                <h3 className="card-title justify-center text-primary mb-4 text-2xl">Valores</h3>
                <ul className="text-left text-neutral space-y-2">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-accent rounded-full"></span>
                    Respeto y tolerancia
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-accent rounded-full"></span>
                    Responsabilidad
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-accent rounded-full"></span>
                    Honestidad
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-accent rounded-full"></span>
                    Excelencia
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-accent rounded-full"></span>
                    Solidaridad
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Líderes - Equipo de Trabajo */}
      <section className="py-16 bg-base-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12 font-poppins">
            Nuestro Equipo Directivo
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {leaders.map((leader, index) => (
              <div key={index} className="card bg-white shadow-xl hover:shadow-2xl transition-shadow">
                <figure className="px-6 pt-6">
                  <img src={leader.image} 
                       alt={leader.name}
                       className="rounded-full w-32 h-32 object-cover" />
                </figure>
                <div className="card-body text-center">
                  <h3 className="card-title justify-center text-primary text-lg">{leader.name}</h3>
                  <p className="text-accent font-semibold mb-2">{leader.position}</p>
                  <p className="text-neutral text-sm">{leader.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Academia - REG y PEG */}
      <section className="py-16 bg-base-200">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12 font-poppins">
            Marco Académico
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* REG */}
            <div className="card bg-white shadow-xl">
              <div className="card-body">
                <div className="flex items-center gap-4 mb-6">
                  <BookOpen className="w-12 h-12 text-accent" />
                  <div>
                    <h3 className="text-2xl font-bold text-primary">REG</h3>
                    <p className="text-accent">Reglamento Estudiantil General</p>
                  </div>
                </div>
                <p className="text-neutral mb-6 leading-relaxed">
                  Nuestro Reglamento Estudiantil General establece las normas de convivencia, 
                  derechos y deberes de todos los miembros de la comunidad educativa, 
                  promoviendo un ambiente de respeto, responsabilidad y crecimiento personal.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="badge badge-primary">Normativa</span>
                    <span className="text-sm">Derechos y deberes estudiantiles</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="badge badge-primary">Convivencia</span>
                    <span className="text-sm">Protocolos de resolución de conflictos</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="badge badge-primary">Disciplina</span>
                    <span className="text-sm">Procedimientos formativos</span>
                  </div>
                </div>
              </div>
            </div>

            {/* PEG */}
            <div className="card bg-white shadow-xl">
              <div className="card-body">
                <div className="flex items-center gap-4 mb-6">
                  <Award className="w-12 h-12 text-accent" />
                  <div>
                    <h3 className="text-2xl font-bold text-primary">PEG</h3>
                    <p className="text-accent">Proyecto Educativo General</p>
                  </div>
                </div>
                <p className="text-neutral mb-6 leading-relaxed">
                  El Proyecto Educativo General define nuestra filosofía educativa, 
                  metodologías pedagógicas y estrategias formativas orientadas hacia 
                  la excelencia académica y la formación integral de nuestros estudiantes.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="badge badge-accent">Pedagogía</span>
                    <span className="text-sm">Metodologías activas de aprendizaje</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="badge badge-accent">Currículo</span>
                    <span className="text-sm">Planes de estudio innovadores</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="badge badge-accent">Evaluación</span>
                    <span className="text-sm">Sistema integral de valoración</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reconocimientos */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 font-poppins">
            Reconocimientos y Logros
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
              <Award className="w-16 h-16 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Excelencia Académica</h3>
              <p className="text-white/90">
                Reconocimiento del Ministerio de Educación por resultados sobresalientes en Pruebas Saber 11.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
              <Users className="w-16 h-16 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Convivencia Escolar</h3>
              <p className="text-white/90">
                Institución modelo en programas de convivencia pacífica y resolución de conflictos.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
              <Calendar className="w-16 h-16 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Innovación Educativa</h3>
              <p className="text-white/90">
                Premiados por la implementación de metodologías pedagógicas innovadoras y uso de tecnología.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}


export default About