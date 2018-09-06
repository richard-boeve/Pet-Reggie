import request from 'superagent'

export function getOwners() {
    return request.get('/api/v1/owners')
    .then (res => {
        const owners = res.body
        return owners
    })
    .catch(() => {
        throw Error('You need to implement an API route for /api/v1/owners')
    })  
}






// export function register (register, callback) {
//     request
//     .send(register)
//     .end((err, res) => {
//         callback(err)
//     })    
// }