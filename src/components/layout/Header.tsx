import logo from '../../assets/logo.png'
import { Link, useLocation } from 'react-router-dom'
import { User, Menu, X } from 'lucide-react'
import { useState, useEffect} from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const isActiveLink = (path: string) => {
    return location.pathname === path
  }

  const [opacity, setOpacity] = useState(0);
  const [navStyle, setNavStyle] = useState({});

  useEffect(() => {
    const updateNavStyle = () => {
      const Y = window.scrollY;
      const newOpacity = Math.min(Y / 300, 1);
      setOpacity(newOpacity);
      setNavStyle({ 
        ["--tw-bg-opacity" as any]: window.innerWidth >= 1024 ? newOpacity : 1 
      });
    };

    const onResize = () => {
      updateNavStyle(); // Recalcular cuando cambie el tamaño
    };
    
    window.addEventListener('scroll', updateNavStyle, { passive: true });
    window.addEventListener('resize', onResize);
    updateNavStyle(); // Initialize on mount
    
    return() => {
      window.removeEventListener('scroll', updateNavStyle);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  const changeTextColor = opacity > 0.5;

  return (
    <>
      <nav className="navbar fixed top-0 z-50 h-20 backdrop-blur-[2px] transition-colors duration-300 bg-primary"
      style={navStyle}
      >
        <div className="navbar-start">
          <Link to='/' className="flex items-center">
            <img src={logo} alt="Escudo Gimnasio el Paraíso" className="w-12 h-12 md:w-20 md:h-20" />
          </Link>
        </div>
        
        {/* Desktop Menu */}
        <div className='navbar-center hidden lg:flex'>
          <ul className={`menu menu-horizontal font-poppins font-semibold ${changeTextColor ? "text-base-100" : "text-base-100"}`}>
            <li>
              <Link to='/' className={`hover:text-accent transition-colors px-4 ${isActiveLink('/') ? 'text-accent font-bold' : ''}`}>Inicio</Link>
            </li>
            <li>
              <Link to='/about' className={`hover:text-accent transition-colors px-4 ${isActiveLink('/about') ? 'text-accent font-bold' : ''}`}>Nosotros</Link>
            </li>
            <li>
              <Link to='/admissions' className={`hover:text-accent transition-colors px-4 ${isActiveLink('/admissions') ? 'text-accent font-bold' : ''}`}>Admisiones</Link>
            </li>
            <li>
              <Link to='/schoollife' className={`hover:text-accent transition-colors px-4 ${isActiveLink('/schoollife') ? 'text-accent font-bold' : ''}`}>Vida Escolar</Link>
            </li>
            <li>
              <Link to='/calendario' className={`hover:text-accent transition-colors px-4 ${isActiveLink('/calendario') ? 'text-accent font-bold' : ''}`}>Calendario</Link>
            </li>
            <li>
              <Link to='/contact' className={`hover:text-accent transition-colors px-4 ${isActiveLink('/contact') ? 'text-accent font-bold' : ''}`}>Contacto</Link>
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
      <div className="lg:hidden fixed inset-0 z-[60]">
        {/* overlay clicable sin color para no romper el blur */}
        <div className="absolute inset-0" onClick={toggleMenu} />

        <div
          className="
            absolute inset-x-0 top-20
            max-h-[calc(100dvh-5rem)] overflow-y-auto
            bg-primary backdrop-blur-[2px]
            transition-colors duration-300
            border-white/10 shadow-lg
          "
          style={navStyle} // <- misma opacidad que el navbar
        >
          <ul className='menu menu-vertical text-base-100 font-poppins font-semibold p-4'>
            <li>
              <Link to='/' className={`hover:text-accent transition-colors py-3 ${isActiveLink('/') ? 'text-accent font-bold' : ''}`} onClick={toggleMenu}>Inicio</Link>
            </li>
            <li>
              <Link to='/about' className={`hover:text-accent transition-colors py-3 ${isActiveLink('/about') ? 'text-accent font-bold' : ''}`} onClick={toggleMenu}>Nosotros</Link>
            </li>
            <li>
              <Link to='/admissions' className={`hover:text-accent transition-colors py-3 ${isActiveLink('/admissions') ? 'text-accent font-bold' : ''}`} onClick={toggleMenu}>Admisiones</Link>
            </li>
            <li>
              <Link to='/schoollife' className={`hover:text-accent transition-colors py-3 ${isActiveLink('/schoollife') ? 'text-accent font-bold' : ''}`} onClick={toggleMenu}>Vida Escolar</Link>
            </li>
            <li>
              <Link to='/calendario' className={`hover:text-accent transition-colors py-3 ${isActiveLink('/calendario') ? 'text-accent font-bold' : ''}`} onClick={toggleMenu}>Calendario</Link>
            </li>
            <li>
              <Link to='/contact' className={`hover:text-accent transition-colors py-3 ${isActiveLink('/contact') ? 'text-accent font-bold' : ''}`} onClick={toggleMenu}>Contacto</Link>
            </li>
          </ul>
        </div>
      </div>
      )}
    </>
  )
}
