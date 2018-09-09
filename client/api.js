import request from 'superagent'

export function getOwners() {
    request
    .get('/api/v1/owners')
    .then (res => {
        const owners = res.body
        return owners
    })
    .catch(() => {
        throw Error('You need to implement an API route for /api/v1/owners')
    })  
}

export function registerOwner (owner, callback) {
    console.log(owner)
    request
    .post('api/v1/owners')
    .send(owner)
    .end((err, res) => {
        callback(err,res)
    })    
}