<template>
    <div class="container">
    <div id="top" class="row">
       <div class="col-md-4 col-sm-12">
            <span></span>
            <span>言情小说</span>
            <a>
                <img :src="'http://127.0.0.1:3000/'+mylist.img" alt="">
                <img src="img/detail/shadow.gif" alt="">
            </a>    
       </div>
       <div class="col-md-8 col-sm-12 p-0">
            <div id="top1">
                <h5>
                    {{mylist.title}}
                </h5>
                <span class="my_small_12">作者:{{mylist.author}}</span>
                <span class="my_small_12">字数:128.1万字</span>
                <span class="my_small_12">出版社:中国友谊出版公司</span>
            </div>
            <div id="top2">
                <span class="my_small_12">价格:2振金</span>
                <span class="my_small_12">|</span>
                <span class="my_small_12">原价5振金</span>
                <div>
                        <a href="#">免费试读</a>
                        <a href="#">购买</a>
                </div>
                <img src="img/detail/look_phone.jpg" alt="">
                <img src="img/detail/ewm.png" alt="">
            </div>
            <div id="top3">
                <p class="my_small_12">
                   {{mylist.subtitle}}          
                </p>
                <a class="my_small_12" href="#">
                    展开
                    <s></s>
                </a>
            </div>
       </div>
    </div>
    <div class="row pb-4">
        <div class="col-md-8 col-sm-12 bg-white p-0">
            <div class="my_style_top1">
                <span>书圈</span>
                <span>|</span>
                <span>共83500人,17855条</span>
                <a href="#">
                    <s></s>
                    <span class="my_small_12">我来说两句</span>
                </a>
            </div>
            <ul class="my_top2">
                <li>
                    <div>
                        <div class="row">
                            <div class="col-1">
                                    <img class="my_img p-0" src="img/detail/10.jpg" alt="">
                            </div>
                            <div class="col-11 my_r">
                                <div class="style_top2_1">
                                    <p class="font_14">韩梅梅</p>
                                    <span class="my_small_12">LV11</span>
                                    <span class="my_small_12">2019-05-11</span>
                                </div>
                                <div class="style_top2_2">
                                    <img src="img/detail/yStar.png" alt="">
                                    <img src="img/detail/yStar.png" alt="">
                                    <img src="img/detail/yStar.png" alt="">
                                    <img src="img/detail/yStar.png" alt="">
                                    <img src="img/detail/gStar.png" alt="">
                                </div>
                                <div class="style_top2_3">
                                    <a class="my_font_14" href="#">
                                        <s class="my_sp">书评</s>
                                        其实对第一个故事不感冒，觉得很平常，本来就准备看第一个故事后面的两个故事就不看了，但是发现第二个故事是写李拜天的，好嗨森，就往下看了。
                                        第一个故事里我最喜欢的人就是李拜天，即使你们会说他色也罢，就是很喜欢他。如果非要说个理由，那就是他不计回报地帮助丛优圆她的明星梦，他并不是为了色，至少在他动丛优之前他是花了三百万捧她的。不过我也弄不明白他为何要对丛优这样好，看了第二个故事才明白——丛优只是他情感的寄托，优优公主和他心里藏...
                                    </a>
                                </div>
                                <div class="style_top2_4">
                                    <img src="img/detail/zan.gif" alt="">
                                    <span class="my_small_12">3</span>
                                    <span class="my_small_12 my_m">|</span>
                                    <img src="img/detail/hf.gif" alt="">
                                    <span class="my_small_12">7</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
                <li>
                    <div>
                        <div class="row">
                            <div class="col-1">
                                <img class="my_img p-0" src="img/detail/2.jpg" alt="">
                            </div>
                            <div class="col-11 my_r">
                                <div class="style_top2_1">
                                            <p class="font_14">韩梅梅</p>
                                            <span class="my_small_12">LV11</span>
                                            <span class="my_small_12">2019-05-11</span>
                                </div>
                                <div class="style_top2_2">
                                            <img src="img/detail/yStar.png" alt="">
                                            <img src="img/detail/yStar.png" alt="">
                                            <img src="img/detail/yStar.png" alt="">
                                            <img src="img/detail/yStar.png" alt="">
                                            <img src="img/detail/gStar.png" alt="">
                                </div>
                                <div class="style_top2_3">
                                            <a class="my_font_14" href="#">
                                                <s class="my_sp">书评</s>
                                                其实对第一个故事不感冒，觉得很平常，本来就准备看第一个故事后面的两个故事就不看了，但是发现第二个故事是写李拜天的，好嗨森，就往下看了。
                                                第一个故事里我最喜欢的人就是李拜天，即使你们会说他色也罢，就是很喜欢他。如果非要说个理由，那就是他不计回报地帮助丛优圆她的明星梦，他并不是为了色，至少在他动丛优之前他是花了三百万捧她的。不过我也弄不明白他为何要对丛优这样好，看了第二个故事才明白——丛优只是他情感的寄托，优优公主和他心里藏...
                                            </a>
                                </div>
                                <div class="style_top2_4">
                                        <img src="img/detail/zan.gif" alt="">
                                        <span class="my_small_12">3</span>
                                        <span class="my_small_12 my_m">|</span>
                                        <img src="img/detail/hf.gif" alt="">
                                        <span class="my_small_12">7</span>
                            </div>
                            </div>
                            </div>
                    </div>
                </li>
                <li>
                    <div>
                        <div class="row">
                            <div class="col-1">
                                    <img class="my_img p-0" src="img/detail/3.jpg" alt="">
                            </div>
                            <div class="col-11 my_r">
                                <div class="style_top2_1">
                                                <p class="font_14">韩梅梅</p>
                                                <span class="my_small_12">LV11</span>
                                                <span class="my_small_12">2019-05-11</span>
                                </div>
                                <div class="style_top2_2">
                                                <img src="img/detail/yStar.png" alt="">
                                                <img src="img/detail/yStar.png" alt="">
                                                <img src="img/detail/yStar.png" alt="">
                                                <img src="img/detail/yStar.png" alt="">
                                                <img src="img/detail/gStar.png" alt="">
                                </div>
                                <div class="style_top2_3">
                                                <a class="my_font_14" href="#">
                                                    <s class="my_sp">书评</s>
                                                    其实对第一个故事不感冒，觉得很平常，本来就准备看第一个故事后面的两个故事就不看了，但是发现第二个故事是写李拜天的，好嗨森，就往下看了。
                                                    第一个故事里我最喜欢的人就是李拜天，即使你们会说他色也罢，就是很喜欢他。如果非要说个理由，那就是他不计回报地帮助丛优圆她的明星梦，他并不是为了色，至少在他动丛优之前他是花了三百万捧她的。不过我也弄不明白他为何要对丛优这样好，看了第二个故事才明白——丛优只是他情感的寄托，优优公主和他心里藏...
                                                </a>
                                </div>
                                <div class="style_top2_4">
                                    <img src="img/detail/zan.gif" alt="">
                                    <span class="my_small_12">3</span>
                                    <span class="my_small_12 my_m">|</span>
                                    <img src="img/detail/hf.gif" alt="">
                                    <span class="my_small_12">7</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
                <li>
                        <div>
                            <div class="row">
                                <div class="col-1">
                                        <img class="my_img p-0" src="img/detail/4.jpg" alt="">
                                </div>
                                <div class="col-11 my_r">
                                    <div class="style_top2_1">
                                        <p class="font_14">韩梅梅</p>
                                        <span class="my_small_12">LV11</span>
                                        <span class="my_small_12">2019-05-11</span>
                                    </div>
                                    <div class="style_top2_2">
                                        <img src="img/detail/yStar.png" alt="">
                                        <img src="img/detail/yStar.png" alt="">
                                        <img src="img/detail/yStar.png" alt="">
                                        <img src="img/detail/yStar.png" alt="">
                                        <img src="img/detail/gStar.png" alt="">
                                    </div>
                                    <div class="style_top2_3">
                                        <a class="my_font_14" href="#">
                                            <s class="my_sp">书评</s>
                                            其实对第一个故事不感冒，觉得很平常，本来就准备看第一个故事后面的两个故事就不看了，但是发现第二个故事是写李拜天的，好嗨森，就往下看了。
                                            第一个故事里我最喜欢的人就是李拜天，即使你们会说他色也罢，就是很喜欢他。如果非要说个理由，那就是他不计回报地帮助丛优圆她的明星梦，他并不是为了色，至少在他动丛优之前他是花了三百万捧她的。不过我也弄不明白他为何要对丛优这样好，看了第二个故事才明白——丛优只是他情感的寄托，优优公主和他心里藏...
                                        </a>
                                    </div>
                                    <div class="style_top2_4">
                                        <img src="img/detail/zan.gif" alt="">
                                        <span class="my_small_12">3</span>
                                        <span class="my_small_12 my_m">|</span>
                                        <img src="img/detail/hf.gif" alt="">
                                        <span class="my_small_12">7</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                </li>
                <li>
                        <div>
                            <div class="row">
                                <div class="col-1">
                                        <img class="my_img p-0" src="img/detail/5.jpg" alt="">
                                </div>
                                <div class="col-11 my_r">
                                    <div class="style_top2_1">
                                        <p class="font_14">韩梅梅</p>
                                        <span class="my_small_12">LV11</span>
                                        <span class="my_small_12">2019-05-11</span>
                                    </div>
                                    <div class="style_top2_2">
                                        <img src="img/detail/yStar.png" alt="">
                                        <img src="img/detail/yStar.png" alt="">
                                        <img src="img/detail/yStar.png" alt="">
                                        <img src="img/detail/yStar.png" alt="">
                                        <img src="img/detail/gStar.png" alt="">
                                    </div>
                                    <div class="style_top2_3">
                                        <a class="my_font_14" href="#">
                                            <s class="my_sp">书评</s>
                                            其实对第一个故事不感冒，觉得很平常，本来就准备看第一个故事后面的两个故事就不看了，但是发现第二个故事是写李拜天的，好嗨森，就往下看了。
                                            第一个故事里我最喜欢的人就是李拜天，即使你们会说他色也罢，就是很喜欢他。如果非要说个理由，那就是他不计回报地帮助丛优圆她的明星梦，他并不是为了色，至少在他动丛优之前他是花了三百万捧她的。不过我也弄不明白他为何要对丛优这样好，看了第二个故事才明白——丛优只是他情感的寄托，优优公主和他心里藏...
                                        </a>
                                    </div>
                                    <div class="style_top2_4">
                                        <img src="img/detail/zan.gif" alt="">
                                        <span class="my_small_12">3</span>
                                        <span class="my_small_12 my_m">|</span>
                                        <img src="img/detail/hf.gif" alt="">
                                        <span class="my_small_12">7</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                </li>
                <li>
                        <div>
                            <div class="row">
                                <div class="col-1">
                                        <img class="my_img p-0" src="img/detail/6.jpg" alt="">
                                </div>
                                <div class="col-11 my_r">
                                    <div class="style_top2_1">
                                        <p class="font_14">韩梅梅</p>
                                        <span class="my_small_12">LV11</span>
                                        <span class="my_small_12">2019-05-11</span>
                                    </div>
                                    <div class="style_top2_2">
                                        <img src="img/detail/yStar.png" alt="">
                                        <img src="img/detail/yStar.png" alt="">
                                        <img src="img/detail/yStar.png" alt="">
                                        <img src="img/detail/yStar.png" alt="">
                                        <img src="img/detail/gStar.png" alt="">
                                    </div>
                                    <div class="style_top2_3">
                                        <a class="my_font_14" href="#">
                                            <s class="my_sp">书评</s>
                                            其实对第一个故事不感冒，觉得很平常，本来就准备看第一个故事后面的两个故事就不看了，但是发现第二个故事是写李拜天的，好嗨森，就往下看了。
                                            第一个故事里我最喜欢的人就是李拜天，即使你们会说他色也罢，就是很喜欢他。如果非要说个理由，那就是他不计回报地帮助丛优圆她的明星梦，他并不是为了色，至少在他动丛优之前他是花了三百万捧她的。不过我也弄不明白他为何要对丛优这样好，看了第二个故事才明白——丛优只是他情感的寄托，优优公主和他心里藏...
                                        </a>
                                    </div>
                                    <div class="style_top2_4">
                                        <img src="img/detail/zan.gif" alt="">
                                        <span class="my_small_12">3</span>
                                        <span class="my_small_12 my_m">|</span>
                                        <img src="img/detail/hf.gif" alt="">
                                        <span class="my_small_12">7</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                </li>
                <li>
                        <div>
                            <div class="row">
                                <div class="col-1">
                                        <img class="my_img p-0" src="img/detail/7.jpg" alt="">
                                </div>
                                <div class="col-11 my_r">
                                    <div class="style_top2_1">
                                        <p class="font_14">韩梅梅</p>
                                        <span class="my_small_12">LV11</span>
                                        <span class="my_small_12">2019-05-11</span>
                                    </div>
                                    <div class="style_top2_2">
                                        <img src="img/detail/yStar.png" alt="">
                                        <img src="img/detail/yStar.png" alt="">
                                        <img src="img/detail/yStar.png" alt="">
                                        <img src="img/detail/yStar.png" alt="">
                                        <img src="img/detail/gStar.png" alt="">
                                    </div>
                                    <div class="style_top2_3">
                                        <a class="my_font_14" href="#">
                                            <s class="my_tl">讨论</s>
                                            其实对第一个故事不感冒，觉得很平常，本来就准备看第一个故事后面的两个故事就不看了，但是发现第二个故事是写李拜天的，好嗨森，就往下看了。
                                            第一个故事里我最喜欢的人就是李拜天，即使你们会说他色也罢，就是很喜欢他。如果非要说个理由，那就是他不计回报地帮助丛优圆她的明星梦，他并不是为了色，至少在他动丛优之前他是花了三百万捧她的。不过我也弄不明白他为何要对丛优这样好，看了第二个故事才明白——丛优只是他情感的寄托，优优公主和他心里藏...
                                        </a>
                                    </div>
                                    <div class="style_top2_4">
                                        <img src="img/detail/zan.gif" alt="">
                                        <span class="my_small_12">3</span>
                                        <span class="my_small_12 my_m">|</span>
                                        <img src="img/detail/hf.gif" alt="">
                                        <span class="my_small_12">7</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                </li>
                <li>
                        <div>
                            <div class="row">
                                <div class="col-1">
                                        <img class="my_img p-0" src="img/detail/9.png" alt="">
                                </div>
                                <div class="col-11 my_r">
                                    <div class="style_top2_1">
                                        <p class="font_14">韩梅梅</p>
                                        <span class="my_small_12">LV11</span>
                                        <span class="my_small_12">2019-05-11</span>
                                    </div>
                                    <div class="style_top2_2">
                                        <img src="img/detail/yStar.png" alt="">
                                        <img src="img/detail/yStar.png" alt="">
                                        <img src="img/detail/yStar.png" alt="">
                                        <img src="img/detail/yStar.png" alt="">
                                        <img src="img/detail/gStar.png" alt="">
                                    </div>
                                    <div class="style_top2_3">
                                        <a class="my_font_14" href="#">
                                            <s class="my_tl">讨论</s>
                                            其实对第一个故事不感冒，觉得很平常，本来就准备看第一个故事后面的两个故事就不看了，但是发现第二个故事是写李拜天的，好嗨森，就往下看了。
                                            第一个故事里我最喜欢的人就是李拜天，即使你们会说他色也罢，就是很喜欢他。如果非要说个理由，那就是他不计回报地帮助丛优圆她的明星梦，他并不是为了色，至少在他动丛优之前他是花了三百万捧她的。不过我也弄不明白他为何要对丛优这样好，看了第二个故事才明白——丛优只是他情感的寄托，优优公主和他心里藏...
                                        </a>
                                    </div>
                                    <div class="style_top2_4">
                                        <img src="img/detail/zan.gif" alt="">
                                        <span class="my_small_12">3</span>
                                        <span class="my_small_12 my_m">|</span>
                                        <img src="img/detail/hf.gif" alt="">
                                        <span class="my_small_12">7</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                </li>
                <li>
                        <div>
                            <div class="row">
                                <div class="col-1">
                                        <img class="my_img p-0" src="img/detail/1.jpg" alt="">
                                </div>
                                <div class="col-11 my_r">
                                    <div class="style_top2_1">
                                        <p class="font_14">韩梅梅</p>
                                        <span class="my_small_12">LV11</span>
                                        <span class="my_small_12">2019-05-11</span>
                                    </div>
                                    <div class="style_top2_2">
                                        <img src="img/detail/yStar.png" alt="">
                                        <img src="img/detail/yStar.png" alt="">
                                        <img src="img/detail/yStar.png" alt="">
                                        <img src="img/detail/yStar.png" alt="">
                                        <img src="img/detail/gStar.png" alt="">
                                    </div>
                                    <div class="style_top2_3">
                                        <a class="my_font_14" href="#">
                                            <s class="my_tl">讨论</s>
                                            其实对第一个故事不感冒，觉得很平常，本来就准备看第一个故事后面的两个故事就不看了，但是发现第二个故事是写李拜天的，好嗨森，就往下看了。
                                            第一个故事里我最喜欢的人就是李拜天，即使你们会说他色也罢，就是很喜欢他。如果非要说个理由，那就是他不计回报地帮助丛优圆她的明星梦，他并不是为了色，至少在他动丛优之前他是花了三百万捧她的。不过我也弄不明白他为何要对丛优这样好，看了第二个故事才明白——丛优只是他情感的寄托，优优公主和他心里藏...
                                        </a>
                                    </div>
                                    <div class="style_top2_4">
                                        <img src="img/detail/zan.gif" alt="">
                                        <span class="my_small_12">3</span>
                                        <span class="my_small_12 my_m">|</span>
                                        <img src="img/detail/hf.gif" alt="">
                                        <span class="my_small_12">7</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                </li>
                <li>
                        <div>
                            <div class="row">
                                <div class="col-1">
                                        <img class="my_img p-0" src="img/detail/8.jpg" alt="">
                                </div>
                                <div class="col-11 my_r">
                                    <div class="style_top2_1">
                                        <p class="font_14">韩梅梅</p>
                                        <span class="my_small_12">LV11</span>
                                        <span class="my_small_12">2019-05-11</span>
                                    </div>
                                    <div class="style_top2_2">
                                        <img src="img/detail/yStar.png" alt="">
                                        <img src="img/detail/yStar.png" alt="">
                                        <img src="img/detail/yStar.png" alt="">
                                        <img src="img/detail/yStar.png" alt="">
                                        <img src="img/detail/gStar.png" alt="">
                                    </div>
                                    <div class="style_top2_3">
                                        <a class="my_font_14" href="#">
                                            <s class="my_tl">讨论</s>
                                            其实对第一个故事不感冒，觉得很平常，本来就准备看第一个故事后面的两个故事就不看了，但是发现第二个故事是写李拜天的，好嗨森，就往下看了。
                                            第一个故事里我最喜欢的人就是李拜天，即使你们会说他色也罢，就是很喜欢他。如果非要说个理由，那就是他不计回报地帮助丛优圆她的明星梦，他并不是为了色，至少在他动丛优之前他是花了三百万捧她的。不过我也弄不明白他为何要对丛优这样好，看了第二个故事才明白——丛优只是他情感的寄托，优优公主和他心里藏...
                                        </a>
                                    </div>
                                    <div class="style_top2_4">
                                        <img src="img/detail/zan.gif" alt="">
                                        <span class="my_small_12">3</span>
                                        <span class="my_small_12 my_m">|</span>
                                        <img src="img/detail/hf.gif" alt="">
                                        <span class="my_small_12">7</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                </li>
            </ul>
            <div class="my_bottom">
                <a href="#" class="lookm">查看更多 >></a>
            </div>
        </div>
        <div class="col-md-4 col-sm-12 p-0 m-0">
           <div class="bk">
                <div>
                    <span class="r_font">看过的人还看</span>
                    <span class="r_s1"><s></s></span>
                    <span class="r_s2"><s></s></span>
                </div>
                <div>
                    <ul class="r_top_ul">
                        <li>
                            <img class="r_block" src="img/detail/iq.jpg" alt="">
                            <a class="r_block r_font14" href="#">IQ265恋人搜查官</a>
                            <span class="r_block my_font">蒙淇淇</span>
                            <span class="r_block my_font r_bottom"><s></s>0</span>
                            <img class="r_block" src="img/detail/kxddqz.jpg" alt="">
                            <a class="r_block r_font14" href="#">康熙大帝全传</a>
                            <span class="r_block my_font">王慧敏</span>
                            <span class="r_block my_font r_bottom"><s></s>3</span>
                        </li>
                        <li>
                            <img class="r_block" src="img/detail/gsnzsdhgnx.jpg" alt="">
                            <a class="r_block r_font14" href="#">告诉你真实的后宫女性</a>
                            <span class="r_block my_font">胡忆红</span>
                            <span class="r_block my_font r_bottom"><s></s>0</span>
                            <img class="r_block" src="img/detail/zsjdhys.jpg" alt="">
                            <a class="r_block r_font14" href="#">在时间的荒野上</a>
                            <span class="r_block my_font">青衫落拓</span>
                            <span class="r_block my_font r_bottom"><s></s>0</span>
                        </li>
                    </ul>
                </div>
           </div>
           <div class="r_last">
               <h3 class="r_font">同类热销榜</h3>
               <ul class="ul_list">
                    <li>
                       <dl class="open">
                           <dt class="my_small_12">1</dt>
                           <dd>
                               <div>
                                   <a class="my_blk my_margin" href="javascript:;">
                                       <img src="img/detail/lhyz.jpg" alt="">
                                    </a>
                                    <div class="my_blk">
                                        <p>
                                            <a class="r_font12" href="javascript:;">林徽因传：人生从来都靠自己成全[精品]</a>
                                        </p>
                                        <span class="my_font">
                                            <s class="ess"></s>
                                            123
                                        </span>
                                    </div>
                               </div>
                           </dd>
                       </dl>
                       <dl class="over my_hidden">
                            <dt class="my_small_12">1</dt>
                            <dd>   
                                <span><a class="my_font" href="javascript:;">
                                        兰亭序杀局：玄甲卫+天刑劫（套装共3册）
                                </a></span>                    
                                <span class="my_font">
                                    <s class="ess"></s>
                                    66
                                </span>
                            </dd>
                        </dl>
                    </li>
                    <li>
                        <dl class="open my_hidden">
                                <dt class="my_small_12">2</dt>
                                <dd>
                                    <div>
                                        <a class="my_blk my_margin" href="javascript:;">
                                            <img src="img/detail/lhyz.jpg" alt="">
                                         </a>
                                         <div class="my_blk">
                                             <p>
                                                 <a class="r_font12" href="javascript:;">林徽因传：人生从来都靠自己成全[精品]</a>
                                             </p>
                                             <span class="my_font">
                                                 <s class="ess"></s>
                                                 123
                                             </span>
                                         </div>
                                    </div>
                                </dd>
                            </dl>
                        <dl class="over">
                            <dt class="my_small_12">2</dt>
                            <dd>   
                                <span><a class="my_font" href="javascript:;">
                                        兰亭序杀局：玄甲卫+天刑劫（套装共3册）
                                </a></span>                    
                                <span class="my_font">
                                    <s class="ess"></s>
                                    66
                                </span>
                            </dd>
                        </dl>
                    </li>
                    <li>
                        <dl class="open my_hidden">
                                <dt class="my_small_12">3</dt>
                                <dd>
                                    <div>
                                        <a class="my_blk my_margin" href="javascript:;">
                                            <img src="img/detail/lhyz.jpg" alt="">
                                         </a>
                                         <div class="my_blk">
                                             <p>
                                                 <a class="r_font12" href="javascript:;">林徽因传：人生从来都靠自己成全[精品]</a>
                                             </p>
                                             <span class="my_font">
                                                 <s class="ess"></s>
                                                 123
                                             </span>
                                         </div>
                                    </div>
                                </dd>
                        </dl>
                        <dl class="over">
                                 <dt class="my_small_12">3</dt>
                                 <dd>   
                                     <span><a class="my_font" href="javascript:;">
                                             兰亭序杀局：玄甲卫+天刑劫（套装共3册）
                                     </a></span>                    
                                     <span class="my_font">
                                         <s class="ess"></s>
                                         66
                                     </span>
                                 </dd>
                        </dl>
                    </li>
                    <li>
                        <dl class="open my_hidden">
                                     <dt class="my_small_12">4</dt>
                                     <dd>
                                         <div>
                                             <a class="my_blk my_margin" href="javascript:;">
                                                 <img src="img/detail/lhyz.jpg" alt="">
                                              </a>
                                              <div class="my_blk">
                                                  <p>
                                                      <a class="r_font12" href="javascript:;">林徽因传：人生从来都靠自己成全[精品]</a>
                                                  </p>
                                                  <span class="my_font">
                                                      <s class="ess"></s>
                                                      123
                                                  </span>
                                              </div>
                                         </div>
                                     </dd>
                        </dl>
                        <dl class="over">
                                 <dt class="my_small_12">4</dt>
                                 <dd>   
                                     <span><a class="my_font" href="javascript:;">
                                             兰亭序杀局：玄甲卫+天刑劫（套装共3册）
                                     </a></span>                    
                                     <span class="my_font">
                                         <s class="ess"></s>
                                         66
                                     </span>
                                 </dd>
                        </dl>
                    </li>
                    <li>
                        <dl class="open my_hidden">
                                    <dt class="my_small_12">5</dt>
                                    <dd>
                                        <div>
                                            <a class="my_blk my_margin" href="javascript:;">
                                                <img src="img/detail/lhyz.jpg" alt="">
                                             </a>
                                             <div class="my_blk">
                                                 <p>
                                                     <a class="r_font12" href="javascript:;">林徽因传：人生从来都靠自己成全[精品]</a>
                                                 </p>
                                                 <span class="my_font">
                                                     <s class="ess"></s>
                                                     123
                                                 </span>
                                             </div>
                                        </div>
                                    </dd>
                        </dl>
                        <dl class="over">
                                <dt class="my_small_12">5</dt>
                                <dd>   
                                    <span><a class="my_font" href="javascript:;">
                                            兰亭序杀局：玄甲卫+天刑劫（套装共3册）
                                    </a></span>                    
                                    <span class="my_font">
                                        <s class="ess"></s>
                                        66
                                    </span>
                                </dd>
                        </dl>
                    </li>
                    <li>
                        <dl class="open my_hidden">
                                    <dt class="my_small_12">6</dt>
                                    <dd>
                                        <div>
                                            <a class="my_blk my_margin" href="javascript:;">
                                                <img src="img/detail/lhyz.jpg" alt="">
                                             </a>
                                             <div class="my_blk">
                                                 <p>
                                                     <a class="r_font12" href="javascript:;">林徽因传：人生从来都靠自己成全[精品]</a>
                                                 </p>
                                                 <span class="my_font">
                                                     <s class="ess"></s>
                                                     123
                                                 </span>
                                             </div>
                                        </div>
                                    </dd>
                        </dl>
                        <dl class="over">
                                     <dt class="my_small_12">6</dt>
                                     <dd>   
                                         <span><a class="my_font" href="javascript:;">
                                                 兰亭序杀局：玄甲卫+天刑劫（套装共3册）
                                         </a></span>                    
                                         <span class="my_font">
                                             <s class="ess"></s>
                                             66
                                         </span>
                                     </dd>
                        </dl>
                    </li>
                    <li>
                        <dl class="open my_hidden">
                                         <dt class="my_small_12">7</dt>
                                         <dd>
                                             <div>
                                                 <a class="my_blk my_margin" href="javascript:;">
                                                     <img src="img/detail/lhyz.jpg" alt="">
                                                  </a>
                                                  <div class="my_blk">
                                                      <p>
                                                          <a class="r_font12" href="javascript:;">林徽因传：人生从来都靠自己成全[精品]</a>
                                                      </p>
                                                      <span class="my_font">
                                                          <s class="ess"></s>
                                                          123
                                                      </span>
                                                  </div>
                                             </div>
                                         </dd>
                        </dl>
                        <dl class="over">
                                     <dt class="my_small_12">7</dt>
                                     <dd>   
                                         <span><a class="my_font" href="javascript:;">
                                                 兰亭序杀局：玄甲卫+天刑劫（套装共3册）
                                         </a></span>                    
                                         <span class="my_font">
                                             <s class="ess"></s>
                                             66
                                         </span>
                                     </dd>
                        </dl>
                    </li>
                    <li>
                        <dl class="open my_hidden">
                                    <dt class="my_small_12">8</dt>
                                    <dd>
                                        <div>
                                            <a class="my_blk my_margin" href="javascript:;">
                                                <img src="img/detail/lhyz.jpg" alt="">
                                             </a>
                                             <div class="my_blk">
                                                 <p>
                                                     <a class="r_font12" href="javascript:;">林徽因传：人生从来都靠自己成全[精品]</a>
                                                 </p>
                                                 <span class="my_font">
                                                     <s class="ess"></s>
                                                     123
                                                 </span>
                                             </div>
                                        </div>
                                    </dd>
                        </dl>
                        <dl class="over">
                                <dt class="my_small_12">8</dt>
                                <dd>   
                                    <span><a class="my_font" href="javascript:;">
                                            兰亭序杀局：玄甲卫+天刑劫（套装共3册）
                                    </a></span>                    
                                    <span class="my_font">
                                        <s class="ess"></s>
                                        66
                                    </span>
                                </dd>
                        </dl>
                    </li>
                    <li>
                        <dl class="open my_hidden">
                                    <dt class="my_small_12">9</dt>
                                    <dd>
                                        <div>
                                            <a class="my_blk my_margin" href="javascript:;">
                                                <img src="img/detail/lhyz.jpg" alt="">
                                             </a>
                                             <div class="my_blk">
                                                 <p>
                                                     <a class="r_font12" href="javascript:;">林徽因传：人生从来都靠自己成全[精品]</a>
                                                 </p>
                                                 <span class="my_font">
                                                     <s class="ess"></s>
                                                     123
                                                 </span>
                                             </div>
                                        </div>
                                    </dd>
                        </dl>
                        <dl class="over">
                                     <dt class="my_small_12">9</dt>
                                     <dd>   
                                         <span><a class="my_font" href="javascript:;">
                                                 兰亭序杀局：玄甲卫+天刑劫（套装共3册）
                                         </a></span>                    
                                         <span class="my_font">
                                             <s class="ess"></s>
                                             66
                                         </span>
                                     </dd>
                        </dl>
                    </li>
                    <li>
                        <dl class="open my_hidden">
                                         <dt class="my_small_12">10</dt>
                                         <dd>
                                             <div>
                                                 <a class="my_blk my_margin" href="javascript:;">
                                                     <img src="img/detail/lhyz.jpg" alt="">
                                                  </a>
                                                  <div class="my_blk">
                                                      <p>
                                                          <a class="r_font12" href="javascript:;">林徽因传：人生从来都靠自己成全[精品]</a>
                                                      </p>
                                                      <span class="my_font">
                                                          <s class="ess"></s>
                                                          123
                                                      </span>
                                                  </div>
                                             </div>
                                         </dd>
                        </dl>
                        <dl class="over">
                                     <dt class="my_small_12">10</dt>
                                     <dd>   
                                         <span><a class="my_font" href="javascript:;">
                                                 兰亭序杀局：玄甲卫+天刑劫（套装共3册）
                                         </a></span>                    
                                         <span class="my_font">
                                             <s class="ess"></s>
                                             66
                                         </span>
                                     </dd>
                        </dl>
                    </li>
               </ul>
           </div> 
        </div>
    </div>
