
/*** loading ***/
$(document).ready(function () {
    $("#loading").fadeOut(1000, function () {
        $("body").css("overflow", "auto")
    });

    $(".owl-carousel").owlCarousel({ items: 4, loop: true, margin: 5 });
})

/************ */
$("#one").click(function(){
    $("#singer1").slideToggle(500),
    $("#singer2").slideUp(500),
    $("#singer3").slideUp(500),
    $("#singer4").slideUp(500)    
})

$("#two").click(function(){
    $("#singer2").slideToggle(500),
    $("#singer1").slideUp(500),
    $("#singer3").slideUp(500),
    $("#singer4").slideUp(500)  
})
$("#three").click(function(){
    $("#singer3").slideToggle(500),
    $("#singer1").slideUp(500),
    $("#singer2").slideUp(500),
    $("#singer4").slideUp(500)
})
$("#four").click(function(){
    $("#singer4").slideToggle(500),
    $("#singer1").slideUp(500),
    $("#singer3").slideUp(500),
    $("#singer2").slideUp(500)
});

$(document).ready(function(){
    $("#singer3").slideUp(),
    $("#singer2").slideUp(),
    $("#singer4").slideUp()
    $("#singer4").slideUp()
    })