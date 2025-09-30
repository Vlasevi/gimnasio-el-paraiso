import { MessageCircle, User, Calendar, CheckCircle, AlertCircle, GraduationCap, Users, Heart, Clock } from 'lucide-react'
import Admissions_img from '../assets/home.jpg'
import { CONTACT_INFO } from '../utils/constants'

function Admissions() {
  const whatsappMessage = encodeURIComponent("¡Hola! Estoy interesado(a) en el proceso de admisión para mi hijo(a) en el Gimnasio El Paraíso. Aquí está la información requerida:\n\n1. Nombre completo del estudiante: \n2. Edad del estudiante: \n3. Grado al que aspira ingresar: \n4. Colegio de procedencia: \n5. Motivo del cambio de institución: \n6. ¿Tiene algún diagnóstico, terapia o acompañamiento?: \n7. Nombre completo del acudiente: ");
  const whatsappLink = `https://wa.me/${CONTACT_INFO.whatsapp.replace(/[^0-9]/g, '')}?text=${whatsappMessage}`;

  const requiredInfo = [
    { icon: User, title: "Nombre completo del estudiante", description: "Datos completos del aspirante" },
    { icon: Calendar, title: "Edad del estudiante", description: "Edad actual del estudiante" },
    { icon: GraduationCap, title: "Grado al que aspira ingresar", description: "Nivel educativo deseado" },
    { icon: Users, title: "Colegio de procedencia", description: "Institución educativa anterior" },
    { icon: Heart, title: "Motivo del cambio de institución", description: "Queremos conocer tus razones para acompañarte mejor" },
    { icon: AlertCircle, title: "¿Tiene algún diagnóstico, terapia o acompañamiento?", description: "Psicológico/pedagógico (si es así, indícanos brevemente en qué consiste)" },
    { icon: User, title: "Nombre completo del acudiente o responsable", description: "Datos del responsable del estudiante" }
  ]

  const processSteps = [
    {
      step: "1",
      title: "Formulario de inscripción",
      description: "Te enviaremos el formulario una vez recibamos tu información",
      icon: CheckCircle
    },
    {
      step: "2", 
      title: "Pago de inscripción",
      description: "$90.000 (estudiantes de preescolar NO pagan inscripción)",
      icon: CheckCircle
    },
    {
      step: "3",
      title: "Tres fechas programadas", 
      description: "Evaluación diagnóstica académica, entrevista con psicología y entrega de respuesta oficial",
      icon: Clock
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero relative flex items-center justify-center overflow-hidden bg-transparent pt-20 lg:pt-0">
        <img
          src={Admissions_img}
          alt="Admisiones Gimnasio El Paraíso"
          className="block max-w-full h-auto object-contain mx-auto"
        />
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center text-white px-4 pt-20 pb-8 lg:pt-0 lg:pb-12 lg:justify-end">
          <h1 className="text-4xl md:text-6xl text-base-100 font-bold font-poppins mb-6 animate-fade-in">
            Admisiones
          </h1>
          <p className="text-xl md:text-2xl font-b mb-8 leading-relaxed">
            Únete a nuestra comunidad educativa y forma parte de la familia Gimpa
          </p>
        </div>
      </section>

      {/* Bienvenida */}
      <section className="py-16 bg-base-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 font-poppins">
              ¡Bienvenido(a) a Gimnasio El Paraíso!
            </h2>
            <p className="text-lg md:text-xl leading-relaxed text-neutral mb-8">
              Nos alegra que estés interesado(a) en hacer parte de nuestra comunidad educativa, 
              que ofrece formación integral en <span className="font-semibold text-primary">preescolar, básica primaria, básica secundaria y media</span>.
            </p>
            <div className="bg-accent/10 border-l-4 border-accent p-6 rounded-r-lg">
              <p className="text-lg font-semibold text-primary mb-2">
                Todo el proceso se gestiona fácilmente a través de WhatsApp
              </p>
              <p className="text-neutral">
                Una vez recibamos tu información, te contactaremos para continuar con los siguientes pasos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cómo iniciar tu proceso */}
      <section className="py-16 bg-base-200">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12 font-poppins">
              Cómo iniciar tu proceso de admisión
            </h2>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="bg-primary text-primary-content p-8 rounded-xl shadow-xl">
                  <MessageCircle className="w-16 h-16 mx-auto mb-6" />
                  <h3 className="text-2xl font-bold text-center mb-4">¡Es muy fácil!</h3>
                  <p className="text-center text-lg leading-relaxed">
                    Envía esta información por WhatsApp para iniciar tu proceso de admisión. 
                    Nuestro equipo te contactará inmediatamente para continuar.
                  </p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="bg-accent text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0 mt-1">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Envía la información requerida</h4>
                    <p className="text-neutral">Completa los 7 datos que necesitamos por WhatsApp</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-accent text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0 mt-1">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Recibe respuesta inmediata</h4>
                    <p className="text-neutral">Te contactaremos para continuar con el proceso</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-accent text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0 mt-1">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Completa el proceso</h4>
                    <p className="text-neutral">Seguimos los pasos restantes vía WhatsApp</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-center mt-12">
              <a href={whatsappLink} 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="btn btn-accent btn-lg text-white hover:bg-accent/90">
                <MessageCircle className="w-6 h-6" />
                Enviar información por WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Información que debes enviar */}
      <section className="py-16 bg-base-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12 font-poppins">
            Información que debes enviar por WhatsApp
          </h2>
          <p className="text-center text-lg text-neutral mb-12 max-w-3xl mx-auto">
            Para iniciar tu proceso de admisión, envíanos la siguiente información vía WhatsApp:
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {requiredInfo.map((item, index) => (
              <div key={index} className="card bg-white shadow-lg hover:shadow-xl transition-shadow">
                <div className="card-body">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-accent/10 p-3 rounded-full">
                      <item.icon className="w-6 h-6 text-accent" />
                    </div>
                    <div className="bg-accent text-white rounded-full w-6 h-6 flex items-center justify-center font-bold text-sm flex-shrink-0">
                      {index + 1}
                    </div>
                  </div>
                  <h3 className="font-bold text-primary mb-2">{item.title}</h3>
                  <p className="text-neutral text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <div className="alert alert-info max-w-2xl mx-auto mb-8">
              <AlertCircle className="w-6 h-6" />
              <div>
                <h3 className="font-bold">Importante</h3>
                <div className="text-sm">
                  Esta información nos permite conocer mejor al estudiante y brindar el acompañamiento más adecuado.
                </div>
              </div>
            </div>
            
            <a href={whatsappLink} 
               target="_blank" 
               rel="noopener noreferrer"
               className="btn btn-primary btn-lg text-white">
              <MessageCircle className="w-6 h-6" />
              Enviar información ahora
            </a>
          </div>
        </div>
      </section>

      {/* Una vez enviada tu información */}
      <section className="py-16 bg-base-200">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12 font-poppins">
            Una vez enviada tu información
          </h2>
          <p className="text-center text-lg text-neutral mb-12 max-w-3xl mx-auto">
            Después de recibir tu información por WhatsApp, continuaremos con estos pasos:
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {processSteps.map((step, index) => (
              <div key={index} className="card bg-white shadow-xl">
                <div className="card-body text-center">
                  <div className="flex justify-center mb-6">
                    <div className="bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center font-bold text-2xl">
                      {step.step}
                    </div>
                  </div>
                  <step.icon className="w-12 h-12 text-accent mx-auto mb-4" />
                  <h3 className="card-title justify-center text-primary mb-4">{step.title}</h3>
                  <p className="text-neutral">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Especial para preescolar */}
      <section className="py-16 bg-base-100">
        <div className="container mx-auto px-4">
          <div className="card bg-accent text-white shadow-xl max-w-4xl mx-auto">
            <div className="card-body text-center">
              <GraduationCap className="w-20 h-20 mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold mb-6 font-poppins">Especial para Preescolar</h2>
              <p className="text-xl mb-8">
                Para preescolar no se realiza evaluación ni entrevista. Se solicita el <strong>compromiso activo de los padres de familia</strong> como parte del proceso de adaptación, para brindar una experiencia educativa amigable, respetuosa y favorable para el desarrollo del niño o niña.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 text-left">
                <div className="bg-white/20 p-6 rounded-lg">
                  <h3 className="font-bold text-lg mb-4">🎯 No requiere:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-white" />
                      <span>Costo de inscripción</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-white" />
                      <span>Evaluaciones académicas</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-white" />
                      <span>Entrevistas formales</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-white/20 p-6 rounded-lg">
                  <h3 className="font-bold text-lg mb-4">💖 Sí incluye:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-white" />
                      <span>Compromiso activo de padres</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-white" />
                      <span>Proceso de adaptación favorable</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-white" />
                      <span>Ambiente respetuoso y amigable</span>
                    </li>
                  </ul>
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
            ✨ Gracias por confiar en el Gimnasio El Paraíso. Estaremos encantados de acompañarte en este camino educativo. 🌱
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href={whatsappLink} 
               target="_blank" 
               rel="noopener noreferrer"
               className="btn btn-accent btn-lg text-white">
              <MessageCircle className="w-6 h-6" />
              Iniciar Proceso por WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Admissions