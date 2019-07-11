<template>
   <div class="container">
<nav>
    <ul>
        <span class="my_span1">频道</span>
        <li class="">
            <a class="my_bk mt-2" href="javascript:;">出版</a>
            <a class=" mt-2 ml-3" href="javascript:;">男频</a>
            <a class=" mt-2" href="javascript:;">女频</a>
        </li>
        <span class="my_span2">频道</span>
        <li id="list1">
            <ul id="list2">
                <li><a class="my_bk my_bk1" href="javascript:;">小说</a></li>
                <li><a class="my_aa" href="javascript:;">文学</a></li>
                <li><a class="my_aa" href="javascript:;">历史</a></li>
                <li><a class="my_aa" href="javascript:;">传记</a></li>
                <li><a class="my_aa" href="javascript:;">青春</a></li>
                <li><a class="my_aa" id="dna1" href="javascript:;">励志</a></li>
                <li><a class="my_aa" id="dna2" href="javascript:;">社科</a></li>
                <li><a class="my_aa" href="javascript:;">心理</a></li>
                <li><a class="my_aa" href="javascript:;">经济</a></li>
                <li><a class="my_aa" href="javascript:;">管理</a></li>
                <li><a class="my_aa" href="javascript:;">文化</a></li>
                <li><a class="my_aa" href="javascript:;">旅游</a></li>
                <li><a class="my_aa" href="javascript:;">心理</a></li>
                <li><a class="my_aa" href="javascript:;">经济</a></li>
                <li><a class="my_aa" href="javascript:;">管理</a></li>
                <li><a class="my_aa" href="javascript:;">文化</a></li>
                <li><a class="my_aa" href="javascript:;">旅游</a></li>
                <li><a class="my_aa" href="javascript:;">心理</a></li>
                <li><a class="my_aa" href="javascript:;">经济</a></li>
                <li><a class="my_aa" href="javascript:;">管理</a></li>
                <li><a class="my_aa" href="javascript:;">文化</a></li>
                <li><a class="my_aa" href="javascript:;">旅游</a></li>
                <li><a class="my_aa" href="javascript:;">美食</a></li>
                <li><a class="my_aa" href="javascript:;">时尚</a></li>
                <li><a class="my_aa" href="javascript:;">健身</a></li>
                <li><a class="my_aa" href="javascript:;">孕产</a></li>
                <li><a class="my_aa" href="javascript:;">少儿</a></li>
                <li><a class="my_aa" href="javascript:;">科学</a></li>
                <li><a class="my_aa" href="javascript:;">科普</a></li>
                <li><a class="my_aa" href="javascript:;">医学</a></li>
                <li><a class="my_aa" href="javascript:;">教辅</a></li>
                <li><a class="my_aa" href="javascript:;">外语</a></li>
                <li><a class="my_aa" href="javascript:;">工业</a></li>
                <li><a class="my_aa" href="javascript:;">宗教</a></li>
                <li><a class="my_aa" href="javascript:;">哲学</a></li>
                <li><a class="my_aa" href="javascript:;">军事</a></li>
                <li><a class="my_aa" href="javascript:;">艺术</a></li>
                <li><a class="my_aa" href="javascript:;">修身</a></li>
                <li><a class="my_aa" href="javascript:;">养生</a></li>
                <li><a class="my_aa" href="javascript:;">两性</a></li>
                <li><a class="my_aa" href="javascript:;">家居</a></li>
                <li><a class="my_aa" href="javascript:;">建筑</a></li>
                <li><a class="my_aa" href="javascript:;">法律</a></li>
                <li><a class="my_aa" href="javascript:;">农业</a></li>
                <li><a class="my_aa" href="javascript:;">体育</a></li>
                <li><a class="my_aa" href="javascript:;">外文</a></li>
                <li><a class="my_aa" href="javascript:;">计算机</a></li>
                <li><a class="my_aa" href="javascript:;">国学经典</a></li>
                <li><a class="my_aa" href="javascript:;">政治</a></li>
            </ul>
            <span class="my_xl">
                <span id="mor" ref="mor">更多</span>
                <span id="tb"></span>
            </span>
        </li>
        <span class="my_span3">频道</span>
        <li class="my_pos">
            <a class="my_bk" href="javascript:;">全部</a>
            <a class=" ml-3" href="javascript:;">免费</a>
            <a  href="javascript:;">限免</a> 
            <a  href="javascript:;">振金</a>           
        </li>
    </ul>
