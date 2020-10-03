import React, { useContext } from 'react'
import LanguageContext from '../context/Language-context'

const AboutUs = () => {

    const { languagePack } = useContext(LanguageContext)

    return (
        <div>
            <div className="page-title">
                <div className="content-container">
                    <h1 className="page-title__title">{languagePack.aboutUs.title}</h1>
                    <h3 className="page-title__subtitle">{languagePack.aboutUs.subtitle}</h3>
                </div>
            </div>
            <div className="content-container about-us-content">
                <div className="about-us-text-content">
                    <p className="about-us-content__text">{languagePack.aboutUs.info1}</p>
                    <p className="about-us-content__text">{languagePack.aboutUs.info2}</p>
                    <p className="about-us-content__text">{languagePack.aboutUs.info3}</p>
                    <p className="about-us-content__text">{languagePack.aboutUs.info4}</p>
                </div>
                <img className="about-us-content__image desktop" src="/img/aboutus.jpg" />
                <img className="about-us-content__image mobile" src="/img/aboutus_mobile.jpg" />
            </div>
        </div>
    )
}


export default AboutUs