import { MessageCircle, User, Calendar, MapPin, Phone, CheckCircle, AlertCircle, GraduationCap, Users, Heart, CreditCard, Clock } from 'lucide-react'
import { Link } from 'react-router'
import Admissions_img from '../assets/home.jpg'
import { CONTACT_INFO } from '../utils/constants'

function Admissions() {
  const whatsappMessage = encodeURIComponent("Hola! Estoy interesado/a en el proceso de admisión para mi hijo/a en el Gimnasio El Paraíso. Me gustaría obtener más información.");
  const whatsappLink = `https://wa.me/${CONTACT_INFO.whatsapp.replace(/[^0-9]/g, '')}?text=${whatsappMessage}`;

  const requiredInfo = [
    { icon: User, title: "Nombre completo del estudiante", description: "Datos completos del aspirante" },
    { icon: Calendar, title: "Edad", description: "Edad actual del estudiante" },
    { icon: GraduationCap, title: "Grado al que aspira ingresar", description: "Nivel educativo deseado" },
    { icon: Users, title: "Colegio de procedencia", description: "Institución educativa anterior" },
    { icon: Heart, title: "Motivo del cambio de institución", description: "Para brindar mejor acompañamiento" },
    { icon: AlertCircle, title: "Diagnósticos especiales", description: "Acompañamientos psicológico/pedagógico (si aplica)" },
    { icon: User, title: "Nombre del acudiente", description: "Datos del responsable del estudiante" }
  ]

  const processSteps = [
    {
      step: "1",
      title: "Información Inicial",
      description: "Proporciona la información requerida vía WhatsApp",
      details: "Nombre, edad, grado, colegio anterior, motivo del cambio, diagnósticos especiales y datos del acudiente"
    },
    {
      step: "2", 
      title: "Formulario de Inscripción",
      description: "Diligencia el formulario que te enviaremos",
      details: "Formulario completo con toda la información del estudiante y la familia"
    },
    {
      step: "3",
      title: "Pago de Inscripción",
      description: "Realiza el pago de $90.000 COP",
      details: "EXENCIÓN: Los estudiantes de preescolar NO pagan inscripción. Métodos de pago vía WhatsApp"
    },
    {
      step: "4",
      title: "Evaluaciones y Entrevistas",
      description: "Participa en las tres fechas programadas",
      details: "Evaluación académica, entrevista psicológica y entrega de respuesta oficial"
    }
  ]

  const educationalLevels = [
    {
      level: "Preescolar",
      description: "Primeros pasos en el aprendizaje",
      features: [
        "Sin costo de inscripción",
        "Sin evaluaciones académicas",
        "Sin entrevistas formales", 
        "Proceso de adaptación amigable",
        "Compromiso activo de padres",
        "Desarrollo respetuoso del niño/a"
      ],
      highlight: true
    },
    {
      level: "Primaria",
      description: "Formación integral básica",
      features: [
        "Evaluación diagnóstica académica",
        "Entrevista con psicología",
        "Enfoque en formación integral",
        "Desarrollo de competencias básicas"
      ]
    },
    {
      level: "Secundaria y Media",
      description: "Preparación para el futuro",
      features: [
        "Evaluación académica completa",
        "Entrevista familiar integral",
        "Orientación vocacional",
        "Preparación universitaria"
      ]
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero relative flex items-center justify-center overflow-hidden bg-transparent">
        <img
          src={Admissions_img}
          alt="Admisiones Gimnasio El Paraíso"
          className="block max-w-full h-auto object-contain mx-auto"
        />
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="absolute inset-0 z-10 flex flex-col items-center justify-end text-center text-white px-4 mb-12">
          <h1 className="text-4xl md:text-6xl text-base-100 font-bold font-poppins mb-6 animate-fade-in">
            Admisiones 2025
          </h1>
          <p className="text-xl md:text-2xl font-b mb-8 leading-relaxed max-w-3xl">
            Únete a nuestra comunidad educativa y forma parte de la familia Gimnasio El Paraíso
          </p>
        </div>
      </section>

      {/* Introducción */}
      <section className="py-16 bg-base-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 font-poppins">
              Proceso de Admisión
            </h2>
            <p className="text-lg text-neutral max-w-4xl mx-auto">
              En el <strong>Gimnasio El Paraíso</strong> ofrecemos educación de calidad desde <strong>Preescolar hasta Media</strong>, 
              con un enfoque en <strong>formación integral</strong>. Nuestro proceso de admisión está diseñado para conocer 
              mejor a cada estudiante y su familia, garantizando el mejor acompañamiento educativo.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <div className="card bg-base-200 shadow-lg">
              <div className="card-body text-center">
                <Users className="w-16 h-16 text-accent mx-auto mb-4" />
                <h3 className="card-title justify-center text-primary mb-3">Formación Integral</h3>
                <p className="text-neutral">
                  Nos enfocamos en el desarrollo completo del estudiante: académico, humano y ético.
                </p>
              </div>
            </div>

            <div className="card bg-base-200 shadow-lg">
              <div className="card-body text-center">
                <Heart className="w-16 h-16 text-accent mx-auto mb-4" />
                <h3 className="card-title justify-center text-primary mb-3">Acompañamiento Personal</h3>
                <p className="text-neutral">
                  Conocemos las razones del cambio para brindar el mejor apoyo durante la transición.
                </p>
              </div>
            </div>

            <div className="card bg-base-200 shadow-lg">
              <div className="card-body text-center">
                <MessageCircle className="w-16 h-16 text-accent mx-auto mb-4" />
                <h3 className="card-title justify-center text-primary mb-3">Proceso Ágil</h3>
                <p className="text-neutral">
                  Todo el proceso se gestiona fácilmente a través de WhatsApp para mayor comodidad.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <a href={whatsappLink} 
               target="_blank" 
               rel="noopener noreferrer"
               className="btn btn-primary btn-lg">
              <MessageCircle className="w-6 h-6" />
              Iniciar Proceso por WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Información Requerida */}
      <section className="py-16 bg-base-200">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12 font-poppins">
            Información Requerida para Iniciar
          </h2>
          <p className="text-center text-lg text-neutral mb-12 max-w-3xl mx-auto">
            Para comenzar el proceso de admisión, necesitamos que nos proporciones la siguiente información vía WhatsApp:
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {requiredInfo.map((item, index) => (
              <div key={index} className="card bg-white shadow-lg hover:shadow-xl transition-shadow">
                <div className="card-body">
                  <div className="flex items-center gap-4 mb-4">
                    <item.icon className="w-8 h-8 text-accent flex-shrink-0" />
                    <h3 className="card-title text-primary text-lg">{item.title}</h3>
                  </div>
                  <p className="text-neutral text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="alert alert-info max-w-2xl mx-auto">
              <AlertCircle className="w-6 h-6" />
              <div>
                <h3 className="font-bold">Importante</h3>
                <div className="text-sm">
                  Esta información nos permite conocer mejor al estudiante y brindar el acompañamiento 
                  más adecuado durante todo el proceso educativo.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pasos del Proceso */}
      <section className="py-16 bg-base-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12 font-poppins">
            Pasos del Proceso de Admisión
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="card bg-white shadow-xl">
                <div className="card-body">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="badge badge-primary badge-lg text-lg font-bold w-12 h-12 rounded-full flex items-center justify-center">
                      {step.step}
                    </div>
                    <h3 className="card-title text-primary text-xl">{step.title}</h3>
                  </div>
                  <p className="text-neutral font-semibold mb-3">{step.description}</p>
                  <p className="text-neutral text-sm">{step.details}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <div className="card bg-primary text-white shadow-xl">
              <div className="card-body">
                <h3 className="card-title text-2xl mb-4">📅 Programación de Fechas</h3>
                <p className="mb-4">
                  Una vez completados los pasos 1, 2 y 3, programaremos <strong>tres fechas</strong> acordadas contigo para:
                </p>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-white/10 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">📝 Evaluación Diagnóstica</h4>
                    <p className="text-sm text-white/90">Evaluación académica según el grado</p>
                  </div>
                  <div className="bg-white/10 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">🧠 Entrevista Psicológica</h4>
                    <p className="text-sm text-white/90">Conversación con el área de psicología</p>
                  </div>
                  <div className="bg-white/10 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">✅ Respuesta Oficial</h4>
                    <p className="text-sm text-white/90">Entrega del resultado de admisión</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Niveles Educativos */}
      <section className="py-16 bg-base-200">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12 font-poppins">
            Proceso por Niveles Educativos
          </h2>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {educationalLevels.map((level, index) => (
              <div key={index} className={`card shadow-xl ${level.highlight ? 'bg-accent text-white border-4 border-primary' : 'bg-white'}`}>
                <div className="card-body">
                  {level.highlight && (
                    <div className="badge badge-primary mb-4">✨ Proceso Especial</div>
                  )}
                  <h3 className={`card-title text-2xl mb-4 ${level.highlight ? 'text-white' : 'text-primary'}`}>
                    {level.level}
                  </h3>
                  <p className={`mb-6 ${level.highlight ? 'text-white/90' : 'text-neutral'}`}>
                    {level.description}
                  </p>
                  
                  <div className="space-y-3">
                    {level.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <CheckCircle className={`w-5 h-5 flex-shrink-0 ${level.highlight ? 'text-white' : 'text-accent'}`} />
                        <span className={`text-sm ${level.highlight ? 'text-white/90' : 'text-neutral'}`}>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <div className="card bg-info text-white shadow-xl max-w-3xl mx-auto">
              <div className="card-body text-center">
                <h3 className="card-title justify-center text-2xl mb-4">🎓 Preescolar - Proceso Especial</h3>
                <p className="mb-4">
                  Para los estudiantes de <strong>preescolar</strong>, hemos diseñado un proceso especial que prioriza 
                  la adaptación amigable y el desarrollo respetuoso del niño o niña.
                </p>
                <div className="grid md:grid-cols-2 gap-4 text-left">
                  <div>
                    <h4 className="font-semibold mb-2">🎯 No incluye:</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Costo de inscripción</li>
                      <li>• Evaluaciones académicas</li>
                      <li>• Entrevistas formales</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">💖 Sí incluye:</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Compromiso activo de padres</li>
                      <li>• Proceso de adaptación favorable</li>
                      <li>• Ambiente respetuoso y amigable</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Información de Costos */}
      <section className="py-16 bg-base-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12 font-poppins">
            Información de Costos
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="card bg-white shadow-xl">
              <div className="card-body">
                <div className="flex items-center gap-4 mb-6">
                  <CreditCard className="w-12 h-12 text-accent" />
                  <div>
                    <h3 className="text-2xl font-bold text-primary">Costo de Inscripción</h3>
                    <p className="text-accent">Proceso de admisión</p>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">$90.000</div>
                    <p className="text-neutral">COP - Pago único</p>
                  </div>
                  
                  <div className="bg-base-200 p-4 rounded-lg">
                    <h4 className="font-semibold text-primary mb-2">Incluye:</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-accent" />
                        Evaluación diagnóstica académica
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-accent" />
                        Entrevista con área de psicología
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-accent" />
                        Procesamiento de documentación
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-accent" />
                        Acompañamiento personalizado
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="card bg-success text-white shadow-xl">
              <div className="card-body text-center">
                <GraduationCap className="w-20 h-20 mx-auto mb-6" />
                <h3 className="card-title justify-center text-3xl mb-4">🎉 EXENCIÓN PREESCOLAR</h3>
                <p className="text-2xl font-bold mb-4">$0 COP</p>
                <p className="mb-6">
                  Los estudiantes de <strong>preescolar NO pagan</strong> costo de inscripción. 
                  Nuestro compromiso es facilitar el acceso a una educación de calidad desde los primeros años.
                </p>
                <div className="bg-white/20 p-4 rounded-lg">
                  <p className="text-sm">
                    Esta exención forma parte de nuestro compromiso con la educación inicial y 
                    el desarrollo integral de los más pequeños.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <div className="alert alert-warning max-w-2xl mx-auto">
              <Clock className="w-6 h-6" />
              <div>
                <h3 className="font-bold">Formas de Pago</h3>
                <div className="text-sm">
                  Los detalles de las formas de pago se proporcionan vía WhatsApp una vez 
                  completado el formulario de inscripción.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Final */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-poppins">
            ¿Listo para Formar Parte de Nuestra Comunidad?
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-3xl mx-auto">
            En el <strong>Gimnasio El Paraíso</strong> te acompañamos en cada paso del proceso. 
            Nuestro equipo está disponible para resolver todas tus dudas y brindarte el mejor acompañamiento.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href={whatsappLink} 
               target="_blank" 
               rel="noopener noreferrer"
               className="btn btn-accent btn-lg">
              <MessageCircle className="w-6 h-6" />
              Iniciar Proceso por WhatsApp
            </a>
            <Link to="/contact" className="btn btn-outline btn-lg text-white border-white hover:bg-white hover:text-primary">
              <Phone className="w-5 h-5" />
              Más Información
            </Link>
            <a href={whatsappLink}
               target="_blank" 
               rel="noopener noreferrer" 
               className="btn btn-outline btn-lg text-white border-white hover:bg-white hover:text-primary">
              <MapPin className="w-5 h-5" />
              Agendar Visita
            </a>
          </div>
          
          <div className="mt-8 bg-white/10 backdrop-blur-sm rounded-lg p-6 max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-white mb-4">📱 ¿Cómo empezar?</h3>
            <p className="text-white/90 text-sm">
              Haz clic en "Iniciar Proceso por WhatsApp" y nuestro equipo te guiará paso a paso. 
              Es fácil, rápido y personalizado para cada familia.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Admissions