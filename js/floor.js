;(function($){
    $(".louceng").find("li").click(function(){    //触发每个li的点击事件
        
        console.log(this)
        var t = $(".lc").eq($(this).index()).offset().top; 
        $("html").stop().animate({                     //配合动画设置滚动距离
            scrollTop:t
        })
        
    })
    
})(jQuery);