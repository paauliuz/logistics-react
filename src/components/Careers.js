import React, { useContext } from 'react'
import languageContext from '../context/Language-context'
import { NavLink } from 'react-router-dom'

const Careers = () => {

    const { languagePack } = useContext(languageContext)

    return (
        <div className="component-wrapper">
            <div className="page-title">
                <div className="content-container">
                    <h1 className="page-title__title">{languagePack.careers.title}</h1>
                    <h3 className="page-title__subtitle">{languagePack.careers.subtitle}!</h3>
                </div>
            </div>
            <div className="content-container careers-container">
                <div className="careers-container__info">
                    <i className="fas fa-money-bill-wave fa-3x primary"></i>
                    <p><i className="fas fa-check secondary"></i> {languagePack.careers.firstContainer[0]}</p>
                    <p><i className="fas fa-check secondary"></i> {languagePack.careers.firstContainer[1]}</p>
                    <p><i className="fas fa-check secondary"></i> {languagePack.careers.firstContainer[2]}</p>
                </div>
                <div className="careers-container__info">
                    <i className="fas fa-users fa-3x primary"></i>
                    <p><i className="fas fa-check secondary"></i> {languagePack.careers.secondContainer[0]}</p>
                    <p><i className="fas fa-check secondary"></i> {languagePack.careers.secondContainer[1]}</p>
                    <p><i className="fas fa-check secondary"></i> {languagePack.careers.secondContainer[2]}</p>
                </div>
                <div className="careers-container__info">
                    <i className="fas fa-clock fa-3x primary"></i>
                    <p><i className="fas fa-check secondary"></i> {languagePack.careers.thirdContainer[0]}</p>
                    <p><i className="fas fa-check secondary"></i> {languagePack.careers.thirdContainer[1]}</p>
                    <p><i className="fas fa-check secondary"></i> {languagePack.careers.thirdContainer[2]}</p>
                </div>
            </div>
            <div className="message-container">
                <div className="content-container message-content-container">
                    <h1>{languagePack.careers.messageTitle}</h1>
                    <h3>{languagePack.careers.messageSubtitle}</h3>
                    <div className="button-container">
                        <NavLink className="button button-small" to="/contact" ><i className="fas fa-angle-right"></i> {languagePack.careers.buttonText}</NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Careers