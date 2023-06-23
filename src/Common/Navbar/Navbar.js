import React, { useState } from "react"
import "./Navbar.css"
import { Link } from "react-router-dom"

const Navbar = () => {
  const [click, setClick] = useState(false)

  const handleClick = () => setClick(!click)
  const closeMobileMenu = () => setClick(false)
  return (
    <>
      <nav className='navbar'>
        <div className='container flex_space'>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? "fas fa-times" : " fas fa-bars"}></i>
          </div>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li>
              <Link to='/' onClick={closeMobileMenu}>
                Inicio
              </Link>
            </li>
            <li>
              <Link to='/sobre' onClick={closeMobileMenu}>
                Sobre Nosotros
              </Link>
            </li>
            <li>
              <Link to='/galeria' onClick={closeMobileMenu}>
                Galeria
              </Link>
            </li>
            <li>
              <Link to='/destinos' onClick={closeMobileMenu}>
                Destinos
              </Link>
            </li>
            <li>
              <Link to='/blog' onClick={closeMobileMenu}>
                Blog
              </Link>
            </li>
            <li>
              <Link to='/testimonios' onClick={closeMobileMenu}>
                Testimonios
              </Link>
            </li>
            <li>
              <Link to='/contacto' onClick={closeMobileMenu}>
                Contacto
              </Link>
            </li>
          </ul>

          <div className='login-area flex'>
            <li>
              <Link to='/login'>
                <i class='far fa-chevron-right'></i>Ingresar
              </Link>
            </li>
            <li>
              <Link to='/registro'>
                <i class='far fa-chevron-right'></i>Registrar
              </Link>
            </li>
           
          </div>
        </div>
      </nav>

      <header>
        <div className='container flex_space'>
          <div className='logo'>
            <img src='images/logo.png' alt='' />
          </div>

          <div className='contact flex_space '>
            <div className='box flex_space'>
              <div className='icons'>
                <i class='fal fa-clock'></i>
              </div>
              <div className='text'>
                <h4>Horarios</h4>
              Lunes a  Viernes: 9:00 hs. a 17:00 hs.
              </div>
            </div>
            <div className='box flex_space'>
              <div className='icons'>
                <i class='fas fa-phone-volume'></i>
              </div>
              <div className='text'>
                <h4>Llamanos</h4>
                +54 9 11 2776-1315
              </div>
            </div>
            <div className='box flex_space'>
              <div className='icons'>
                <i class='far fa-envelope'></i>
              </div>
              <div className='text'>
                <h4>Envianos un email</h4>
                info@hotelescristianos.com
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Navbar
