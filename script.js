async function getWeather() {
    const city = document.getElementById("city").value;

    const apiKey = "4e1311c3000064c8abecfdd346a9fd78";

    const url = https//api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric;

    try {
        const response = await fetch(url);
        const data = await response.json();

        document.getElementById("weather").innerHTML = `
            <h2>${data.name}</h2>
            <p>🌡 Temperature: ${data.main.temp} °C</p>
            <p>☁ Weather: ${data.weather[0].description}</p>
            <p>💧 Humidity: ${data.main.humidity}%</p>
            <p>💨 Wind Speed: ${data.wind.speed} m/s</p>
        `;
    } catch (error) {
        document.getElementById("weather").innerHTML = "Error fetching data";
    }
}