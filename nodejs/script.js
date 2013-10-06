$(document).ready(function(){
    $('div ul li').mouseenter(function(){
        $(this).fadeTo('fast',0.5);
    });
    $('div ul li').mouseleave(function(){
        $(this).fadeTo('fast',1);
    })
});