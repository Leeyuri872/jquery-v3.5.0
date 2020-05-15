$(function(){
    tabs();  //tabs 기능 호출(=실행)
    popup(); // popup 기능 호출   
    gnb(); //gnb 기능 호출
});

function gnb(){
    $("#gnb > li").hover(
        function(){
            //마우스 오버시 실행할 코드
            $(this).addClass("on");
            $(".lnb").show();
        },
        function(){
            //마우스 아웃시 실행할 코드
            $(this).removeClass("on");
            $(".lnb").hide();
        }
    );

    
   
   
   
   
    // $("#gnb > li").mouseover(function(){
    //     $(this).addClass("on"); //.on을 적용해
    //     $(".lnb").show();
    // });
    // $(".lnb")
    // $("#gnb > li").mouseout(function(){
    //     $(this).removeClass("on"); //.on을 제거해
    //     $(".lnb").hide();
    // });
}

function tabs(){
    $(".board_title li").click(function(){
        if($(this).hasClass("on")){
            //on을 갖고 있다면?
            //아무것도 할게 없어요..
        } else {//아니면
            $(this).siblings().removeClass("on");
            $(this).addClass("on");
            $("#gallery").toggleClass("hide");
            
            //on을 갖고 있지 않다면?
            //기존에 누군가 갖고 있던 on을 삭제하고,
            //지금 클릭한 (on에 없던 것에) 추가해
        }
    });
}
function popup(){
    popup_open();
    popup_close();
}
function popup_open(){
    $("#notice li").first().click(function(){      
        $("#popup").css("display","block");
    });
}
function popup_close(){
    $("#popup input[type=button]").click(function(){
        $(this).parent().css("display","none");
        //부모를 감추면 자식인 나도 없어지겠죠
    })
}