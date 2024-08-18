import React from 'react'
import "./Program.css"
import program_1 from "../../assets/noa-program3.jpg"
import program_2 from "../../assets/noa-program2.jpg"
import program_3 from "../../assets/noa-program1.jpg"
import program_icon_1 from "../../assets/program-icon-1.png"
import program_icon_2 from "../../assets/program-icon-2.png"
import program_icon_3 from "../../assets/program-icon-3.png"

const Program = () => {
  return (
    <div className='programs'>
        <div className="program">
            <img src={program_1} alt="" />
            <div className="caption">
                <img src={program_icon_1} alt="" />
                <p>Look, c'est frais</p>
            </div>
        </div>
        <div className="program">
            <img src={program_2} alt="" />
            <div className="caption">
                <img src={program_icon_2} alt="" />
                <p>Délicieux</p>
            </div>
        </div>
        <div className="program">
            <img src={program_3} alt="" />
            <div className="caption">
                <img src={program_icon_3} alt="" />
                <p>Extraordinaire</p>
            </div>
        </div>
    </div>
  )
}

export default Program