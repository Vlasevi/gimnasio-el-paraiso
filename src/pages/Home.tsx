
import { ChevronRight, Award, Users, BookOpen } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Portada from '../assets/home.jpg'
import { SCHOOL_INFO } from '../utils/constants'
import Home1 from '../assets/us/home1.jpg';
import Home2 from '../assets/us/home2.jpg';
import Home3 from '../assets/us/home3.jpg';
import Home4 from '../assets/us/home4.jpg';

import Moments1 from '../assets/moments/acc1.jpg';
import Moments2 from '../assets/moments/acc2.jpg';
import Moments3 from '../assets/moments/acc3.jpg';
import Moments4 from '../assets/moments/acc4.jpg';
import Moments5 from '../assets/moments/acc5.jpg';
import Moments6 from '../assets/moments/acc6.jpg';
import Moments7 from '../assets/moments/acc7.jpg';
import Moments8 from '../assets/moments/acc8.jpg';
import Moments9 from '../assets/moments/acc9.jpg';

import Prescolar from '../assets/school/prescolar.jpg';
import Primaria from '../assets/school/primaria.jpg';
import Bachillerato from '../assets/school/bachillerato.jpg';

// Licencias de Funcionamiento
import LicenciaPreescolar from '../assets/licencias/Resolución001618_1998.pdf';
import LicenciaPrimaria from '../assets/licencias/Resolución02323_2015.pdf';

