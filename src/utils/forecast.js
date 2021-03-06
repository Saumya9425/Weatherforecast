const request = require("request")

const forecast=(latitude, longitude, callback) =>{
    const url = 'http://api.weatherstack.com/current?access_key=3534a4f888605991fb027eab2dad71c7&query=' + latitude + ',' + longitude + '&units=f'
    request({ url: url, json: true }, (error, { body }) => {
        if (error) {
            callback('unable to connect to  weather service', undefined)
        } else if (body.error) {
            callback('unable to find location', undefined)
        } else {
            callback(undefined, 'The current time is ' + body.current.observation_time + ' and it is ' + body.current.temperature + 'F out' + ' and there is ' + body.current.precip + '% chance of rain.')
        }
    })
}

module.exports = forecast

