$(window).scroll(function(){
    $('nav').toggleClass('scrolled', $(this).scrollTop() > 100);
    });

$(window).scroll(function(){
    $('a').toggleClass('scrolled', $(this).scrollTop() > 100);
    });