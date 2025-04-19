const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
const key ="257f3851d65cf6f276b0c888f566cbed"


var temperature = 0;
var humidity = 0;
var pressure = 0;
var searchCity = '';



async function search(){
     searchCity = document.getElementById('searchInput').value;
     console.log("City:",searchCity);
     this.getTemperature(searchCity);
}

async function getTemperature(cityName) {
    console.log("City:",cityName);
    const weatherData = await fetch(apiUrl +cityName+`&appid=${key}`);
    var data = await weatherData.json();
    console.log("DATA",data);
    this.temperature = data.main.temp;
    this.humidity= data.main.humidity;
    this.pressure = data.main.pressure;
    this.city = data.name; 
    console.log("today",this.city);
    const temp = document.querySelector('.temperature').innerHTML = this.temperature;
    const Humidity = document.querySelector('.Humidity').innerHTML = this.humidity;
    const Pressure = document.querySelector('.Pressure').innerHTML = this.pressure; 
    const citySelected = document.querySelector('.city').innerHTML=this.city;
}