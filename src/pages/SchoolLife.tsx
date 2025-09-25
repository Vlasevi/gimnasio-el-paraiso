
import { Camera } from 'lucide-react'
import Moments1 from '../assets/moments/acc1.jpg';
import Moments2 from '../assets/moments/acc2.jpg';
import Moments3 from '../assets/moments/acc3.jpg';
import Moments4 from '../assets/moments/acc4.jpg';
import home from '../assets/home.jpg'

function SchoolLife() {
  const years = [
    { grade: "Preescolar", image: Moments1, description: "Primeros pasos en el aprendizaje" },
    { grade: "Primaria", image: Moments2, description: "Explorando el mundo del conocimiento" },
    { grade: "Media", image: Moments3, description: "Desarrollando habilidades críticas" },
    { grade: "Bachillerato", image: Moments4, description: "Formación integral y valores" }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section with scroll transparency */}
      <section className="hero relative flex items-center justify-center overflow-hidden bg-transparent pt-20 lg:pt-0">
        <img
          src={home}
          alt="Nosotross"
          className="block max-w-full h-auto object-contain mx-auto"
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-end text-center text-white px-4 pt-20 pb-8 lg:pt-0 lg:pb-12">
          <h1 className="text-4xl md:text-6xl text-base-100 font-bold font-poppins mb-6 animate-fade-in">
            Vida Escolar
          </h1>
          <p className="text-xl md:text-2xl font-b mb-8 leading-relaxed">
            Momentos especiales y experiencias que marcan la diferencia
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
    </div>
  )
}

export default SchoolLife