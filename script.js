const getWeatherButton = document.getElementById("getWeatherButton");
const cityInput = document.getElementById("cityInput");
const weatherResult = document.getElementById("weatherResult");

const fetchWeather = () => {
  const options = {
    method: 'GET',
    headers: { accept: 'application/json', 'accept-encoding': 'deflate, gzip, br' }
  };

  fetch('https://api.tomorrow.io/v4/weather/realtime?location=toronto&apikey=KcEgIoL0cfchbGEMfSYZZAC7KVkYtieT', options)
    .then(res => res.json())
    .then(res => console.log(res))
    .catch(err => console.error(err));
};

const displayWeather = (data) => {
  const temp = data.data.timesteps[0]?.values?.temperature || 'Temperature not available';
  const weatherDescription = data.weather[0].description;
  const cityName = data.name;

  weatherResult.innerHTML = `
        <h2>${cityName}</h2>
        <p>Temperature: ${temperature} °C</p>
        <p>Condition: ${weatherDescription}</p>
    `;
};
getWeatherButton.addEventListener("click", () => {
  const city = cityInput.value;
  fetchWeather(city);
});
getWeatherButton.addEventListener("click", fetchWeather);