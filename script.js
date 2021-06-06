let inputSearch = document.getElementById('inputSearch') //create variables for easy repeated calling
let searchBtn = document.getElementById('searchBtn')
//let lis = document.getElementByTagName('li')
//let clearSch = document.getElementById('clear-search');
//let clearWea = document.getElementById('clear-weather');

let wapiKey = "39fdd2ce3e767ae30c3c0f6346afd94b";

searchBtn.addEventListener('click',clickSearch) //this function what to listen (click) for and what to do (run clickS function)
// *searchBtn is from html/ **clickSearch is below function I created
function clickSearch() {

    let queryURL = 'http://api.openweathermap.org/data/2.5/weather?q=' + inputSearch.value + '&units=imperial&appid=39fdd2ce3e767ae30c3c0f6346afd94b'
    fetch(queryURL)    //whatever is fetched *save as response variable* via .then
    .then(response => response.json()) //.json takes response and converts to readable form
        .then(data => displayResults(data))  //below displayResults func I made to except data object and running 
    
}
function displayResults(data) { 
    //saving temp
    let temp= data.main.temp     
    //getting element where temp will be displayed-
    let tempElement= document.getElementById("current-temp")
    //in temp element set text to temperture including the number
    tempElement.innerText="temparture"+temp
}

//let inputSearchValue = data['inputSearch'];