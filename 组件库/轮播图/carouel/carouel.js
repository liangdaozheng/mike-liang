
jQuery.fn.carouel=function(){
    //入侵样式
    var $carouel=this;
    $carouel.addClass("carouel")
    .children().first().addClass("wrap")
    .next().addClass("buttons")
    .nextAll().addClass("arrow")
    .first().addClass("arrow_left")
    .next().addClass("arrow_right");
    //绑定功能
    var $wrap = $(".wrap");
    //开始模式的样式，第一张的默认
    $wrap.css("left",0).next().children().first().addClass("on");
    var $next = $(".arrow_right");
    var $prev = $(".arrow_left");
    //下一张图片的单击事件
    $next.click(function () {
        next_pic();
    });
    //上一张图片的单击事件
    $prev.click(function () {
        prev_pic();
    });
    //下一张图片的函数
    function next_pic () {
        index++;
        if(index > 2){
            index = 0;
        }
        showCurrentDot();
        var newLeft;
        if(parseInt($wrap.css("left")) <= -2380){
            newLeft = 0;
        }else{
            newLeft = parseInt($wrap.css("left"))-1190;
        }
        $wrap.css("left",newLeft);
    }
    //上一张图片的函数
    function prev_pic () {
        index--;
        if(index < 0){
            index = 2;
        }
        showCurrentDot();
        var newLeft;
        if(parseInt($wrap.css("left")) >=0){
            newLeft = -2380;
        }else{
            newLeft = parseInt($wrap.css("left"))+1190;
        }
        $wrap.css("left",newLeft);
    }
    //轮播图定时器函数
    var timer = null;
    function autoPlay () {
        timer = setInterval(function () {
            next_pic();
        },1000);
    }
    autoPlay();
    //鼠标移入移除事件
    // $carouel.mouseenter(function () {
    //     clearInterval(timer);
    // })
    // $carouel.mouseleave(function () {
    //     autoPlay();    
    // })
    $carouel.hover(
        function () {
                 clearInterval(timer);
             },
        function () {
                autoPlay();    
            }
    );
    //指示符函数
    var index = 0;
    var $dots=$(".buttons").children();
    function showCurrentDot () {
          $dots.eq(index).addClass("on").siblings().removeClass("on");
         }
    // 指示符单击函数
     $dots.click(function(e){
        var $dot=$(e.target);
        var i=$dot.index();
        var dis = index - i;
        if(index == 2 && parseInt($wrap.css("left"))!==-2380){
            dis = dis - 3;     
        }
        //和使用prev和next相同，在最开始的照片3和最终的照片1在使用时会出现问题，导致符号和位数的出错，做相应地处理即可
        if(index == 0 && parseInt($wrap.css("left"))!== 0){
            dis = 3 + dis;
        }
        $wrap.css("left",(parseInt($wrap.css("left")) +  dis * 1190));
            index = i;
                console.log(index);
            showCurrentDot();
    });              
}