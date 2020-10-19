 $(document).ready(function(){

    //NAVBAR TOGGLE
    let button = document.querySelector('.collapse-nav');
    let dropDown = document.querySelector('.dropdown');

    button.addEventListener('click', function(event){
        dropDown.classList.toggle('show');
    })

    //NAVBAR SCROLL

    $("#music").click(function() {
        $('html').animate({
            scrollTop: $("#music-section").offset().top-200
        }, 1000);
    });

    $("#video").click(function() {
        $('html, body').animate({
            scrollTop: $("#video-section").offset().top-200
        }, 1000);
    });
    $("#events").click(function() {
        $('html, body').animate({
            scrollTop: $("#events-section").offset().top-200
        }, 1000);
    });
    $("#about").click(function() {
        $('html, body').animate({
            scrollTop: $("#about-section").offset().top-200
        }, 1000);
    });
    $("#contact").click(function() {
        $('html, body').animate({
            scrollTop: $("#contact-section").offset().top-200
        }, 1000);
    });


 });