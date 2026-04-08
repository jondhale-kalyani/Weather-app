const apiKey ="4e1311c3000064c8abecfdd346a9fd78";
 // Replace with your API key

async function getWeather() {
    const city = document.getElementById("city").value;

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    const response = await fetch(url);
    const data = await response.json();

    if (data.cod === "404") {
        alert("City not found!");
        return;
    }

    document.getElementById("temp").innerHTML = data.main.temp + "°C";
    document.getElementById("cityName").innerHTML = data.name;
    document.getElementById("humidity").innerHTML = data.main.humidity + "%";
    document.getElementById("wind").innerHTML = data.wind.speed + " km/h";

    const icon = data.weather[0].icon;
    document.getElementById("icon").src =
        `https://openweathermap.org/img/wn/${icon}@2x.png`;
}