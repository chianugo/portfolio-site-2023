$(document).ready(function(){
    // Navigation Bar Script
    $(window).scroll(function(){
       if(this.scrollY > 40){
            $('.navbar').addClass("sticky");
       }else{
            $('.navbar').removeClass("sticky");
       } 
    });

    // Toggle Menu / NavBar Script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass('active');
        $('.menu-btn i').toggleClass('active');
    });

    // Carousel Script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeOut: 2000,
        autoplayHover: true,
        responsive: {
            0:{
                items: 1,
                nav: false,
            },
            600:{
                items: 2 ,
                nav: false,
            },
            1000:{
                items: 3,
                nav: false,
            }
        }
    });
});