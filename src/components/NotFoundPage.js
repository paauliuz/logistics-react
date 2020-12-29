import React from 'react'
import Header from './Header'
import Footer from './Footer'

const NotFoundPage = () => (
    <div className="page-wrapper">
        <Header />
        <div className='content-container not-found-container'>
            <h1 classname="not-found-title">Not Found 404</h1>
        </div>
        <Footer />
    </div>
)

export default NotFoundPage