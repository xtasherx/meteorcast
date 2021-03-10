
$(document).ready(function () {
  
   // Declare variable to hold local storage data & conditional to check if it is empty on load
   const cardArray = document.querySelectorAll(".five-day");
   const cardArraySeven = document.querySelectorAll(".seven-day");
   const cardArrayHourly = document.querySelectorAll(".hourly");
   const fiveDiv = document.querySelector(".five-day-div");
   const sevenDiv = document.querySelector(".seven-day-div");
   const hourDiv = document.querySelector(".hourly-div");
   const tabCont = document.querySelector(".tab-container");
   const navBtn = document.querySelector('.nav-btn');
   const histList = document.querySelector("#history-buttons");
  
   navigator.geolocation.getCurrentPosition((pos)=>{
    console.log(pos);
    });

   // Conditional to check if local storage is empty on load and set the userSearch value
          // let userSearch = "london";
          let historyButtons = [];
          let userSearch;
          let placeHold;

    // function to get last item in array
      function last(arr) {
        return arr[arr.length - 1];
      }

   const historyHandler = () => {
    if (localStorage.getItem("json")) {
      placeHold = JSON.parse(localStorage.getItem("json"));
      console.log(placeHold)
      placeHold.forEach((city) => {
       const history = document.querySelector("#history-buttons");
       history.innerHTML += `<li><a>${city.toLowerCase()}</a></li>`
     })
      userSearch = last(placeHold);
      historyButtons.push(last(placeHold));
    } else {
      placeHold = "london";
      userSearch = placeHold;
    }
   }
   
    //toggle dropdown on small screens
    navBtn.addEventListener("click", (e) => {
      let dropDownMenu = document.getElementById("nav")
      e.target.classList.toggle("active");
      dropDownMenu.classList.toggle('active');
    })
   
   //show and hide divs on tab selection
   tabCont.addEventListener("click", (e) => {
    const tabItems = document.querySelectorAll(".tab");
    e.target.parentElement.className += " selected";
    tabItems.forEach((tab) => {
      if(tab !== e.target.parentElement) {
        tab.classList.remove("selected");
      }
    })
      console.log(e.target.parentElement);
     if (e.target.id === "seven-day-tab") {
       sevenDiv.style.display = "block";
       fiveDiv.style.display = "none";
       hourDiv.style.display = "none";
     } else if (e.target.id ==="five-day-tab") {
       fiveDiv.style.display = "block";
       sevenDiv.style.display = "none";
       hourDiv.style.display = "none";
     } else if (e.target.id ==="hourly-tab") {
       hourDiv.style.display = "block"
       fiveDiv.style.display = "none";
       sevenDiv.style.display = "none";
     }
   })
 

   // functions to translate unix time
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
       weekday: "short",
     });
     return dateResult;
   }


   function hourStamp(unix) {
    const millisecs = unix * 1000;
    const dateObject = new Date(millisecs);
    const dateResult = dateObject.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "numeric"
    });
    return dateResult;
  }
 

   // function to get weather info and write it to page
   function populateWeather() {
     let responseURL = `https://api.openweathermap.org/data/2.5/weather?q=${userSearch}&units=imperial&appid=d4f35f1397cda8a7222b2b4264b60559`;
     $.ajax({
       url: responseURL,
       method: "GET",
     }).then(function (response) {
       $(".city").text(response.name);
        latHolder = response.coord.lat;
        lonHolder = response.coord.lon;
       responseURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${latHolder}&lon=${lonHolder}&units=imperial&appid=d4f35f1397cda8a7222b2b4264b60559`;
 

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
          $(".high").text(`
           High: ${Math.ceil(response.daily[0].temp.max)}°F
            `);
            $(".low").text(`
            Low: ${Math.ceil(response.daily[0].temp.min)}°F
             `);
             $(".sunset").text(`
             Sunset: ${hourStamp(response.current.sunset)}
              `);
              $(".sunrise").text(`
              Sunrise: ${hourStamp(response.current.sunrise)}
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
           `https://openweathermap.org/img/wn/${response.current.weather[0].icon}@2x.png`
         );
 
         // write 5 day forcast to page
         cardArray.forEach(function (card, i) {
           cardArray[i].innerHTML = `
           <div class="col-3">${weekdayStamp(response.daily[i].dt)}, ${timeStamp(response.daily[i].dt)}
          </div>
          <div class="col-3"><img src="https://openweathermap.org/img/wn/${response.daily[i].weather[0].icon}@2x.png" style="max-height: 50px"alt=""></div>
          <div class="col-3 text-orange-500 font-bold">High:${Math.ceil(response.daily[i].temp.max)}°F</div>
           <div class="col-3"> Low:${Math.ceil(response.daily[i].temp.min)}°F</div>
         `;
         });

         //write 7 day forecast to page
        cardArraySeven.forEach(function (card, i) {
          cardArraySeven[i].innerHTML = `
          <div class="col-3">${weekdayStamp(response.daily[i].dt)}, ${timeStamp(response.daily[i].dt)}
          </div>
          <div class="col-3"><img src="https://openweathermap.org/img/wn/${response.daily[i].weather[0].icon}@2x.png" style="max-height: 50px"alt=""></div>
          <div class="col-3 text-orange-500 font-bold">High:${Math.ceil(response.daily[i].temp.max)}°F</div>
          <div class="col-3"> Low:${Math.ceil(response.daily[i].temp.min)}°F</div>
        `;
        });

        //write hourly forecast to page
        cardArrayHourly.forEach(function (card, i) {
          if (i <= 12) {
            cardArrayHourly[i].innerHTML = `
            <div class="col-3">${hourStamp(response.hourly[i].dt)}
            </div>
            <div class="col-3"><img src="https://openweathermap.org/img/wn/${response.hourly[i].weather[0].icon}@2x.png" style="max-height: 50px"alt=""></div>
            <div class="col-3 text-orange-500 font-bold">${Math.ceil(response.hourly[i].temp)}°F</div>
            <div class="col-3"> ${response.hourly[i].weather[0].description}</div>
          `;
          }

        });

       });
     });
   }

   // initial weather call and history population on page load
  //  historyHandler();
   populateWeather();


  //  event handler for history dropdown 
   histList.addEventListener("click", (e) => {
     e.preventDefault();
     console.log(e.target.textContent.toLowerCase())
     userSearch = e.target.textContent.toLowerCase();
     populateWeather();
   })

   // weather call on search button press
   $(".search-btn").on("click", function (event) {
     event.preventDefault();
     userSearch = $(".searchbox").val();
     $(".searchbox").val("");
     // push user search into an array for history
     historyButtons.push(userSearch);
     localStorage.setItem("json", JSON.stringify(historyButtons));

     populateWeather();
  
   });
 });