
// Weather API:
// https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}

// MY KEY: d6e0ea5fdd70eb0c05228e0f41cc3c81

var WeatherAPIKey = "d6e0ea5fdd70eb0c05228e0f41cc3c81";
var url = `api.openweathermap.org/data/2.5/weather?q=${city}&appid=${WeatherAPIKey}`;
var queryURL = "http://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=" + WeatherAPIKey;
//var cityEl = document.getElementById("search-input");
var searchFormEl = document.getElementById('#search-form');
var nameEl = document.getElementById(".city-name");
var todayweatherEl = document.getElementById(".todays-date");
var todayweatherEl = document.getElementById(".todays-weather");
var currentTempEl = document.getElementById("#temperature");
var currentHumidityEl = document.getElementById("#humidity");
var currentWindEl = document.getElementById("#wind");


// when user enters their city location in #search-input overwritng the 'placeholder text'
// then the city location appears below (or to the right)
// AND
// the main .CARD body - city location appears in .todays-weather following by the .todays-date
//below, the CARD SUBTITLE includes the city's .temperature .wind .humidty


function getWeather(cityName) {
    //Current weather get request from open weather api
    var queryURL = "http://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=" + WeatherAPIKey;
    axios.get(queryURL)
        .then(function (response) {

            todayweatherEl.classList.remove("d-none");

             // Parse response to display current weather
             var currentDate = new Date(response.data.dt * 1000);
             var day = currentDate.getDate();
             var month = currentDate.getMonth() + 1;
             var year = currentDate.getFullYear();
             nameEl.innerHTML = response.data.name + " (" + month + "/" + day + "/" + year + ") ";
             currentTempEl.innerHTML = "Temperature: " + k2f(response.data.main.temp) + " &#176F";
             currentHumidityEl.innerHTML = "Humidity: " + response.data.main.humidity + "%";
        });
    }

    // event listener should go here to bring elements to Main Card? OR should the above be a FETCH request?

searchFormEl.addEventListener('submit', handleSearchFormSubmit);

getWeather();
    // below the MAIN card, each of the CARDs includes the city's .date .temperature .wind .humidty