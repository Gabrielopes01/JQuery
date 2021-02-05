$(function(){

    var ex = $('.ex1');
    var ex2 = $('.ex2');
    //: - Pega o valor pelo type
    var button = $(':button');
/*
    button.click(function(){
        ex.fadeOut("slow");
    }).dblclick(function() {
        ex.fadeIn("slow");
    });
*/

/*
    //Da uma transparencia ao objeto
    button.click(function(){
        ex.fadeTo("slow", 0.5);
    }).dblclick(function() {
        ex.fadeTo("slow",1.0);
    });
*/

/*
    //Faz o objeto desaparecer e reaparecer
    button.click(function(){
        ex.fadeToggle("slow");
    });
*/

    //Após o primeiro evento acabar, a função dele chama o 2 evento
    button.click(function(){
        
        ex.fadeTo(2000, 0.5, function() {
            ex2.fadeTo("slow", 0.2);
        });
        

    });


});
    