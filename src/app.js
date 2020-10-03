import React from 'react'
import ReactDOM from 'react-dom'
import LoadingPage from './components/LoadingPage'
import AppRouter from './routers/AppRouter'
import 'normalize.css/normalize.css'
import './styles/styles.scss'

const jsx = (
    <AppRouter />
)

let hasRendered = false
const renderApp = () => {
    if (!hasRendered) {
        ReactDOM.render(jsx, document.getElementById('app'))
        hasRendered = true
    }
}


ReactDOM.render(<LoadingPage />, document.getElementById('app'))
renderApp()