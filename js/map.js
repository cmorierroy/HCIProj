jQuery(function($){
    $('.map').append('<div class="overlay">');
    $('.map area').mouseover(function(){
        var index = $(this).index();
        var left = -index * 505 - 505;
        $('.map .overlay').css({
            backgroundPosition: left+"px 0px"
        });
    });
    $('.map').mouseout(function(){
        $('.map .overlay').css({
           backgroundPosition: "505px 0px" 
        });
    });
});