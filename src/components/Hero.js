import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import LanguageContext from '../context/Language-context'

const Hero = () => {
    const { languagePack } = useContext(LanguageContext)
    return (
        <div className="hero">
            <div className="content-container">
                <div className="hero-info">
                    <h1 className="hero-title">{languagePack.hero.title}</h1>
                    <p className="hero-subtitle">{languagePack.hero.subtitle}</p>
                    <NavLink className="button" to="/contact" ><i className="fas fa-angle-right"></i> {languagePack.hero.buttonText}</NavLink>
                </div>
            </div>
        </div>
    )
}

export default Hero