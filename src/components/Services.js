import React, { useContext } from 'react'
import languageContext from '../context/Language-context'
import { NavLink } from 'react-router-dom'

const Services = () => {

    const { languagePack } = useContext(languageContext)

    return (
        <div className="content-container">
            <div className="services-element">

                <div className="service-info">
                    <img className="service-image" src="/img/trucks.jpg" />
                    <h2 className="service-title">{languagePack.serviceInfo.firstTitle}</h2>
                    <p className="service-text">{languagePack.serviceInfo.firstText}</p>
                    <div className="service-button">
                        <NavLink className="button button-small mobile" to="/contact" ><i className="fas fa-angle-right"></i> {languagePack.serviceInfo.buttonText}</NavLink>
                    </div>
                </div>

                <div className="service-info">
                    <img className="service-image" src="/img/loading.jpg" />
                    <h2 className="service-title">{languagePack.serviceInfo.secondTitle}</h2>
                    <p className="service-text">{languagePack.serviceInfo.secondText}</p>
                    <div className="service-button mobile">
                        <NavLink className="button button-small" to="/contact" ><i className="fas fa-angle-right"></i> {languagePack.serviceInfo.buttonText}</NavLink>
                    </div>
                </div>

                <div className="service-info">
                    <img className="service-image" src="/img/storage.jpg" />
                    <h2 className="service-title">{languagePack.serviceInfo.thirdTitle}</h2>
                    <p className="service-text">{languagePack.serviceInfo.thirdText}</p>
                    <div className="service-button mobile">
                        <NavLink className="button button-small" to="/contact" ><i className="fas fa-angle-right"></i> {languagePack.serviceInfo.buttonText}</NavLink>
                    </div>
                </div>
            </div>
            <div className="one ">
                <NavLink className="button button-small desktop" to="/contact" ><i className="fas fa-angle-right"></i> {languagePack.serviceInfo.buttonText}</NavLink>
            </div>

        </div>
    )
}

export default Services