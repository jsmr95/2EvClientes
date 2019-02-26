$.fn.parpadear = function(){
    $(this).hide(0,function(){
        $(this).show();
    });
}

$.fn.parpadear2Seg = function(){
    $(this).hide(2000,function(){
        $(this).show(2000);
    });
}

$.fn.mueveDiv = function(){
    $(this).css('position','relative');
    $(this).css('left',`${parseInt($(this).css('left'))+100}px`);
    $(this).css({'font-size': `+=30px`});
}
