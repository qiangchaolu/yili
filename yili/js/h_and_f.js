//头部二级导航
/*第一个*/
$(document).ready(function(){
    $("#basic_1").mouseover(function (){
        $(".ul_1").show();
    });
    $("#basic_1").mouseout(function (){
        $(".ul_1").hide();
    });
});
/*第二个*/
$(document).ready(function(){
    $("#basic_2").mouseover(function (){
        $(".ul_2").show();
    });
    $("#basic_2").mouseout(function (){
        $(".ul_2").hide();
    });
});
/*第三个*/
$(document).ready(function(){
    $("#basic_3").mouseover(function (){
        $(".ul_3").show();
    });
    $("#basic_3").mouseout(function (){
        $(".ul_3").hide();
    });
});
/*第四个*/
$(document).ready(function(){
    $("#basic_4").mouseover(function (){
        $(".ul_4").show();
    });
    $("#basic_4").mouseout(function (){
        $(".ul_4").hide();
    });
});
/*第五个*/
$(document).ready(function(){
    $("#basic_5").mouseover(function (){
        $(".ul_5").show();
    });
    $("#basic_5").mouseout(function (){
        $(".ul_5").hide();
    });
});
/*第六个*/
$(document).ready(function(){
    $("#basic_6").mouseover(function (){
        $(".ul_6").show();
    });
    $("#basic_6").mouseout(function (){
        $(".ul_6").hide();
    });
});

//鼠标悬停搜索框显示
var $search=$(".header>.header_right>ul>li:last-child");
$search.on("mouseenter",function(){
    $(".header>.header_right .h_search_avtive").show();
})
$search.on("mouseleave",function(){
    $(".header>.header_right .h_search_avtive").hide();
})

//让键盘enter实现点击搜索的功能
$search.click(function(){
    var value=$(".h_search_active").val();
    if(value.trim().length!==0){
        $(window).attr("location","http://www.baidu.com");
        value.removeAttr();
    }
})
$(".h_search").keyup(function(e){
    if(e.keyCode===13){
        $search.click();
    }
})

//点击导航栏 背景图片转换
$(".header>.header_left>div>div#content>ul>li").on("click",function(e){
    e.preventDefault()//组织默认行为
    $(this).addClass("active")
        .siblings().removeClass("active")
})

//脚部   当鼠标悬停在微信图上时,二维码显示
$(document).ready(function(){
    $("#wxpic").mouseover(function (){
        $(".ewm").show();
    });
    $("#wxpic").mouseout(function (){
        $(".ewm").hide();
    });
})

