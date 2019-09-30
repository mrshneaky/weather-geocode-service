const request = require('request')

const geocode = (address, callback) =>{
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token=pk.eyJ1IjoibnVnZ2V0Z3RyIiwiYSI6ImNqeXI1ZHl2ZzA3azgzbXRrMzNycTRoMDQifQ.R-6_qyli6hGBQN3ECWzE_g&limit=1'

    request({url, json: true}, (error, { body}) => {
        //console.log(body)
        if (error) {
            callback('unable to connect to location services!', undefined)
        } else if (body.features.length === 0) {
            callback('unable to find location, try another search', undefined)
        } else {
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name

            })
        }
    })
}

module.exports = geocode
