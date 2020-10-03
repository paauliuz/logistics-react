import React, { useContext } from 'react'
import LanguageContext from '../context/Language-context'

const LanguageMenu = () => {
    const { appLanguage, setLanguage } = useContext(LanguageContext)

    const changeLanguage = (e) => {
        setLanguage(e.target.value)
    }

    return (
        <div className="box">
            <select className="language-dropdown" value={appLanguage} onChange={changeLanguage} >
                <option value="lt">LT | Lithuanian</option>
                <option value="en">EN | English</option>
            </select>
        </div>

    )
}

export default LanguageMenu