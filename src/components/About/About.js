import React from 'react'
import './About.css'
import about_img from "../../assets/about-noa.jpg"
import play_icon from "../../assets/play-icon.png"

const About = () => {
  return (
    <div className='about'>
        <div className="about-left">
            <img src={about_img} alt="" className='about-img'/>
            <img src={play_icon} alt="" className='play-icon'/>
        </div>
        <div className="about-right">
            <h3>A PROPOS DE NOUS</h3>
            <h2>Ce qu'il faut savoir</h2>
            <p>NOA-FRUITS est une entreprise dédiée à offrir une
                 expérience fruitée unique à travers une gamme 
                 de jus de fruits naturels, frais et savoureux. 
                 Fondée avec la conviction que la nature offre le
                  meilleur pour notre bien-être, NOA-FRUITS se 
                  consacre à la production de boissons de qualité
                   supérieure qui capturent l'essence pure des 
                   fruits. Chaque jus est élaboré à partir de fruits
                    soigneusement sélectionnés, pressés à froid 
                    pour conserver toutes leurs vitamines, 
                    nutriments et arômes naturels.
            </p>
            <p>Nous visons à offrir plus qu'une simple boisson : 
                une véritable expérience fruitée. NOA-FRUITS, c'est
                 le choix de ceux qui recherchent la pureté, le goût, 
                 et une alimentation équilibrée, le tout dans une 
                 explosion de saveurs naturelles et de fraîcheur 
                 incomparable.</p>
            <p> Que ce soit pour accompagner vos repas, recharger vos batteries 
                après une séance de sport ou simplement pour un moment
                 de plaisir, NOA-FRUITS est là pour vous offrir 
                 le meilleur de la nature, à chaque gorgée.</p>
        </div>
    </div>
  )
}

export default About