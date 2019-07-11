<template>
    <div class="container">
    <my-banner></my-banner>
    <div class="top1">
        <h2>出版图书</h2>
        <div class="d-flex justify-content-center">
            <ul class="breadcrumb bg-transparent ">
                <li class="breadcrumb-item" v-for="(item ,i) of list" :key="i" >
                    <router-link class="my_font a1" to="/list">{{item}}</router-link>
                </li>
            </ul>
        </div>
    </div>
    <div class="top2 " >
        <div class="row bg-white m-0 p-0">
            <div class="f1_left_border col-lg-4 col-sm-12 p-0">
                <div class="f1_left">
                    <span class="f1_left_top1"></span>
                    <div class="card">
                        <router-link :to="'/details/'+myInd[0].href">{{myInd[0].title}}</router-link>
                        <p class="f1_left_p1 my_small_12">作者: {{myInd[0].author}}</p>
                        <p class="my_small_12">
                            {{myInd[0].subtitle}}
                        </p>
                        <router-link :to="'/details/'+myInd[0].href"><img class="f1_left_img1" :src="'http://127.0.0.1:3000/'+myInd[0].img" alt=""/></router-link>
                        <router-link :to="'/details/'+myInd[0].href"><img class="f1_left_img2" src="img/index/shadow.gif" alt=""/></router-link>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-sm-12 p-0">
                <div class="row m-0">
                    <div class="col-6 f1_center p-0">
                        <div>
                            <router-link :to="'/details/'+myInd[1].href"><img :src="'http://127.0.0.1:3000/'+myInd[1].img" alt=""/></router-link>
                            <h6>
                                <router-link :to="'/details/'+myInd[1].href" class="my_small_12">{{myInd[1].title}}</router-link>
                            </h6>
                            <p class="my_small_12 text-center">{{myInd[1].author}}</p>
                        </div>
                    </div>
                    <div class="col-6 f1_center p-0">
                         <div>
                            <router-link :to="'/details/'+myInd[2].href"><img :src="'http://127.0.0.1:3000/'+myInd[2].img" alt=""/></router-link>
                            <h6>
                                <router-link :to="'/details/'+myInd[2].href" class="my_small_12">{{myInd[2].title}}</router-link>
                            </h6>
                            <p class="my_small_12 text-center">{{myInd[2].author}}</p>
                        </div>
                    </div>
                </div>
                <div class="row m-0">
                    <div class="col-6 f1_center p-0">
                         <div>
                            <router-link :to="'/details/'+myInd[3].href"><img :src="'http://127.0.0.1:3000/'+myInd[3].img" alt=""/></router-link>
                            <h6>
                                <router-link :to="'/details/'+myInd[3].href" class="my_small_12">{{myInd[3].title}}</router-link>
                            </h6>
                            <p class="my_small_12 text-center">{{myInd[3].author}}</p>
                        </div>
                    </div>
                    <div class="col-6 f1_center p-0">
                         <div>
                            <router-link :to="'/details/'+myInd[4].href"><img :src="'http://127.0.0.1:3000/'+myInd[4].img" alt=""/></router-link>
                            <h6>
                                <router-link :to="'/details/'+myInd[4].href" class="my_small_12">{{myInd[4].title}}</router-link>
                            </h6>
                            <p class="my_small_12 text-center">{{myInd[4].author}}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="f1_right col-lg-4 col-sm-12 p-0 pt-4 pl-4 pr-4">
                <span class="float-right_s1"></span>
                <a class="right_a1 d-block mt-2 ml-5" href="#">下载榜</a>
                <div id="parent">
                    <ul class="ul_list" ref="lis">
                        <li @mouseenter="enter(i)" ref="li" v-for="(tmp,i) of myHot" :key="i">
                            <dl class="open " :class="{my_hidden:index!=i}">
                                <dt class="my_small_12">
                                    {{i+1}}
                                </dt>
                                <dd>
                                    <div>
                                         <router-link :to="'/details/'+tmp.href" class="my_blk my_margin"><img :src="'http://127.0.0.1:3000/'+tmp.img" alt=""/></router-link>
                                        <div class="my_blk">
                                            <p>
                                                 <router-link :to="'/details/'+tmp.href" class="r_font12">{{tmp.title}}</router-link>
                                            </p>
                                            <span class="my_font">
                                                <s class="ess"></s>
                                                123
                                            </span>
                                        </div>
                                    </div>
                                </dd>
                            </dl>
                            <dl ref="dl2" class="over" :class="{my_hidden:index==i}">
                                <dt class="my_small_12">{{i+1}}</dt>
                                <dd>   
                                    <span>
                                          <router-link :to="'/details/'+tmp.href" class="my_font">{{tmp.title}}</router-link>
                                    </span>                    
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
    <div class="top1">
        <h3>精选圈子</h3>
    </div>
    <div class="row m-0">
        <div class="f2_top bg-white col-md-4 col-sm-12 p-0">
            <div class="d1 text-center">
                    <span class="fire"></span>
                    <img class="d-inline-block fire_b" src="img/index/wxsm.jpg" alt=""/>
                <h4>文学经典</h4>
                <p class="my_small_12 text-center">没有比人更高的山,没有比脚更长的路</p>
                <div class="dg d-flex justify-content-center mt-4">
                    <p class="f2_center_p1"></p>
                    <p class="f2_center_p2">32w+</p>
                    <p class="f2_center_p3"></p>
                    <p class="f2_center_p2">33766</p>
                </div>
            </div>
        </div>
        <div class="f2_top bg-white col-md-4 col-sm-12 p-0 pt-5">
            <div class="d1 text-center">
                <span class="fire"></span>
                <img class="d-inline-block fire_b" src="img/index/wxxssm.jpg" alt=""/>
                <h4>武侠小说</h4>
                <p class="my_small_12 text-center">天下英雄出我辈,一入江湖岁月催</p>
                <div class="dg d-flex justify-content-center mt-4">
                    <p class="f2_center_p1"></p>
                    <p class="f2_center_p2">23w+</p>
                    <p class="f2_center_p3"></p>
                    <p class="f2_center_p2">25663</p>
                </div>
            </div>
        </div>
        <div class="f2_top bg-white col-md-4 col-sm-12 p-0 pt-5">
            <div class="d1 text-center">
                <span class="fire"></span>
                <img class="d-inline-block fire_b" src="img/index/qcxysm.jpg" alt=""/>
                <h4>青春校园</h4>
                <p class="my_small_12 text-center">上帝为你关上一扇门的时候,会拿门夹你的脑袋...</p>
                <div class="dg d-flex justify-content-center mt-4">
                    <p class="f2_center_p1"></p>
                    <p class="f2_center_p2">13w+</p>
                    <p class="f2_center_p3"></p>
                    <p class="f2_center_p2">17290</p>
                </div>
            </div>
        </div>
    </div>
    <ul class="ul2 list-unstyled d-flex justify-content-around bg-white">
        <span class="f2_bottom_top"></span>
        <li>
            <img src="img/index/qgsm.jpg" alt=""/>
            <p>情感</p>
        </li>
        <li>
            <img src="img/index/khsm.jpg" alt=""/>
            <p>科幻</p>
        </li>
        <li>
            <img src="img/index/yqsm.jpg" alt=""/>
            <p>言情</p>
        </li>
        <li>
            <img src="img/index/xytlsm.jpg" alt=""/>
            <p>推理</p>
        </li>
    </ul>
    <div class="top1">
        <h2>男生频道</h2>
        <div class="d-flex justify-content-center">
            <ul class="breadcrumb bg-transparent ">
                 <li class="breadcrumb-item" v-for="(item ,i) of list2" :key="i" >
                    <router-link class="my_font a1" to="/list">{{item}}</router-link>
                </li>
            </ul>
        </div>
    </div>
    <div class="top2 ">
        <div class="row bg-white m-0 p-0">
            <div class="f1_left_border col-lg-4 col-sm-12 p-0">
                <div class="f1_left">
                    <span class="f1_left_top1"></span>
                    <div class="card">
                        <router-link :to="'/details/'+myInd[5].href">{{myInd[5].title}}</router-link>
                        <p class="f1_left_p1 my_small_12">作者: {{myInd[5].author}}</p>
                        <p class="my_small_12">
                           {{myInd[5].subtitle}}
                        </p>
                        <!-- <img class="f1_left_img1" src="img/index/ssdzmd.jpg" alt=""/> -->
                        <router-link :to="'/details/'+myInd[5].href"><img class="f1_left_img1" :src="'http://127.0.0.1:3000/'+myInd[5].img" alt=""/></router-link>
                        <img class="f1_left_img2" src="img/index/shadow.gif" alt=""/>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-sm-12 p-0">
                <div class="row m-0">
                    <div class="col-6 f1_center p-0">
                        <div class="f_center">
                            <p class="f_cp1">
                             <router-link class="f_center_a " :to="'/details/'+myInd[6].href">{{myInd[6].title}}</router-link>
                            </p>
                            <p class="py-0 mt-2 mb-2 my_small_12 ">{{myInd[6].author}}</p>
                            <p class="my_small_12 myl">{{myInd[6].subtitle}}</p>
                        </div>
                    </div>
                    <div class="col-6 f1_center p-0">
                        <div class="f_center">
                            <p class="f_cp1">
                             <router-link class="f_center_a " :to="'/details/'+myInd[7].href">{{myInd[7].title}}</router-link>
                            </p>
                            <p class="py-0 mt-2 mb-2 my_small_12 ">{{myInd[7].author}}</p>
                            <p class="my_small_12 myl">{{myInd[7].subtitle}}</p>
                        </div>
                    </div>
                </div>
                <div class="row m-0">
                        <div class="col-6 f1_center p-0">
                        <div class="f_center">
                            <p class="f_cp1">
                             <router-link class="f_center_a" :to="'/details/'+myInd[8].href">{{myInd[8].title}}</router-link>
                            </p>
                            <p class="py-0 mt-2 mb-2 my_small_12 ">{{myInd[8].author}}</p>
                            <p class="my_small_12 myl">{{myInd[8].subtitle}}</p>
                        </div>
                    </div>
                    <div class="col-6 f1_center p-0">
                        <div class="f_center">
                            <p class="f_cp1">
                             <router-link class="f_center_a" :to="'/details/'+myInd[9].href">{{myInd[9].title}}</router-link>
                            </p>
                            <p class="py-0 mt-2 mb-2 my_small_12 ">{{myInd[9].author}}</p>
                            <p class="my_small_12 myl">{{myInd[9].subtitle}}</p>
                        </div>
                    </div>
                </div>
                <div class="row m-0">
                    <div class="col-6 f1_center p-0">
                            <div class="f_center">
                            <p class="f_cp1">
                             <router-link class="f_center_a" :to="'/details/'+myInd[10].href">{{myInd[10].title}}</router-link>
                            </p>
                            <p class="py-0 mt-2 mb-2 my_small_12 ">{{myInd[10].author}}</p>
                            <p class="my_small_12 myl">{{myInd[10].subtitle}}</p>
                        </div>
                    </div>
                    <div class="col-6 f1_center p-0">
                            <div class="f_center">
                            <p class="f_cp1">
                             <router-link class="f_center_a" :to="'/details/'+myInd[11].href">{{myInd[11].title}}</router-link>
                            </p>
                            <p class="py-0 mt-2 mb-2 my_small_12 ">{{myInd[11].author}}</p>
                            <p class="my_small_12 myl">{{myInd[11].subtitle}}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="f1_right col-lg-4 col-sm-12 p-0 pt-4 pl-4 pr-4">
                <span class="float-right_s1"></span>
                <a class="right_a1 d-block mt-2 ml-5" href="#">热读榜</a>
                <div id="parent2">
                     <ul class="ul_list" ref="lis">
                        <li @mouseenter="enter2(i)" ref="li" v-for="(tmp,i) of myHot" :key="i">
                            <dl class="open " :class="{my_hidden:index2!=i}">
                                <dt class="my_small_12">
                                    {{i+1}}
                                </dt>
                                <dd>
                                    <div>
                                         <router-link :to="'/details/'+tmp.href" class="my_blk my_margin"><img :src="'http://127.0.0.1:3000/'+tmp.img" alt=""/></router-link>
                                        <div class="my_blk">
                                            <p>
                                                 <router-link :to="'/details/'+tmp.href" class="r_font12">{{tmp.title}}</router-link>
                                            </p>
                                            <span class="my_font">
                                                <s class="ess"></s>
                                                123
                                            </span>
                                        </div>
                                    </div>
                                </dd>
                            </dl>
                            <dl ref="dl2" class="over" :class="{my_hidden:index2==i}">
                                <dt class="my_small_12">{{i+1}}</dt>
                                <dd>   
                                    <span>
                                          <router-link :to="'/details/'+tmp.href" class="my_font">{{tmp.title}}</router-link>
                                    </span>                    
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
    <div class="top1">
        <h2>女生频道</h2>
        <div class="d-flex justify-content-center">
            <ul class="breadcrumb bg-transparent ">
                 <li class="breadcrumb-item" v-for="(item ,i) of list3" :key="i" >
                    <router-link class="my_font a1" to="/list">{{item}}</router-link>
                </li>
            </ul>
        </div>
    </div>
    <div class="top2 mb-4 ">
        <div class="row bg-white m-0 p-0">
            <div class="f1_left_border col-lg-4 col-sm-12 p-0">
                <div class="f1_left">
                    <span class="f1_left_top1"></span>
                    <div class="card">
                       <router-link :to="'/details/'+myInd[12].href">{{myInd[12].title}}</router-link>
                        <p class="f1_left_p1 my_small_12">作者: {{myInd[12].author}}</p>
                         <p class="my_small_12">
                           {{myInd[12].subtitle}}
                        </p>
                        <router-link :to="'/details/'+myInd[12].href"><img class="f1_left_img1" :src="'http://127.0.0.1:3000/'+myInd[12].img" alt=""/></router-link>
                        <img class="f1_left_img2" src="img/index/shadow.gif" alt=""/>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-sm-12 p-0">
                <div class="row m-0">
                    <div class="col-6 f1_center p-0">
                        <div class="f_center">
                            <p class="f_cp1">
                             <router-link class="f_center_a" :to="'/details/'+myInd[13].href">{{myInd[13].title}}</router-link>
                            </p>
                            <p class="py-0 mt-2 mb-2 my_small_12 ">{{myInd[13].author}}</p>
                            <p class="my_small_12 myl">{{myInd[13].subtitle}}</p>
                        </div>
                    </div>
                    <div class="col-6 f1_center p-0">
                        <div class="f_center">
                            <p class="f_cp1">
                             <router-link class="f_center_a" :to="'/details/'+myInd[14].href">{{myInd[14].title}}</router-link>
                            </p>
                            <p class="py-0 mt-2 mb-2 my_small_12 ">{{myInd[14].author}}</p>
                            <p class="my_small_12 myl">{{myInd[14].subtitle}}</p>
                        </div>
                    </div>
                </div>
                <div class="row m-0">
                    <div class="col-6 f1_center p-0">
                        <div class="f_center">
                            <p class="f_cp1">
                             <router-link class="f_center_a" :to="'/details/'+myInd[15].href">{{myInd[15].title}}</router-link>
                            </p>
                            <p class="py-0 mt-2 mb-2 my_small_12 ">{{myInd[15].author}}</p>
                            <p class="my_small_12 myl">{{myInd[15].subtitle}}</p>
                        </div>
                    </div>
                    <div class="col-6 f1_center p-0">
                        <div class="f_center">
                            <p class="f_cp1">
                             <router-link class="f_center_a" :to="'/details/'+myInd[16].href">{{myInd[16].title}}</router-link>
                            </p>
                            <p class="py-0 mt-2 mb-2 my_small_12 ">{{myInd[16].author}}</p>
                            <p class="my_small_12 myl">{{myInd[16].subtitle}}</p>
                        </div>
                    </div>
                </div>
                <div class="row m-0">
                    <div class="col-6 f1_center p-0">
                        <div class="f_center">
                            <p class="f_cp1">
                             <router-link class="f_center_a" :to="'/details/'+myInd[17].href">{{myInd[17].title}}</router-link>
                            </p>
                            <p class="py-0 mt-2 mb-2 my_small_12 ">{{myInd[17].author}}</p>
                            <p class="my_small_12 myl">{{myInd[17].subtitle}}</p>
                        </div>
                    </div>
                    <div class="col-6 f1_center p-0">
                        <div class="f_center">
                            <p class="f_cp1">
                             <router-link class="f_center_a" :to="'/details/'+myInd[18].href">{{myInd[18].title}}</router-link>
                            </p>
                            <p class="py-0 mt-2 mb-2 my_small_12 ">{{myInd[18].author}}</p>
                            <p class="my_small_12 myl">{{myInd[18].subtitle}}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="f1_right col-lg-4 col-sm-12 p-0 pt-4 pl-4 pr-4">
                <span class="float-right_s1"></span>
                <a class="right_a1 d-block mt-2 ml-5" href="#">热读榜</a>
                <div id="parent1">
                     <ul class="ul_list" ref="lis">
                        <li @mouseenter="enter3(i)" ref="li" v-for="(tmp,i) of myHot" :key="i">
                            <dl class="open " :class="{my_hidden:index3!=i}">
                                <dt class="my_small_12">
                                    {{i+1}}
                                </dt>
                                <dd>
                                    <div>
                                         <router-link :to="'/details/'+tmp.href" class="my_blk my_margin"><img :src="'http://127.0.0.1:3000/'+tmp.img" alt=""/></router-link>
                                        <div class="my_blk">
                                            <p>
                                                 <router-link :to="'/details/'+tmp.href" class="r_font12">{{tmp.title}}</router-link>
                                            </p>
                                            <span class="my_font">
                                                <s class="ess"></s>
                                                123
                                            </span>
                                        </div>
                                    </div>
                                </dd>
                            </dl>
                            <dl ref="dl2" class="over" :class="{my_hidden:index3==i}">
                                <dt class="my_small_12">{{i+1}}</dt>
                                <dd>   
                                    <span>
                                          <router-link :to="'/details/'+tmp.href" class="my_font">{{tmp.title}}</router-link>
                                    </span>                    
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
    <a href="#">
        <img class="go_top" src="img/comm/go_top.png" alt=""/>
    </a>
