
import { Calendar, Users, Phone, MapPin, CheckCircle, Clock, AlertCircle } from 'lucide-react'
import { Link } from 'react-router'
import Admissions_img from '../assets/admissions.webp'
import { useState, useEffect } from 'react'

function Admissions() {
  const [scrollOpacity, setScrollOpacity] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const Y = window.scrollY;
      setScrollOpacity(Math.min(Y / 300, 0.8));
    };
    
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const timeline = [
    { month: "Enero - Febrero", activity: "Inscripciones abiertas", status: "active" },
    { month: "Marzo", activity: "Pruebas de conocimiento", status: "upcoming" },
    { month: "Abril", activity: "Entrevistas familiares", status: "upcoming" },
    { month: "Mayo", activity: "Resultados y matrículas", status: "upcoming" }
  ]

  const requirements = [
    "Fotocopia del registro civil",
    "Últimos boletines académicos",  
    "Certificado médico actualizado",
    "Carta de retiro del colegio anterior",
    "Formulario de inscripción diligenciado",
    "Autorización de tratamiento de datos"
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section with scroll transparency */}
      <section className="relative py-20 bg-cover bg-center bg-no-repeat min-h-[70vh] flex items-center"
               style={{ backgroundImage: `url(${Admissions_img})` }}>
        <div 
          className="absolute inset-0 bg-black transition-opacity duration-300"
          style={{ opacity: Math.max(scrollOpacity, 0.4) }}
        />
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-poppins drop-shadow-lg">
            Admisiones
          </h1>
          <p className="text-xl md:text-2xl text-white max-w-3xl mx-auto drop-shadow-md">
            Conoce nuestro proceso de admisión y cómo formar parte de la familia Gimnasio El Paraíso.
          </p>
        </div>
      </section>

      {/* Información General */}
      <section className="py-16 bg-base-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 font-poppins">
              Proceso de Admisión 2025
            </h2>
            <p className="text-lg text-neutral max-w-3xl mx-auto">
              Nuestro proceso de admisión está diseñado para conocer mejor a cada estudiante y 
              su familia, asegurando que nuestra propuesta educativa sea la mejor opción para su desarrollo integral.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="card bg-base-200 shadow-lg">
              <div className="card-body text-center">
                <Users className="w-16 h-16 text-accent mx-auto mb-4" />
                <h3 className="card-title justify-center text-primary mb-3">Conocimiento Mutuo</h3>
                <p className="text-neutral">
                  Evaluamos no solo las competencias académicas, sino también la personalidad 
                  y valores del estudiante para garantizar un ambiente armónico.
                </p>
              </div>
            </div>

            <div className="card bg-base-200 shadow-lg">
              <div className="card-body text-center">
                <CheckCircle className="w-16 h-16 text-accent mx-auto mb-4" />
                <h3 className="card-title justify-center text-primary mb-3">Proceso Integral</h3>
                <p className="text-neutral">
                  Incluye pruebas académicas, entrevistas familiares y actividades lúdicas 
                  para conocer todas las dimensiones del estudiante.
                </p>
              </div>
            </div>

            <div className="card bg-base-200 shadow-lg">
              <div className="card-body text-center">
                <Clock className="w-16 h-16 text-accent mx-auto mb-4" />
                <h3 className="card-title justify-center text-primary mb-3">Acompañamiento</h3>
                <p className="text-neutral">
                  Brindamos orientación y apoyo durante todo el proceso, resolviendo dudas 
                  y facilitando la adaptación del estudiante.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cronograma */}
      <section className="py-16 bg-base-200">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12 font-poppins">
            Cronograma 2025
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {timeline.map((item, index) => (
              <div key={index} className={`card shadow-lg ${item.status === 'active' ? 'bg-accent text-white' : 'bg-white'}`}>
                <div className="card-body text-center">
                  <Calendar className={`w-12 h-12 mx-auto mb-4 ${item.status === 'active' ? 'text-white' : 'text-accent'}`} />
                  <h3 className={`card-title justify-center mb-3 text-lg ${item.status === 'active' ? 'text-white' : 'text-primary'}`}>
                    {item.month}
                  </h3>
                  <p className={`${item.status === 'active' ? 'text-white' : 'text-neutral'}`}>
                    {item.activity}
                  </p>
                  {item.status === 'active' && (
                    <div className="badge badge-primary mt-2">Activo</div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requisitos */}
      <section className="py-16 bg-base-100">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 font-poppins">
                Requisitos de Admisión
              </h2>
              
              <div className="space-y-4">
                {requirements.map((requirement, index) => (
                  <div key={index} className="flex items-center gap-4 p-4 bg-base-200 rounded-lg">
                    <CheckCircle className="w-6 h-6 text-accent flex-shrink-0" />
                    <span className="text-neutral">{requirement}</span>
                  </div>
                ))}
              </div>

              <div className="alert alert-info mt-8">
                <AlertCircle className="w-6 h-6" />
                <div>
                  <h3 className="font-bold">Importante</h3>
                  <div className="text-sm">
                    Los documentos deben estar en original y copia. La documentación incompleta 
                    puede retrasar el proceso de admisión.
                  </div>
                </div>
              </div>
            </div>

            <div className="card bg-primary text-white shadow-xl">
              <div className="card-body">
                <h3 className="card-title text-2xl mb-6">Proceso Paso a Paso</h3>
                
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="badge badge-accent badge-lg">1</div>
                    <div>
                      <h4 className="font-semibold mb-2">Inscripción</h4>
                      <p className="text-white/90 text-sm">
                        Completa el formulario online y entrega la documentación requerida.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="badge badge-accent badge-lg">2</div>
                    <div>
                      <h4 className="font-semibold mb-2">Evaluación</h4>
                      <p className="text-white/90 text-sm">
                        Presenta las pruebas académicas según el grado al que aplica.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="badge badge-accent badge-lg">3</div>
                    <div>
                      <h4 className="font-semibold mb-2">Entrevista</h4>
                      <p className="text-white/90 text-sm">
                        Participa en la entrevista familiar con el equipo directivo.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="badge badge-accent badge-lg">4</div>
                    <div>
                      <h4 className="font-semibold mb-2">Resultado</h4>
                      <p className="text-white/90 text-sm">
                        Recibe la notificación de admisión y procede con la matrícula.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Costos y Becas */}
      <section className="py-16 bg-base-200">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12 font-poppins">
            Información Financiera
          </h2>
          
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="card bg-white shadow-xl">
              <div className="card-body text-center">
                <h3 className="card-title justify-center text-primary mb-4">Preescolar</h3>
                <div className="text-3xl font-bold text-accent mb-2">$890,000</div>
                <p className="text-neutral mb-4">Matrícula anual</p>
                <div className="text-xl font-semibold text-primary mb-4">$445,000</div>
                <p className="text-neutral text-sm mb-6">Pensión mensual</p>
                <ul className="text-left text-sm space-y-2">
                  <li>✓ Material pedagógico incluido</li>
                  <li>✓ Alimentación balanceada</li>
                  <li>✓ Actividades lúdicas</li>
                </ul>
              </div>
            </div>

            <div className="card bg-white shadow-xl border-2 border-accent">
              <div className="card-body text-center">
                <div className="badge badge-accent mb-4">Más popular</div>
                <h3 className="card-title justify-center text-primary mb-4">Primaria</h3>
                <div className="text-3xl font-bold text-accent mb-2">$1,200,000</div>
                <p className="text-neutral mb-4">Matrícula anual</p>
                <div className="text-xl font-semibold text-primary mb-4">$600,000</div>
                <p className="text-neutral text-sm mb-6">Pensión mensual</p>
                <ul className="text-left text-sm space-y-2">
                  <li>✓ Inglés intensivo</li>
                  <li>✓ Actividades deportivas</li>
                  <li>✓ Laboratorios especializados</li>
                </ul>
              </div>
            </div>

            <div className="card bg-white shadow-xl">
              <div className="card-body text-center">
                <h3 className="card-title justify-center text-primary mb-4">Bachillerato</h3>
                <div className="text-3xl font-bold text-accent mb-2">$1,450,000</div>
                <p className="text-neutral mb-4">Matrícula anual</p>
                <div className="text-xl font-semibold text-primary mb-4">$725,000</div>
                <p className="text-neutral text-sm mb-6">Pensión mensual</p>
                <ul className="text-left text-sm space-y-2">
                  <li>✓ Preparación universitaria</li>
                  <li>✓ Proyectos de investigación</li>
                  <li>✓ Orientación vocacional</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <div className="card bg-info text-white shadow-xl max-w-2xl mx-auto">
              <div className="card-body">
                <h3 className="card-title justify-center text-2xl mb-4">Programa de Becas</h3>
                <p className="mb-4">
                  Ofrecemos becas académicas y socioeconómicas para estudiantes destacados. 
                  Consulta los criterios y proceso de aplicación.
                </p>
                <div className="card-actions justify-center">
                  <Link to="/contact" className="btn btn-primary">Más información</Link>
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
            ¿Listo para Iniciar el Proceso?
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Nuestro equipo de admisiones está disponible para resolver todas tus dudas 
            y acompañarte en cada paso del proceso.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn btn-accent btn-lg">
              <Phone className="w-5 h-5" />
              Contactar Admisiones
            </Link>
            <a href="tel:+5712345678" className="btn btn-outline btn-lg text-white border-white hover:bg-white hover:text-primary">
              <MapPin className="w-5 h-5" />
              Agendar Visita
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}


export default Admissions