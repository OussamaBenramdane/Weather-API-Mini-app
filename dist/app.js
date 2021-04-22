//Iinit LC
const storage = new Storage();
// Get stored location data 
const weatherLocation = storage.getLocationData();
// Init weather object
const weather = new Weather(weatherLocation.city,weatherLocation.country);
//Init weather Ui
const ui = new UI () ;
// Get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather);
// Change location event
document.getElementById('w-change-btn').addEventListener('click',(e)=>{

    const city = document.getElementById('city').value;
    const country = document.getElementById('country').value;
    weather.changeLocation(city , country);
    //Set location in LS
    storage.setLocationData(city,country);

    //Get and display weather
    getWeather();
    //Close modal the only JQuery line on the app
    $('#locModal').modal('hide');
});

function getWeather(){ 
    weather.getWeather()
    .then(results => {
        ui.paint(results);
    })
    .catch(err=> console.log(err));
    initMap ()
}

// init Map
function initMap (){

    //Get coardinations
    weather.getWeather().then(results => {
        //map options
        const options = {
            zoom:6 ,
            center:{lat:results.coord.lat , lng:results.coord.lon}
        }
        //new map
        const map = new google.maps.Map(document.getElementById('map-container') , options);
        // The marker, positioned at Uluru
        const marker = new google.maps.Marker({
        position: options.center,
        map: map,
        icon:"https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png"
        });

        const infoWindow = new google.maps.InfoWindow({
            content :`<h1 class="text-dark">${results.name}</h1> <h3 class="text-dark"> Feels like : ${results.main.temp} F</h3>`
        });

        marker.addListener('click', function(){
            infoWindow.open(map,marker);
        })

    });
 

    
}

