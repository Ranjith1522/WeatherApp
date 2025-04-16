const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=hyderabad&units=metric";
const key ="257f3851d65cf6f276b0c888f566cbed"


var temperature = 0;
var humidity = 0;
var pressure = 0;


async function getTemperature() {
    const weatherData = await fetch(apiUrl + `&appid=${key}`);
    var data = await weatherData.json();

    console.log("DATA",data);
    this.temperature = data.main.temp;
    this.humidity= data.main.humidity;
    this.pressure = data.main.pressure; 
    console.log("temperature",this.temperature);
    console.log("humidity",this.humidity);
    console.log("pressure",this.pressure);
    const temp = document.querySelector('.temperature').innerHTML = this.temperature;
    const Humidity = document.querySelector('.Humidity').innerHTML = this.humidity;
    const Pressure = document.querySelector('.Pressure').innerHTML = this.pressure;
}

function search() {

    console.log("Searching.....");
}







getTemperature();