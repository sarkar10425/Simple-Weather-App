
let API_KEY = "a8e71c9932b20c4ceb0aed183e6a83bb";


getWeatherData = (city) => {
  const URL = "https://api.openweathermap.org/data/2.5/weather";
  //HINT: Use template literals to create a url with input and an API key
  
  //CODE GOES HERE
  const fullURL = `${URL}?q=${city}&appid=${API_KEY}&units=imperial`;
  let weatherPromise = fetch(fullURL);
  return weatherPromise.then((response) => {
    return response.json();
  })

}


searchCity = () => {
  const city = document.getElementById('city-input').value;
  // CODE GOES HERE
  getWeatherData(city)
  .then((data) =>{
    showWeatherData(data);
  }).catch((err) => {
    console.log(err);
  })

}


showWeatherData = (weatherData) => {
  //CODE GOES HERE
  document.getElementById("city-name").innerHTML = weatherData.name;
  document.getElementById("temp").innerHTML = ((weatherData.main.temp-32)*(5*1.0/9)).toFixed(2);
  document.getElementById("min-temp").innerHTML = ((weatherData.main.temp_min-32)*(5*1.0/9)).toFixed(2);
  document.getElementById("max-temp").innerHTML = ((weatherData.main.temp_max-32)*(5*1.0/9)).toFixed(2);
  document.getElementById("weather-type").innerHTML = weatherData.weather[0].main;
  
}

