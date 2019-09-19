var date = new Date;
var numberDate = date.getDate();
var thisDay = date.getDay();
var thisMonth = date.getMonth();
var thisYear = date.getFullYear();
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
document.getElementById("currentDate").innerHTML = " " + days[thisDay] + ", " + numberDate + " " + months[thisMonth] + " " + thisYear;