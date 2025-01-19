<script>

const apikey = "fbea99e4636bac5c5142820ab13e0296";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchB0x = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const WeatherIcon = document.querySelector(".weather-icon")

async function checkweather(city){
    const response = await fetch(apiUrl + city + '&appid=fbea99e4636bac5c5142820ab13e0296');

if(response.status  == 404){
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
}else{
    var data = await response.json();
    
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

    if(data.weather[0].main == "clouds"){
        WeatherIcon.src = "clouds.png"
    }
    else if(data.weather[0].main == "clear"){
        WeatherIcon.src = "clear.png"        
    }
    else if(data.weather[0].main == "Rain"){
        WeatherIcon.src = "rain.png"        
    }
    else if(data.weather[0].main == "Drizzle"){
        WeatherIcon.src = "drizzle.png"        
    }
    else if(data.weather[0].main == "Mist"){
        WeatherIcon.src = "mist.png"        
    }
    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";

}

}
searchBtn.addEventListener("click", ()=>{
    checkweather(searchB0x.value);
})
checkweather();
</script>

