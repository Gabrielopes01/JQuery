$(function(){

    $('h1').css({color: 'blue', 'font-size': '30px'});

    /*
    //Selecionando um atributo, caso haja um erro
    $('img').on("error", function(){
        $('img').attr("src", "/img/Unvailable.jpg");
        $('img').css({height: '354px', width: '320px'});
    });
    */

    /* Metodo alternativo com alerta de erro
    $('img').on("error", function(){
        var image = $(this).attr('src');
        alert("Imagem " + image + " indisponível");
        $('img').attr("src", "/img/Unvailable.jpg");
        $('img').css({height: '354px', width: '320px'});
    });
    */


    /* Imagem redimensiona sozinha preenchendo a tela toda
   $('img').width($(window).width()).height($(window).height());

    $(window).resize(function() {
        $('img').width($(window).width()).height($(window).height());
    });
    */

    
    //Eventro Scroll
    
    $('img').css({height: '1000px', width: '1000px'});
    /*
    $(window).scroll(function() {
        $('img').fadeOut("1000");
    });
    */

    $('body').css("height", "5000px");

    $(window).scroll(function() {
        var topo = $(window).scrollTop();
        //alert(topo);
        if (topo > 400) {
            $('img').fadeOut('1000');
        } else {
            $('img').fadeIn('1000');
        }
            
    });

});
    