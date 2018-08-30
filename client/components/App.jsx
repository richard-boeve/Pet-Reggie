import React from 'react'
import {HashRouter as Router, Route} from'react-router-dom'

import Nav from './Nav'
import LandingPage from './LandingPage'
import Footer from './Footer'
import NewPet from './NewPet'

const App = () => {
  return (
    <Router>
        <div className = 'app'>
            <div className = 'nav'>
                <Route path='/' component={Nav} />            
            </div>
            <div className = 'page'>
                <Route exact path='/' component={LandingPage} />
                <Route path='/new' component={NewPet} />
            
            
            </div>
            <div className = 'footer'>
                <Route path='/' component={Footer} />  
            </div>
        </div>
    </Router>
  )
}

export default App