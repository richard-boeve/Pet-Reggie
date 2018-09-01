import React from 'react'
import {HashRouter as Router, Route} from'react-router-dom'

import Nav from './Nav'
import LandingPage from './LandingPage'
import Footer from './Footer'
import Register from './Register'

const App = () => {
  return (
    <Router>
        <div className = 'app'>
            <div className = 'nav'>
                <Route path='/' component={Nav} />            
            </div>
            <div className = 'page'>
                <Route exact path='/' component={LandingPage} />
                <Route path='/register' component={Register} />
            
            
            </div>
            <div className = 'footer'>
                <Route path='/' component={Footer} />  
            </div>
        </div>
    </Router>
  )
}

export default App