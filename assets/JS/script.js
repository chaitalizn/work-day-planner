//Display today's date
var rightNow = moment().format('MMMM Do, YYYY - hh:mm A');
$("#currentDay").html(rightNow);

function hourTracker() {
    var currentHour = moment().hour();
    
    //loop over all hours
    $(".time-block").each(function() {
        var colorCodeHour = parseInt($(this).attr("data-hour"));
        
        if (colorCodeHour < currentHour) {
            $(this).addClass("past");
        }
        
        if (colorCodeHour === currentHour) {
            $(this).addClass("present");          
        }

        if (colorCodeHour > currentHour) {
            $(this).addClass("future");
        }
    }
    )
}

hourTracker();