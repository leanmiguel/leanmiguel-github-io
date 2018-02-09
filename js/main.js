$(document).ready(function(){

    
  var firstImg = $('.slider-inner img:last');
  var lastImg = $('.slider-inner img:first');

    $('.next').on('click', function(){
      var currentImg = $('.active');
      var nextImg = currentImg.next();
  
      if(nextImg.length){
        currentImg.removeClass('active').css('z-index', -10);
        nextImg.addClass('active animated fadeIn').css('z-index', 10);
      }
      else{
        currentImg.removeClass('active').css('z-index', -10);
        lastImg.addClass('active animated fadeIn').css('z-index', 10);
      
      }
    });


    $('.prev').on('click',function(){
        var currentImg = $('.active');
        var prevImg = currentImg.prev();

        if(prevImg.length){
            currentImg.removeClass('active').css('z-index',-10);
            prevImg.addClass('active').css('z-index', 10);
        }
        else{
            currentImg.removeClass('active').css('z-index', -10);
            firstImg.addClass('active').css('z-index', 10);
          }
    });


});
