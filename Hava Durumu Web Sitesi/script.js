const url ="https://api.openweathermap.org/data/2.5/";
const key = "101d8075ba82c83a81180fab3bd68f35";

const city = document.getElementById("city");
const degree = document.getElementById("degree");
const weather = document.getElementById("weather");
const checkBtn = document.getElementById("checkBtn");
const text = document.getElementById("text");



const getKeyPress = (e) =>{
    if(e.keyCode == "13"){
        getResult(text.value);
    }
}

getResult = (cityName) =>{
    let query = `${url}weather?q=${cityName}&appid=${key}&units=metric&lang=tr`;
    fetch(query).then(weather=>{
        return weather.json()
    }).then(displayResult)
}
text.addEventListener("keypress", getKeyPress);

const displayResult = (result) =>{
    city.innerHTML = `${result.name},${result.sys.country}`;
    degree.innerHTML = `${Math.round(result.main.temp)}°C`;
    weather.innerHTML = result.weather[0].description;
}