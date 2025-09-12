
import { MapPin, Phone, Mail, Clock, MessageCircle, Send } from 'lucide-react'

function Contact() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary to-secondary">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-poppins">
            Contacto
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
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
                    <select className="select select-bordered focus:select-primary">
                      <option disabled selected>Selecciona un tema</option>
                      <option>Información general</option>
                      <option>Proceso de admisiones</option>
                      <option>Costos y becas</option>
                      <option>Agendar visita</option>
                      <option>Otro</option>
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
                          Calle 123 #45-67<br />
                          Barrio El Paraíso<br />
                          Bogotá, Colombia
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <Phone className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold mb-1">Teléfonos</h3>
                        <p className="text-white/90">
                          Principal: +57 (1) 234-5678<br />
                          Admisiones: +57 (1) 234-5679<br />
                          WhatsApp: +57 300 123 4567
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <Mail className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold mb-1">Correos Electrónicos</h3>
                        <p className="text-white/90">
                          General: info@gimnasioelaraiso.edu.co<br />
                          Admisiones: admisiones@gimnasioelaraiso.edu.co<br />
                          Académico: academico@gimnasioelaraiso.edu.co
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <Clock className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold mb-1">Horarios de Atención</h3>
                        <p className="text-white/90">
                          Lunes a Viernes: 7:00 AM - 4:00 PM<br />
                          Sábados: 8:00 AM - 12:00 PM<br />
                          Domingos: Cerrado
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* WhatsApp Contact */}
              <div className="card bg-accent text-white shadow-xl">
                <div className="card-body text-center">
                  <MessageCircle className="w-16 h-16 mx-auto mb-4" />
                  <h3 className="card-title justify-center text-2xl mb-4">¿Necesitas respuesta inmediata?</h3>
                  <p className="mb-6">
                    Contacta a nuestro equipo de admisiones vía WhatsApp para resolver tus dudas al instante.
                  </p>
                  <a href="https://wa.me/573001234567" 
                     target="_blank" 
                     rel="noopener noreferrer"
                     className="btn btn-primary btn-lg">
                    <MessageCircle className="w-5 h-5" />
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
          
          <div className="grid lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-2">
              <div className="card bg-white shadow-xl overflow-hidden">
                <figure className="h-96">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.8159871494777!2d-74.08618362574626!3d4.608883595393847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f99bfd2a459a9%3A0x352a30ac62b1f312!2sBogot%C3%A1%2C%20Colombia!5e0!3m2!1ses!2sco!4v1703123456789!5m2!1ses!2sco"
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

            <div className="space-y-6">
              <div className="card bg-white shadow-lg">
                <div className="card-body text-center">
                  <h3 className="card-title justify-center text-primary mb-4">Cómo Llegar</h3>
                  <div className="space-y-3 text-left">
                    <div className="flex items-center gap-3">
                      <span className="badge badge-primary">Bus</span>
                      <span className="text-sm">Rutas 15, 20A, 34B</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="badge badge-accent">TransMilenio</span>
                      <span className="text-sm">Estación El Paraíso</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="badge badge-info">Metro</span>
                      <span className="text-sm">Línea 1 - Estación Universidad</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card bg-info text-white shadow-lg">
                <div className="card-body text-center">
                  <h3 className="card-title justify-center mb-4">Parqueadero</h3>
                  <p className="text-sm mb-4">
                    Contamos con parqueadero gratuito para visitantes durante reuniones y eventos especiales.
                  </p>
                  <p className="text-xs opacity-90">
                    Capacidad limitada - Se recomienda confirmar disponibilidad
                  </p>
                </div>
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