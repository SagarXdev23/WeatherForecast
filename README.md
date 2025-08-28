🌦 Weather App

A simple and modern Weather Application built using HTML, CSS, and JavaScript.
This app fetches real-time weather details (temperature, condition, location, and local time) using the WeatherAPI.

✨ Features

🔍 Search weather by city name

🌡️ Shows real-time temperature in Celsius

📍 Displays location (city, region, country)

🕒 Shows local time and day of the week

🌤️ Displays current weather condition (Mist, Sunny, Rain, etc.)

🎨 Beautiful Glassmorphism UI with responsive design

🛠️ Tech Stack

HTML5 – structure

CSS3 – modern UI (Glassmorphism + gradient)

JavaScript (ES6) – API calls + DOM manipulation

WeatherAPI – real-time weather data

🚀 Getting Started
1️⃣ Clone the repository
git clone [https://github.com/SagarXdev23/WeatherForecast]
2️⃣ Navigate to the project folder
cd weather-app

3️⃣ Open the app

Simply open index.html in your browser.

🔑 API Key Setup

This project uses WeatherAPI
 to fetch real-time weather data.

Create a free account at WeatherAPI
.

Get your API key from the dashboard.

Replace the API key inside weather.js:

let url = 'http://api.weatherapi.com/v1/current.json?key=YOUR_API_KEY&q=${targetlocation}&aqi=no`;

📌 Future Improvements

Add 5-day weather forecast

Show humidity, wind speed, and pressure

Add dark/light mode toggle

Detect user’s current location weather automatically

