const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=hyderabad&units=metric";
const key ="257f3851d65cf6f276b0c888f566cbed"


var temperature = 0;


async function getTemperature() {
    const weatherData = await fetch(apiUrl + `&appid=${key}`);
    var data = await weatherData.json();

    console.log("DATA",data);
    this.temperature = data.main.temp;
    console.log("temperature",this.temperature);
    const temp = document.querySelector('.temperature').innerHTML = this.temperature;
}







getTemperature();