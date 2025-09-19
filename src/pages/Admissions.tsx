import { MessageCircle, User, Calendar, MapPin, Phone, CheckCircle, AlertCircle, GraduationCap, Users, Heart } from 'lucide-react'
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
    { icon: Heart, title: "Motivo del cambio de institución", description: "Queremos conocer tus razones para acompañarte mejor" },
    { icon: AlertCircle, title: "¿Tiene algún diagnóstico, terapia o acompañamiento?", description: "Psicológico/pedagógico (si es así, indícanos brevemente en qué consiste)" },
    { icon: User, title: "Nombre completo del acudiente o responsable", description: "Datos del responsable del estudiante" }
  ]

  const processSteps = [
    {
      step: "1",
      title: "Diligenciar el formulario de inscripción",
      description: "Te lo enviaremos una vez recibamos la información inicial",
      details: "Formulario completo con toda la información del estudiante y la familia"
    },
    {
      step: "2",
      title: "Cancelar el valor de inscripción",
      description: "$90.000 COP (Los estudiantes de preescolar NO pagan inscripción)",
      details: "NOTA: Los estudiantes de preescolar no pagan inscripción"
    },
    {
      step: "3",
      title: "Programación de tres fechas",
      description: "Fechas acordadas con el acudiente para completar el proceso",
      details: "Evaluación diagnóstica académica, entrevista con psicología y entrega de respuesta oficial"
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

        <div className="absolute inset-0 z-20 flex flex-col items-center justify-end text-center text-white px-4 pt-10 pb-8 lg:pt-0 lg:pb-12">
          <h1 className="text-4xl md:text-6xl text-base-100 font-bold font-poppins mb-6 animate-fade-in">
            Admisiones 2025
          </h1>
          <p className="text-xl md:text-2xl font-b mb-8 leading-relaxed max-w-3xl">
            Únete a nuestra comunidad educativa de Gimnasio El Paraíso
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
            <div className="bg-accent text-white p-6 rounded-lg max-w-4xl mx-auto mb-8">
              <h3 className="text-2xl font-bold mb-4">🎓 ¡Bienvenido(a) al Gimnasio El Paraíso! 🏦</h3>
              <p className="text-lg">
                Gracias por comunicarte con nosotros. Nos alegra que estés interesado(a) en hacer parte de nuestra 
                comunidad educativa, que ofrece <strong>formación integral en preescolar, primaria, secundaria y media.</strong>
              </p>
            </div>
            <p className="text-lg text-neutral max-w-4xl mx-auto">
              Para brindarte una atención personalizada en el proceso de admisión, por favor respóndenos 
              la siguiente información:
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
                  Se asignarán <strong>tres fechas</strong> acordadas con el acudiente para:
                </p>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-white/10 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">✅ Evaluación diagnóstica académica</h4>
                    <p className="text-sm text-white/90">Evaluación según el grado</p>
                  </div>
                  <div className="bg-white/10 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">✅ Entrevista con el área de psicología</h4>
                    <p className="text-sm text-white/90">Conversación con psicología</p>
                  </div>
                  <div className="bg-white/10 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">✅ Entrega de respuesta oficial</h4>
                    <p className="text-sm text-white/90">Resultado sobre la admisión una vez culminado el proceso</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Proceso Especial para Preescolar */}
      <section className="py-16 bg-base-200">
        <div className="container mx-auto px-4">
          <div className="card bg-accent text-white shadow-xl max-w-4xl mx-auto">
            <div className="card-body text-center">
              <GraduationCap className="w-20 h-20 mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold mb-6 font-poppins">Proceso Especial para Preescolar</h2>
              <p className="text-xl mb-8">
                En el caso de <strong>preescolar</strong>, no se realiza evaluación ni entrevista. En su lugar, 
                se solicita el <strong>compromiso activo de los padres de familia</strong>, como parte fundamental 
                del proceso de adaptación, con el fin de brindar una experiencia educativa amigable, 
                respetuosa y favorable para el desarrollo del niño o la niña.
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