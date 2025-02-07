import React, { useRef } from 'react'
import "./Testimonial.css"
import next_icon from "../../assets/next-icon.png"
import back_con from "../../assets/back-icon.png"
import user_1 from "../../assets/user-1.png"
import user_2 from "../../assets/user-2.png"
import user_3 from "../../assets/user-3.png"
import user_4 from "../../assets/user-4.png"

const Testimonial = () => {

    const slider = useRef();
    let tx = 0;

    const slideForward = () =>{
        if(tx > -50){
            tx -= 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    } 
    const slideBackward = () =>{
        if(tx < 0){
            tx += 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    }

  return (
    <div className='testimonials'>
        <img src={next_icon} alt="" className='next-btn' onClick={slideForward}/>
        <img src={back_con} alt="" className='back-btn' onClick={slideBackward}/>
        <div className="slider">
            <ul ref={slider}>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_1} alt="" />
                            <div>
                                <h3>Willam Jackson</h3>
                                <span>Edusity, USA</span>
                            </div>
                        </div>
                        <p>Coosing to pursue my degree at Edusity was one of the best decisions
                            I've ever made. The supportive community, state-of-the-art facilities, and commitent
                            to academic excellence have truly exceeded my expectations.
                        </p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_2} alt="" />
                            <div>
                                <h3>Marc boer</h3>
                                <span>Edusity, USA</span>
                            </div>
                        </div>
                        <p>Coosing to pursue my degree at Edusity was one of the best decisions
                            I've ever made. The supportive community, state-of-the-art facilities, and commitent
                            to academic excellence have truly exceeded my expectations.
                        </p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_3} alt="" />
                            <div>
                                <h3>Willia Smith</h3>
                                <span>Edusity, USA</span>
                            </div>
                        </div>
                        <p>Coosing to pursue my degree at Edusity was one of the best decisions
                            I've ever made. The supportive community, state-of-the-art facilities, and commitent
                            to academic excellence have truly exceeded my expectations.
                        </p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_4} alt="" />
                            <div>
                                <h3>Jordan Bran</h3>
                                <span>Edusity, USA</span>
                            </div>
                        </div>
                        <p>Coosing to pursue my degree at Edusity was one of the best decisions
                            I've ever made. The supportive community, state-of-the-art facilities, and commitent
                            to academic excellence have truly exceeded my expectations.
                        </p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Testimonial