import React from 'react'
import './Hero.css'
import profile_img from '../../assets/sofian.jpg'
const Hero = () => {
    return (
        <div className='hero'>
            <img src={profile_img} alt='' />
            <div className="hero-content">
                <p> <span className="hi">Hi i'm</span></p>
                <h1>Sofian Ettahiri</h1>
                <p>I'm a <span className='job'>software developer</span> with a passion for building impactful applications</p>
                <p>Le problème persistant de l'image en ovale est probablement dû à un conflit entre les dimensions de l'image source et les styles CSS appliqués. Voici comment résoudre ce problème pour garantir que l'image soit affichée en cercle parfait :</p>

                <div className="hero-action">
                    <div className="hero-mywork">View my work</div>
                </div>

            </div>

        </div>
    )
}

export default Hero