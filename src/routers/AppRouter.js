import React, { useState } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import LanguageContext from '../context/Language-context'
import languageSelector from '../selectors/languageSelector'
import NotFoundPage from '../components/NotFoundPage'
import HomePage from '../pages/HomePage'
import AboutPage from '../pages/AboutPage'
import CareersPage from '../pages/CareersPage'
import ContactPage from '../pages/ContactPage'

const AppRouter = () => {
    const [appLanguage, setLanguage] = useState('en')
    const languagePack = languageSelector(appLanguage)

    return (
        <LanguageContext.Provider value={{ appLanguage, languagePack, setLanguage }}>
            <BrowserRouter>
                <React.Fragment>
                    <Switch>
                        <Route path="/" component={HomePage} exact={true} />
                        <Route path="/about" component={AboutPage} />
                        <Route path="/careers" component={CareersPage} />
                        <Route path="/contact" component={ContactPage} />
                        <Route component={NotFoundPage} />
                    </Switch>
                </React.Fragment>
            </BrowserRouter>
        </LanguageContext.Provider>
    )

}

export default AppRouter