</nav>
    <div class="tabs">
        <ul id="tab">
            <li><a class="my_font_14 my_right tab_bk" href="javascript:;" ref="li1" >热门</a></li>
            <li><a class="my_font_14" href="javascript:;" ref="li2">最新</a></li>
            <li><a class="my_font_14" href="javascript:;" ref="li3">好评</a></li>
        </ul>
        <p class="nav_top">
            <a>
                <span></span>
            </a>
            <span class="my_small_12" id="page1">第 1 页</span>
            <a class="my_a_left">
                <span></span>
            </a>
        </p>     
        <div id="container">
            <div id="content0" >
                <div class="row">
                   <div class="col-lg-4 col-md-6 col-sm-12" v-for="(tmp,i) of mylist1" :key="i">
                    <div class="my_card_bk">
                        <!-- <a href="#">
                            <img class="mr-2" src="img/list/zyrzdn.jpg" alt="">
                        </a>   -->
                        <router-link :to="'/details/'+tmp.href">
                            <img class="mr-2" :src="'http://127.0.0.1:3000/'+tmp.img" alt="">
                        </router-link> 
                        <div>
                            <h3>
                                  <router-link class="myhh" :to="'/details/'+tmp.href">{{tmp.title}} </router-link> 
                            </h3>
                            <p class="my_small_12 mb-0">{{tmp.author}}
                                <!-- <a class="btn" href="#">试读</a> -->
                                <router-link class="btn" :to="'/details/'+tmp.href">试读</router-link>
                            </p>
                            <span class="my_small_12 my_mtop">
                                <s></s>
                                <span class="ml-1">276</span>
                            </span>
                            <p class="my_p my_small_12">{{tmp.subtitle}}</p>
                        </div>
                    </div>
                   </div>
                </div>
            </div>
            <div id="content1" class="my_hidden">
                <div class="row">
                  <div class="col-lg-4 col-md-6 col-sm-12" v-for="(tmp,i) of mylist2" :key="i">
                    <div class="my_card_bk">
                         <router-link :to="'/details/'+tmp.href">
                            <img class="mr-2" :src="'http://127.0.0.1:3000/'+tmp.img" alt="">
                        </router-link> 
                        <div>
                            <h3>
                                <router-link class="myhh" :to="'/details/'+tmp.href">{{tmp.title}} </router-link> 
                            </h3>
                            <p class="my_small_12 mb-0">{{tmp.author}}
                                <!-- <a class="btn" href="#">试读</a> -->
                                <router-link class="btn" :to="'/details/'+tmp.href">试读</router-link>
                            </p>
                            <span class="my_small_12 my_mtop">
                                <s></s>
                                <span class="ml-1">276</span>
                            </span>
                            <p class="my_p my_small_12">{{tmp.subtitle}}</p>
                        </div>
                     </div>
                   </div>
                </div>
            </div>
            <div id="content2" class="my_hidden">
                <div class="row">
                    <div class="col-lg-4 col-md-6 col-sm-12" v-for="(tmp,i) of mylist3" :key="i">
                    <div class="my_card_bk">
                        <!-- <a href="#">
                            <img class="mr-2" src="img/list/zyrzdn.jpg" alt="">
                        </a>   -->
                       <router-link :to="'/details/'+tmp.href">
                            <img class="mr-2" :src="'http://127.0.0.1:3000/'+tmp.img" alt="">
                        </router-link> 
                        <div>
                            <h3>
                                <router-link class="myhh" :to="'/details/'+tmp.href">{{tmp.title}} </router-link> 
                            </h3>
                            <p class="my_small_12 mb-0">{{tmp.author}}
                                <!-- <a class="btn" href="#">试读</a> -->
                                <router-link class="btn" :to="'/details/'+tmp.href">试读</router-link>
                            </p>
                            <span class="my_small_12 my_mtop">
                                <s></s>
                                <span class="ml-1">276</span>
                            </span>
                            <p class="my_p my_small_12">{{tmp.subtitle}}</p>
                        </div>
                    </div>
                   </div>
                    
                </div>
            </div>
        </div>               
        <ul class="pagination my_ul">
               <li class="page-item disabled">
                    <a class="page-link my_small_12">
                        <s class="my_s_1"></s>
                        <span class="my_sp_1">上一页</span>
                    </a>
               </li>
               <li class="page-item" >
                    <a class="page-link my_small_12">1</a>
               </li>
               <li class="page-item">
                    <a class="page-link my_small_12">2</a>
               </li>
               <li class="page-item">
                    <a class="page-link my_small_12">3</a>
               </li>
               <li class="page-item">
                    <a class="page-link my_small_12">...</a>
               </li>
               <li class="page-item">
                    <a class="page-link my_small_12">
                        <s class="my_s_1"></s>
                        <span class="my_sp_1" ref="next">下一页</span>
                    </a>
               </li>
        </ul>
    </div>
