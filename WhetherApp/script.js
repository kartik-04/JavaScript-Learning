// Task 1: Select all the required elements from the DOM and store them in variables.
// Task 2: Create a function fetchData that will fetch the data from the weather API.
// Task 3: Create a function search that will take the input value from the form and call the fetchData function.
// Task 4: Add an event listener to the form that will call the search function when the form is submitted.
// Task 5: Create a function updateDOM that will update the DOM with the fetched data.
// Task 6: Call the fetchData function with a default city name.

const temperatureField = document.querySelector('.temp');
const form = document.querySelector('.form');
const searchfield = document.querySelector('.searchField');
const locname = document.querySelector('.time_location :nth-child(1)');
const conditionE = document.querySelector('.weather_condition img');
const dTime = document.querySelector('.time_location :nth-child(2)');

console.log(locname.textContent);
console.log(dTime.textContent);

let target = 'pune';
// let lat =  19.295233;
// let log = 72.854393;

function search(event){
    event.preventDefault();

    target = searchfield.value;

    fetchData(target); 
} 

form.addEventListener('submit', search);

async function fetchData(target) {
    try{
        let url = `https://api.weatherapi.com/v1/current.json?key=086605467ab54d5ab82115131252904&q=${target}&aqi=no`;
    
        const response = await fetch(url);
        const data = await response.json();
        console.log(data) ; 
    
        let currentTemp = data.current.temp_c;
        let localtime = data.location.localtime;
        let locationName = data.location.name;
        let conditionEmoji = data.current.condition.icon;
            
        updateDOM(currentTemp,locationName, localtime, conditionEmoji);

        // console.log(currentTemp, localtime, locationName,conditionEmoji);
        console.log(locationName,localtime);
    
    }catch(error){
        console.log(error);
    } 
}

function updateDOM(temp, location , localtime, conditionEmoji){
    temperatureField.innerText = temp; 
    temperatureField.style.color = 'orangeRed';
    temperatureField.style.fontSize = '1.5rem';
    locname.style.fontSize = '3rem';
    locname.innerText = location;
    locname.style.color = 'dodgerblue';
    conditionE.setAttribute('src', "https:" + conditionEmoji);
    dTime.innerText = localtime;
    dTime.style.color = 'Yellow';
}