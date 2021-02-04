$(function(){


    $('.ex1').click(function() {
        $('.ex1').text("Aguardando Ação");
    });

    //Um clique
    $('.ev1').on("click", function() {
        if ($(this).attr('id') == 'butao'){
            $('#butao').css("background-color", "blue");
            $('#butao').attr('id', 'butaoClicado');
            $('.ev1').text("Clicou");
        } else if ($(this).attr('id') == 'butaoClicado') {
            $('#butaoClicado').css("background-color", "black");
            $('#butaoClicado').attr('id', 'butao');
            $('.ev1').text("Um Clique");
        } 
    });

    //Duplo Clique
    $('.ev2').dblclick(function() {
        if ($(this).attr('id') == 'butao2'){
            $('#butao2').css("background-color", "blue");
            $('#butao2').attr('id', 'butaoClicado2');
            $('.ev2').text("Clicou 2 Vezes");
        } else if ($(this).attr('id') == 'butaoClicado2') {
            $('#butaoClicado2').css("background-color", "black");
            $('#butaoClicado2').attr('id', 'butao2');
            $('.ev2').text("Dois Cliques");
        } 
    });

    //Foco
    $('.ev3').focusin(function() {
        $('#butao3').css("background-color", "blue");
        $('.ex1').text("Campo Focado");
    }).focusout(function() {
        $('#butao3').css("background-color", "black");
        $('.ex1').text("Foco Removido");
    });

    //Hover - Mouse Em Cima ou Fora - Mouseenter (Suas filhas nao contam) tambem pode fazer a mesma funçao do Hover e o mouseover tambem (Suas filhas contam de novo)
    $('.ev4').hover(function() {
        $('#butao4').css("background-color", "blue");
        $('.ev4').text("Mouse em Cima");
    }).mouseout(function() {   //Mouseleave tambem pode fazer a mesma função
        $('#butao4').css("background-color", "black");
        $('.ev4').text("Mouse Fora");
    });


    //Clicar e Segurar o Mouse, e quando soltar o mouse
    $('.ev5').mousedown(function() {
        $('#butao5').css("background-color", "blue");
        $('.ev5').text("Apertou");
    }).mouseup(function() {
        $('#butao5').css("background-color", "black");
        $('.ev5').text("Soltou");
    });

    //Movimentação do Mouse no Elemento
    $('.ev6').mousemove(function(move) {
        var localX = move.pageX;
        var localY = move.pageY;

        $('#butao6').css("background-color", "blue");
        $('#butao6').text("Movimento X: " + localX + " - Movimento Y: " + localY);
    }).mouseout(function() {
        $('#butao6').css("background-color", "black");
        $('#butao6').text("Mova o Mouse no Elemento");
    });

});
    