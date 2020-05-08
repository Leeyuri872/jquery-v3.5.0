$(function(){
    tabs();  //tabs 기능 호출(=실행)
    popup(); // popup 기능 호출   
});
function tabs(){
     //공지사항 누르면 공지사항 보여주고(갤러리는 감춰라) 갤러리누르면 그 반대
     $(".board_title li").click(function(){//클릭하면 다음을 실행해
        //클릭한 것이 .on을 갖고있는지 그럼 무엇을 시킬것인지
        if(!$(this).hasClass("on")) {//on이 없다면!!
            //즉 #gallery를 선택한 것을 의미함
            $("#gallery").css("display","block");
        } else {
            $("#gallery").css("display","none");
        }
    });    
}
function popup(){
     //공지사항 첫번째 게시물을 클릭하면 팝업창을 보여줘!
     var tg =$("#notice li").first().click(function(){      
        $("#popup").css("display","block");
    })
}