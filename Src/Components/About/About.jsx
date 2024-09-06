import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import progile_img from '../../assets/Screenshot 2024-08-28 151202.png'

const About = () => {
  return (
    <div id='about' className='about'>
        <div className="about-title">
            <h1>About Me</h1>
            <img src={theme_pattern} alt="" width='140' />
        </div>
        <div className="about-section">
            <div className="about-left">
                <img src={progile_img} alt="" width='350' height='460' style={{borderRadius:'15px'}}/>
            </div>
            <div className='about-right'>
                <div className="about-para">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic dolorem, ea assumenda pariatur consequuntur, nobis, neque architecto deserunt reprehenderit ipsam expedita nisi debitis molestiae laboriosam repellendus repellat error optio atque.</p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat in magnam sint soluta, blanditiis sed illum nisi reprehenderit rem ad laborum ea quae dolorem, fuga, eligendi omnis excepturi quam veniam.</p>
                </div>
                <div className='about-skills'>
                    <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"80%"}} /></div>
                    <div className="about-skill"><p>React JS</p><hr style={{width:"70%"}} /></div>
                    <div className="about-skill"><p>JavaScript</p><hr style={{width:"80%"}} /></div>
                    <div className="about-skill"><p>JQuery</p><hr style={{width:"70%"}} /></div>
                    <div className="about-skill"><p>AWS</p><hr style={{width:"50%"}} /></div>
                    <div className="about-skill"><p>C# Language</p><hr style={{width:"70%"}} /></div>
                </div>
            </div>
        </div>
        <div className="about-achievements">
            <div className='about-achievement'>
                <h1>6+</h1>
                <p>YEARS OF EXPERIENCE</p>
            </div>
            <hr />
            <div className='about-achievement'>
                <h1>15+</h1>
                <p>PROJECTS COMPLETED</p>
            </div>
            <hr />
            <div className='about-achievement'>
                <h1>10+</h1>
                <p>HAPPY CLIENTS</p>
            </div>
        </div>
      
    </div>
  )
}

export default About
