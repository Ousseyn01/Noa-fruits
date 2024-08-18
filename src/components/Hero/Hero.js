import React from 'react'
import "./Hero.css"
import dark_arrow from '../../assets/dark-arrow.png'

const Hero = () => {
  return (
    <div className='hero container'>
        <div className="hero-text">
            <h1>Nous Assurons à vous offrir une expérience fruitée unique.</h1>
            <p>NOA-FRUITS est une entreprise passionnée qui se spécialise 
              dans la création et la vente de jus de fruits frais et savoureux. 
              Chaque jus est élaboré à partir de fruits soigneusement sélectionnés,
               pressés à froid pour conserver toutes leurs vitamines,
                nutriments et arômes naturels.
            </p>
            <button className='btn'>Voir plus <img src={dark_arrow} alt="" /> </button>
        </div>
    </div>
  )
}

export default Hero