var today = moment().format('MMMM Do YYYY, h:mm a');
console.log(today);


function showDate(){
    var currentDay = $("#current-day");
    currentDay.text(today);
}

$(".time-block").each(function(){

    var blockHour = parseInt($(this).attr("id"));
    var currentHour = moment().hours();

    console.log("Block Hour: "+blockHour);
    console.log("Current Hour: "+currentHour);

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

$(".saveBtn").on("click", function(){
    var task = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");

    localStorage.setItem(time, task);
})

for(var i=9; i<13; i++)
{
    $("#"+i+" .description").val(localStorage.getItem(i));
}

showDate();