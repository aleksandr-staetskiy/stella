function owlInitialize() {
  if ($(window).width() < 768) {
      $('.to_mobal').addClass("owl-carousel");
      $('.owl-carousel').owlCarousel({
          loop:true,    
          margin: 5,  
          nav: true,
          navText: ["<i class='fas fa-chevron-left'></i>", "<i class='fas fa-chevron-right'></i>"],
          dots: false,        
          responsive:{
              0:{
                  items:1,           
              },
              480:{
                  items:1,           
              }
            
          }
      });
  }else{
      $('.owl-carousel').owlCarousel('destroy');
      $('.to_mobal').removeClass("owl-carousel");
  }
  }
  $(document).ready(function(e) {
  owlInitialize();
  });
  $(window).resize(function() {
  owlInitialize();
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
$('.carousel').carousel({
    interval: 2000
  })


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
