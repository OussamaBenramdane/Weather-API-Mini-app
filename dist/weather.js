class Weather{
    constructor(city ,countryCode) {
        this.apiKey='2c9af973e0c5d16d6ef837da372a598b';
        this.city = city ;
        this.countryCode = countryCode ;
    }

    // Fetch weather from API
    async getWeather(){
        const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.countryCode}&appid=${this.apiKey}`);

        const responseData = await response.json();

        return responseData;
    }
    // Change weather location 
    changeLocation(city , countryCode) {
        this.city = city ;
        this.countryCode = countryCode ;
    }

}