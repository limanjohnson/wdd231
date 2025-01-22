

    const currentTemp = document.getElementById("current-temp");
    const currentDescription = document.getElementById("current-description");
    const expectedHigh = document.getElementById("expected-high");
    const expectedLow = document.getElementById("expected-low");
    const humidity = document.getElementById("humidity");
    const weatherIcon = document.getElementById("weather-icon");
    const currentWeatherURL = "https://api.openweathermap.org/data/2.5/weather?lat=40.33&lon=-111.9&units=imperial&appid=d6fa42231de7c3445d5e27a80120b9e4";
    const forecastURL = "api.openweathermap.org/data/2.5/forecast?lat=40.33&lon=-111.9&units=imperial&appid=d6fa42231de7c3445d5e27a80120b9e4"


    // Current Weather Data
    async function apiFetchCurrentWeather () {
        try {
            const response = await fetch(currentWeatherURL);
            if (response.ok) {
                const data = await response.json();
                // console.table(data);
                return data;
            } else {
                throw new Error(await response.text());
            }
        } catch (error) {
            console.log(`There has been an error with fetch the api ${error}`);
        }
    }

    function getCurrentWeatherData(data) {
        currentTemp.innerHTML = data.main.temp;
        currentDescription.innerHTML = data.weather[0].description;
        expectedHigh.innerHTML = data.main.temp_max;
        expectedLow.innerHTML = data.main.temp_min;
        humidity.innerHTML = data.main.humidity;
        const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`
        weatherIcon.setAttribute('src', iconsrc)
        weatherIcon.setAttribute('alt', currentDescription.innerHTML)
    }

    // Forecast Weather Data
    async function apiFetchForecastWeather() {
        try {
            const response = await fetch(forecastURL);
            if (response.ok)
            {
                const futureData = await response.json();
                console.table(futureData);
                return futureData;
            } else {
                throw new Error(await response.text());
            }
        } catch (error) {
                console.log(`There has been an error with fetch the api ${error}`);
        }
    }

    function getForecastWeatherData(futureData) {

    }

    export default function displayWeather() {
        apiFetchCurrentWeather().then(data => getCurrentWeatherData(data));
    }


