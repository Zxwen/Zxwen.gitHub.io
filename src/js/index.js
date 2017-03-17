$(function(){
    $(".left-ul").find("li").mousemove(function(){
        var i=$(this).index();
        $(".center-ul li").eq(i).css("opacity","1").siblings().css("opacity","0");
        $(".vid").css("opacity",".2");
    });
    $(".left-ul").find("li").mouseout(function(){
        var i=$(this).index();
        $(".center-ul li").eq(i).css("opacity","0");
     $(".vid").css("opacity","1");
    })
});
//$(function(){
//    $(".left-tan").find("i").click(function(){
// $(this).css("display","none").siblings().css("display","block");
//    var i=$(this).index();
//        console.log(i);
//        if(i==1){
//            $("#left-box").css("left","0");
//        };
//        if(i==0){
//            $("#left-box").css("left","-200px");
//        }
//    })
//})
(function(){
    var a=document.getElementById("a"),
        b=document.getElementById("b"),
        box=document.getElementById("left-box");
    b.onclick=function(){
        b.style.display="none";
        a.style.display="block";
        box.style.left=0;
    }
    a.onclick=function(){
        a.style.display="none";
        b.style.display="block";
        box.style.left=-200+"px";
    }
})()

$(function(){
    $("#weixin1").mousemove(function(){
        $(".ewm").css("top","0");
    });
     $("#weixin1").mouseout(function(){
        $(".ewm").css("top","-300px");
    });
    
})
$(function(){
    $("#qq").mousemove(function(){
        $(".qqewm").css("top","0");
    });
     $("#qq").mouseout(function(){
        $(".qqewm").css("top","-300px");
    });
    
})


$(function(){
    $(".nav-left-bar").click(function(){
        $(".nav-left").animate({left:"-50%"});
        $(".nav-right").animate({right:"-50%"});
        timer=setInterval(z,4000)
    })
    $(".nav-right-bar").click(function(){
        $(".nav-left").animate({left:"-50%"});
        $(".nav-right").animate({right:"-50%"});
        timer=setInterval(z,4000)
    })
       function z(){
                $("nav").css("z-index","-1");
            }
  
})

