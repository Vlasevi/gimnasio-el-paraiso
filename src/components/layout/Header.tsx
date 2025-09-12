import logo from '../../assets/logo.png'
import { Link } from 'react-router'
import {User} from 'lucide-react'

function Header() {

  return (
    <>
      <nav className="navbar bg-primary shadow-sm">
        <div className="navbar-start">
          <Link to='/'>
            <img src={logo} alt="Escudo" className="w-16 h-16" />
          </Link>
        </div>
        <div className='navbar-center absolute left-1/2 -translate-x-1/2'>
          <ul className='menu menu-horizontal text-base-100 font-poppins font-semibold'>
            <li>
              <Link to='/' className='hover:text-accent transition-colors'>Inicio</Link>
            </li>
            <li>
              <Link to='/admissions' className='hover:text-accent transition-colors'>Admisiones</Link>
            </li>
            <li>
              <Link to='/about' className='hover:text-accent transition-colors'>Nosotros</Link>
            </li>
            <li>
              <Link to='/contact' className='hover:text-accent transition-colors'>Contacto</Link>
            </li>
            <li>
              <Link to='/schoollife' className='hover:text-accent transition-colors'>Vida Escolar</Link>
            </li>            
          </ul>
        </div>
        <div className='navbar-end pr-4 text-base-100 '>
          <Link to='/students' className='hover:text-accent transition-colors' aria-label='Portal del Estudiante'>
            <User/>
          </Link>
        </div>
      </nav>
    </>
  )
}


export default Header