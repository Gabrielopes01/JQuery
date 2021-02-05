$(function(){

    var ex = $('.ex1');
    var ex2 = $('.ex2');
    //: - Pega o valor pelo type
    var button = $(':button');

    button.click(function() {
        ex.addClass('ex2');
        ex.removeClass('ex1');

        ex2.addClass('ex1');
        ex2.removeClass('ex2');
        
    }).dblclick(function() {
        ex.addClass('ex1');
        ex.removeClass('ex2');

        ex2.addClass('ex2');
        ex2.removeClass('ex1');
    });


    $(window).scroll(function() {

        if($(this).scrollTop() > 59){
            ex.addClass('fixed');
        } else {
            ex.removeClass('fixed');
        }

    });


});
    