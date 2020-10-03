import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import LanguageContext from '../context/Language-context'

const Footer = () => {

    const { languagePack } = useContext(LanguageContext)

    return (
        <div className="footer">
            <div className="content-container footer-container">
                <div className="footer-links">
                    <h2 className="footer-title">{languagePack.footer.socialTitle}</h2>
                    <a href="https://www.facebook.com/"><i className="fab fa-facebook-square"></i> - Facebook</a>
                    <a href="https://twitter.com/"><i className="fab fa-twitter-square"></i> - Twitter</a>
                    <a href="https://www.instagram.com/"><i className="fab fa-instagram-square"></i> - Instagram</a>
                </div>
                <div className="footer-links">
                    <h2 className="footer-title">{languagePack.footer.linksTitle}</h2>
                    <NavLink className="footerlink" to="/about">{languagePack.header.about}</NavLink>
                    <NavLink className="footerlink" to="/contact">{languagePack.header.contact}</NavLink>
                    <NavLink className="footerlink" to="/careers">{languagePack.header.careers}</NavLink>
                </div>
                <div className="footer-links">
                    <h2 className="footer-title">{languagePack.footer.contactsTitle}</h2>
                    <a href="tel:+4733300000"><i className="fas fa-phone-alt"></i> +47 333 00 000</a>
                    <a href="mailto:info@info.com"><i className="fas fa-envelope"></i> info@info.com</a>
                </div>
            </div>
            <p className="copyright">&copy; 2020</p>
        </div>
    )
}

export default Footer