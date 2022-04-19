

//Initialize Local Storage
const ls = new Storage();

//get stored location data
const weatherLocation = ls.getLocationData();

//initialize weather class
const weather = new Weather(weatherLocation.city);

//initialize UI update
const ui = new UI();

//Get Weather on load
document.addEventListener('DOMContentLoaded', getWeather);

//change location event
document.getElementById('w-change-btn').addEventListener('click', (e)=>{
    const city = document.getElementById('city').value;
    
    //change location
    weather.changeLocation(city);
    //set location in local storage
    ls.setLocationData(city);

    //Get Weather
    getWeather();
    
})



function getWeather(){
    weather.getWeather()
    .then(results => {
        ui.decorate(results);
    })
    .catch(err => console.log(err));
}
