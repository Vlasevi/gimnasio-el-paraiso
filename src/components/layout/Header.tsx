import logo from '../../assets/logo.png'
import { Link } from 'react-router'
import { User, Menu, X } from 'lucide-react'
import { useState } from 'react'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <>
      <nav className="navbar bg-primary shadow-lg sticky top-0 z-50">
        <div className="navbar-start">
          <Link to='/' className="flex items-center">
            <img src={logo} alt="Escudo Gimnasio el Paraíso" className="w-12 h-12 md:w-16 md:h-16" />
          </Link>
        </div>
        
        {/* Desktop Menu */}
        <div className='navbar-center hidden lg:flex'>
          <ul className='menu menu-horizontal text-base-100 font-poppins font-semibold'>
            <li>
              <Link to='/' className='hover:text-accent transition-colors px-4'>Inicio</Link>
            </li>
            <li>
              <Link to='/about' className='hover:text-accent transition-colors px-4'>Nosotros</Link>
            </li>
            <li>
              <Link to='/admissions' className='hover:text-accent transition-colors px-4'>Admisiones</Link>
            </li>
            <li>
              <Link to='/schoollife' className='hover:text-accent transition-colors px-4'>Vida Escolar</Link>
            </li>
            <li>
              <Link to='/contact' className='hover:text-accent transition-colors px-4'>Contacto</Link>
            </li>
          </ul>
        </div>
        
        <div className='navbar-end flex items-center gap-2'>
          {/* User Portal */}
          <Link to='/students' className='hover:text-accent transition-colors text-base-100 p-2' aria-label='Portal del Estudiante'>
            <User className="w-5 h-5 md:w-6 md:h-6"/>
          </Link>
          
          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden text-base-100 p-2"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="lg:hidden bg-primary shadow-lg border-t border-white/10">
          <ul className='menu menu-vertical text-base-100 font-poppins font-semibold p-4'>
            <li>
              <Link to='/' className='hover:text-accent transition-colors py-3' onClick={toggleMenu}>Inicio</Link>
            </li>
            <li>
              <Link to='/about' className='hover:text-accent transition-colors py-3' onClick={toggleMenu}>Nosotros</Link>
            </li>
            <li>
              <Link to='/admissions' className='hover:text-accent transition-colors py-3' onClick={toggleMenu}>Admisiones</Link>
            </li>
            <li>
              <Link to='/schoollife' className='hover:text-accent transition-colors py-3' onClick={toggleMenu}>Vida Escolar</Link>
            </li>
            <li>
              <Link to='/contact' className='hover:text-accent transition-colors py-3' onClick={toggleMenu}>Contacto</Link>
            </li>
          </ul>
        </div>
      )}
    </>
  )
}


export default Header