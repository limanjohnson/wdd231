document.addEventListener('DOMContentLoaded', () => {

    const currentTemp = document.getElementById("current-temp");
    const weatherIcon = document.getElementById("weather-icon");
    const figCaption = document.querySelector("figcaption");
    const url = "https://api.openweathermap.org/data/2.5/weather?lat=49.75&lon=6.63&units=imperial&appid=5fd4df621ce1483816b823bbeb0dae6b";

    async function apiFetch() {
        try {
            const response = await fetch(url);
            if (response.ok) {
                const data = await response.json();
                console.table(data);
                return data;
            } else {
                throw Error(await response.text());
            }
        } catch (error) {
                console.log(error);
        }
    }

    function displayWeather(data) {
        currentTemp.innerHTML = data.main.temp;
    }

    apiFetch().then(data => displayWeather(data));
});