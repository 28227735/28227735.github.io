import React from "react"
import "./About.css"

const AboutCard = () => {
  return (
    <>
      <div className='aboutCard mtop flex_space'>
        <div className='row row1'>
         <br></br>
          <h1>
            Nosotros <span>brindamos experiencias</span> para hacer posible su viaje.
          </h1>
          <p>Lorem ipsum dolor sit amet consectetur adipiscing elit amet consectetur piscing elit amet consectetur adipiscing elit sed et eletum nulla eu placerat felis etiam tincidunt orci lacus id varius dolor fermum sit amet.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipiscing elit amet consectetur piscing elit amet consectetur adipiscing elit sed et eletum nulla eu placerat felis etiam tincidunt orci lacus id varius dolor fermum sit amet.</p>
          <button className='secondary-btn'>
            Explora Más <i className='fas fa-long-arrow-alt-right'></i>
          </button>
        </div>
        <div className='row image'>
        <a><iframe width="578" height="350" src="https://www.youtube.com/embed/SP8uMpacIIU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></a>
          <div className='control-btn'>
            
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutCard
