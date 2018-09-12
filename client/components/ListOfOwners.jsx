import React from 'react'
import {getOwners} from '../api.js'


export default class ListOfOwners extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            owners: [],
            errorMessage: ''
        }
        this.fetchOwners = this.fetchOwners.bind(this)
    }
    
    componentDidMount() {
        this.fetchOwners()
    }

    fetchOwners () {
        getOwners()
        .then(owners => {
            this.setState({owners: owners})
        })
        .catch(err => {
            this.setState({errorMessage: err.message})
       })
    }

    render() {
        console.log('render', this.state.owners.length)
        console.log()
        
      return (
        <div>
            {
                this.state.owners.length > 0 &&this.state.owners.map((owner) => {
                    return (
                    <div>
                        <p>First Name: {owner.first_name}</p>
                        <p>Last Name: {owner.last_name}</p>
                        <p>Street: {owner.street}</p>
                        <p>Suburb: {owner.suburb}</p>
                        <p>City: {owner.city}</p>
                        <p>Postcode: {owner.postcode}</p>
                        <p>Country: {owner.country}</p>
                        <p>Phone 1: {owner.phone1}</p>
                        <p>Phone 2: {owner.phone2}</p>
                        <p>Phone 3: {owner.phone3}</p>
                        <p>Email 1: {owner.email1}</p>
                        <p>Email 2: {owner.email2}</p>
                        <p>Email 3: {owner.email3}</p>
                        <br />
                        <hr />
                    </div>
                    )    
        })
        }
        </div>
    )}
}
