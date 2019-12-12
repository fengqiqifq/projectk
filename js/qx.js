;(function($){
    $(function () {
            
        $("#c").click(function () {
            console.log(1)
            $(".qx input:checkbox").prop("checked", $(this).prop("checked"));
        });

       $(".qx").on("click",".c",function(){
            console.log(2)
            if ($(".qx input:checkbox").length === $(".qx input:checked").length) {
                
                $("#c").prop("checked", true);
            } else {
                $("#c").prop("checked", false);
            }
        })
       
       
        
        


    })
})(jQuery);
