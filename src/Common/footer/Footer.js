import React from "react"
import "./Footer.css"
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <>
      <footer>
        <div className='container grid'>
          <div className='box'>
            <h2>SOBRE NOSOTROS</h2>
            <p>Lorem ipsum dolor sit amet sectetur adipiscing elit amet consectetur scing elit amet consectetur adipiscing elit sed et eletum.</p>
            <br />
            <p>Lorem ipsum dolor sit amet sectetur adipiscing elit amet consectetur scing elit amet.</p>
            <div className='icon flex_space'>
              <i className='fab fa-facebook-f'></i>
              <i className='fab fa-twitter'></i>
              <i className='fab fa-linkedin'></i>
              <i className='fab fa-instagram'></i>
              <i className='fab fa-pinterest'></i>
              <i className='fab fa-youtube'></i>
            </div>
            
          </div>

          <div className='box'>
            <h2>NAVEGACIÓN</h2>
            <ul>
              <li>
                <Link to='/'>Inicio</Link>
              </li>
              <li>
                <Link to='/sobre'>Sobre Nosotros</Link>
              </li>
              <li>
                <Link to='/galeria'>Galeria</Link>
              </li>
              <li>
                <Link to='/destinos'>Destinos</Link>
              </li>
              <li>
                <Link to='/blog'>Blog</Link>
              </li>
              <li>
                <Link to='/testimonios'>Testimonios</Link>
              </li>
              <li>
                <Link to='/contacto'>Contacto</Link>
              </li>
            </ul>
          </div>

          <div className='box post'>
            <h2>POSTEOS RECIENTES</h2>
            <ul>
              <li>
                <p>Lorem ipsum dolor sit amet sectetur adipiscing elit amet</p>
                <label className='fa fa-calendar-alt'></label>
                <span>01 Oct 2020</span>
              </li>
              <li>
                <p>Lorem ipsum dolor sit amet sectetur adipiscing elit amet</p>
                <label className='fa fa-calendar-alt'></label>
                <span>01 Oct 2020</span>
              </li>
              <li>
                <p>Lorem ipsum dolor sit amet sectetur adipiscing elit amet</p>
                <label className='fa fa-calendar-alt'></label>
                <span>01 Oct 2020</span>
              </li>
            </ul>
          </div>

          <div className='box'>
            <h2>NOTICIAS</h2>
            <p>Lorem ipsum dolor sit amet sectetur adipiscing elit amet</p>

            <input type='text' name='' id='' />
            <input type='text' className='primary-btn' value='SUSCRIBIRSE' />
          </div>
        </div>
        <div class="whatsapp-container">
  <a href="https://api.whatsapp.com/send?phone=1234567890&text=¡Hola! ¿En qué puedo ayudarte?" target="_blank">
    <img src="./imagen-whatsapp.svg" alt="WhatsApp"></img>
  </a>
</div>
      </footer>
      <div className='legal'>
        <p>© 2023 Todos los Derechos Reservados.</p>
      </div>
    </>
  )
}

export default Footer
