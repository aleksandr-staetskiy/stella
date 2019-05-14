// carousel setup 

$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout:8000,
        items: 3,
        margin: 10,
        navText: ["<i class='fas fa-chevron-left'></i>", "<i class='fas fa-chevron-right'></i>"],
        nav: true,
        responsive:{
            300:{
                items:1,
            },
            450:{
                items:1,
            },
            700:{
                items:2,
            },
            1000:{
                items:3,
            }
            
        }
    });
  });




//   burger menu setup 

$(document).ready(function () {

    $('.first-button').on('click', function () {
  
      $('.animated-icon1').toggleClass('open');
    });
    $('.second-button').on('click', function () {
  
      $('.animated-icon2').toggleClass('open');
    });
    $('.third-button').on('click', function () {
  
      $('.animated-icon3').toggleClass('open');
    });
  });

// $('.burger, .overlay').click(function(){
//     $('.burger').toggleClass('clicked');
//     $('.overlay').toggleClass('show');
//     $('nav').toggleClass('show');
//     $('body').toggleClass('overflow');
//     $('.burger-link').click(function(){
//         $('.burger, .overlay').hide(300);
//     });
//   });

//   modal
$(function() {
    return $(".carousel.lazy").on("slide", function(ev) {
      var lazy;
      lazy = $(ev.relatedTarget).find("img[data-src]");
      lazy.attr("src", lazy.data('src'));
      lazy.removeAttr("data-src");
    });
  });

//   bootstrap
// $('.carousel').carousel({
//     interval: 2000
//   })


//   smooth scroll 

$('a[href*="#"]').on('click', function(e) {
    e.preventDefault()
  
    $('html, body').animate(
      {
        scrollTop: $($(this).attr('href')).offset().top,
      },
      500,
      'linear'
    )
  })

//   preventing default on submit modal btn

(function() {
    const formButton = document.getElementById(button_modal);
    formButton.addEventListener('submit', function(e) {
        e.preventDefault();
    })
})