</div> 
</template>
<script>
export default {
    data(){
        return{
            mylist1:[],
            mylist2:[],
            mylist3:[],
        }
    },
    methods:{
       getList(){
           var url="/list";
           this.axios.get(url).then(res=>{
              
               this.mylist1=res.data.slice(0,20);
               this.mylist2=res.data.slice(20,40);
               this.mylist3=res.data.slice(40);
                //  console.log(this.mylist3)
           })
       }
    },
    created(){
        this.getList()
       this.$nextTick(()=>{
           var mor=this.$refs.mor;
        //    console.log(mor)
           var a=0;
           var tb=mor.nextElementSibling;
           mor.parentNode.onclick=function(){
               var list1=document.querySelector("#list1");
              if(a%2==0){
                   list1.style.height="130px";
                   mor.innerHTML="收起";
                   mor.style.transition="all .3 linear"
                     tb.style.background="url(/img/list/listIcon.png) no-repeat -8px 1px";
              }else{
                  list1.style.height="41px";
                   mor.innerHTML="更多";
                   tb.style.background="url(/img/list/listIcon.png) no-repeat 1px 1px"
              }
              a++;
           }
            var show=document.querySelectorAll("#container>div");
           var li1=this.$refs.li1;
           li1.onclick=function(){
               var others=document.querySelectorAll("#tab li a");
                for(var content of show){
                content.style.display="none"
                }
               show[0].style.display="block"
               for(var li of others){
                   li.style.color="#9e9e9e"
               }
               li1.style.color="#f26552"
           }
            var li2=this.$refs.li2;
           li2.onclick=function(){  var li2=this;
               var others=document.querySelectorAll("#tab li a");
               for(var content of show){
                   content.style.display="none"
               }
               show[1].style.display="block"
               for(var li of others){
                   li.style.color="#9e9e9e"
               }
               li2.style.color="#f26552"
           }
            var li3=this.$refs.li3;
           li3.onclick=function(){
               var others=document.querySelectorAll("#tab li a");
                for(var content of show){
                   content.style.display="none"
               }
               show[2].style.display="block"
               for(var li of others){
                   li.style.color="#9e9e9e"
               }
               li3.style.color="#f26552"
           }
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
nav>ul{
    list-style: none;
    background-color:#fff;
    position: relative;
}
nav>ul>li{
    border-bottom:1px solid #f5f5f5;
    padding:10px 20px 10px 0px;
    display: flex;
    flex-wrap:wrap;
    box-sizing: border-box;
    margin-left:45px;
}
nav>ul>li>a,#mor,#dnone>a,#dnone2>a{
    display: block;
    margin: 0 15px;
    font-size: 13px;
    font-family: "Microsoft Yahei", arial,sans-serif;
    font-weight: normal;
    color: #9e9e9e;
    border: 1px solid #fff;
    border-radius: 50px;
    padding:0 9px;
}
nav>ul>li>a:hover{
    text-decoration: none;
    color: #9e9e9e;
    border-color: #9e9e9e!important;
}
.my_bk1{
   height: 23px;
}
.my_bk{
    background: #9e9e9e;
    border-radius: 50px;
    color: #fff!important;
    border: 1px solid #9e9e9e;
    padding:0 9px;
     margin-left: 15px;
}
.my_span1,.my_span2,.my_span3{
    position: absolute;
    font-size: 14px;
    font-family: "Microsoft Yahei", arial,sans-serif;
    font-weight: normal;
    color:#ccc;
    top:18px;
    left:30px;
}
.my_span2{
    top:60px;
}
.my_span3{
    top:102px;
}
.my_hidden{
    display: none;
}

#tab{
    display: flex;
    list-style: none;
    margin-bottom:0;
}
#tab li a{
    display: inline-block;
    text-decoration: none;
    width:114px;height: 40px;
    line-height: 40px;
    text-align: center;
    background-color:#f5f5f5;
}
.my_right{
    margin-left:-40px;
}
#tab li a:hover{
    color: #9e9e9e;
}
.my_card_bk{
    padding:15px 10px;
    display: flex;
    justify-content: space-around;
}
h3{
    border-bottom:1px solid #f0f0f0;
    margin-bottom: 10px;
}
h3>a{
    width:148px;
    height: 19px;
    display:block;
    font-size:14px;
    font-family: "Microsoft Yahei", arial,sans-serif;
    font-weight: normal;
    color: #212121;
    position: relative;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    margin-bottom:8px;
}
.my_p{
    width: 148px;
    height: 48px;
    line-height: 16px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    margin-top:10px;

}
s{
    display: inline-block;
    width: 14px;height: 9px;
    background:url(/img/comm/icon.png) no-repeat 99% 52%;
}
#container{
    background: #fff;
    padding:25px 20px 20px 20px;
}
.btn{
    display: inline-block;
    padding:0;
    width: 36px;
    height: 20px;
    color: #fff;
    font-size: 12px;
    font-family: "Microsoft Yahei", arial,sans-serif;
    border-radius: 3px;
    background: #f26552;
    float:right;
}
.myhh:hover{
    color: #f26552;
    text-decoration: none;
}
.btn:hover{
   background:#d32f2f;
   color:#fff;
}
.tabs{
    position: relative;
}
.nav_top{
    margin:0;padding:0;
    position: absolute;
    top:6px;
    right:0;
}
.nav_top>a{
    position: relative;
    padding: 0;
    display: inline-block;
    width:34px;height:36px;
    border:1px solid #f0f0f0;
    background: #fff;
    margin:-12px 8px;
    top:1.5px;
}
.nav_top>a>span{
    display: inline-block;
    height:11px;
    width:7px;
    position: absolute;
    top:11px;
    left:11px;
    background:url(/img/list/listIcon.png) no-repeat -10% 15%;
}
.my_a_left{
    margin-right:0!important;
}
.my_a_left>span{
    background:url(/img/list/listIcon.png) no-repeat -10% 42%!important;
}
.my_ul{
    width:450px;
    margin:20px auto!important;
}
.my_ul a{
    margin-left:15px!important;
    border-radius:5px;
    color:#9e9e9e!important;  
    padding:0.6rem 0.9rem; 
}
.my_s_1{
    display: inline-block;
    height:11px;
    width:7px;
    margin-right:5px;
    top:11px;
    left:11px;
    background:url(/img/list/listIcon.png) no-repeat -10% 15%;
}
.my_sp_1{
    padding-right:6px;
}
.my_pos{
    position: relative;
}
#mor{
    position: absolute;
    right: 12px;
    top:62px;
}
#dnone>a,#dnone2>a{
    display: inline;
}
@media screen and (max-width:1200px){
    #dnone{
        display: none;
    }
}
@media screen and (max-width:767px){
    #dna1,#dna2{
        display: none;
    }
}
#tb{
    float: right;
    width: 9px;
    height: 6px;
    background-position: 0 0;
    margin-top: 7px;
    background: url(/img/list/listIcon.png) no-repeat 1px 1px;
    position: absolute;
    right:23px;
    top:62px;
}
.my_xl{
    cursor: pointer;
}
.tab_bk{
    color:#f26552; 
}
#list1{
     height:41px;
     overflow: hidden;
     margin-bottom:3px;
     transition: all .3s linear;
}
 #list2{
     list-style: none;
     width:92%;
     padding:0;
    
 }
 #list2>li{
     float: left;
 }
  #list2>li>a{
    margin: 0 15px;
    font-size: 13px;
    font-family: "Microsoft Yahei", arial,sans-serif;
    font-weight: normal;
    color: #9e9e9e;
    border: 1px solid #fff;
    border-radius: 50px;
    padding:0 9px;
    display: inline-block;
    height: 20px;
    line-height: 20px;
    padding: 0 9px;
  }
  #list2>li>.my_aa:hover{ 
        text-decoration: none;
        color: #9e9e9e;
        border-color: #9e9e9e!important;}
    .my_bk1{
        height: 23px!important;
    }
     .my_bk1:hover{
         text-decoration: none;
     }
</style>
