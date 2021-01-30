class UI {
    constructor(){
        this.location = document.getElementById('w-location');
        this.desc = document.getElementById('w-desc');
        this.string = document.getElementById('w-string');
        this.details = document.getElementById('w-details');
        this.icon = document.getElementById('w-icon');
        this.humidity = document.getElementById('w-humidity');
        this.minTemp = document.getElementById('w-feels-like');
        this.maxTemp = document.getElementById('w-dewpoint');
        this.wind = document.getElementById('w-wind');
    }

    paint(weather){
        this.location.textContent = weather.name;
        this.desc.textContent = weather.weather[0].main;
        this.string.textContent = weather.main.temp;
        this.icon.setAttribute('src',`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`);
        this.humidity.textContent = `Relative Humidity : ${weather.main.humidity}`;
        this.minTemp.textContent = `Max temperature : ${weather.main.temp_min} F`;
        this.maxTemp.textContent = `Min temperature : ${weather.main.temp_max} F`;
        this.wind.textContent = `Wind Speed : ${weather.wind.speed}`;
    }
}