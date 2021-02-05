$(function(){

    var ex = $('.ex1');

    //Esconde o elemento
    $('.ev1').click(function() {
        ex.hide('slow');
    });

    //Revele o elemento
    $('.ev2').click(function() {
        ex.show('slow');
    });

    //Esconde e Revela o elemento no mesmo botão
    $('.ev3').click(function() {
        ex.toggle('slow');
    });


    $('.ev4').keyup(function() {
        var texto = $(this).val();

        if(texto == 'hide') {
            ex.hide('slow');
        } else if (texto == 'show') {
            ex.show('slow');
        } else if (texto == 'toggle') {
            ex.toggle('slow');
        }
    });

});
    