</div>
</template>
<script>
export default {
    data(){
        return{
            mylist:[]
        }
    },
    props:["tid"],
    methods:{},
    created(){
        var url="/detail"
        var obj={params:{tid:this.tid}}
        this.axios.get(url,obj).then(res=>{
            // console.log(res)
            this.mylist=res.data[0]
            // console.log(this.mylist)
        })
    },
    mounted(){
        this.$router.afterEach((to, from, next) => {
        window.scrollTo(0, 0)
      })
   }
    
}
</script>
<style scoped>
#top>div{
    height: 356px;
    background: #fff;
    margin:10px 0px;
}
#top>div{
    border-right:1px solid #f0f0f0;
    position: relative;
}
#top>div>span:first-child{
    display: inline-block;
    width: 86px;height: 23px;
    background: url(/img/sjIcon.png) no-repeat 1px 0px;
    position: absolute;
    top:15px;
    left:-6px;
}
#top>div>span:nth-child(2){
    font-size: 11px;
    font-family: "Microsoft Yahei", arial,sans-serif;
    color: #fff;
    position: absolute;
    top:14px;
    left:22px;
}
#top>div>a{
    display:block;
    width:203px;
    margin:25% auto;
}
#top>div>a>img:first-child{
    display: block;
    width:156px;
    margin: 0 auto;
}
#top>div>a>img:last-child{
    display: block;
    width:203px;
    margin: 0 auto;
}
#top>div>div{
    border-bottom:1px solid #f0f0f0;
    padding:22px 40px 0 30px;
}
#top1{
    height: 95px;
}
#top2{
    height: 123px;
    position: relative;
}
#top3{
    height:111px;
    border:0!important;
    position: relative;
}
h5{
    font-family: "Microsoft Yahei", arial,sans-serif;
    color: #212121;
    font-size: 20px;
}
h5:hover{
    color:#f26552;
}
#top1>span{
    margin-right:20px;
}
#top2>span{
    margin-right:15px;
}
#top2>span:first-child{
    color:#212121!important;
}
#top2>span:nth-child(3){
    text-decoration: line-through;
}
#top2>div>a{
    margin-top:20px;
    display: inline-block;
    width: 80px;
    height: 30px;
    background: #8bc34a;
    line-height: 30px;
    text-align: center;
    color: #fff;
    font-size: 14px;
    border-radius: 3px;
}
#top2>div>a:hover{
    text-decoration: none;
}
#top2>div>a:last-child{
    width: 55px;
    height: 30px;
    background: #f26552;
    margin-left: 6px;
}
#top2>img{
    width:75px;
    position: absolute;
    top:24px;
    right:125px;
}
#top2>img:last-child{
    width:85px;
    right:30px;
    top:21px;
}
#top3>p{
    line-height: 18px;
    height: 54px;
    margin-bottom: 13px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
}
#top3>a>s{
    width:15px;height: 7px;
    display: inline-block;
    margin-left:3px;
    background:url(/img/sjIcon.png) no-repeat -69px -25px;
}
#top3>a:hover,.style_top2_3>a:hover,.lookm:hover{
    color:#f26552!important;
    text-decoration: none;
}
#top3>a:hover s{
    width:15px;height: 7px;
    background:url(/img/sjIcon.png) no-repeat -69px -35px;
}
#top3>a{
    position: absolute;
    right:48px;
}
.my_style_top1{
    padding:34px 40px 0;
    height: 92px;
    border:1px solid #f5f5f5;
}
.my_style_top1>span{
    font-family: "Microsoft Yahei", arial,sans-serif;
    color: #9e9e9e;
    font-size: 12px;
    margin-right: 15px;
}
.my_style_top1>span:nth-child(2){
    font-size: 16px;
    color:#f0f0f0;
}
.my_style_top1>span:first-child{
    color: #212121;
    font-size: 16px;
}
.my_style_top1>a{
    float:right;
    width:98px;
    height: 25px;
    background: #8bc34a;
    text-align: center;
    line-height: 22.5px;
    border-radius: 3px;
    position: relative;
}
.my_style_top1>a:hover{
    text-decoration: none;
}
.my_style_top1>a>span{
    color:#fff;
    margin-left:16px;
}
.my_style_top1>a>s{
    display: inline-block;
    width: 12px;height: 12px;
    position: absolute;
    top:7px;left:10px;
    background: url(/img/sjIcon.png) no-repeat -87px -25px;
}
.my_top2{
    padding:0 0 0 40px;
    list-style:none ;
}
.my_top2>li{
    padding:32px 0 0;
}
.my_top2>li>div{
    padding:4px 40px 0 0;
    height: 185px;
}
.style_top2_1{
    margin:0 0 11px;
    position: relative;
}
.font_14{
    font-size: 14px;
    font-family: "Microsoft Yahei", arial,sans-serif;
    color: #6b6b6b;
}
.style_top2_1>span:nth-child(2){
    width: 36px;
    height: 16px;
    background: #d2d2d2;
    color: #fff;
    line-height: 16px;
    text-align: center;
    margin: 0 6px 0 0;
    position: absolute;
    top:2.5px;
    left:60px;
}
.style_top2_1>span:last-child{
    position: absolute;
    top:3px;
    right:0px;
}
.style_top2_2{
    margin:0 0 8px;
    padding:9px 0 0 12px;
    background: #fafafa;
    height:36px;
    line-height: 14px;
}
.style_top2_2>img{
    margin-right:2px;
}
.my_img{
    width:50px;
    border-radius: 50%;
}
.style_top2_3{
    height:67px;
    margin:0 0 13px;
    padding:7px 0 0;
}
.style_top2_3>a{
    height: 59px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
}
.style_top2_4{
    padding:0 0 12px;
    border-bottom:1px solid #f0f0f0;
}
.style_top2_4>img:first-child{
    width:12px;
    margin:0 4px 0 0;
}
.style_top2_4>img:nth-child(4){
    width:13px;
    margin:1px 4px 0 0;
}
.my_m{
    margin:0 12px 0 8px!important;
    color:#f0f0f0!important;
}

