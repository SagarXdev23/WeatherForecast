// https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid=4fd216b13b7bd0fa275aac5d3e816a92


const temperature = document.querySelector('.temp span');
const locationField = document.querySelector('.time_location p:first-child');
const dateandTimeField = document.querySelector('.time_location p:last-child');
const conditionField = document.querySelector('.condition span');
const searchField = document.querySelector('.search_area');
const form = document.querySelector('form');

form.addEventListener('submit', searchForLocation);

let target = 'Lucknow';

const fetchResults = async (targetlocation) => {
    let url = `http://api.weatherapi.com/v1/current.json?key=800989b7d65146ebbcb132224252608&q=${targetlocation}&aqi=no`;
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);

    let locationName = `${data.location.name}, ${data.location.region}, ${data.location.country}`;
    let time = data.location.localtime;
    let temp = data.current.temp_c;
    let condition = data.current.condition.text;

    updateDom(temp, locationName, time, condition);
}

function updateDom(temp, locationName, time, condition) {
    let [splitDate, splitTime] = time.split(" ");
    let dayName = getDayName(new Date(splitDate).getDay());

    temperature.innerText = temp + '°C';
    locationField.innerText = locationName;
    dateandTimeField.innerText = `${splitTime} - ${dayName} ${splitDate}`;
    conditionField.innerText = condition;
}

function searchForLocation(e) {
    e.preventDefault();
    target = searchField.value;
    fetchResults(target);
}

fetchResults(target);

function getDayName(number) {
    switch (number) {
        case 0: return "Sunday";
        case 1: return "Monday";
        case 2: return "Tuesday";
        case 3: return "Wednesday";
        case 4: return "Thursday";
        case 5: return "Friday";
        case 6: return "Saturday";
        default: return "";
    }
}