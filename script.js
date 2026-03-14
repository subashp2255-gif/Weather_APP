const icon = document.querySelector(".weather-icon");

async function getWeather(){

const city = document.getElementById("city").value;

const apiKey = "e0f866fac20d7dadc2c813b1d9f147e6";

const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

try{

const response = await fetch(url);
const data = await response.json();

if(data.cod === "404"){
alert("City not found"); 
return;
}

document.querySelector(".city").innerHTML = data.name;
document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
document.querySelector(".wind").innerHTML = (data.wind.speed * 3.6).toFixed(1) + " km/h";

const weather = data.weather[0].main;

const temp = data.main.temp;
const humidity = data.main.humidity;
const wind = data.wind.speed * 3.6;

if(temp >= 20 && temp <= 40 && humidity <= 50 && wind <= 15){
icon.src = "images/clear.png";
}

else if(temp >= 15 && temp <= 30 && humidity >= 40 && humidity <= 80 && wind >= 5 && wind <= 25){
icon.src = "images/clouds.png";
}

else if(temp >= 15 && temp <= 25 && humidity >= 80 && humidity <= 100 && wind >= 5 && wind <= 20){
icon.src = "images/drizzle.png";
}

else if(temp >= 10 && temp <= 20 && humidity >= 90 && humidity <= 100 && wind <= 10){
icon.src = "images/mist.png";
}

else if(temp >= 10 && temp <= 28 && humidity >= 80 && humidity <= 100 && wind >= 10 && wind <= 40){
icon.src = "images/rain.png";
}


else if(temp <= 0 && humidity >= 70 && humidity <= 100 && wind >= 5 && wind <= 30){
icon.src = "images/snow.png";
}

}
catch(error){
alert("Something went wrong!");
}

}

document.getElementById("city").addEventListener("keydown",function(event){
if(event.key === "Enter"){
getWeather();
}
});
