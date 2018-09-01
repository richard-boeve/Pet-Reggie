import React from 'react'

export default class Register extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }

    this.onSubmit = this.onSubmit.bind(this) 
    this.updateDetails = this.updateDetails.bind(this)   
    }

    updateDetails(e) {
        console.log(e.target);
        console.log(e.target.name, e.target.value);
        this.setState({
            name: e.target.value
        })
    }    

    onSubmit(e) {
        e.preventDefault()
        console.log(this.state)
    }

    render () {
        return (
            <form onSubmit={this.onSubmit}>
            <input onChange={this.updateDetails} type="text" name="First Name" placeholder="First Name" />
            <input type="text" name="Last Name" placeholder="Last Name" />
            <input type="submit" />
        
        
        </form>

        )

    }

}