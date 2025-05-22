
const API_KEY = import.meta.env.VITE_API_KEY;



const searchIcon = document.getElementById("iconSearch");
const weatherType = document.getElementById("weatherType");
const weatherImg = document.getElementById("weatherImg");
const feels_like = document.getElementById("temperature");
const country = document.getElementById("countryName");
const weather_description = document.getElementById("weatherDescription");

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

const humidityDiv = document.getElementById("humidityDiv");
const windDiv = document.getElementById("windDiv");
const windDirDiv = document.getElementById("windDirDiv");

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

const humidity = document.getElementById("humidity");
const humidity_icon = document.getElementById("humidityIcon");

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

const wind_speed = document.getElementById("windSpeed");
const wind_speed_icon = document.getElementById("windSpeedIcon");
const wind_direction = document.getElementById("windDirection");
const wind_direction_icon = document.getElementById("windDirectionIcon");

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

const humidity_desc = document.getElementById("humidityDesc");
const wind_speed_desc = document.getElementById("windSpeedDesc");
const wind_direction_desc = document.getElementById("windDirectionDesc");

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

const weatherDetails = document.getElementById("weatherDetailsDiv");
const weatherDivContainer = document.getElementById("weatherDivCont");

const mainContainer =  document.getElementById("container")






userInput.addEventListener("keypress", function(e) {
    if (e.key === "Enter"){
        searchIcon.click();
    }
    
    
})

searchIcon.addEventListener("click", ()=>{
    let userInput = document.getElementById("userInput");

    userInput.blur();

    let userInputValue = userInput.value.trim();
    
    

    const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${userInputValue}&appid=${API_KEY}`;
    
    
     if (userInputValue !== "") {
        fetch(API_URL)
        .then(response => response.json())
        
        .then(data => {
            
            
            
            mainContainer.style.borderBottomLeftRadius = "0px";
            mainContainer.style.borderBottomRightRadius = "0px";
            weatherDivContainer.style.height = "500px";
            
            
            weatherDetails.classList.add("animate__animated", "animate__fadeInUp")
            weatherDetails.addEventListener("animationend", ()=>{
                weatherDetails.classList.remove("animate__animated", "animate__fadeInUp")
                })
                weatherDetails.style.display = "flex";
                
                humidityDiv.style.display = "flex";
                humidity.textContent = `${data.main.humidity}%`;
                humidity_desc.textContent = `Humidity`;
                humidity_icon.style.display = `inline`;
                
                windDiv.style.display = "flex";
                wind_speed_icon.style.display = `inline`;
                wind_speed.textContent = `${data.wind.speed}m/s`;
                wind_speed_desc.textContent = `Wind Speed`;
                
                windDirDiv.style.display = "flex";
                wind_direction_icon.style.display = `inline`;
                wind_direction_icon.style.transform = `rotate(${data.wind.deg}deg)`;
                wind_direction.textContent = `${data.wind.deg}°`;
                wind_direction_desc.textContent = `Wind Direction`;
                
                weatherImg.classList.add("animate__animated", "animate__fadeIn");
                weatherImg.style.setProperty('--animate-duration', '3s');
                weatherImg.addEventListener("animationend", ()=>{
                    weatherImg.classList.remove("animate__animated", "animate__fadeIn");
                })
                weatherImg.setAttribute("src", `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`);
                weatherImg.style.display = 'inline';
                weatherImg.style.width = '90px';
                
                weatherType.classList.add("animate__animated", "animate__zoomInLeft");
                weatherType.style.setProperty('--animate-duration', '0.8s');
                weatherType.addEventListener("animationend", ()=>{
                    weatherType.classList.remove("animate__animated", "animate__zoomInLeft");
                })
                weatherType.style.display = `block`;
                weatherType.textContent = `${data.weather[0].main}`;
                
                country.style.marginTop = '-80px';
                country.style.display = `block`;
                country.textContent = `${userInputValue}, ${data.sys.country}`;
                userInputValue = "";
                
                feels_like.classList.add("animate__animated", "animate__slideInDown");
                feels_like.style.setProperty('--animate-duration', '1s');
                feels_like.addEventListener("animationend", ()=>{
                    feels_like.classList.remove("animate__animated", "animate__slideInDown");
                })
                feels_like.style.display = `block`;
                feels_like.textContent = `${(data.main.feels_like - 273.15).toFixed(2)}°c`;
                
                weather_description.classList.add("animate__animated", "animate__rollIn");
                weather_description.style.setProperty('--animate-duration', '1s');
                weather_description.addEventListener("animationend", ()=>{
                    weather_description.classList.remove("animate__animated", "animate__rollIn");
                })
                weather_description.style.display = `inline`;
                weather_description.textContent = `${(data.weather[0].description).trim().toUpperCase().charAt(0) + data.weather[0].description.slice(1)}`;
                
                
            }) .catch(error => {

                mainContainer.style.borderBottomLeftRadius = "0px";
                mainContainer.style.borderBottomRightRadius = "0px";
                weatherDivContainer.style.height = '250px';
                
                humidityDiv.style.display = "none";
                windDiv.style.display = "none";
                windDirDiv.style.display = "none";
                weather_description.style.display = `none`;
                feels_like.style.display = `none`;
                weatherType.style.display = `none`;
                weatherDetails.style.display = 'flex';
                
                
                weatherImg.classList.add("animate__animated", "animate__jackInTheBox")
                weatherImg.style.setProperty('--animate-duration', '1s')
                weatherImg.addEventListener("animationend", ()=>{
                    weatherImg.classList.remove("animate__animated", "animate__jackInTheBox")
                })
                weatherImg.style.display = 'inline-block';
                weatherImg.style.width = '150px';
                weatherImg.setAttribute("src", "404.png");
                country.style.display = 'block';
                country.style.marginTop = '50px';
                country.textContent = `Oops!, Error Finding Country`;
                
                userInputValue = "";
                
            })
        } else {
            
            mainContainer.style.borderBottomLeftRadius = "0px";
            mainContainer.style.borderBottomRightRadius = "0px";
            weatherDivContainer.style.height = '250px';
            humidityDiv.style.display = "none";
            windDiv.style.display = "none";
            windDirDiv.style.display = "none";
            weather_description.style.display = `none`;
            feels_like.style.display = `none`;
            weatherType.style.display = `none`;
            weatherDetails.style.display = 'flex';
            
            
            weatherImg.classList.add("animate__animated", "animate__jackInTheBox")
            weatherImg.style.setProperty('--animate-duration', '1s')
            weatherImg.addEventListener("animationend", ()=>{
                weatherImg.classList.remove("animate__animated", "animate__jackInTheBox")
            })
            weatherImg.style.width = '150px';
            weatherImg.style.display = 'inline-block';
            weatherImg.setAttribute("src", "404.png");
            country.style.display = 'block';
            country.style.marginTop = '50px';
            country.textContent = `Oops!, Error Finding Country`;

            userInputValue = "";
        }
        
    
})