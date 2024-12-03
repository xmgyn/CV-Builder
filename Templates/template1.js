function addStr(str, index, stringToAdd) {
    return str.substring(0, index) + stringToAdd + str.substring(index, str.length);
}

function appender(z, value) {
    return z.substring(0, z.length - 1) + value + z.substring(z.length - 1);
}

// Wait for the window to load
$(window).on("load", function () {
    $('.t1 .one').css("border", "3px solid white");
});

// Document ready handler for jQuery
$(document).ready(function () {
    $('.t1 .pelement').click(function () {
        // Handle the click event
        $('.t1 .pelement').css("border", "3px solid transparent");
        $(this).css("border", "3px solid white");
        $('.t1 .left_side').css("background-color", $(this).css("background-color"));
        $('.t1 .right_side .about .text h4').css("color", appender(addStr($(this).css("background-color"), 3, "a"), ", 0.82"));
        $('.t1 .right_side .percent div').css("background-color", appender(addStr($(this).css("background-color"), 3, "a"), ", 0.65"));
    });
});
