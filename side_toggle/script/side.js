$(function(){
    $(".onoff_btn").click(function(){
        $("#side").toggleClass("open");
        if($("#side").hasClass("open")){
            $(".onoff_btn").html("&lt;");
        } else{
            $(".onoff_btn").html("&gt;");
        }
    })
});