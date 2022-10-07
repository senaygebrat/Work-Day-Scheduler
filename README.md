# Work-Day-Scheduler

![Site image](./assets/images/Work%20Day%20Scheduler.gif)

[Updated Site](https://senaygebrat.github.io/Work-Day-Scheduler/)

## About Work Day Scheduler

Work Day Scheduler is a daily calendar that allows the user to choose a time slot in the timeframe of a 9 A.M. - 6 P.M. work day, with the ability to save their submission.

## Code Snippet

Below is a preview of some of the JavaScript code to make the page functional.

```$(".time-block").each(function(){

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
```

## Author Links

[LinkedIn](https://www.linkedin.com/in/senay-gebrat-566b78250/)
[Github](https://github.com/senaygebrat)
