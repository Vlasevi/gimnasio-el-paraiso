
import { Calendar, Camera, Trophy, Star, Heart, Users } from 'lucide-react'

function SchoolLife() {
  const years = [
    { grade: "Preescolar", image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3", description: "Primeros pasos en el aprendizaje" },
    { grade: "1º - 3º Primaria", image: "https://images.unsplash.com/photo-1497486751825-1233686d5d80?ixlib=rb-4.0.3", description: "Explorando el mundo del conocimiento" },
    { grade: "4º - 5º Primaria", image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3", description: "Desarrollando habilidades críticas" },
    { grade: "6º - 8º Bachillerato", image: "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?ixlib=rb-4.0.3", description: "Formación integral y valores" },
    { grade: "9º - 11º Bachillerato", image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3", description: "Preparación para el futuro" }
  ]

  const news = [
    {
      title: "Festival de Ciencias 2024",
      date: "15 de Noviembre, 2024",
      image: "https://images.unsplash.com/photo-1581726690015-c9861b288a6b?ixlib=rb-4.0.3",
      summary: "Nuestros estudiantes presentaron proyectos innovadores en el festival anual de ciencias."
    },
    {
      title: "Intercambio Cultural Francia",
      date: "8 de Octubre, 2024",
      image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3",
      summary: "Estudiantes de 10º grado participaron en un intercambio cultural con Francia."
    },
    {
      title: "Campeonato Deportivo Regional",
      date: "22 de Septiembre, 2024",
      image: "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?ixlib=rb-4.0.3",
      summary: "Nuestro equipo de fútbol se coronó campeón regional en la categoría juvenil."
    }
  ]

  const testimonials = [
    {
      name: "Ana María Gómez",
      role: "Madre de familia",
      text: "El Gimnasio el Paraíso ha sido fundamental en el desarrollo de mi hija. Los valores y la excelencia académica se reflejan en cada actividad.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3"
    },
    {
      name: "Carlos Rodríguez",
      role: "Egresado 2020",
      text: "La formación integral que recibí me preparó no solo académicamente, sino como persona. Hoy estoy en la universidad con bases sólidas.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3"
    },
    {
      name: "Patricia López",
      role: "Docente",
      text: "Trabajar aquí es una experiencia enriquecedora. El ambiente educativo permite desarrollar metodologías innovadoras y ver crecer a los estudiantes.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3"
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary to-secondary">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-poppins">
            Vida Escolar
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
            Momentos especiales, aprendizajes significativos y experiencias que marcan la diferencia
          </p>
        </div>
      </section>

      {/* Collage por Años */}
      <section className="py-16 bg-base-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12 font-poppins">
            Momentos por Grados
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {years.map((year, index) => (
              <div key={index} className="card bg-white shadow-xl hover:shadow-2xl transition-shadow group">
                <figure className="relative overflow-hidden">
                  <img src={year.image} 
                       alt={year.grade}
                       className="h-64 w-full object-cover group-hover:scale-110 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/10 transition-colors"></div>
                </figure>
                <div className="card-body">
                  <h3 className="card-title text-primary text-xl">{year.grade}</h3>
                  <p className="text-neutral">{year.description}</p>
                  <div className="card-actions justify-end">
                    <button className="btn btn-primary btn-sm">
                      <Camera className="w-4 h-4" />
                      Ver más fotos
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Noticias y Eventos */}
      <section className="py-16 bg-base-200">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12 font-poppins">
            Noticias y Eventos
          </h2>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {news.map((item, index) => (
              <div key={index} className="card bg-white shadow-xl hover:shadow-2xl transition-shadow">
                <figure>
                  <img src={item.image} 
                       alt={item.title}
                       className="h-48 w-full object-cover" />
                </figure>
                <div className="card-body">
                  <div className="flex items-center gap-2 text-accent text-sm mb-2">
                    <Calendar className="w-4 h-4" />
                    {item.date}
                  </div>
                  <h3 className="card-title text-primary">{item.title}</h3>
                  <p className="text-neutral">{item.summary}</p>
                  <div className="card-actions justify-end">
                    <button className="btn btn-outline btn-primary">Leer más</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Logros y Reconocimientos */}
      <section className="py-16 bg-base-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12 font-poppins">
            Logros y Reconocimientos
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="card bg-accent text-white shadow-xl">
              <div className="card-body text-center">
                <Trophy className="w-16 h-16 mx-auto mb-4" />
                <h3 className="card-title justify-center text-2xl mb-2">1er Lugar</h3>
                <p>Olimpiadas Matemáticas Distritales 2024</p>
              </div>
            </div>

            <div className="card bg-info text-white shadow-xl">
              <div className="card-body text-center">
                <Star className="w-16 h-16 mx-auto mb-4" />
                <h3 className="card-title justify-center text-2xl mb-2">98%</h3>
                <p>Aprobación en Pruebas Saber 11</p>
              </div>
            </div>

            <div className="card bg-success text-white shadow-xl">
              <div className="card-body text-center">
                <Users className="w-16 h-16 mx-auto mb-4" />
                <h3 className="card-title justify-center text-2xl mb-2">15</h3>
                <p>Estudiantes en universidades top</p>
              </div>
            </div>

            <div className="card bg-warning text-white shadow-xl">
              <div className="card-body text-center">
                <Heart className="w-16 h-16 mx-auto mb-4" />
                <h3 className="card-title justify-center text-2xl mb-2">100%</h3>
                <p>Satisfacción de padres de familia</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonios */}
      <section className="py-16 bg-base-200">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12 font-poppins">
            Testimonios
          </h2>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="card bg-white shadow-xl">
                <div className="card-body">
                  <div className="flex items-center gap-4 mb-4">
                    <img src={testimonial.image} 
                         alt={testimonial.name}
                         className="w-16 h-16 rounded-full object-cover" />
                    <div>
                      <h3 className="font-bold text-primary">{testimonial.name}</h3>
                      <p className="text-accent text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-neutral italic">"{testimonial.text}"</p>
                  <div className="rating rating-sm mt-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-warning text-warning" />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Calendario Escolar */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12 font-poppins">
            Calendario Escolar 2025
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-bold text-white mb-4">Primer Periodo</h3>
              <div className="space-y-2 text-white/90">
                <p>Inicio: 29 de Enero</p>
                <p>Finalización: 10 de Abril</p>
                <p>Vacaciones: 11-21 de Abril</p>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-bold text-white mb-4">Segundo Periodo</h3>
              <div className="space-y-2 text-white/90">
                <p>Inicio: 22 de Abril</p>
                <p>Finalización: 27 de Junio</p>
                <p>Vacaciones: 28 Jun - 21 Jul</p>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-bold text-white mb-4">Tercer Periodo</h3>
              <div className="space-y-2 text-white/90">
                <p>Inicio: 22 de Julio</p>
                <p>Finalización: 3 de Octubre</p>
                <p>Vacaciones: 4-14 de Octubre</p>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-bold text-white mb-4">Cuarto Periodo</h3>
              <div className="space-y-2 text-white/90">
                <p>Inicio: 15 de Octubre</p>
                <p>Finalización: 28 de Noviembre</p>
                <p>Clausura: 5 de Diciembre</p>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-bold text-white mb-4">Eventos Especiales</h3>
              <div className="space-y-2 text-white/90">
                <p>Festival de Ciencias: Mayo</p>
                <p>Semana Cultural: Agosto</p>
                <p>Graduación: Noviembre</p>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-bold text-white mb-4">Días Festivos</h3>
              <div className="space-y-2 text-white/90">
                <p>Día del Maestro: 15 Mayo</p>
                <p>Día de la Independencia: 20 Jul</p>
                <p>Día de la Raza: 12 Oct</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}


export default SchoolLife