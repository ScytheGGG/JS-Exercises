document.addEventListener("DOMContentLoaded", function () {
    const cityInput = document.querySelector(".city-input");
    const searchButton = document.querySelector(".search-btn");

    const cityOutput = document.getElementById("cityoutput");
    const descriptionOutput = document.getElementById("description");
    const tempOutput = document.getElementById("temp");
    const windOutput = document.getElementById("wind");

    searchButton.addEventListener("click", function () {
        weatherApp(cityInput.value.trim(), cityOutput, descriptionOutput, tempOutput, windOutput);
    });
});

function weatherApp(cityName, cityOutput, descriptionOutput, tempOutput, windOutput) {
    const API_KEY = "8d983aa505d9c1784512bb1c221ec232";

    function convertToCelsius(val) {
        return (val - 273).toFixed(2);
    }

    if (cityName === "") return;

    const WEATHER_API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}`;

    fetch(WEATHER_API_URL)
        .then(response => response.json())
        .then(data => {
            if (data.cod !== 200) {
                console.error("Error in API response:", data.message);
                alert(`Error: ${data.message}`);
                return;
            }

            const nameVal = data.name;
            const descrip = data.weather[0].description;
            const tempature = data.main.temp;
            const wndSpd = data.wind.speed;

            // Update HTML elements with weather details
            cityOutput.textContent = `City: ${nameVal}`;
            descriptionOutput.textContent = `Conditions: ${descrip}`;
            tempOutput.textContent = `Temperature: ${convertToCelsius(tempature)}°C`;
            windOutput.textContent = `Wind: ${wndSpd} M/S`;
        })
        .catch(err => {
            console.error("Error fetching weather data:", err);
            alert("An error occurred while fetching the weather forecast!");
        });
}
