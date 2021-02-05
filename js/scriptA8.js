$(function() {

    $('.place').each(function() {
        var place = $(this).attr('title');
        var input = $(this);

        console.log("Olllaa");

        input
            .val(place)
            .css("color", "#ccc")
            .focusin(function() {
                input.css("color", "#000");
                if(input.val() == place){
                    input.val('');
                }
            })
            .focusout(function() {
                if(input.val() == ''){
                    input
                        .val(place)
                        .css("color", "#ccc");
                }
            });
    });


    var ex = $('.ex1');

    /*
    $('.ev1').focus(function() {
        ex.text($(this).attr('title'));
    }).keyup(function() {
        if($(this).val() == 'pontocom'){
            $('.ev2').focus();
        }
    });

    //Foco retirado do Formulario
    $('.ev1').blur(function() {
        ex.text('Saída do Campo: ' + $(this).attr('name'));
    });
    */

    $('.ev1').change(function() {
        ex.text('Campo Alterado: ' + $(this).val());
    });


    $('.selecionar').click(function() {
        $('.ev3').select();
        $('form').submit(function() {
            return false;
        });
    });
    
});