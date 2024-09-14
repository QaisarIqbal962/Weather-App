const apiKey = 'YOUR_API_KEY'; // Replace with your OpenWeatherMap API key  

document.getElementById('getWeather').addEventListener('click', () => {  
    const city = document.getElementById('cityInput').value;  
    if (city) {  
        getWeather(city);  
    } else {  
        alert('Please enter a city name.');  
    }  
});  

async function getWeather(city) {  
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;  

    try {  
        const response = await fetch(url);  
        if (!response.ok) {  
            throw new Error('City not found');  
        }  
        const data = await response.json();  
        displayWeather(data);  
    } catch (error) {  
        document.getElementById('weatherResult').innerText = error.message;  
        document.getElementById('weatherResult').style.display = 'block';  
    }  
}  

function displayWeather(data) {  
    const weatherResult = document.getElementById('weatherResult');  
    const temperature = data.main.temp;  
    const description = data.weather[0].description;  
    const cityName = data.name;  

    weatherResult.innerHTML = `  
        <h2>${cityName}</h2>  
        <p>Temperature: ${temperature} °C</p>  
        <p>Condition: ${description}</p>  
    `;  
    weatherResult.style.display = 'block'; // Show the weather result  
}