 $(document).ready(function(){

  //LOADER

  const loader = document.querySelector('.loader');

  window.addEventListener('load', (event)=>{
    loader.classList.add('fadeout')
    console.log('loaded');
  })

    //NAVBAR TOGGLE
    let button = document.querySelector('.collapse-nav');
    let dropDown = document.querySelector('.dropdown');
    let navItem = document.querySelectorAll('.nav-item');


    button.addEventListener('click', function(event){
        dropDown.classList.toggle('show');
    })

    for(navItem of navItem){
        navItem.addEventListener('click', function(event){
            dropDown.classList.toggle('show');
        })
    }

    //NAVBAR SMOOTH SCROLL
    
    $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
      // On-page links
      if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
        && 
        location.hostname == this.hostname
      ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        // Does a scroll target exist?
        if (target.length) {
          // Only prevent default if animation is actually gonna happen
          event.preventDefault();
          $('html, body').animate({
            scrollTop: target.offset().top - 95
          }, 500, function() {
            console.log('done');
          });
        }
      }
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