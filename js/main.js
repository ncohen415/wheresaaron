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
    //NAVBAR SCROLL
 });