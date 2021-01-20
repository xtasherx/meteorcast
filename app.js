
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
   const cardArray = document.querySelectorAll(".five-day");
   const cardArraySeven = document.querySelectorAll(".seven-day")
   const fiveDiv = document.querySelector(".five-day-div");
   const sevenDiv = document.querySelector(".seven-day-div");
   const hourTab = document.querySelectorAll(".hourly-tab");
   const tabCont = document.querySelector(".tab-container");
   

   tabCont.addEventListener("click", (e) => {
    const tabItems = document.querySelectorAll(".tab");
    e.target.parentElement.className += " selected";
    tabItems.forEach((tab) => {
      if(tab !== e.target.parentElement) {
        // tab.classList.remove("selected");
        tab.classList.remove("selected");
      }
    })
      console.log(e.target.parentElement);
     if (e.target.id === "seven-day-tab") {
       sevenDiv.style.display = "block";
       fiveDiv.style.display = "none";
     } else if (e.target.id ==="five-day-tab") {
       fiveDiv.style.display = "block";
       sevenDiv.style.display = "none";
     }
   })
 
   // function to translate unix time
   function timeStamp(unix) {
     const millisecs = unix * 1000;
     const dateObject = new Date(millisecs);
     const dateResult = dateObject.toLocaleString("en-US", {
       month: "long",
       day: "numeric",
     });
     return dateResult;
   }
 
   function weekdayStamp(unix) {
     const millisecs = unix * 1000;
     const dateObject = new Date(millisecs);
     const dateResult = dateObject.toLocaleString("en-US", {
       weekday: "long",
     });
     return dateResult;
   }
 
   // function to get last item in array
   function last(arr) {
     return arr[arr.length - 1];
   }
   // function to get weather info and write it to page
   function populateWeather() {
     let responseURL = `https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?q=${userSearch}&units=imperial&appid=d4f35f1397cda8a7222b2b4264b60559`;
     $.ajax({
       url: responseURL,
       method: "GET",
     }).then(function (response) {
       $(".city").text(response.name);
       const latHolder = response.coord.lat;
       const lonHolder = response.coord.lon;
       responseURL = `https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/onecall?lat=${latHolder}&lon=${lonHolder}&units=imperial&appid=d4f35f1397cda8a7222b2b4264b60559`;
 
       $.ajax({
         url: responseURL,
         method: "GET",
       }).then(function (response) {
         console.log(response);
         // write current weather to the page
         $(".dateDisp").text(`
         ${weekdayStamp(response.current.dt)}, ${timeStamp(response.current.dt)}
           `);
         $(".display-5").text(`
         ${weekdayStamp(response.current.dt)}
           `);
         $(".temp").text(`
           ${Math.ceil(response.current.temp)}°F
         `);
         $(".feelsLike").text(`
          ${response.current.weather[0].main}. Feels like ${Math.ceil(response.current.feels_like)}°F.
         `);
         $(".wind").text(`
           Wind: ${response.current.wind_speed}MPH
         `);
         $(".humidity").text(`
           Humidity: ${response.current.humidity}%
         `);
         $(".uvi")
           .text(
             `
           UV: ${response.current.uvi}
         `
           )
           .css("border-radius", "5px");
         // conditional to color code uv index
         if (response.current.uvi <= 2) {
           $("#tag").css("background-color", "#46894a");
         } else if (response.current.uvi >= 6) {
           $("#tag").css("background-color", "#cc2a02");
         } else {
           $("#tag").css("background-color", "#EC6E4C");
         }
 
         $(".main-icon").attr(
           "src",
           `http://openweathermap.org/img/wn/${response.current.weather[0].icon}@2x.png`
         );
 
         // write 5 day forcast to page
         cardArray.forEach(function (card, i) {

           cardArray[i].innerHTML = `
           <div class="col-3">${weekdayStamp(response.daily[i].dt)}, ${timeStamp(response.daily[i].dt)}
          </div>
          <div class="col-3"><img src="http://openweathermap.org/img/wn/${response.daily[i].weather[0].icon}@2x.png" style="max-height: 50px"alt=""></div>
          <div class="col-3 text-orange-500 font-bold">High:${Math.ceil(response.daily[i].temp.max)}°F</div>
           <div class="col-3"> Low:${Math.ceil(response.daily[i].temp.min)}°F</div>
         `;
         });

         //write 7 day forecast to page

                  // write 5 day forcast to page
                  cardArraySeven.forEach(function (card, i) {

                    cardArraySeven[i].innerHTML = `
                    <div class="col-3">${weekdayStamp(response.daily[i].dt)}, ${timeStamp(response.daily[i].dt)}
                   </div>
                   <div class="col-3"><img src="http://openweathermap.org/img/wn/${response.daily[i].weather[0].icon}@2x.png" style="max-height: 50px"alt=""></div>
                   <div class="col-3 text-orange-500 font-bold">High:${Math.ceil(response.daily[i].temp.max)}°F</div>
                    <div class="col-3"> Low:${Math.ceil(response.daily[i].temp.min)}°F</div>
                  `;
                  });
       });
     });
   }
   // initial weather call on page load
   populateWeather();
 
   // weather call on search button press
   $(".search-btn").on("click", function (event) {
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