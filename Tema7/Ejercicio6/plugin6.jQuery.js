$.fn.masInformacion = function(){
    $(this).click(function(){
        $(`<img src="photos/${$(this).parent().attr('data-loc')}.jpg"></img>
        <p>Weather: ${$(this).parent().attr('data-temp')}</p>`)
        .appendTo($(this).parent());
    });
}

$.fn.todaInformacion = function(){
    $(document).ready(function(){
        $(':button').each(function(){
            $(`<img src="photos/${$(this).parent().attr('data-loc')}.jpg"></img>
            <p>Weather: ${$(this).parent().attr('data-temp')}</p>`)
            .appendTo($(this).parent());

		});
    });
}

$.fn.info3 = function(){
    $(this).click(function(){
        $(`<img src="photos/${$(this).parent().attr('data-loc')}.jpg"></img>`)
        .appendTo($(this).parent());
        setTimeout(function(){
            $(`<p>Weather: ${$('img').parent().attr('data-temp')}</p>`)
            .appendTo($('img').parent());
        },2000);
    });
}
