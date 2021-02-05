$(function(){

    //Imagem Inicial
    $('#slide img:eq(0)').addClass("ativo").show();
    var texto = $('.ativo').attr('alt');
    $('#slide').prepend('<p>'+texto+'</p>');

    //Temporizador
    setInterval(slide,3000);

    function slide() {
        
        //lenght substitui o size e pega o tamanho, se houver um elemento, ele retorna 1, senão retorna 0

        if($('.ativo').next().length){

            $('.ativo')
                .fadeOut()
                .removeClass("ativo")
                .next()
                .fadeIn()
                .addClass("ativo");

        } else {

            $('.ativo')
                .fadeOut()
                .removeClass("ativo");

            $('#slide img:eq(0)').fadeIn().addClass('ativo');

        }

        var texto = $('.ativo').attr('alt');
        $('#slide p')
            .hide()
            .html(texto)
            .delay(100)
            .fadeIn('slow');

    }

});
    