function Home() {
  const moments = [
    Moments1, Moments2, Moments3, Moments4, Moments5, Moments6, Moments7, Moments8, Moments9
  ];
  
  const [currentSlide, setCurrentSlide] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % moments.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, [moments.length]);
  

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero relative flex items-center justify-center overflow-hidden bg-transparent pt-20 lg:pt-0">
        <img
          src={Portada}
          alt="Portada"
          className="block max-w-full h-auto object-contain mx-auto"
        />
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center text-white px-4 pt-20 pb-8 lg:pt-0 lg:pb-12 lg:justify-end">
          <h1 className="text-4xl md:text-6xl text-base-100 font-bold font-poppins mb-6 animate-fade-in">
            GIMNASIO EL PARAÍSO
          </h1>
          <p className="text-lg md:text-2xl font-b mb-6 md:mb-8 leading-relaxed hidden sm:block">
            Con fe, esfuerzo y sabiduría formamos la esperanza del mañana.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/about"
              className="btn btn-accent btn-md md:btn-lg text-white border-accent hover:bg-white hover:text-primary hover:border-white font-semibold"
            >
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
              <p className="text-lg leading-relaxed mb-6 text-neutral text-justify">
                Gimnasio El Paraíso es una institución educativa que desde {SCHOOL_INFO.founded} se ha dedicado
                a formar estudiantes íntegros, críticos y competentes. Ofrecemos educación de calidad
                desde preescolar hasta bachillerato, fundamentada en valores humanos y excelencia académica.
              </p>
              <p className="text-lg leading-relaxed mb-8 text-neutral text-justify">
                Nuestro compromiso es desarrollar las potencialidades de cada estudiante, fomentando
                el pensamiento crítico, la creatividad y la responsabilidad social.
              </p>
              <Link to="/about" className="btn btn-primary text-white border-primary hover:bg-accent hover:text-base-100 hover:border-white font-semibold">
                Conoce más sobre nosotros
                <ChevronRight className="w-5 h-5" />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img src={Home1}
                alt="Estudiantes en clase"
                className="rounded-lg shadow-lg h-48 w-full object-cover" />
              <img src={Home2}
                alt="Biblioteca"
                className="rounded-lg shadow-lg h-48 w-full object-cover mt-8" />
              <img src={Home3}
                alt="Laboratorio"
                className="rounded-lg shadow-lg h-48 w-full object-cover -mt-8" />
              <img src={Home4}
                alt="Actividades deportivas"
                className="rounded-lg shadow-lg h-48 w-full object-cover" />
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
                <img src={Prescolar}
                  alt="Primaria"
                  className="rounded-xl h-48 w-full object-cover" />
              </figure>
              <div className="card-body">
                <h3 className="card-title text-primary">Preescolar</h3>
                <p className="text-neutral mb-4">
                  La educación inicial ofrece un entorno de cuidado y aprendizaje en el que los niños reciben estimulación temprana, fortalecen su desarrollo cognitivo y adquieren sus primeras habilidades. Al mismo tiempo, promueve la socialización y la preparación con seguridad y confianza para el inicio de la vida escolar.  
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="badge badge-accent">Caminadores</span>
                  <span className="badge badge-accent">Párvulos</span>
                  <span className="badge badge-accent">Pre-Jardín</span>
                  <span className="badge badge-accent">Jardín</span>
                  <span className="badge badge-accent">Transición</span>
                </div>
                <div className="card-actions justify-end">
                  <Link to="/admissions" className="btn btn-primary text-white border-primary hover:bg-accent hover:text-base-100 hover:border-accent font-semibold">Más información</Link>
                </div>
              </div>
            </div>

            {/* Primaria */}
            <div className="card bg-white shadow-xl hover:shadow-2xl transition-shadow">
              <figure className="px-6 pt-6">
                <img src={Primaria}
                  alt="Primaria"
                  className="rounded-xl h-48 w-full object-cover" />
              </figure>
              <div className="card-body">
                <h3 className="card-title text-primary">Básica Primaria y Secundaria</h3>
                <p className="text-neutral mb-4">
                  Educación básica primaria y secundaria con énfasis en lectoescritura, desarrollo de la lectura crítica, fortalecimiento del razonamiento lógico-matemático, exploración de las ciencias naturales y formación integral en valores.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="badge badge-accent">1º - 5º (Primaria)</span>
                  <span className="badge badge-accent">6º - 9º (Secundaria)</span>
                </div>
                <div className="card-actions justify-end">
                  <Link to="/admissions" className="btn btn-primary text-white border-primary hover:bg-accent hover:text-base-100 hover:border-accent font-semibold">Más información</Link>
                </div>
              </div>
            </div>

            {/* Bachillerato */}
            <div className="card bg-white shadow-xl hover:shadow-2xl transition-shadow">
              <figure className="px-6 pt-6">
                <img src={Bachillerato}
                  alt="Bachillerato"
                  className="rounded-xl h-48 w-full object-cover" />
              </figure>
              <div className="card-body">
                <h3 className="card-title text-primary">Media</h3>
                <p className="text-neutral mb-4">
                  Educación media enfocada en la profundización de la lectura crítica, el pensamiento lógico y científico, el análisis de contextos sociales y culturales, y la preparación integral para la educación superior y el mundo laboral, bajo principios de formación ética y ciudadana.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="badge badge-accent">10º - 11º Grado</span>
                </div>
                <div className="card-actions justify-end">
                  <Link to="/admissions" className="btn btn-primary text-white border-primary hover:bg-accent hover:text-base-100 hover:border-accent font-semibold">Más información</Link>
                </div>
              </div>
            </div>
          </div>
          
          {/* Licencias de Funcionamiento */}
          <div className="mt-16">
            <h3 className="text-2xl md:text-3xl font-bold text-center text-primary mb-8 font-poppins">
              Licencias de Funcionamiento
            </h3>
            <p className="text-center text-neutral/70 text-lg max-w-3xl mx-auto mb-8">
              Contamos con todas las licencias y resoluciones otorgadas por la Secretaría de Educación de Barranquilla
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {/* Licencia Preescolar */}
              <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-8 h-8 text-accent" />
                </div>
                <h4 className="text-lg font-semibold text-primary mb-2">Preescolar</h4>
                <p className="text-sm text-neutral/70 mb-4">Resolución 001618 de 1998</p>
                <a 
                  href={LicenciaPreescolar} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-sm btn-primary text-white hover:bg-accent transition-colors"
                >
                  Ver Licencia
                </a>
              </div>
              
              {/* Licencia Primaria */}
              <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-8 h-8 text-accent" />
                </div>
                <h4 className="text-lg font-semibold text-primary mb-2">Primaria</h4>
                <p className="text-sm text-neutral/70 mb-4">Resolución 02323 de 2015</p>
                <a 
                  href={LicenciaPrimaria} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-sm btn-primary text-white hover:bg-accent transition-colors"
                >
                  Ver Licencia
                </a>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-8 h-8 text-accent" />
                </div>
                <h4 className="text-lg font-semibold text-primary mb-2">Bachillerato</h4>
                <p className="text-sm text-neutral/70 mb-4">Resolución 04219 de 2020</p>
                <div className="btn btn-sm btn-disabled cursor-not-allowed">
                  Próximamente
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Galería de Fotos de Estudiantes */}
      <section className="py-16 bg-base-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-neutral mb-4 font-poppins text-primary">
            Nuestros estudiantes en Acción
          </h2>
          <p className="text-center text-neutral/70 text-lg max-w-2xl mx-auto mb-12">
            Momentos especiales que reflejan el espíritu y la alegría de nuestra familia educativa
          </p>

          {/* Grid minimalista de fotos */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-3 max-w-5xl mx-auto">
            {moments.map((img, index) => (
              <div 
                key={index} 
                className="group relative overflow-hidden rounded-lg cursor-pointer transition-transform duration-300 hover:scale-105"
                onClick={() => setCurrentSlide(index)}
              >
                <img
                  src={img}
                  alt={`Actividad escolar ${index + 1}`}
                  className="w-full h-32 md:h-40 object-cover transition-opacity duration-300 group-hover:opacity-90"
                />
                
                {/* Indicador sutil de imagen activa */}
                {index === currentSlide && (
                  <div className="absolute top-2 right-2 w-2 h-2 bg-accent rounded-full"></div>
                )}
              </div>
            ))}
          </div>

          {/* Indicadores minimalistas */}
          <div className="flex justify-center mt-8 space-x-1">
            {moments.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-accent' 
                    : 'bg-neutral/20 hover:bg-neutral/40'
                }`}
                aria-label={`Ver imagen ${index + 1}`}
              />
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
                  para continuar su camino académico.
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
                  Propuesta pedagógica que combina las bases clásicas de la enseñanza (propias del modelo tradicional) con estrategias adaptadas a las características individuales de cada estudiante.
                </p>
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
            <Link to="/admissions" className="btn btn-accent btn-lg text-white border-accent hover:bg-white hover:text-primary hover:border-white font-semibold">
              Proceso de Admisión
            </Link>
            <Link to="/contact" className="btn btn-accent btn-lg text-white border-accent hover:bg-white hover:text-primary hover:border-white font-semibold">
              Contáctanos
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}


export default Home

