$(function(){

    //resize
    var widthInitial = $(window).width();
    $(window).resize(function(){
        var main = $('#main');
        var resultado = main.find('.square');
        var widthAtual = $(this).width();
        var proporcao = widthAtual / widthInitial;
        var newSquareWIDTH = 350 * proporcao; 
       
        resultado.css("width",newSquareWIDTH + 'px');
        resultado.css("height",newSquareWIDTH + 'px');

        $('.square').addClass('squareAfter')
    
    });

    //mudarFade
    function modifyDataAOS() {
        var content = $('.flexdisplay').find('.flexcontent');

        if ($(window).width() <= 1000) {
            var direction = 'right';

            $(content).each(function (index) {
                $(this).attr('data-aos', 'fade-' + direction);
                direction = direction === 'right' ? 'left' : 'right';
            });
        } else {
            $(content).each(function (index) {
                $(this).attr('data-aos', originalDataAOS[index]);
            });
        }
    }
    var originalDataAOS = [];
    $('.flexdisplay').find('.flexcontent').each(function () {
        originalDataAOS.push($(this).attr('data-aos'));
    });

    $(window).on('resize', modifyDataAOS);
    modifyDataAOS();
    /*====================================*/

    //acompanhar
    skeweffect()
    function skeweffect(){
        var elemento = $('.flexCard__main');
        var flexcontent = $('.flexcontent');

        elemento.mousemove(function(event){
            var elementoWidth = elemento.width();
            var elementoHeight = elemento.height();

            var centerX = elementoWidth / 2;
            var centerY = elementoHeight / 2;

            var mouseX = event.pageX - elemento.offset().left;
            var mouseY = event.pageY - elemento.offset().top;

            var percentX = (mouseX - centerX) / centerX;
            var percentY = (mouseY - centerY) / centerY;

            var maxTilt = 10; // Máxima inclinação em graus

            var tiltX = -percentY * maxTilt;
            var tiltY = percentX * maxTilt;

            elemento.css('transform', 'perspective(1000px) rotateX(' + tiltX + 'deg) rotateY(' + tiltY + 'deg)');
        });
        
        elemento.mouseleave(function(){
            elemento.css('transform', 'perspective(1000px) rotateX(0deg) rotateY(0deg)');
        });

        
        
    }

    //navegar
    navegation($('.footercontent a'),0);
    function navegation(el,res){
        el.click(function(event){

            var ancora = $(this);
            var calculo = $(ancora.attr('href')).offset().top;

            if(res){
                animacao = calculo - res;
            }else{
                animacao = calculo;
            }

            $('html,body').stop().animate({
                scrollTop: animacao,
            },1000);

            event.preventDefault()
        });
    };


});