const ApiKey = "49e6520216d1eb79fca80c1e1855905a"
const ApiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="

const searchBox = document.querySelector(".search input")
const searchBtn = document.querySelector(".search button")
const weatherIcon = document.querySelector(".weather-icon")

async function checkWeather(city){
    const response = await fetch(ApiUrl + city + `&appid=${ApiKey}`);
    var data = await response.json();

    if(response.status == 404){
        document.querySelector(".error").style.display = "block"
    }else{
    
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".Wind").innerHTML = Math.round(data.wind.speed) + " km/hr";

    if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "Weather-Assets/clouds.png"  
    }else if(data.weather[0].main == "Rain"){
        weatherIcon.src = "Weather-Assets/rain.png" 
    }else if(data.weather[0].main == "Humidity"){
        weatherIcon.src = "Weather-Assets/humidity.png"
    }else if(data.weather[0].main == "Mist"){
        weatherIcon.src = "Weather-Assets/mist.png"
    }else if(data.weather[0].main == "Snow"){
        weatherIcon.src = "Weather-Assets/snow.png"
    }else if(data.weather[0].main == "Clear"){
        weatherIcon.src = "Weather-Assets/clear.png"
    }else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src = "Weather-Assets/drizzle.png"
    }
    
    
    document.querySelector(".error").style.display = "none"
}
    


}
searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})
searchBox.addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
        checkWeather(searchBox.value);
    }
});








