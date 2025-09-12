
import { ChevronRight, Award, Users, BookOpen } from 'lucide-react'
import { Link } from 'react-router'

function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/80 to-secondary/90"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3')] bg-cover bg-center"></div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold font-poppins mb-6 animate-fade-in">
            Gimnasio el <span className="text-accent">Paraíso</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 leading-relaxed">
            Formando líderes íntegros con excelencia académica desde 1985
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/admissions" className="btn btn-accent btn-lg font-semibold">
              Conoce nuestro proceso de admisión
              <ChevronRight className="w-5 h-5" />
            </Link>
            <Link to="/about" className="btn btn-outline btn-lg text-white border-white hover:bg-white hover:text-primary">
              Descubre nuestra historia
            </Link>
          </div>
        </div>
      </section>

      {/* Quiénes Somos */}
      <section className="py-16 bg-base-200">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 font-poppins">
                ¿Quiénes Somos?
              </h2>
              <p className="text-lg leading-relaxed mb-6 text-neutral">
                El Gimnasio el Paraíso es una institución educativa que desde 1985 se ha dedicado 
                a formar estudiantes íntegros, críticos y competentes. Ofrecemos educación de calidad 
                desde preescolar hasta bachillerato, fundamentada en valores humanos y excelencia académica.
              </p>
              <p className="text-lg leading-relaxed mb-8 text-neutral">
                Nuestro compromiso es desarrollar las potencialidades de cada estudiante, fomentando 
                el pensamiento crítico, la creatividad y la responsabilidad social.
              </p>
              <Link to="/about" className="btn btn-primary">
                Conoce más sobre nosotros
                <ChevronRight className="w-5 h-5" />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img src="https://images.unsplash.com/photo-1497486751825-1233686d5d80?ixlib=rb-4.0.3" 
                   alt="Estudiantes en clase" 
                   className="rounded-lg shadow-lg h-48 w-full object-cover" />
              <img src="https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3" 
                   alt="Biblioteca" 
                   className="rounded-lg shadow-lg h-48 w-full object-cover mt-8" />
              <img src="https://images.unsplash.com/photo-1544717297-fa95b6ee9643?ixlib=rb-4.0.3" 
                   alt="Laboratorio" 
                   className="rounded-lg shadow-lg h-48 w-full object-cover -mt-8" />
              <img src="https://images.unsplash.com/photo-1581726690015-c9861b288a6b?ixlib=rb-4.0.3" 
                   alt="Actividades deportivas" 
                   className="rounded-lg shadow-lg h-48 w-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Collage de Fotos en Movimiento */}
      <section className="py-16 bg-primary overflow-hidden">
        <div className="container mx-auto px-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-4 font-poppins">
            Nuestra Comunidad en Acción
          </h2>
          <p className="text-center text-white/90 text-lg max-w-2xl mx-auto">
            Momentos especiales que reflejan el espíritu y la alegría de nuestra familia educativa
          </p>
        </div>
        
        <div className="flex gap-4 animate-pulse">
          <div className="flex gap-4 min-w-max">
            {[
              "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3",
              "https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3",
              "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?ixlib=rb-4.0.3",
              "https://images.unsplash.com/photo-1581726690015-c9861b288a6b?ixlib=rb-4.0.3",
              "https://images.unsplash.com/photo-1497486751825-1233686d5d80?ixlib=rb-4.0.3",
              "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3"
            ].map((img, index) => (
              <img key={index} 
                   src={img} 
                   alt={`Actividad escolar ${index + 1}`}
                   className="w-64 h-40 object-cover rounded-lg shadow-lg" />
            ))}
          </div>
        </div>
      </section>

      {/* Qué nos Diferencia */}
      <section className="py-16 bg-base-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12 font-poppins">
            ¿Qué nos Diferencia?
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card bg-base-200 shadow-lg hover:shadow-xl transition-shadow">
              <div className="card-body text-center">
                <Award className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="card-title justify-center text-primary mb-3">Excelencia Académica</h3>
                <p className="text-neutral">
                  Programas académicos de alta calidad que preparan a nuestros estudiantes 
                  para los desafíos universitarios y profesionales.
                </p>
              </div>
            </div>

            <div className="card bg-base-200 shadow-lg hover:shadow-xl transition-shadow">
              <div className="card-body text-center">
                <Users className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="card-title justify-center text-primary mb-3">Formación Integral</h3>
                <p className="text-neutral">
                  Desarrollo de competencias académicas, sociales y emocionales para formar 
                  ciudadanos íntegros y responsables.
                </p>
              </div>
            </div>

            <div className="card bg-base-200 shadow-lg hover:shadow-xl transition-shadow">
              <div className="card-body text-center">
                <BookOpen className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="card-title justify-center text-primary mb-3">Metodología Innovadora</h3>
                <p className="text-neutral">
                  Estrategias pedagógicas modernas que fomentan el pensamiento crítico, 
                  la creatividad y el aprendizaje significativo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nuestros Servicios */}
      <section className="py-16 bg-base-200">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12 font-poppins">
            Nuestros Servicios Educativos
          </h2>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Preescolar */}
            <div className="card bg-white shadow-xl hover:shadow-2xl transition-shadow">
              <figure className="px-6 pt-6">
                <img src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3" 
                     alt="Preescolar" 
                     className="rounded-xl h-48 w-full object-cover" />
              </figure>
              <div className="card-body">
                <h3 className="card-title text-primary">Preescolar</h3>
                <p className="text-neutral mb-4">
                  Educación inicial de 3 a 5 años enfocada en el desarrollo de habilidades 
                  básicas, socialización y preparación para la educación formal.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="badge badge-accent">Jardín</span>
                  <span className="badge badge-accent">Transición</span>
                  <span className="badge badge-accent">Pre-jardín</span>
                </div>
                <div className="card-actions justify-end">
                  <Link to="/admissions" className="btn btn-primary">Más información</Link>
                </div>
              </div>
            </div>

            {/* Primaria */}
            <div className="card bg-white shadow-xl hover:shadow-2xl transition-shadow">
              <figure className="px-6 pt-6">
                <img src="https://images.unsplash.com/photo-1497486751825-1233686d5d80?ixlib=rb-4.0.3" 
                     alt="Primaria" 
                     className="rounded-xl h-48 w-full object-cover" />
              </figure>
              <div className="card-body">
                <h3 className="card-title text-primary">Primaria</h3>
                <p className="text-neutral mb-4">
                  Educación básica primaria de 1º a 5º grado con énfasis en lectoescritura, 
                  matemáticas, ciencias naturales y formación en valores.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="badge badge-info">1º - 2º Grado</span>
                  <span className="badge badge-info">3º - 5º Grado</span>
                </div>
                <div className="card-actions justify-end">
                  <Link to="/admissions" className="btn btn-primary">Más información</Link>
                </div>
              </div>
            </div>

            {/* Bachillerato */}
            <div className="card bg-white shadow-xl hover:shadow-2xl transition-shadow">
              <figure className="px-6 pt-6">
                <img src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3" 
                     alt="Bachillerato" 
                     className="rounded-xl h-48 w-full object-cover" />
              </figure>
              <div className="card-body">
                <h3 className="card-title text-primary">Bachillerato</h3>
                <p className="text-neutral mb-4">
                  Educación media de 6º a 11º grado con preparación para la educación superior 
                  y énfasis en áreas de interés profesional.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="badge badge-warning">6º - 9º Grado</span>
                  <span className="badge badge-warning">10º - 11º Grado</span>
                </div>
                <div className="card-actions justify-end">
                  <Link to="/admissions" className="btn btn-primary">Más información</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-poppins">
            ¿Listo para ser parte de nuestra familia?
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Conoce nuestro proceso de admisiones y descubre cómo podemos ayudar 
            a tu hijo a alcanzar su máximo potencial.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/admissions" className="btn btn-accent btn-lg">
              Proceso de Admisión
            </Link>
            <Link to="/contact" className="btn btn-outline btn-lg text-white border-white hover:bg-white hover:text-primary">
              Contáctanos
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}


export default Home

