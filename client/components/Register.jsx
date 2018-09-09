import React from 'react'
import {registerOwner} from '../api.js'

export default class Register extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            firstName: '',
            lastName: '',
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

    this.onSubmit = this.onSubmit.bind(this) 
    this.updateDetails = this.updateDetails.bind(this)  
    this.refreshForm = this.refreshForm.bind(this)
        }

    updateDetails(e) {
        const key = e.target.name
        const value = e.target.value
        const obj = {[key]: value}
        this.setState(obj)
    }    

    onSubmit(e) {
        e.preventDefault()
        registerOwner(this.state) 
        this.props.history.push('/');
        //console.log(this.state)       
    }

    refreshForm(){
        this.setState({
        })
        this.render()
    }

    render () {
        return (
            <form onSubmit={this.onSubmit}>
                <label>First Name: <input onChange={this.updateDetails} type="text" name="firstName" placeholder="First Name" /></label><br /> 
                <label>Last Name: <input onChange={this.updateDetails} type="text" name="lastName" placeholder="Last Name" /></label><br /> 
                <label>Street:<input onChange={this.updateDetails} type="text" name="street" placeholder="Street" /></label><br />
                <label>Suburb:<input onChange={this.updateDetails} type="text" name="suburb" placeholder="Suburb" /></label><br />
                <label>City:<input onChange={this.updateDetails} type="text" name="city" placeholder="City" /></label><br />
                <label>Postcode:<input onChange={this.updateDetails} type="text" name="postcode" placeholder="Postcode" /></label><br />
                <label>Country:<input onChange={this.updateDetails} type="text" name="country" placeholder="Country" /></label><br />
                <label>Phone 1:<input onChange={this.updateDetails} type="text" name="phone1" placeholder="Phone 1" /></label><br />
                <label>Phone 2:<input onChange={this.updateDetails} type="text" name="phone2" placeholder="Phone 2" /></label><br />
                <label>Phone 3:<input onChange={this.updateDetails} type="text" name="phone3" placeholder="Phone 3" /></label><br />
                <label>Email 1:<input onChange={this.updateDetails} type="text" name="email1" placeholder="Email 1" /></label><br />
                <label>Email 2:<input onChange={this.updateDetails} type="text" name="email2" placeholder="Email 2" /></label><br />
                <label>Email 3:<input onChange={this.updateDetails} type="text" name="email3" placeholder="Email 3" /></label><br />
                <input type="submit" />
                <button onClick={this.refreshForm}>Refresh</button>
            </form>
        )
    }
}