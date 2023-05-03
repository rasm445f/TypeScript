const {Navigator} = require("node-navigator");
const navigator = new Navigator();
const superagent = require('superagent')

// CLASS EXERCISE 3
function getLocation() {
    return new Promise(function (resolve, reject) {
        try {
            navigator.geolocation.getCurrentPosition(function (position) {
                resolve(position);
            });
        } catch (e) {
            reject(new Error(e));
        }
    });
}

const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

function getWeath(coords, callback) {
    const apiKey = "bbbe8275b4973cb6512defef85b52645";
    const url = 'http://api.openweathermap.org/data/2.5/weather?lat=' + coords.latitude + '&lon=' + coords.longitude + '&apiKey=' + apiKey
    const req = new XMLHttpRequest();
    req.open('GET', url);
    req.onload = function () {
        if (req.status === 200) {
            callback(JSON.parse(req.responseText));
        } else {
            callback(new Error(req.statusText));
        }
    };
    req.send();
}

const getWeather = async(coords, callback) => {
    try{
        const res1 = await superagent.get(
        'http://api.openweathermap.org/data/2.5/weather?lat=' + coords.latitude + '&lon=' + coords.longitude + '&apiKey=' + apiKey)
        const all = await Promise.all([res1])
        const images = all.map(el => el.body.message)
        console.log(images)

    }catch (e){
        console.log(e)
    }
}

getLocation(function (coords) {
    getWeather(coords, function (weather) {
        console.log(weather);
    });
});

