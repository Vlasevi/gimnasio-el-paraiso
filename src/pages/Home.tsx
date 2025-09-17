
import { ChevronRight, Award, Users, BookOpen } from 'lucide-react'
import { Link } from 'react-router'
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

function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero relative flex items-center justify-center overflow-hidden bg-transparent">
        <img
          src={Portada}
          alt="Portada"
          className="block max-w-full h-auto object-contain mx-auto"
        />

        <div className="absolute inset-0 z-10 flex flex-col items-center justify-end text-center text-white px-4 mb-12">
          <h1 className="text-4xl md:text-6xl text-base-100 font-bold font-poppins mb-6 animate-fade-in">
            Gimnasio el Paraíso
          </h1>
          <p className="text-xl md:text-2xl font-b mb-8 leading-relaxed">
            Educando con inclusión desde {SCHOOL_INFO.founded}.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/admissions" className="btn btn-accent btn-lg text-white border-accent hover:bg-white hover:text-primary hover:border-white font-semibold">
              Conocenos
              <ChevronRight className="w-5 h-5" />
            </Link>
            <Link
              to="/about"
              className="btn btn-accent btn-lg text-white border-accent hover:bg-white hover:text-primary hover:border-white font-semibold"
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
              <p className="text-lg leading-relaxed mb-6 text-neutral">
                El Gimnasio el Paraíso es una institución educativa que desde {SCHOOL_INFO.founded} se ha dedicado
                a formar estudiantes íntegros, críticos y competentes. Ofrecemos educación de calidad
                desde preescolar hasta bachillerato, fundamentada en valores humanos, excelencia académica inclusión.
              </p>
              <p className="text-lg leading-relaxed mb-8 text-neutral">
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

      {/* Collage de Fotos en Movimiento */}
      <section className="py-16 bg-primary overflow-hidden">
        <div className="container mx-auto px-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-4 font-poppins">
            Nuestros estudiantes en Acción
          </h2>
          <p className="text-center text-white/90 text-lg max-w-2xl mx-auto">
            Momentos especiales que reflejan el espíritu y la alegría de nuestra familia educativa
          </p>
        </div>

        <div className="flex gap-4 animate-pulse">
          <div className="flex gap-4 min-w-max">
            {[
              Moments1, Moments2, Moments3, Moments4, Moments5, Moments6, Moments7, Moments8, Moments9
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
                  la inclusión y el aprendizaje activo en cualquier entorno.
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
                <img src={Prescolar}
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
                  <span className="badge badge-accent">Pre-jardín</span>
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
                <h3 className="card-title text-primary">Primaria</h3>
                <p className="text-neutral mb-4">
                  Educación básica primaria de 1º a 5º grado con énfasis en lectoescritura,
                  matemáticas, ciencias naturales y formación en valores.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="badge badge-info">1º - 5º Grado</span>
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
                <h3 className="card-title text-primary">Bachillerato</h3>
                <p className="text-neutral mb-4">
                  Educación media de 6º a 11º grado con preparación para la educación superior
                  y énfasis en áreas de interés profesional.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="badge badge-warning">6º - 11º Grado</span>
                </div>
                <div className="card-actions justify-end">
                  <Link to="/admissions" className="btn btn-primary text-white border-primary hover:bg-accent hover:text-base-100 hover:border-accent font-semibold">Más información</Link>
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

