<template>
    <div class="container">
    <div class="row mt-4">
        <div class="col-md-2  col-sm-12">
            <a class="navbar-brand" href="#"><img src="img/logo.png" alt=""/></a>
        </div>
        <div class="col-md-5  col-sm-12 mt-3">
           <div id="top_span">
                <input class="" type="text" placeholder="书名/作者名"/>
                <span></span>
           </div>
        </div>
        <div class="col-md-5 col-sm-12 d1">
            <ul class="nav wid">
                <li class="nav-item li_1" v-for="(lis,i) of list" :key="i" @click="inf(i)">
                    <!-- <a class="nav-link  my_small" :class="{a3:index!=i}" href="#">{{lis}}</a> -->
                    <router-link class="nav-link  my_small" :class="{a3:index!=i}" :to="lis.url">{{lis.tit}}</router-link>
                    <span class="span1" :class="{in:index==i}"></span>
                </li>
                <li class="nav-item">
                    <!-- <a class="nav-link a2 my_small" href="#">登录</a> -->
                    <router-link v-if="login==true" class="nav-link a2 my_small" to="/login">登录</router-link>
                    <div  @click="log">
                        <span  v-if="login==false" class="nav-link a2 my_small">退出</span>
                    </div>
                </li>
                <li style="position:relative"><img class="hot" src="img/header/hot.png" alt=""/></li>
            </ul>
            
        </div>
    </div>
</div>
</template>
<script>
export default {
    name:"my-header",
    data(){
        return{
            list:[{tit:"首页",url:"/"},{tit:"分类",url:"/list"},{tit:"排行",url:"/"},{tit:"签到",url:"/"}],
            index:0,
            login:true
        }
    },
    methods:{
      inf(i){
          this.index=i;
      },
      log(){
          this.login=true;
          sessionStorage.removeItem("myName")
      }
    },
    created(){
        var uname=sessionStorage.getItem("myName")
        if(uname!==null){
            this.login=false;
        }else{
            this.login=true;
        }      
    }
}
</script>
<style scoped>
#top_span{
    position: relative;
}
#top_span>span{
    display: inline-block;
    width: 15px;
    height: 15px;
    cursor: pointer;
    position: relative;
    left: -28px;
    top:2px;
    background: url(/img/comm/icon.png) no-repeat;
}

.color{
    color:#f26552;
}
.span1:visited{
    text-decoration: underline;
}
input{
    height: 32px;
    font-size: 13px;
    border-radius: 50px;
    border: 1px solid #d2d2d2;

    padding: 5px 36px 5px 12px;
}
.d1{
    margin-top:8px;
    position: relative;
}

.a2{
    border: 1px solid #d2d2d2 !important;
    font-size: 14px !important;
    border-radius: 0.4rem;
    padding-top:4px;
    padding-bottom:4px;
    margin:5px 0 0 30px;
}
@media screen and (min-width: 992px){
    input{
        width:85%;
    }
}
@media screen and (max-width: 991px) and (min-width: 768px){
    input{
        width:65%;
    }
     .wid{
        width:350px!important;
        margin:10px auto!important;
    }
    .d1{
         margin-top:0px;
         padding:0;
         position: relative;
         left:-50px;
    }
    .nav-item:first-child{
        padding-left: 0;
    }
}
@media screen and (max-width: 767px){
    input{
        width:63%;
    }
    .wid{
        width:350px!important;
        margin:20px auto!important;
    }
}

.a3:hover{
    color:#f26552 !important;
}
.hot {
    position: absolute;
    display: block;
    width: 32px;
    top:-5px;
    left:-185px;
}
.hot_r{
    margin-left: -15px;
}
ul li{
    position: relative;
}
.span1,.span2,.span3,.span4{
    width:28px; height: 2.5px;
    background-color:#f26552;
    position: absolute;
    top:33px;left:17px;
    display: none;
}
.in{
    display: block;
}
.span2,.span3{
    left:17px!important;
}
.span4{
    left:2px!important;
}
 .wid{
        width:100%;
    }

</style>
