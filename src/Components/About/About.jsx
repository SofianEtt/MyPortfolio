import React from 'react'
import './About.css'
import profile_img from '../../assets/sofian.jpg'

const About = () => {
  return (
    <div className='about'>
      <div className="about-title">
        <h1>About me</h1>
      </div>
      <div className="about-section">
        <div className="about-left">
            <img src={profile_img} alt=''></img>
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>Passionné par le développement web et toujours en quête de nouveaux défis, je mets mes compétences au service de projets créatifs et techniques. Curieux, rigoureux et attentif aux détails, j’aime concevoir des interfaces intuitives et performantes, tout en explorant les dernières technologies du web.</p>
            <p>Au fil de mes expériences, j’ai eu l’occasion de travailler sur des projets variés, allant du site vitrine au webapp plus complexe, en m’impliquant aussi bien sur le front-end que sur le back-end. J’accorde une grande importance à l’expérience utilisateur, à la qualité du code et à la collaboration.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
