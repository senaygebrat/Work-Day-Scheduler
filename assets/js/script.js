var today = moment().format('MMMM Do, YYYY');
console.log(today);

//function that will display the current day via moments method
function showDate(){
    var currentDay = $("#current-day");
    currentDay.text(today);
}


//create a function that parses a string argument into an integer
//and compares the block hour to the current hour to determine if
//the current time is past, present, or future, for styling purposes
$(".time-block").each(function(){

    var blockHour = parseInt($(this).attr("id"));
    var currentHour = moment().hours();

    console.log("Block Hour: " + blockHour);
    console.log("Current Hour: " + currentHour);

    if(blockHour === currentHour)
    {
        $(this).addClass("present");
    }
    else if(blockHour < currentHour)
    {
        $(this).removeClass("present");
        $(this).addClass("past");
    }
    else{
        $(this).removeClass("present");
        $(this).removeClass("past");
        $(this).addClass("future");
    }
});

//eventListener that allows user to locally store entries
$(".saveBtn").on("click", function(){
    var task = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");

    localStorage.setItem(time, task);
})

//iteration that cycles through a for loop from 9 am to 6 pm
for(var i = 9; i < 18; i++)
{
    $("#" + i + " .description").val(localStorage.getItem(i));
}

showDate();