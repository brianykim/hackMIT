$(document).ready(function(){
    $('div ul li').mouseenter(function(){
        $(this).fadeTo('fast',0.5);
    });
    $('div ul li').mouseleave(function(){
        $(this).fadeTo('fast',1);
    });
    $('#button1').mouseenter(function(){
        $(this).fadeTo('fast',1);
    });
    $('#button1').mouseleave(function(){
        $(this).fadeTo('fast',0.5);
    });
    //you can just use hover

});