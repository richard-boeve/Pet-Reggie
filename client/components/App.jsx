import React from 'react'
import {HashRouter as Router, Route} from'react-router-dom'
import Nav from './Nav'
import LandingPage from './LandingPage'
import Footer from './Footer'
import Register from './Register'
import ListOfOwners from './ListOfOwners'
import Update from './Update'
import Remove from './Remove'
import {getOwners as owners} from '../api.js'

export default class App extends React.Component {



    render () {
        return (
            <Router>
                <div className = 'app'>
                    <div className = 'nav'>
                        <Route path='/' component={Nav} />            
                    </div>
                    <div className = 'page'>
                        <Route exact path='/' component={LandingPage} />
                        <Route path='/register' component={Register} />
                        <Route path='/owners' component={ListOfOwners} />
                        <Route path='/update' component={Update} />
                        <Route path='/remove' component={Remove} />
                    </div>
                    <div className = 'footer'>
                        <Route path='/' component={Footer} />  
                    </div>
                </div>
            </Router>
                )
            }
}    

