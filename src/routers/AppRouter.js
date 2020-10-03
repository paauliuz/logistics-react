import React, { useContext, useState } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import LanguageContext from '../context/Language-context'
import languageSelector from '../selectors/languageSelector'
import NotFoundPage from '../components/NotFoundPage'
import HomePage from '../pages/HomePage'
import AboutPage from '../pages/AboutPage'
import CareersPage from '../pages/CareersPage'
import ContactPage from '../pages/ContactPage'

// import AddExpensePage from '../components/AddExpensePage'
// import ExpenseDashboardPage from '../components/ExpenseDashboardPage'
// import LoginComponent from '../components/LoginComponent'
// import PrivateRoute from './PrivateRoute'
// import PublicRoute from './PublicRoute'

// export const history = createHistory()

const HelloPage = () => {

    const { languagePack } = useContext(LanguageContext)
    return (
        <div>
            Router
            <p>{languagePack.header.home} from hello page</p>
        </div>
    )

}


const AppRouter = () => {
    const [appLanguage, setLanguage] = useState('en')
    const languagePack = languageSelector(appLanguage)

    return (
        <LanguageContext.Provider value={{ appLanguage, languagePack, setLanguage }}>
            <BrowserRouter>
                <div>

                    <Switch>
                        <Route path="/" component={HomePage} exact={true} />
                        <Route path="/about" component={AboutPage} />
                        <Route path="/careers" component={CareersPage} />
                        <Route path="/contact" component={ContactPage} />
                        <Route component={NotFoundPage} />
                    </Switch>

                </div>
            </BrowserRouter>
        </LanguageContext.Provider>
    )

}

export default AppRouter