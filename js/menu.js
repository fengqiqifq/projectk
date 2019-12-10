
;(function($){
$(".menu").children("li").mouseenter(function(){
    // console.log(this);
    // $("this")
    // .css("background","#fff");
    $(".menu")
    .children(".erji")
    .stop()
    .show();
    $(this)
    .siblings()
    .children("ul")
    .stop()
    .slideUp();
})
$(".menu").mouseleave(function(){
    $(this)
    .children(".erji")
    .stop()
    .hide();
})
})(jQuery);