import React from 'react'
import {HashRouter as Router, Route} from'react-router-dom'
import Nav from './Nav'
import LandingPage from './LandingPage'
import Footer from './Footer'
import Register from './Register'
import ListOfOwners from './ListOfOwners'
import {getOwners as owners} from '../api.js'

export default class App extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            first_name: '',
            last_name: '',
            street: '',
            suburb: '',
            city: '',
            postcode: '',
            country: '',
            phone1: '',
            phone2: '',
            phone3: '',
            email1: '',
            email2: '',
            email3: '',
        }

this.fetchOwners = this.fetchOwners.bind(this)

    }

fetchOwners() {
    console.log(this.state)
    return owners ()
    .then (this.setState(owners))
}


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
                        <Route path='/owners' component={ListOfOwners} fetchOwners={this.fetchOwners} />
                    </div>
                    <div className = 'footer'>
                        <Route path='/' component={Footer} />  
                    </div>
                </div>
            </Router>
                )
            }
}    

