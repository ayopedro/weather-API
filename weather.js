
class Weather{
    constructor(city){
        this.apiKey = **APIKEY**;
        this.city = city;
        
    }

    //fetch data from API
    async getWeather(){
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.apiKey}&units=metric`);
        const responseData = await response.json();

        return responseData;
    }
    //change city
    changeLocation(city){
        this.city = city;
        
    }
}