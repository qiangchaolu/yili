//ͷ����������
/*��һ��*/
$(document).ready(function(){
    $("#basic_1").mouseover(function (){
        $(".ul_1").show();
    });
    $("#basic_1").mouseout(function (){
        $(".ul_1").hide();
    });
});
/*�ڶ���*/
$(document).ready(function(){
    $("#basic_2").mouseover(function (){
        $(".ul_2").show();
    });
    $("#basic_2").mouseout(function (){
        $(".ul_2").hide();
    });
});
/*������*/
$(document).ready(function(){
    $("#basic_3").mouseover(function (){
        $(".ul_3").show();
    });
    $("#basic_3").mouseout(function (){
        $(".ul_3").hide();
    });
});
/*���ĸ�*/
$(document).ready(function(){
    $("#basic_4").mouseover(function (){
        $(".ul_4").show();
    });
    $("#basic_4").mouseout(function (){
        $(".ul_4").hide();
    });
});
/*�����*/
$(document).ready(function(){
    $("#basic_5").mouseover(function (){
        $(".ul_5").show();
    });
    $("#basic_5").mouseout(function (){
        $(".ul_5").hide();
    });
});
/*������*/
$(document).ready(function(){
    $("#basic_6").mouseover(function (){
        $(".ul_6").show();
    });
    $("#basic_6").mouseout(function (){
        $(".ul_6").hide();
    });
});

//�����ͣ��������ʾ
var $search=$(".header>.header_right>ul:last-child .h_search");
$search.on("mouseenter",function(){
    $(".header>.header_right #h_search_avtive").show();
})
$search.on("mouseleave",function(){
    $(".header>.header_right #h_search_avtive").hide();
})

//�ü���enterʵ�ֵ�������Ĺ���
$search.click(function(){
    var value=$(".qsrnr").val();
    if(value.trim().length!==0){
        $(window).attr("location","http://www.baidu.com");
    }
})
$(".h_search").keyup(function(e){
    if(e.keyCode===13){
        $search.click();
    }
})

//��ͣ������ ����ͼƬת��
$(".header>.header_left>div>div#content>ul>li").mouseenter(function(e){
    e.preventDefault()//��֯Ĭ����Ϊ
    $(this).addClass("active")
        .siblings().removeClass("active")
})
//�Ų�   �������ͣ��΢��ͼ��ʱ,��ά����ʾ
$(document).ready(function(){
    $("#wxpic").mouseover(function (){
        $(".ewm").show();
    });
    $("#wxpic").mouseout(function (){
        $(".ewm").hide();
    });
})

//�����ͣ  ��������ʾ
$(document).ready(function(){
    $(".xuanfu>span").mouseover(function (){
        $(".xuanfu>span>.h_side").show();
    });
    $(".xuanfu>span").mouseout(function (){
        $(".xuanfu>span>.h_side").hide();
    });
});
