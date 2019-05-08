// carousel setup 

$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        loop: true,
        autoplay: true,
        items: 3,
        margin: 10,
        navText: ["<i class='fas fa-chevron-left'></i>", "<i class='fas fa-chevron-right'></i>"],
        nav: true,
        responsive:{
            320:{
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

$('.burger, .overlay').click(function(){
    $('.burger').toggleClass('clicked');
    $('.overlay').toggleClass('show');
    $('nav').toggleClass('show');
    $('body').toggleClass('overflow');
  });

//   modal

$('#myModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
  })


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

