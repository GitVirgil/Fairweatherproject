let wapiKey = "39fdd2ce3e767ae30c3c0f6346afd94b";

let city;
let state;
let country;

let queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + wapiKey;

fetch(queryURL) 


console.log(wapiKey)
