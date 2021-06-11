let inputSearch = document.getElementById('inputSearch') //create variables for easy repeated calling
let searchBtn = document.getElementById('searchBtn')

let wapiKey = "39fdd2ce3e767ae30c3c0f6346afd94b";

searchBtn.addEventListener('click',clickSearch) //this function what to listen (click) for and what to do (run clickS function)

//searchBtn is from html/ **clickSearch is below function I created
function clickSearch() {
    let queryURL = 'http://api.openweathermap.org/data/2.5/weather?q=' + inputSearch.value + '&units=imperial&lat,lon&appid=39fdd2ce3e767ae30c3c0f6346afd94b'
    fetch(queryURL)    //whatever is fetched *save as response variable* via .then
    .then(response => response.json()) //.json takes response and converts to readable form
    .then(data => displayResults(data)) //below displayResults func I made to except data object and running  

}
function displayResults(data) { 
    console.log(data)
    //saving weather values
    let temp = data.main.temp;  //From inspect info pulled from API click main drop down  
    let humidity = data.main.humidity; 
    let windspeed = data.wind.speed;
    let feelslike = data.main.feels_like;

    //getting element where temp will be displayed-
    let tempElement= document.getElementById("current-temp");
    let humidityElement= document.getElementById("current-humidity")
    let windspeedElement= document.getElementById("current-wind");
    let feelslikeElement= document.getElementById("feels-like");

    //in temp element set text to temperature including the number
    tempElement.innerText = "Temperature: " +temp;
    humidityElement.innerText = "Humidity: " +humidity;
    windspeedElement.innerText = "Wind Speed: " +windspeed;
    feelslikeElement.innerText = "Feels Like: " +feelslike;

}

/*      // attempt at 5day forcast
   //let wapiKey = "39fdd2ce3e767ae30c3c0f6346afd94b";

 searchBtn.addEventListener('click',clickSearch) //this function what to listen (click) for and what to do (run clickS function)

function clickSearch() {
    let queryURL = 'http://api.openweathermap.org/data/2.5/forecast?q=' + inputSearch.value + '&units=imperial&lat,lon&appid=39fdd2ce3e767ae30c3c0f6346afd94b'
    fetch(queryURL)    //whatever is fetched *save as response variable* via .then
    .then(response => response.json()) //.json takes response and converts to readable form
    .then(data => displayResultsfive(data)) //below displayResults func I made to except data object and running  


}
   function displayResultsfive(data){
    console.log(data);    
    
       // console.log("displayResultsfive "+data);
     
                 //saving weather values
        let temperature = data.list.dt_txt;  //From inspect info pulled from API click main drop down  
        let humidity = data.list.main.humidity; 
        let wind = data.list.main.wind.speed;
        let feellike = data.list.main.feels_like;
        let wicon = data.list.weather[0].icon 

        //getting element where temp will be displayed-
    let tempElement= document.getElementById("temperature");
    let humidityElement= document.getElementById("humidity")
    let windspeedElement= document.getElementById("wind");
    let feelslikeElement= document.getElementById("feel-like");

 //in temp element set text to temperature including the number
 tempElement.innerText = "Temperature: " +temperature;
 humidityElement.innerText = "Humidity: " +humidity;
 windspeedElement.innerText = "Wind Speed: " +wind;
 feelslikeElement.innerText = "Feels Like: " +feel-like; 
} */