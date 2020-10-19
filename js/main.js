 $(document).ready(function(){


    //NAVBAR TOGGLE
    let button = document.querySelector('.collapse-nav');
    let dropDown = document.querySelector('.dropdown');

    button.addEventListener('click', function(event){
        dropDown.classList.toggle('show');
    })
  
 });