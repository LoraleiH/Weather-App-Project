function formatDate(date) {

let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let day = days[date.getDay()];

 let hour = date.getHours();
if (hour < 10) {
   hour = `0${hour}`;
}

let minutes = date.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}

let time = `${hour}:${minutes}`;
let dateTime = `${day} ${time}`;
return `${dateTime}`;

}

function search(city) {
let cityName = city;
    let apiKey = "b2d81bf38bb41052988aedac8aa89c4f";
    let apiRoot = "https://api.openweathermap.org/data/2.5/weather?q=";
    let unit = "metric";
    let apiUrl = `${apiRoot}${cityName}&units=${unit}&appid=${apiKey}`;
     axios.get(apiUrl).then(getCurrentWeather);

}

function submitCity(event) {
event.preventDefault();

let cityName = document.querySelector("#search-field").value;
  search(cityName);
}

function getCurrentWeather(response) {
  let cityTemp = Math.round(response.data.main.temp);
  document.querySelector("#today-temp").innerHTML = `${cityTemp}`;
  document.querySelector("#city-title").innerHTML = response.data.name;
  document.querySelector("#weather-description").innerHTML = response.data.weather[0].main;
  document.querySelector("#humidity").innerHTML = response.data.main.humidity;
  document.querySelector("#wind-speed").innerHTML = Math.round(response.data.wind.speed);
}

function currentLocation(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(currentPosition);
}
  
function currentPosition(position) {
 let apiKey = "b2d81bf38bb41052988aedac8aa89c4f";
let apiRoot = "https://api.openweathermap.org/data/2.5/weather?";
let unit = "metric";
let lat = position.coords.latitude;
let lon = position.coords.longitude;
let apiUrl = `${apiRoot}lat=${lat}&lon=${lon}&units=${unit}&appid=${apiKey}`;

axios.get(apiUrl).then(getCurrentWeather);

}

search("London")




let dateTime = document.querySelector("#date-time");
let currentTime = new Date();
dateTime.innerHTML = formatDate(currentTime);


let searchForm = document.querySelector("#search-form")
searchForm.addEventListener("submit", submitCity);

let todayTemp = document.querySelector("#today-temp");
let currentTemp = document.querySelector("#today-temp");




let currentLocationButton = document.querySelector("#submit-current-button");
currentLocationButton.addEventListener("click", currentLocation)




 
 
 