</div>
</template>
<script>
import { setTimeout } from 'timers';
import myBanner from '../components/banner'
export default {
    data(){
        return{
            list:["文学","励志成功","传记","经济管理","更多"],
            list2:["武侠","仙侠","奇幻","玄幻","更多"],
            list3:["现代言情","青春校园","幻想言情","古代言情","更多"],
            myInd:[],
            myHot:[],
            show:true,
            index:0,
            index2:0,
            index3:0
            
        }
    },
    methods:{
        enter(i){
            this.index=i;
        },
        enter2(i){
            this.index2=i;
        },
        enter3(i){
            this.index3=i;
        },

        getHot(){
            var url="index/hot"
            this.axios.get(url).then(res=>{
                // console.log(res)
                this.myHot=res.data
                // console.log(this.myHot)
            })
        },
        getInd(){
            var url="index/ind"
            this.axios.get(url).then(res=>{
                // console.log(res)
                this.myInd=res.data
                // console.log(this.myInd)
            })
        },
       
    },
    created(){
        this.getHot();
        this.getInd();
        this.getBan();
    },
     mounted(){
        this.$router.afterEach((to, from, next) => {
        window.scrollTo(0, 0)
      })
   },
    components:{myBanner}
}
</script>
<style scoped>

.open{
    position: relative;
}
.myl{
    width: 100%;
    height: 46%;
    line-height: 20px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    margin-top:10px;
}
nav{
    width: 100%;height: 332px;
   background: url(/img/index/bg.gif) no-repeat center top;
    margin-top: 10px;
    display: block;
}
nav:before{
    content:"";
    display: table;
    margin-top: 10px;
}
@media screen and (min-width: 768px) and (max-width: 991px){
    nav{
        width:100%;height: 282px;
    }
    .f1_left{
        width:72%!important;
        margin:0 auto;
    }
    .f1_left_img2{
        width:55%!important;
        display: block;
        margin: -1px auto!important;
        z-index: 8;
    }
    .f1_left_img1{
        width:40%!important;
        display: block;
        margin:80px auto 0px!important;
        z-index: 15;
    }
    .f1_center div a img{
        display: block;
        width:32%!important;
        margin:0 auto;
        padding-top: 20px;
        margin-bottom: 10px;
    }
    .f2_bottom_top{
        top:14%;left:40%!important;
    }
    .f1_left_top1{
        left:-95px!important;

    }
    .f1_right{
        padding:1.2rem 6rem 0!important;
    }
    .float-right_s1{
        top:32px!important;left:112px!important;
    }
    .go_top{
        top:86%;left:90%!important;
    }
    dd{
        width:80%;
    }
    .over a{
        width:200px;
    }
    .over dd>span:last-child{
        right:30px;
    }
    .my_blk a{
        width:150px;
    }
    dl dd{
        width: 92%!important;
     }
    
}
@media screen and (max-width: 767px){
    nav{
        width:100%;height: 232px;
    }
    .f1_left_img2{
        width:55%!important;
        display: block;
        margin:-1px auto!important;
        z-index: 8;
    }
    .f1_left_img1{
        width:40%!important;
        display: block;
        margin:60px auto 0!important;
        z-index: 15;
    }
    .f1_left{
        padding-top: 60px!important;
    }
    .f1_center div a img{
        display: block;
        width:40%!important;
        margin:0 auto;
        padding-top: 20px;
        margin-bottom: 10px;
    }
    .f2_bottom_top{
        top:14%;left:35%!important;
    }
    .f1_right{
        padding:1.2rem 4rem 0!important;
    }
    .float-right_s1{
        top:32px!important;left:76px!important;
    }
    .go_top{
        top:86%;left:88%!important;
    }
    .over a{
        width:150px;
    }
    .over dd>span:last-child{
        right:15px;
    }
    dl dd{
        width: 90%!important;
     }
}
@media screen and (min-width: 1200px){
    .f1_left_img1{
        width:65%!important;
        display: block;
        margin-left: 2%;
        margin-top:22% !important;
        z-index: 15;
    }
    .f1_left_img2{
        width:90%!important;
        display: block;
        margin:-1px 28px!important;
        z-index: 8;
    }
    .f2_bottom_top{
        top:14%;left:43%!important;
    }
    .f1_right{
        padding:1.8rem 3rem 0!important;
    }
    .float-right_s1{
        top:43px!important;left:55px!important;
    }
    .go_top{
        top:86%;left:90%!important;
    }
    .over dd>span:last-child{
        right:18px;
    }
    dd{
        width:85%!important;
    }
}

