$(function () {
        
    $("#c").click(function () {
        
        $(".qx input:checkbox").prop("checked", $(this).prop("checked"));
    });

    $(".qx").delegate(".checkbox","click",function(){
        
        if ($(".qx input:checkbox").length === $(".qx input:checked").length) {
            
            $("#c").prop("checked", true);
        } else {
            $("#c").prop("checked", false);
        }
    })
    


})