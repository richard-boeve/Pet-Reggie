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
        return getOwners()
        .then(owners => {
            this.setState({owners: owners})
        })
        .catch(err => {
            this.setState({errorMessage: err.message})
       })
    }

    render() {
      return (
        <div>
          {this.state.owners.map((owner) => {
            return
            <div>
                <p>{owner.first_name}</p>
                <p>{owner.last_name}</p>
                <p>{owner.street}</p>
                <p>{owner.suburb}</p>
                <p>{owner.city}</p>
                <p>{owner.postcode}</p>
                <p>{owner.country}</p>
                <p>{owner.phone1}</p>
                <p>{owner.phone2}</p>
                <p>{owner.phone3}</p>
                <p>{owner.email1}</p>
                <p>{owner.email2}</p>
                <p>{owner.email3}</p>
            </div>    
        })}
        </div>
    )}
}
