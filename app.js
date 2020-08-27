$(document).ready(function () {
  // let userSearch = "london";

  let historyButtons = [];
  let userSearch;
  let placeHold;

  // Conditional to check if local storage is empty on load and set the userSearch value
  if (localStorage.getItem("json")) {
    placeHold = JSON.parse(localStorage.getItem("json"));
    userSearch = last(placeHold);
    historyButtons.push(last(placeHold));
  } else {
    placeHold = "london";
    userSearch = placeHold;
  }

  // Declare variable to hold local storage data & conditional to check if it is empty on load
  const cardArray = document.querySelectorAll(".card-body");
  const cardTitles = document.querySelectorAll(".card-title");
  const cardText = document.querySelectorAll(".card-text");
  const cardImage = document.querySelectorAll(".card-icon");

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

  // function to get last item in array
  function last(arr) {
    return arr[arr.length - 1];
  }
  // function to get weather info and write it to page
  function populateWeather() {
    let responseURL = ` http://api.openweathermap.org/data/2.5/weather?q=${userSearch}&units=imperial&appid=d4f35f1397cda8a7222b2b4264b60559`;
    $.ajax({
      url: responseURL,
      method: "GET",
      crossDomain: true,
    }).then(function (response) {
      $(".display-3").text(response.name);
      const latHolder = response.coord.lat;
      const lonHolder = response.coord.lon;
      responseURL = ` http://api.openweathermap.org/data/2.5/onecall?lat=${latHolder}&lon=${lonHolder}&units=imperial&appid=d4f35f1397cda8a7222b2b4264b60559`;

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
        $(".uvi")
          .text(
            `
          UV Index: ${response.current.uvi}
        `
          )
          .css("border-radius", "5px");
        // conditional to color code uv index
        if (response.current.uvi <= 2) {
          $(".uvi").css("background-color", "green");
        } else if (response.current.uvi >= 6) {
          $(".uvi").css("background-color", "red");
        } else {
          $(".uvi").css("background-color", "orange");
        }

        $(".main-icon").attr(
          "src",
          `http://openweathermap.org/img/wn/${response.current.weather[0].icon}@2x.png`
        );

        // write 5 day forcast to page
        cardArray.forEach(function (card, i) {
          cardTitles[i].textContent = `${timeStamp(response.daily[i + 2].dt)}`;
          cardImage[i].setAttribute(
            "src",
            `http://openweathermap.org/img/wn/${
              response.daily[i + 2].weather[0].icon
            }@2x.png`
          );
          cardText[i].innerHTML = `
          <p>High: ${Math.ceil(response.daily[i + 2].temp.max)}F</p>
          <p>Low: ${Math.ceil(response.daily[i + 2].temp.min)}F</p>
          <p>Humidity: ${response.daily[i + 2].humidity}%</p>
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
    $(".searchbox").val("");
    // push user search into an array for history
    historyButtons.push(userSearch);
    console.log(last(historyButtons));
    console.log(historyButtons);
    $("#history-buttons").empty();
    // for each loop to write search history buttons to page
    historyButtons.forEach(function (button) {
      let newButton = $("<button>")
        .text(button.toLowerCase())
        .attr("class", "btn btn-outline-dark")
        .attr("data-key", button)
        .css("margin", "10px");
      $("#history-buttons").append(newButton);
    });
    localStorage.setItem("json", JSON.stringify(historyButtons));
    populateWeather();
  });
  // weather call on history button press
  $("#history-buttons").on("click", "button", function () {
    userSearch = $(this).attr("data-key");
    populateWeather();
    console.log($(this).attr("data-key"));
  });
});
