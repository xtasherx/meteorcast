// GIVEN a weather dashboard with form inputs
// WHEN I search for a city THEN I am presented with current and future conditions for that city and that city is added to the search history
/////Grab user input from search field on button click & store in a variable
let userSearch;
//// user input needs to be used to search json data for the city
// user input needs to be used to add to a buttons array of recent searches.
const historyButtons = [];

// WHEN I view current weather conditions for that city THEN I am presented with the:
// city name
// Date
// an icon representation of weather conditions
// the temperature
// the humidity
// the wind speed
// the UV index

// WHEN I view the UV index THEN I am presented with a color that indicates whether the conditions are:
// favorable
// moderate
// severe

// WHEN I view future weather conditions for that city THEN I am presented with a 5-day forecast that displays:
//  the date
//  an icon representation of weather conditions
//  the temperature
//  the humidity

// WHEN I click on a city in the search history THEN I am again presented with current and future conditions for that city
//// Buttons in city history array need to return the weather for their respective city
// WHEN I open the weather dashboard THEN I am presented with the last searched city forecast
