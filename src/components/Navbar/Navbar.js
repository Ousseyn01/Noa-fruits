import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from "../../assets/Logo_noa.png"
import { Link } from 'react-scroll'
import menu from "../../assets/menu-icon.png"
const Navbar = () => {

  const [sticky, setSticky] = useState(false)

  useEffect(()=>{
    window.addEventListener('scroll', ()=>{
          window.scrollY > 50 ? setSticky(true) : setSticky(false);
    })
  },[]);

  const [mobileMenu, setMobileMenu] = useState(false);
  const toogleMenu = () =>{
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true)
  }

  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
        <img src={logo} alt="" className='logo'/>
        <ul className={mobileMenu? '': 'hide-mobile-menu'}>
          <li> <Link to='hero' smooth={true} offset={0} duration={500} >Acceuil</Link></li>
          <li><Link to='program' smooth={true} offset={-260} duration={500} >Services</Link></li>
          <li><Link to='about' smooth={true} offset={-150} duration={500} >A propos</Link></li>
          <li><Link to='campus' smooth={true} offset={-260} duration={500} >Ventes</Link></li>
          <li><Link to='testimonials' smooth={true} offset={-260} duration={500} >Témoignages</Link></li>
          <li><button className='btn'> <Link to='contact' smooth={true} offset={-260} duration={500} >Contactez-nous</Link></button></li>
        </ul>
        <img src={menu} alt="" className='menu-icon' onClick={toogleMenu}/>
    </nav>
  )
}

export default Navbar