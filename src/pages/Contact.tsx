
import { MapPin, Phone, Mail, Clock, MessageCircle, Send } from 'lucide-react'
import { SCHOOL_INFO, CONTACT_INFO } from '../utils/constants'

import ContactImage from '../assets/home.jpg'

function Contact() {

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero relative flex items-center justify-center overflow-hidden bg-transparent pt-20 lg:pt-0">
        <img
          src={ContactImage}
          alt="Nosotros"
          className="block max-w-full h-auto object-contain mx-auto"
        />
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center text-white px-4 pt-20 pb-8 lg:pt-0 lg:pb-12 lg:justify-end">
          <h1 className="text-4xl md:text-6xl text-base-100 font-bold font-poppins mb-6 animate-fade-in">
            Contacto
          </h1>
          <p className="text-xl md:text-2xl font-b mb-8 leading-relaxed">
            Estamos aquí para resolver todas tus dudas y acompañarte en el proceso educativo
          </p>
        </div>
      </section>

      {/* Información de Contacto */}
      <section className="py-16 bg-base-100">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Formulario de Contacto */}
            <div className="card bg-white shadow-xl">
              <div className="card-body">
                <h2 className="card-title text-primary text-2xl mb-6">Envíanos un Mensaje</h2>
                
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text font-semibold">Nombre *</span>
                      </label>
                      <input type="text" placeholder="Tu nombre completo" className="input input-bordered focus:input-primary" required />
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text font-semibold">Teléfono *</span>
                      </label>
                      <input type="tel" placeholder="Tu número de teléfono" className="input input-bordered focus:input-primary" required />
                    </div>
                  </div>

                  <div className="form-control">
                    <label className="label">
                      <span className="label-text font-semibold">Correo Electrónico *</span>
                    </label>
                    <input type="email" placeholder="tu@correo.com" className="input input-bordered focus:input-primary" required />
                  </div>

                  <div className="form-control">
                    <label className="label">
                      <span className="label-text font-semibold">Asunto</span>
                    </label>
                    <select className="select select-bordered focus:select-primary" defaultValue="">
                      <option disabled value="">Selecciona un tema</option>
                      <option value="informacion-general">Información general</option>
                      <option value="admisiones">Proceso de admisiones</option>
                      <option value="costos-becas">Costos y becas</option>
                      <option value="visita">Agendar visita</option>
                      <option value="otro">Otro</option>
                    </select>
                  </div>

                  <div className="form-control">
                    <label className="label">
                      <span className="label-text font-semibold">Mensaje *</span>
                    </label>
                    <textarea className="textarea textarea-bordered h-32 focus:textarea-primary" placeholder="Escribe tu mensaje aquí..." required></textarea>
                  </div>

                  <div className="form-control">
                    <label className="label cursor-pointer justify-start gap-3">
                      <input type="checkbox" className="checkbox checkbox-primary" />
                      <span className="label-text">Acepto el tratamiento de mis datos personales</span>
                    </label>
                  </div>

                  <button type="submit" className="btn btn-primary btn-lg w-full">
                    <Send className="w-5 h-5" />
                    Enviar Mensaje
                  </button>
                </form>
              </div>
            </div>

            {/* Información de Contacto */}
            <div className="space-y-8">
              <div className="card bg-primary text-white shadow-xl">
                <div className="card-body">
                  <h2 className="card-title text-2xl mb-6">Información de Contacto</h2>
                  
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <MapPin className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold mb-1">Dirección</h3>
                        <p className="text-white/90">
                          {CONTACT_INFO.address}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <Phone className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold mb-1">Teléfonos</h3>
                        <p className="text-white/90">
                          Principal: {CONTACT_INFO.phone}<br />
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <Mail className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold mb-1">Correo Electrónico</h3>
                        <p className="text-white/90">
                          Información: {CONTACT_INFO.email}<br />
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <Clock className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold mb-1">Horarios de Atención</h3>
                        <p className="text-white/90">
                          {SCHOOL_INFO.working_hours}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* WhatsApp Contact */}
              <div className="card bg-primary text-white shadow-xl">
                <div className="card-body text-center">
                  <MessageCircle className="w-16 h-16 mx-auto mb-4" />
                  <h3 className="card-title justify-center text-2xl mb-4">¿Necesitas respuesta inmediata?</h3>
                  <p className="mb-6">
                    Contacta a nuestro equipo de admisiones vía WhatsApp para resolver tus dudas al instante.
                  </p>
                  <a href="https://wa.me/573001234567" 
                     target="_blank" 
                     rel="noopener noreferrer"
                     className="btn btn-accent btn-lg text-base-100">
                    <MessageCircle className="w-5 h-5 text-b" />
                    Escribir por WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mapa */}
      <section className="py-16 bg-base-200">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12 font-poppins">
            Nuestra Ubicación
          </h2>
          
          <div className="gap-8 items-center">
            <div className="lg:col-span-2">
              <div className="card bg-white shadow-xl overflow-hidden">
                <figure className="h-96">
                  <iframe 
                    src={SCHOOL_INFO.maps}
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }}
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Ubicación Gimnasio el Paraíso">
                  </iframe>
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Preguntas Frecuentes */}
      <section className="py-16 bg-base-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12 font-poppins">
            Preguntas Frecuentes
          </h2>
          
          <div className="max-w-3xl mx-auto">
            <div className="join join-vertical w-full">
              <div className="collapse collapse-arrow join-item border border-base-300">
                <input type="radio" name="faq-accordion" defaultChecked />
                <div className="collapse-title text-xl font-medium text-primary">
                  ¿Cuáles son los horarios de clases?
                </div>
                <div className="collapse-content">
                  <p className="text-neutral">
                    Preescolar: 7:30 AM - 2:00 PM<br />
                    Primaria: 7:00 AM - 2:30 PM<br />
                    Bachillerato: 6:50 AM - 3:00 PM
                  </p>
                </div>
              </div>

              <div className="collapse collapse-arrow join-item border border-base-300">
                <input type="radio" name="faq-accordion" />
                <div className="collapse-title text-xl font-medium text-primary">
                  ¿Ofrecen servicio de transporte escolar?
                </div>
                <div className="collapse-content">
                  <p className="text-neutral">
                    Sí, contamos con servicio de transporte escolar que cubre las principales zonas de Bogotá. 
                    El costo varía según la ubicación y se factura por separado de la pensión.
                  </p>
                </div>
              </div>

              <div className="collapse collapse-arrow join-item border border-base-300">
                <input type="radio" name="faq-accordion" />
                <div className="collapse-title text-xl font-medium text-primary">
                  ¿Cuándo puedo agendar una visita al colegio?
                </div>
                <div className="collapse-content">
                  <p className="text-neutral">
                    Puedes agendar una visita llamando al teléfono de admisiones o enviando un WhatsApp. 
                    Ofrecemos tours personalizados de lunes a viernes en horarios acordados previamente.
                  </p>
                </div>
              </div>

              <div className="collapse collapse-arrow join-item border border-base-300">
                <input type="radio" name="faq-accordion" />
                <div className="collapse-title text-xl font-medium text-primary">
                  ¿Qué actividades extracurriculares ofrecen?
                </div>
                <div className="collapse-content">
                  <p className="text-neutral">
                    Ofrecemos una amplia gama de actividades: deportes (fútbol, voleibol, natación), 
                    artes (música, teatro, danza), ciencias (robótica, astronomía) y idiomas adicionales.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}


export default Contact