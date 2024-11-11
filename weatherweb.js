const apiKey = 'f00c38e0279b7bc85480c3fe775d518c';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

const locationInput = document.getElementById('locationInput');
const searchButton = document.getElementById('searchButton');
const locationElement = document.getElementById('location');
const temperatureElement = document.getElementById('temperature');
const temperatureFeelElement = document.getElementById('temperature_feel');
const descriptionElement = document.getElementById('description');

searchButton.addEventListener('click', () => {
    const location = locationInput.value;
    if (location) {
        fetchWeather(location);
    }
});

function fetchWeather(location) {
    const url = `${apiUrl}?q=${location}&appid=${apiKey}&units=metric`;
	

    fetch(url)
        .then(response => response.json())
        .then(data => {
            locationElement.textContent = data.name;
            if (data.main.temp<15)
            temperatureElement.textContent = `🥶${Math.round(data.main.temp)}°C`;
        else
        temperatureElement.textContent = `🥵${Math.round(data.main.temp)}°C`;
			temperatureFeelElement.textContent = `🤔Feels Like${Math.round(data.main.feels_like)}°C`;
            descriptionElement.textContent = `☁️${data.weather[0].description}`;
			console.log(data)
        })
		
        .catch(error => {
            console.error('Error fetching weather data:', error);
        });
}