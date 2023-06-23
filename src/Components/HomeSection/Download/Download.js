import React from "react"
import "./download.css"

const Download = () => {
  return (
    <>
      <section className='download top'>
        <div className='container flex_space'>
          <div className='row'>
            <h3>Descarga Nuestra app</h3>
            <h1>Wow! Consigue la aplicación de Hoteles Cristianos para tu telefono movil</h1>
            <ul>
              <li>&#10003; Encuentra las ubicaciones mas interesantes</li>
              <li>&#10003; Consigue confirmación de reserva</li>
              <li>&#10003; Haz que todo sea comodo</li>
              <li>&#10003; Descubre lo fácil que es conseguir hotel</li>
              <li>&#10003; Sientate seguro que nosotros hacemos el resto</li>
              <li>&#10003; Agrega reseñas a tus alojamientos</li>
            </ul>
            <div className='img flex'>
              <img src='/images/appstore-button.png' alt='' />
              <img src='/images/google-play-button.png' alt='' />
            </div>
          </div>
          <div className='row row2'>
            <img src='/images/app-image-1.png' alt='' className='image' />
          </div>
        </div>
      </section>
    </>
  )
}

export default Download
