import React, { useContext } from 'react'
import languageContext from '../context/Language-context'
import { NavLink } from 'react-router-dom'

const ContactUs = () => {

    const { languagePack } = useContext(languageContext)

    return (
        <div>
            <div className="page-title">
                <div className="content-container">
                    <h1 className="page-title__title">{languagePack.contact.title}</h1>
                    <h3 className="page-title__subtitle">{languagePack.contact.subtitle}!</h3>
                </div>
            </div>
            <div className="content-container contacts-container">
                <div className="widgets-container">
                    <div className="widget">
                        <h1>{languagePack.contact.widgetTitle[0]}</h1>
                        <p>Best company Ltd.</p>
                        <p>123 Forest Street</p>
                        <p>LT-12345 Lithuania</p>
                        <p>+47 333 00 000</p>
                        <a href="mailto:info@info.com"><i className="fas fa-envelope"></i> info@info.com</a>
                    </div>
                    <div className="widget">
                        <h1>{languagePack.contact.widgetTitle[1]}</h1>
                        <div className="time-container">
                            <div className="days">
                                <p>{languagePack.contact.days[0]}</p>
                                <p>{languagePack.contact.days[1]}</p>
                                <p>{languagePack.contact.days[2]}</p>
                                <p>{languagePack.contact.days[3]}</p>
                                <p>{languagePack.contact.days[4]}</p>
                                <p>{languagePack.contact.days[5]}</p>
                                <p>{languagePack.contact.days[6]}</p>
                            </div>
                            <div className="time">
                                <p>8:00 - 18:00</p>
                                <p>8:00 - 18:00</p>
                                <p>8:00 - 18:00</p>
                                <p>8:00 - 18:00</p>
                                <p>8:00 - 18:00</p>
                                <p>8:00 - 18:00</p>
                                <p>{languagePack.contact.closedStatus}</p>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="form-container">
                    <h1>{languagePack.contact.formTitle}</h1>
                    <p>{languagePack.contact.formSubtitle[0]}</p>
                    <p>{languagePack.contact.formSubtitle[1]}</p>
                    <form>
                        <div className="box-2">
                            <input type="text" placeholder={languagePack.contact.name}></input>
                            <input type="text" placeholder={languagePack.contact.surname}></input>
                        </div>
                        <div className="box-2">
                            <input type="email" placeholder={languagePack.contact.email}></input>
                            <input type="tel" placeholder={languagePack.contact.phone}></input>
                        </div>
                        <div className="box-1">
                            <input type="text" placeholder={languagePack.contact.subject}></input>
                            <textarea placeholder={languagePack.contact.text}></textarea>
                            <div>
                                <button className="button-small">{languagePack.contact.buttonText}</button>
                            </div>

                        </div>


                    </form>
                </div>
            </div>

        </div>
    )
}

export default ContactUs