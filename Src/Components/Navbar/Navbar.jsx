import React, { useRef, useState } from 'react'
import './Navbar.css';
import logo from '../../assets/KondaLOGO.png'
import AnchorLink from 'react-anchor-link-smooth-scroll';
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'

const Navbar = () => {

  const[menu,setMenu]=useState("home");
  const[navbar,setNavbar]=useState('false');
  const menuRef=useRef();

  function openMenu(){
    menuRef.current.style.right="0";
  }
  function closeMenu(){
    menuRef.current.style.right="-220px"
  }

  function changeBackground(){
    if(window.scrollY>=80){
      setNavbar(true);
    }else{
      setNavbar(false);
    }
  }

  window.addEventListener('scroll',changeBackground);

  return (
    <div className={navbar? 'navbar active':'navbar'}>
        <a href='#hero'><img src={logo} alt="" width='190' className='logo' /></a>
        <img src={menu_open} onClick={openMenu} alt="" className='nav-mob-open'/>
        <ul ref={menuRef} className='nav-menu'>
          <img src={menu_close} onClick={closeMenu} alt="" className='nav-mob-close' />
            <li><AnchorLink className='anchor-links' href="#hero"><p onClick={()=>setMenu("home")}>Home</p></AnchorLink>{menu==="home"?<hr style={{background:'#ab44b4',height:'4px',border:'none'}} />:<></>}</li>
            <li><AnchorLink className='anchor-links' offset={50} href="#about"><p onClick={()=>setMenu("about")}>About Me</p></AnchorLink>{menu==="about"?<hr style={{background:'#ab44b4',height:'4px',border:'none'}} />:<></>}</li>
            <li><AnchorLink className='anchor-links' offset={50} href="#services"><p onClick={()=>setMenu("services")}>Services</p></AnchorLink>{menu==="services"?<hr style={{background:'#ab44b4',height:'4px',border:'none'}} />:<></>}</li>
            <li><AnchorLink className='anchor-links' offset={50} href="#mywork"><p onClick={()=>setMenu("work")}>Portfolio</p></AnchorLink>{menu==="work"?<hr style={{background:'#ab44b4',height:'4px',border:'none'}} />:<></>}</li>        
            <li><AnchorLink className='anchor-links' offset={50} href="#contact"><p onClick={()=>setMenu("contact")}>Contact</p></AnchorLink>{menu==="contact"?<hr style={{background:'#ab44b4',height:'4px',border:'none'}} />:<></>}</li>
        </ul>
        <div className="nav-connect"><AnchorLink className='anchor-links' offset={50} href="#contact">Connect with me</AnchorLink></div>
      
    </div>
  )
}

export default Navbar
