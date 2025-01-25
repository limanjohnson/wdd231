

    const currentTemp = document.getElementById("current-temp");
    const currentDescription = document.getElementById("current-description");
    const expectedHigh = document.getElementById("expected-high");
    const expectedLow = document.getElementById("expected-low");
    const humidity = document.getElementById("humidity");
    const weatherIcon = document.getElementById("weather-icon");
    const currentDay = document.getElementById("current-day");
    const oneDayAhead = document.getElementById("one-day-ahead");
    const twoDaysAhead = document.getElementById("two-days-ahead");
    const currentWeatherURL = "https://api.openweathermap.org/data/2.5/weather?lat=40.33&lon=-111.9&units=imperial&appid=d6fa42231de7c3445d5e27a80120b9e4";
    const forecastURL = "https://api.openweathermap.org/data/2.5/forecast?lat=40.33&lon=-111.9&units=imperial&appid=d6fa42231de7c3445d5e27a80120b9e4"


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

    apiFetchForecastWeather();

    function getForecastWeatherData(futureData) {
        const forecastList = futureData.list;

        const dailyForecast = forecastList.filter (item => item.dt_txt.includes("18:00:00"));

        const threeDayForecast = dailyForecast.slice(0.3);

        if (threeDayForecast.length >= 3) {
            currentDay.innerHTML = `
                <img src="https://openweathermap.org/img/w/${threeDayForecast[0].weather[0].icon}.png" alt="${threeDayForecast[0].weather[0].description}">
                <p>${new Date(threeDayForecast[0].dt_txt).toLocaleDateString('en-us', {weekday: "short"})}</p>
                <p>Temp: ${threeDayForecast[0].main.temp}&nbsp;&deg;F</p>
                `;
            // <p>Desc: ${threeDayForecast[0].weather[0].description}</p>
            oneDayAhead.innerHTML = `
                <img src="https://openweathermap.org/img/w/${threeDayForecast[1].weather[0].icon}.png" alt="${threeDayForecast[1].weather[0].description}">
                <p>${new Date(threeDayForecast[1].dt_txt).toLocaleDateString('en-us', {weekday: "short"})}</p>
                <p>Temp: ${threeDayForecast[1].main.temp}&nbsp;&deg;F</p>
                `;
            // <p>Desc: ${threeDayForecast[1].weather[0].description}</p>
            twoDaysAhead.innerHTML = `
                <img src="https://openweathermap.org/img/w/${threeDayForecast[2].weather[0].icon}.png" alt="${threeDayForecast[2].weather[0].description}">
                <p>${new Date(threeDayForecast[2].dt_txt).toLocaleDateString('en-us', {weekday: "short"})}</p>
                <p>Temp: ${threeDayForecast[2].main.temp}&nbsp;&deg;F</p>
                `;
            // <p>Desc: ${threeDayForecast[2].weather[0].description}</p>
        }
    }

    export default function displayWeather() {
        apiFetchCurrentWeather().then(data => getCurrentWeatherData(data));
        apiFetchForecastWeather().then(futureData => getForecastWeatherData(futureData));
    };


