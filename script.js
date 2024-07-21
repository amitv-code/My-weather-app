const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&q=";
const apikey = "f9cf725d148ede416f835d46f9ccdacd";

const searchbox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function Chekweather(city){
    const response = await fetch(apiUrl + city + `&appid=${apikey}`);
    var data = await response.json();

    console.log(data);

    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
    }else{
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp - 273.15) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".windspeed").innerHTML = data.wind.speed + "Km/H";
    
        if(data.weather[0].main == "Clouds"){
            weatherIcon.src = "clouds.png";
        }
        else if(data.weather[0].main == "Clear"){
            weatherIcon.src = "clear.png";
        }
        else if(data.weather[0].main == "Mist"){
            weatherIcon.src = "mist.png";
        }
        else if(data.weather[0].main == "Rain"){
            weatherIcon.src = "rain.png";
        }
        else if(data.weather[0].main == "Drizzle"){
            weatherIcon.src = "drizzle.png";
        }
    
        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }
}

searchbtn.addEventListener("click", () => {
    Chekweather(searchbox.value);
});


document.addEventListener("DOMContentLoaded", function(){
   Chekweather(searchbox.value)});