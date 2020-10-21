 $(document).ready(function(){

    //NAVBAR TOGGLE
    let button = document.querySelector('.collapse-nav');
    let dropDown = document.querySelector('.dropdown');
    let navItem = document.querySelectorAll('.nav-item');

    console.log(navItem);


    button.addEventListener('click', function(event){
        dropDown.classList.toggle('show');
    })

    for(navItem of navItem){
        navItem.addEventListener('click', function(event){
            dropDown.classList.toggle('show');
        })
    }

    //NAVBAR SMOOTH SCROLL

    $("#music").click(function() {
        $('html,body').animate({
            scrollTop: $("#music-section").offset().top -95},
            1000);
    });
    $("#video").click(function() {
        $('html,body').animate({
            scrollTop: $("#video-section").offset().top -95},
            1000);
    });
    $("#events").click(function() {
        $('html,body').animate({
            scrollTop: $("#events-section").offset().top -95},
            1000);
    });
    $("#about").click(function() {
        $('html,body').animate({
            scrollTop: $("#about-section").offset().top -95},
            1000);
    });
    $("#contact").click(function() {
        $('html,body').animate({
            scrollTop: $("#contact-section").offset().top -95},
            1000);
    });


    //EASTER EGG ANIMATION
    let egg = document.querySelector('.archive');

    egg.addEventListener('mouseover', function(event){
        egg.classList.add('animate');
    })
    egg.addEventListener('mouseout', function(event){
        egg.classList.remove('animate');
    })


 });