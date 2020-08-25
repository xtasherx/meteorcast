////WHEN I search for a city THEN I am presented with current and future conditions for that city and that city is added to the search history
//// user input needs to be used to search json data for the city
//// user input needs to be used to add to a buttons array of recent searches.

// let historyButtons = localStorage.getItem("lastSearch")
//   ? JSON.parse(localStorage.getItem("lastSearch"))
//   : [];
let userSearch = "london";
const searchStore = localStorage.setItem("lastSearch", userSearch);
let getSearchStore = localStorage.getItem("lastSearch");
const cardArray = document.querySelectorAll(".card-body");
const cardTitles = document.querySelectorAll(".card-title");
const cardText = document.querySelectorAll(".card-text");
const cardImage = document.querySelectorAll(".card-icon");
const historyButtons = [];

// function to translate unix time
function timeStamp(unix) {
  const millisecs = unix * 1000;
  const dateObject = new Date(millisecs);
  const dateResult = dateObject.toLocaleString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
  return dateResult;
}

// function to get weather info and write it to page
function populateWeather() {
  let responseURL = `http://api.openweathermap.org/data/2.5/weather?q=${userSearch}&units=imperial&appid=d4f35f1397cda8a7222b2b4264b60559`;
  $.ajax({
    url: responseURL,
    method: "GET",
  }).then(function (response) {
    $(".display-3").text(response.name);
    const latHolder = response.coord.lat;
    const lonHolder = response.coord.lon;
    responseURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${latHolder}&lon=${lonHolder}&units=imperial&appid=d4f35f1397cda8a7222b2b4264b60559`;

    $.ajax({
      url: responseURL,
      method: "GET",
    }).then(function (response) {
      console.log(response);
      // write current weather to the page
      $(".display-4").text(`
        ${timeStamp(response.current.dt)}
          `);
      $(".temp").text(`
          Temperature: ${Math.ceil(response.current.temp)}F
        `);
      $(".wind").text(`
          Wind Speed: ${response.current.wind_speed}MPH
        `);
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
      $(".main-icon").attr(
        "src",
        `http://openweathermap.org/img/wn/${response.current.weather[0].icon}@2x.png`
      );

      // write 5 day forcast to page
      cardArray.forEach(function (card, i) {
        cardTitles[i].textContent = `${timeStamp(response.daily[i].dt)}`;
        cardImage[i].setAttribute(
          "src",
          `http://openweathermap.org/img/wn/${response.daily[i].weather[0].icon}@2x.png`
        );
        cardText[i].innerHTML = `
          <p>High: ${Math.ceil(response.daily[i].temp.max)}F</p>
          <p>Low: ${Math.ceil(response.daily[i].temp.min)}F</p>
          <p>Humidity: ${response.daily[i].humidity}%</p>
        `;
      });
    });
  });
}
// initial weather call on page load
populateWeather();

// weather call on search button press
$(".search-btn").on("click", function () {
  event.preventDefault();
  userSearch = $(".searchbox").val();
  populateWeather();
});
// weather call on history button press

// WHEN I click on a city in the search history THEN I am again presented with current and future conditions for that city

// WHEN I open the weather dashboard THEN I am presented with the last searched city forecast
