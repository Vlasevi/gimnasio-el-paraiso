
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Youtube } from 'lucide-react'
import { Link } from 'react-router'
import logo from '../../assets/logo.png'
import { SCHOOL_INFO } from '../../utils/constants'
import { CONTACT_INFO } from '../../utils/constants'

function Footer() {
  return (
    <footer className="bg-primary text-base-100">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo y Descripción */}
          <div className="col-span-1 lg:col-span-2">
            <div className="flex items-center gap-4 mb-4">
              <img src={logo} alt="Gimnasio el Paraíso" className="w-16 h-16" />
              <div>
                <h3 className="text-xl font-bold font-poppins">Gimnasio el Paraíso</h3>
                <p className="text-base-100/80">Educación de calidad desde {SCHOOL_INFO.founded}</p>
              </div>
            </div>
            <p className="text-base-100/90 leading-relaxed mb-4">
              Formamos seres húmano íntegros con excelencia académica, valores humanos y responsabilidad social.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-base-100/80 hover:text-accent transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-base-100/80 hover:text-accent transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-base-100/80 hover:text-accent transition-colors">
                <Youtube className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Enlaces Rápidos */}
          <div>
            <h4 className="text-lg font-semibold font-poppins mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-base-100/80 hover:text-accent transition-colors">Nosotros</Link></li>
              <li><Link to="/admissions" className="text-base-100/80 hover:text-accent transition-colors">Admisiones</Link></li>
              <li><Link to="/schoollife" className="text-base-100/80 hover:text-accent transition-colors">Vida Escolar</Link></li>
              <li><Link to="/contact" className="text-base-100/80 hover:text-accent transition-colors">Contacto</Link></li>
              <li><Link to="/students" className="text-base-100/80 hover:text-accent transition-colors">Portal Estudiante</Link></li>
            </ul>
          </div>

          {/* Información de Contacto */}
          <div>
            <h4 className="text-lg font-semibold font-poppins mb-4">Contacto</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-accent flex-shrink-0" />
                <p className="text-base-100/90 text-sm">{CONTACT_INFO.adress}</p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                <p className="text-base-100/90 text-sm">{CONTACT_INFO.whatsapp}</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                <p className="text-base-100/90 text-sm">{CONTACT_INFO.email}</p>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-accent flex-shrink-0" />
                <p className="text-base-100/90 text-sm">{SCHOOL_INFO.working_hours}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-6 text-center">
          <p className="text-base-100/80 text-sm">
            2025 Gimnasio el Paraíso. Todos los derechos reservados. {/*PENDIENTE COLOCAR AÑO ACTUAL*/}
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer