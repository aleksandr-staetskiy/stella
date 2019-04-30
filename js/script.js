$(document).ready(function(){
    $('.stella-carousel__slides').slick({
        infinite: true,
        autoplay: true,
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
          







