# Weather Mini App


Weather Fetcher it's mini-app that uses the OpenWeatherMap REST API to find weather data and the appropriate temperatures for each city using Fetch and ES7 syntax Async/Await and the browser local storage management

## Installation

For the UI we need [Bootstrap V4](https://getbootstrap.com/docs/4.0/getting-started/introduction/) 
and [Bootstrapwatch V4](https://bootswatch.com/)

And Jquery used in one single line of code to close a bootstrap modal

```Javascript

$('#locModal').modal('hide');

```

## Usage

Just an example you need to use your proper Id's for the API

```Javascript
class Weather{
    constructor(city ,countryCode) {
        this.apiKey='********************************';
        this.city = city ;
        this.countryCode = countryCode ;
    }

    // The call for the api using the country code and the city name
    async getWeather(){
        const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.countryCode}&appid=${this.apiKey}`);

        const responseData = await response.json();

        return responseData;
    }

```

## Map fonctionality

For the map we can fetch the cords from the weather api to display also the city on a google map 

You need a proper key for the google map fonctionality 

```html
<script defer
    src="https://maps.googleapis.com/maps/api/js?key={YOUT_KEY}=initMap">
</script>
```

The google map script return a callback for a function called initMap() that we gonaa define in the app.js module to render the map on the UI 


## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
