$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
})

// year
var dt = new Date();
document.querySelector(".year").innerHTML = dt.getFullYear(); 

// lightgallery
$(document).ready(function() {
    $("#lightgallery").lightGallery(); 
    $("#lightgallery1").lightGallery(); 
    $("#lightgallery2").lightGallery(); 
    $("#lightgallery3").lightGallery(); 
    $('#video-gallery').lightGallery(); 
    $('#video-gallery1').lightGallery(); 
});
