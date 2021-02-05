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
    //Sempre que uma tecla principal for digitada, mas com delay
    $('.key').keypress(function() {
        ex.text($(this).val());
    });
    */

    //Sempre que uma tecla qualquer for pressionada, mas com delay
    $('.key').keydown(function() {
        ex.text($(this).val());
    });

    //Sempre que uma tecla qualquer for pressionada, em tempo real
    $('.key').keyup(function() {
        ex.text($(this).val());
    });

    
});