.my_r{
    padding-left:2.5rem;
}
.my_sp{
   display: inline-block; 
   width: 34px;
   height: 18px;
   background:url(/img/sjIcon.png)no-repeat 0px -67px;
   color:#fff!important;
   margin:0 7px 0 0;
   font-size:11px;
   padding-left:3px; 
   text-decoration: none;
}
.my_tl{
    display: inline-block; 
    width: 34px;
    height: 18px;
    background:url(/img/sjIcon.png)no-repeat 0px -90px;
    color:#fff!important;
    margin:0 7px 0 0;
    font-size:11px;
    padding-left:3px; 
    text-decoration: none;
 }
 .my_bottom{
     padding:34px 40px 0;
     height: 92px;
     text-align: center;

 }
 .lookm{
    font-size: 14px;
    font-family: "Microsoft Yahei", arial,sans-serif;
    color: #9e9e9e!important;
 }
 .my_right{
     padding:43px 40px 0
 }
.bk{
    background-color: #fafafa; 
    padding:43px 40px 0;
}
.bk>div:first-child{
    position: relative;
    margin:0 0 32px;
}
.r_font14{
    color: #212121;
    font-size: 14px; 
}
.r_s1,.r_s2{
    display: inline-block;
    width: 17px;
    height: 17px;
    border: 1px solid #d2d2d2;
    border-radius: 2px;
    text-align: center;
    line-height: 12.5px;
    cursor: pointer;
    position: absolute;
    right:64px;
    top:3.5px;
}
.r_s2{
    right:40px;
}
.r_s1>s,.r_s2>s{
    width: 7px;
    height: 8px;
    display: inline-block;
    background: url(/img/sjIcon.png) no-repeat -39px -97px;
}
.r_s2>s{
    background-position:-50px -97px!important; 
}
.r_top_ul{
    list-style:none; 
    display: flex;
    justify-content: space-between;
    padding:0;
}
.r_block{
    display: block;
}
.r_block>s{
    float: left;
    width: 13px;
    height: 8px;
    background: url(/img/comm/icon.png) no-repeat -86px -73px;
    margin: 6px 6px 0 0;
}
.r_top_ul>li>a{
    max-width: 105px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.r_top_ul>li>img{
    margin: 0 0 10px;
}
.r_bottom{
    margin:0 0 20px;
}
@media screen and (max-width:1200px){
    .over dd>span:last-child{
        right:18px;
    }
    dd{
        width:85%!important;
    }
}
@media screen and (max-width:991px) and (min-width:768px){
    dd{
        width:80%;
    }
    .over a{
        width:90px!important;
    }
    .over dd>span:last-child{
        right:5px;
    }
    .my_blk a{
        width:60px!important;
    }
    .r_last{ 
        padding:40px 5px 10px 20px!important;
    }
    .bk{
        padding:43px 8px 0 10px;
    }
}
@media screen and (max-width:767px){
    .r_last{ 
        padding:40px 40px 10px 70px;
    }
    #top>div>a{
        margin:14% auto!important;
    }
    .bk{
        padding:43px 100px 0 ;
    }
 
}
</style>
