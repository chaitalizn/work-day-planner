//Display today's date
var rightNow = moment().format("MMMM Do, YYYY - hh:mm A");
$("#currentDay").text(rightNow);

//colorcode past, present and future time based on current time
function hourTracker() {
    var currentHour = moment().hour();
    
    //loop over all hours
    $(".time-block").each(function() {
        var colorCodeHour = parseInt($(this).attr("data-hour"));
        
        if (colorCodeHour < currentHour) {
            $(this).removeClass("future present");
            $(this).addClass("past");
        }
        
        if (colorCodeHour === currentHour) {
            $(this).removeClass("future past");
            $(this).addClass("present");          
        }

        if (colorCodeHour > currentHour) {
            $(this).removeClass("past present");
            $(this).addClass("future");
        }
    }
    )
}

//save event and store to local storage

$(".saveBtn").click(function(){
    
    //get user input task for value and row id as a key for localstorage
    var task = $(this).siblings("textarea").val();
    var atHour = $(this).parent("div").attr("id");   

    localStorage.setItem(atHour, task);
})

//Get task from local storage if saved
$("#hour8 .description").val(localStorage.getItem("hour8"));
$("#hour9 .description").val(localStorage.getItem("hour9"));
$("#hour10 .description").val(localStorage.getItem("hour10"));
$("#hour11 .description").val(localStorage.getItem("hour11"));
$("#hour12 .description").val(localStorage.getItem("hour12"));
$("#hour13 .description").val(localStorage.getItem("hour13"));
$("#hour14 .description").val(localStorage.getItem("hour14"));
$("#hour15 .description").val(localStorage.getItem("hour15"));
$("#hour16 .description").val(localStorage.getItem("hour16"));
$("#hour17 .description").val(localStorage.getItem("hour17"));

hourTracker();