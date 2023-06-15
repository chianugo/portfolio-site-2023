$(document).ready(function(){
    // Navigation Bar Script
    $(window).scroll(function(){
       if(this.scrollY > 40){
            $('.navbar').addClass("sticky");
       }else{
            $('.navbar').removeClass("sticky");
       }
       if(this.scroll > 500){
            $('.scroll-up-btn').addClass("show");
       }else{
            $('.scroll-up-btn').removeClass("show");
       }
    });

    // Slide Up Script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
    });

    // Toggle Menu / NavBar Script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass('active');
        $('.menu-btn i').toggleClass('active');
    });

    // Typing Animation Script
    var typed = new Typed(".typing", {
        strings: ["Developer", "Designer", "Researcher"],
        typeSpeed: 100, 
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Developer", "Designer", "Researcher"],
        typeSpeed: 100, 
        backSpeed: 60,
        loop: true
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