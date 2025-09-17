
import { Award, Target, Eye, Heart, Users, BookOpen, Calendar } from 'lucide-react'
import { SCHOOL_INFO } from '../utils/constants';
import Nosotros from '../assets/home.jpg';

function ObtenerAñoActual() {
  const añoActual = new Date().getFullYear();

  return (
  añoActual
  );
}

function About() {
  const leaders = [
    {
      name: "Vilma Pacheco Díaz",
      position: "Rectora",
      image: "",
      description: "Psicopedagoga con ------."
    },
    {
      name: "Angela Anaya Pacheco",
      position: "Vicerrectora Académica",
      image: "",
      description: "Ingeniera Electrica con Maestría en"
    },
    {
      name: "Aa",
      position: "Aa",
      image: "",
      description: ""
    },
    {
      name: "Aa",
      position: "Aa",
      image: "",
      description: ""
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero relative flex items-center justify-center overflow-hidden bg-transparent">
        <img
          src={Nosotros}
          alt="Nosotross"
          className="block max-w-full h-auto object-contain mx-auto"
        />

        <div className="absolute inset-0 z-10 flex flex-col items-center justify-end text-center text-white px-4 mb-12">
          <h1 className="text-4xl md:text-6xl text-base-100 font-bold font-poppins mb-6 animate-fade-in">
            Nosotros
          </h1>
          <p className="text-xl md:text-2xl font-b mb-8 leading-relaxed">
            Un vistazo más de cerca a nuestra historia, valores y equipo de trabajo.
          </p>
        </div>
      </section>

      {/* Historia del Colegio */}
      <section className="py-16 bg-base-100">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 font-poppins">
                Presentación
              </h2>
              <div className="space-y-6">
                <p className="text-lg leading-relaxed text-neutral">
                  {SCHOOL_INFO.presentation1}
                </p> 
                <p className="text-lg leading-relaxed text-neutral">
                  {SCHOOL_INFO.presentation2}
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-base-200 p-6 rounded-lg text-center">
                <div className="text-3xl font-bold text-primary mb-2">{ObtenerAñoActual()-SCHOOL_INFO.founded}</div>
                <div className="text-sm text-neutral">Años de experiencia</div>
              </div>
              <div className="bg-base-200 p-6 rounded-lg text-center">
                <div className="text-3xl font-bold text-primary mb-2">11</div>
                <div className="text-sm text-neutral">Aa</div>
              </div>
              <div className="bg-base-200 p-6 rounded-lg text-center">
                <div className="text-3xl font-bold text-primary mb-2">150?</div>
                <div className="text-sm text-neutral">Estudiantes actuales</div>
              </div>
              <div className="bg-base-200 p-6 rounded-lg text-center">
                <div className="text-3xl font-bold text-primary mb-2">10?</div>
                <div className="text-sm text-neutral">Docentes calificados</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Horizonte Institucional */}
      <section className="py-16 bg-base-200">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12 font-poppins">
            Horizonte Institucional
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-neutral">
              {SCHOOL_INFO.horizonte}
          </p>
          
          <div className="mt-8 grid lg:grid-cols-3 gap-8">
            {/* Misión */}
            <div className="card bg-white shadow-xl">
              <div className="card-body text-center">
                <Target className="w-16 h-16 text-accent mx-auto mb-4" />
                <h3 className="card-title justify-center text-primary mb-4 text-2xl">Misión</h3>
                <p className="text-neutral leading-relaxed">
                  {SCHOOL_INFO.mision}
                </p>
              </div>
            </div>

            {/* Visión */}
            <div className="card bg-white shadow-xl">
              <div className="card-body text-center">
                <Eye className="w-16 h-16 text-accent mx-auto mb-4" />
                <h3 className="card-title justify-center text-primary mb-4 text-2xl">Visión</h3>
                <p className="text-neutral leading-relaxed">
                  {SCHOOL_INFO.vision}
                </p>
              </div>
            </div>

            {/* Valores */}
            <div className="card bg-white shadow-xl">
              <div className="card-body text-center">
                <Heart className="w-16 h-16 text-accent mx-auto mb-4" />
                <h3 className="card-title justify-center text-primary mb-4 text-2xl">Valores</h3>
                <ul className="text-left text-neutral space-y-2 grid grid-cols-2">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-accent rounded-full"></span>
                    Fé
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-accent rounded-full"></span>
                    Sabiduría
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-accent rounded-full"></span>
                    Honestidad
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-accent rounded-full"></span>
                    Esperanza
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-accent rounded-full"></span>
                    Solidaridad
                  </li>
                                    <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-accent rounded-full"></span>
                    Honestidad
                  </li>
                                    <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-accent rounded-full"></span>
                    Justicia
                  </li>
                                    <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-accent rounded-full"></span>
                    Autonomía
                  </li>
                                    <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-accent rounded-full"></span>
                    Integralidad
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-accent rounded-full"></span>
                    Respeto
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-accent rounded-full"></span>
                    Responsabilidad
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-accent rounded-full"></span>
                    Tolerancia
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-accent rounded-full"></span>
                    Justicia
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Líderes - Equipo de Trabajo */}
      <section className="py-16 bg-base-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12 font-poppins">
            Nuestro Equipo Directivo
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {leaders.map((leader, index) => (
              <div key={index} className="card bg-white shadow-xl hover:shadow-2xl transition-shadow">
                <figure className="px-6 pt-6">
                  <img src={leader.image} 
                       alt={leader.name}
                       className="rounded-full w-32 h-32 object-cover" />
                </figure>
                <div className="card-body text-center">
                  <h3 className="card-title justify-center text-primary text-lg">{leader.name}</h3>
                  <p className="text-accent font-semibold mb-2">{leader.position}</p>
                  <p className="text-neutral text-sm">{leader.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Academia - REG y PEG */}
      <section className="py-16 bg-base-200">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12 font-poppins">
            Marco Académico
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* REG */}
            <div className="card bg-white shadow-xl">
              <div className="card-body">
                <div className="flex items-center gap-4 mb-6">
                  <BookOpen className="w-12 h-12 text-accent" />
                  <div>
                    <h3 className="text-2xl font-bold text-primary">REG</h3>
                    <p className="text-accent">Reglamento Estudiantil General</p>
                  </div>
                </div>
                <p className="text-neutral mb-6 leading-relaxed">
                  Nuestro Reglamento Estudiantil General establece las normas de convivencia, 
                  derechos y deberes de todos los miembros de la comunidad educativa, 
                  promoviendo un ambiente de respeto, responsabilidad y crecimiento personal.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="badge badge-primary">Normativa</span>
                    <span className="text-sm">Derechos y deberes estudiantiles</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="badge badge-primary">Convivencia</span>
                    <span className="text-sm">Protocolos de resolución de conflictos</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="badge badge-primary">Disciplina</span>
                    <span className="text-sm">Procedimientos formativos</span>
                  </div>
                </div>
              </div>
            </div>

            {/* PEG */}
            <div className="card bg-white shadow-xl">
              <div className="card-body">
                <div className="flex items-center gap-4 mb-6">
                  <Award className="w-12 h-12 text-accent" />
                  <div>
                    <h3 className="text-2xl font-bold text-primary">PEG</h3>
                    <p className="text-accent">Proyecto Educativo General</p>
                  </div>
                </div>
                <p className="text-neutral mb-6 leading-relaxed">
                  El Proyecto Educativo General define nuestra filosofía educativa, 
                  metodologías pedagógicas y estrategias formativas orientadas hacia 
                  la excelencia académica y la formación integral de nuestros estudiantes.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="badge badge-accent">Pedagogía</span>
                    <span className="text-sm">Metodologías activas de aprendizaje</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="badge badge-accent">Currículo</span>
                    <span className="text-sm">Planes de estudio innovadores</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="badge badge-accent">Evaluación</span>
                    <span className="text-sm">Sistema integral de valoración</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reconocimientos */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 font-poppins">
            Reconocimientos y Logros
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
              <Award className="w-16 h-16 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Excelencia Académica</h3>
              <p className="text-white/90">
                Aa
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
              <Users className="w-16 h-16 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Convivencia Escolar</h3>
              <p className="text-white/90">
                Aa
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
              <Calendar className="w-16 h-16 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Innovación Educativa</h3>
              <p className="text-white/90">
                Aa
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}


export default About