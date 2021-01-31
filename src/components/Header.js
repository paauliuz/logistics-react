import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import LanguageMenu from './LanguageMenu'
import LanguageContext from '../context/Language-context'


const Header = () => {

    const { languagePack } = useContext(LanguageContext)
    return (
        <header>
            <div className="white-header">
                <div className="content-container ">
                    <div className="white-header-info">
                        <div className="logo-container">
                            <NavLink to="/"><img className="logo" alt=" " src="/img/truck.svg" /></NavLink>
                        </div>
                        <div className="info-container">
                            <div className="header-info">
                                <div className="header-info-element">
                                    <p className="header-info-element__primary-text"><i className="fas fa-phone-alt"></i> {languagePack.header.callUs}</p>
                                    <p className="header-info-element__secondary-text">+47 333 00 000</p>
                                </div>
                                <div className="header-info-element">
                                    <p className="header-info-element__primary-text"><i className="fas fa-business-time"></i> {languagePack.header.openingTime}</p>
                                    <p className="header-info-element__secondary-text">08:00 - 18:00</p>
                                </div>
                                <div className="header-info-element">
                                    <p className="header-info-element__primary-text"><i className="fas fa-envelope"></i> {languagePack.header.emailUs}</p>
                                    <p className="header-info-element__secondary-text">info@info.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="blue-header">
                <div className="content-container">
                    <div className="blue-header-info">
                        <div className="header-menu">
                            <NavLink className="navlink main-page" to="/" exact={true} activeClassName="is-active">{languagePack.header.home}</NavLink>
                            <NavLink className="navlink" to="/about" activeClassName="is-active">{languagePack.header.about}</NavLink>
                            <NavLink className="navlink" to="/careers" activeClassName="is-active">{languagePack.header.careers}</NavLink>
                            <NavLink className="navlink" to="/contact" activeClassName="is-active">{languagePack.header.contact}</NavLink>
                        </div>
                        <LanguageMenu />
                    </div>
                </div>
            </div>
        </header>

    )
}


export default Header 