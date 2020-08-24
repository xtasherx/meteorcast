// GIVEN a weather dashboard with form inputs
// WHEN I search for a city THEN I am presented with current and future conditions for that city and that city is added to the search history
/////Grab user input from search field on button click & store in a variable
let userSearch = "san antonio";
//// user input needs to be used to search json data for the city
// user input needs to be used to add to a buttons array of recent searches.
const historyButtons = [];

let responseURL = `http://api.openweathermap.org/data/2.5/weather?q=${userSearch}&units=imperial&appid=d4f35f1397cda8a7222b2b4264b60559`;
$.ajax({
  url: responseURL,
  method: "GET",
}).then(function (response) {
  console.log(response);
  // WHEN I view current weather conditions for that city THEN I am presented with the:
  // city name
  $(".display-3").text(response.name);
  let latHolder = response.coord.lat;
  let lonHolder = response.coord.lon;

  responseURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${latHolder}&lon=${lonHolder}&units=imperial&appid=d4f35f1397cda8a7222b2b4264b60559`;

  $.ajax({
    url: responseURL,
    method: "GET",
  }).then(function (response) {
    console.log(response);

    // the date
    $(".display-4").text(`
       ${response.current.dt}
        `);
    // the temperature
    $(".temp").text(`
        Temperature: ${response.current.temp} F
`);
    // the wind speed
    $(".wind").text(`
        Wind Speed: ${response.current.wind_speed} MPH
`);
    // the humidity
    $(".humidity").text(`
        Humidity: ${response.current.humidity}%
`);
    // the UV index
    // WHEN I view the UV index THEN I am presented with a color that indicates whether the conditions are:
    // favorable
    // moderate
    // severe
    $(".uvi").text(`
        UV Index: ${response.current.uvi}
`);
    // an icon representation of weather conditions
    $(".main-icon").attr(
      "src",
      `http://openweathermap.org/img/wn/${response.current.weather[0].icon}@2x.png`
    );
    $(".currentCond").text(`
    Feels like ${response.current.feels_like} F
`);

    // WHEN I view future weather conditions for that city THEN I am presented with a 5-day forecast that displays:
    const cardArray = document.querySelectorAll(".card-body");
    const cardTitles = document.querySelectorAll(".card-title");
    const cardText = document.querySelectorAll(".card-text");
    const cardImage = document.querySelectorAll(".card-icon");
    cardArray.forEach(function (card, i) {
      //  the date
      cardTitles[i].textContent = `${response.daily[i].dt}`;
      //  the temperature
      //  the humidity
      //  an icon representation of weather conditions
      cardImage[i].setAttribute(
        "src",
        `http://openweathermap.org/img/wn/${response.daily[i].weather[0].icon}@2x.png`
      );

      cardText[i].textContent = `
        High:${response.daily[i].temp.max}
        Low:${response.daily[i].temp.min}
        Humidity:${response.daily[i].humidity}%
     `;
    });
  });
});

// WHEN I click on a city in the search history THEN I am again presented with current and future conditions for that city
//// Buttons in city history array need to return the weather for their respective city
// WHEN I open the weather dashboard THEN I am presented with the last searched city forecast
