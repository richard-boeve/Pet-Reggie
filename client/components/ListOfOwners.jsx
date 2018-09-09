import React from 'react'
import {getOwners as owners} from '../api.js'

const ListOfOwners = () => {
    console.log(owners)
    return (
        <div>
            <h2>List of owners</h2>
            {owners.map((owner) => {
                return owner.first_name
            })}
        </div>
    )
}    

export default ListOfOwners