document.addEventListener("DOMContentLoaded", function() {

    const currentTemp = document.getElementById("current-temp");
    const currentDescription = document.getElementById("current-description");
    const expectedHigh = document.getElementById("expected-high");
    const expectedLow = document.getElementById("expected-low");
    const humidity = document.getElementById("humidity");
    const url = "https://api.openweathermap.org/data/2.5/weather?lat=40.33&lon=-111.9&units=imperial&appid=d6fa42231de7c3445d5e27a80120b9e4";

    async function apiFetch () {
        try {
            const response = await fetch(url);
            if (response.ok) {
                const data = await response.json();
                console.table(data);
                return data;
            } else {
                throw new Error(await response.text());
            }
        } catch (error) {
            console.log(`There has been an error with fetch the api ${error}`);
        }
    }

    function getWeatherData(data) {
        currentTemp.innerHTML = data.main.temp;
        currentDescription.innerHTML = data.weather[0].description;
        expectedHigh.innerHTML = data.main.temp_max;
        expectedLow.innerHTML = data.main.temp_min;
        humidity.innerHTML = data.main.humidity;
    }

    export default function displayWeather() {
        apiFetch().then(data => getWeatherData(data));
    }


});