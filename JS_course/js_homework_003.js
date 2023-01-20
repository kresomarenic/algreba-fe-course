const apiKey = '4f5eca21ec11532591ab04ab2bcaa87e';
const units = 'metric';
const lang = 'hr';

const input = document.getElementById('city-input');
const searchBtn = document.getElementById('search-btn');

const cityElement = document.getElementById('city-el');
const iconElement = document.getElementById('icon-el');
const temperatureElement = document.getElementById('temperature-el');
const cloudsElement = document.getElementById('clouds-el');
const humidityElement = document.getElementById('humidity-el');
const windElement = document.getElementById('wind-el');
const pressureElement = document.getElementById('pressure-el');
const typeOfWeatherElement = document.getElementById('weather-type-el');

const clearFields = () => {
    cityElement.innerText = ''; 
    iconElement.src = '';
    temperatureElement.innerHTML = '';
    cloudsElement.innerHTML = '';
    humidityElement.innerHTML = '';
    windElement.innerText = '';
    pressureElement.innerText = '';
    typeOfWeatherElement.innerText = '';          
}

const handleSearch = () => {
    // pročitaj input koji je grad tražen
    
    const city = input.value;
   
    // dohvati vrijeme
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${apiKey}&units=${units}&lang=${lang}`;

    const request = new XMLHttpRequest();
    request.open('GET', url, true);
    
    request.onload = (e) => {      

        if(request.status === 200) {
            const weatherResponse = JSON.parse(request.response);
            console.log(weatherResponse);

            const state = weatherResponse.sys.country;
            const icon = weatherResponse.weather[0].icon;
            const temperature = weatherResponse.main.temp;
            const clouds = weatherResponse.clouds.all;
            const humidity = weatherResponse.main.humidity;
            const windSpeed = weatherResponse.wind.speed;
            const pressure = weatherResponse.main.pressure;
            const weatherType = weatherResponse.weather[0].description;             
            
            cityElement.innerText = `${city} - ${state}`; 
            iconElement.src = `http://openweathermap.org/img/w/${icon}.png`;
            temperatureElement.innerHTML = `Temperatura je: <b>${temperature} &#8451;</b>`;
            cloudsElement.innerHTML = `Postotak oblaka: ${clouds} &percnt;`;
            humidityElement.innerHTML = `Vlažnost zraka: ${humidity} &percnt;`;
            windElement.innerText = `Brzina vjetra: ${windSpeed} m/s`;
            pressureElement.innerText = `Tlak zraka: ${pressure} hPa`;
            typeOfWeatherElement.innerText = `Vrijeme: ${weatherType}`;            
            
        } else if (request.status === 404){
            clearFields();
            cityElement.innerText = `${city} nije nađen`;
        } else {
            clearFields();
            cityElement.innerText = `Došlo je do greške.`;
        }

        
        
    };
    request.send();
}

const handleInputKey = (e) => {
    if (e.key === 'Enter') {
        handleSearch();
    }
}

searchBtn.addEventListener('click', handleSearch);
input.addEventListener('keyup', handleInputKey);


