var today = moment().format('MMMM Do YYYY, h:mm a')
console.log(today);


function showDate(){
    var currentDay = document.getElementById("current-day")
currentDay.style.display="block"
currentDay.textContent = today;
}

showDate();