h2{
    font-family: "Microsoft Yahei", arial,sans-serif;
    font-size: 26px;
    color: #212121;
    text-align: center;
    margin-top:36px;
}
.breadcrumb-item + .breadcrumb-item::before{
    content: "|";
    color: #9e9e9e;
}
.a1:hover,.f_center_a:hover{
     color:#f26552;
    text-decoration: none;
}
.f1_left_border,.f1_center,.f2_top{
    border:1px solid #f5f5f5 ;
}
.f1_left{
    height: 526px;
    padding: 45px 56px 0;
    position: relative;
}
.f1_left_top1{
    position: absolute;
    top:1px;left:1px;
    width:63px;height: 63px;
    background: url(/img/comm/icon.png) no-repeat 70% 0%;
}
.f1_center div{
    height: 264px;
    box-sizing: border-box;
}
.f1_left>div{
    border:0!important;
}
.f1_left>div>a,.right_a1{
    font-size: 20px;
    font-family: "Microsoft Yahei", arial,sans-serif;
    font-weight: 100;
    color: #212121;
}
.f1_left>div>a:hover,.right_a1:hover,.myh{
    color:#f26552;
    text-decoration: none;
}
.f1_left_p1{
    margin: 10px 0 20px 0;
}
.f1_left_img2{
    width:100%;
    display: block;
    margin-left: 12%;
    margin-top: -1%;
    z-index: 8;
}
.f1_left_img1{
    width:75%;
    display: block;
    margin-left: 25%;
    margin-top:20%;
    z-index: 15;
}
.f1_center div a img{
    display: block;
    width:60%;
    margin:0 auto;
    padding-top: 30px;
    margin-bottom: 10px;
}
h6{
    text-align: center;
}
h6>a{
    color: #212121!important;
}
h6>a:hover{
    color:#f26552 !important;
    text-decoration: none;
}
#parent>div,#parent1>div,#parent2>div{
    border:none!important;
}
.f1_right{
    height: 526px;
    position: relative;
}
.float-right_s1{
    width: 21px;height: 18px;
    position: absolute;
    top:38px;left: 40px;
    background: url(/img/comm/icon.png) no-repeat 0% 51%;
}
h3{
    font-family: "Microsoft Yahei", arial,sans-serif;
    font-size: 26px;
    color: #212121;
    text-align: center;
    margin:36px ;
}
.f2_top{
    height:292px ;
    padding-top:2.5rem!important;
}
.d1>img{
    width:23%;
    border-radius: 50%;
}
h4{
    font-family: "Microsoft Yahei", arial,sans-serif;
    font-size: 18px;
    color: #212121;
    text-align: center ;
    margin:18px 0 2px;
}
.d1{
    position: relative;
}
.fire{
    position: absolute;
    top:2%;left:56%;
    width:25px;height: 25px;
    background:url(/img/comm/icon.png) no-repeat 31% 52%;
}
.f2_center_p2{
    font-family: "Microsoft Yahei", arial,sans-serif;
    font-size: 14px;
    color: #9e9e9e;
    text-align: center ;
    margin:-2px 8px 0 8px;

}
.f2_center_p1{
    width:20px;height: 20px;
    background:url(/img/comm/icon.png) no-repeat 60% 53%;
}
.f2_center_p3{
    width:20px;height: 20px;
    background:url(/img/comm/icon.png) no-repeat 82% 53%;
}
.ul2{
    height: 200px;
    position: relative;
}
.ul2 li img{
    margin-top:120%;
    width:70px;height: 70px;
    border-radius: 50%;
}
.ul2 li p{
    text-align: center;
    margin-top: 5px;
}
.f2_bottom_top{
    width:149px;height: 30px;
    position:absolute;
    top:14%;left:42%;
    background-size:100% !important;
    background: url(/img/comm/rmtj.png) no-repeat;
}
.card-body{
    display: none;
    height:90px;
    padding:0;
    margin:2px 0px 0 20px;
}
.card-header{
    position: relative;
}
.card:hover .card-header{
   display: none;
}
.card:hover .card-body{
    display: block!important;
}
.card_f1b{
    padding:0;
    margin:5px 0 0 22px;
    display:block !important;
}
.f_center{
    height: 176px!important;
    padding:18px 18px;
}
.card_f1{
    display:none !important;
}
.f_cp1{
    padding-bottom: 5px;
    border-bottom: 1px solid #f5f5f5;
    margin-bottom:5px;
    
}
.f_center_a{
    font-family: "Microsoft Yahei", arial,sans-serif;
    font-size: 14px;
    color: #212121;
}
.look{
    display: block;
    position: absolute;
    top:12px;left:75%;
    width: 14px;height: 9px;
    margin:6px 6px 0 0;
    background: url(/img/comm/icon.png) no-repeat 99% 52%;
}
.look2{
    position: absolute;
    top:13px;left:84%;
}
.go_top{
    width:60px;
    position: fixed;
    top:86%;left:93.5%;
}
.over dd{
    text-align: left;
}
.open .ess{
    margin:10px 0 0 40px;
}
.open img{
    position: relative;
    left: -26%;
}
</style>
