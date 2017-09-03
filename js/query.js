$(document).ready(function() {
    // run test on initial page load
    checkSize();

    // run test on resize of the window
    $(window).resize(checkSize);
});

//Function to the css rule
function checkSize(){
    if ($("#section-two").css("flex-direction") == "row" ){
        $("#gallery").removeClass("responsive");
    }
}
