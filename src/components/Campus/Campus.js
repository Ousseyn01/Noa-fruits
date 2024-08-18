import React from 'react'
import "./Campus.css"
import gallery1 from "../../assets/noa1.jpg"
import gallery2 from "../../assets/noa2.jpg"
import gallery3 from "../../assets/noa3.jpg"
import gallery4 from "../../assets/noa4.jpg"
import white_arrow from "../../assets/white-arrow.png"

const Campus = () => {
  return (
    <div className='campus'>
        <div className="gallery">
            <img src={gallery1} alt="" />
            <img src={gallery2} alt="" />
            <img src={gallery3} alt="" />
            <img src={gallery4} alt="" />
        </div>
        <button className='btn dark-btn'>Voir plus ici <img src={white_arrow} alt="" /></button>
    </div>
  )
}

export default Campus