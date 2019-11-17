var days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];

var months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];

var dateC = new Date();

var day = days[dateC.getDay()];2
var month = months[dateC.getMonth()];

var date = `${day}, ${dateC.getDate()} ${month} ${dateC.getFullYear()}`;

function setFriday() {

    if (day=="Friday") {
        document.getElementsByClassName("banner")[0].classList.toggle("friday");
    }
}

function setDayOfWeek() {
    for (i = 0; i < 5; i++) {
        document.getElementById(`day${i + 1}name`).innerHTML = days[(dateC.getDay() + 1 + i) % 7];
    }
}

function setDate() {

    document.getElementById("date").innerHTML = date;
}

function start() {
    setFriday();
    if (!document.getElementById("current").innerHTML.includes("Home")) {
        setDayOfWeek();
    }
    setDate();
}

window.onload=start();

function openMenu() {
    document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
}