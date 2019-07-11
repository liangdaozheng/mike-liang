<template>
    <div id="main">
        <div id="banner">
        <div id="btn-left" ref="btnLeft"></div>
        <ul id="ul-imgs" ref="ulImgs" style="width:5000px; margin-left:0px;">
            <li>
                <ul>
                    <li v-for="(tmp,i) of myBan1" :key="i">
                        <router-link :to="'/details/'+tmp.href">
                            <img :src="'http://127.0.0.1:3000/'+tmp.img" alt="">
                        </router-link>
                    </li>
                </ul>
            </li>
            <li>
                <ul>
                    <li v-for="(tmp,i) of myBan2" :key="i">
                       <router-link :to="'/details/'+tmp.href">
                            <img :src="'http://127.0.0.1:3000/'+tmp.img" alt="">
                        </router-link>
                    </li>
                </ul>
            </li>
            <li>
                <ul>
                    <li v-for="(tmp,i) of myBan3" :key="i">
                       <router-link :to="'/details/'+tmp.href">
                            <img :src="'http://127.0.0.1:3000/'+tmp.img" alt="">
                        </router-link>
                    </li>
                </ul>
            </li>
            <li>
                 <ul>
                    <li v-for="(tmp,i) of myBan4" :key="i">
                      <router-link :to="'/details/'+tmp.href">
                            <img :src="'http://127.0.0.1:3000/'+tmp.img" alt="">
                        </router-link>
                    </li>
                </ul>
            </li>
            <li>
                <ul>
                    <li v-for="(tmp,i) of myBan1" :key="i">
                        <router-link :to="'/details/'+tmp.href">
                            <img :src="'http://127.0.0.1:3000/'+tmp.img" alt="">
                        </router-link>
                    </li>
                </ul>
            </li>
        </ul>
        <ul id="ul-idxs" ref="ulIdxs">
            <!--虽然li个数比实际图片张数多1，但小圆点的个数不必多1-->
            <li class="active"></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
        <div id="btn-right" ref="btnRight"></div>
        </div>
    </div> 
</template>
<script>
export default {
    data(){
        return{
            myBan1:[],
            myBan2:[],
            myBan3:[],
            myBan4:[],
        }
    },
    methods:{
         getBan(){
            var url="index/ban"
            this.axios.get(url).then(res=>{
                // console.log(res)
                this.myBan1=res.data.slice(0,4)
                this.myBan2=res.data.slice(4,8)
                this.myBan3=res.data.slice(8,12)
                this.myBan4=res.data.slice(12,16)
                // console.log(this.myBan4)
            })
        }
    },
    created(){
        this.getBan()
    },
    mounted(){
        var i=0;
        var LIWIDTH=1000;
        var DURATION=500;
        var LICOUNT=4;
        var ulImgs=this.$refs.ulImgs;
        var ulIdxs=this.$refs.ulIdxs;
        var lis=ulIdxs.children;
        function moveTo(to){
        if(to==undefined){
           to=i+1;
         }
         if(i==0){
          if(to>i){
            ulImgs.className="transition";
          }else{
          ulImgs.className="";
          ulImgs.style.marginLeft=-LIWIDTH*LICOUNT+"px";
          setTimeout(function(){
            moveTo(LICOUNT-1);
          },100);
          return;
        }
         }
         i=to;
         ulImgs.style.marginLeft=-i*LIWIDTH+"px";
         for(var li of lis){
          li.className=""
         }
        //  console.log(i);
        if(i==LICOUNT){
           i=0;
           setTimeout(function(){
           ulImgs.className="";
           ulImgs.style.marginLeft=0;
        },DURATION)
        }
       lis[i].className="active";
      }

     var btnLeft=this.$refs.btnLeft;
     var btnRight=this.$refs.btnRight;
    var canClick=true;
    btnRight.onclick=function(){
      move(1)
    }
    function move(n){
      if(canClick){
        // console.log(i+n);
        moveTo(i+n);
        canClick=false;
        setTimeout(function(){
          canClick=true;
        },DURATION+100);
      }
    }
    btnLeft.onclick=function(){
      move(-1);
    }
    var interval=3000;
    var timer=setInterval(function(){
      moveTo()
    },3000);
    var banner=document.getElementById("banner");
    banner.onmouseover=function(){
      clearInterval(timer);
    }
    banner.onmouseout=function(){
      timer=setInterval(function(){
        moveTo()
      },3000);
    }
    var canClick=true;
    ulIdxs.onclick=function(e){
      if(canClick){
        var li=e.target;
        if(li.nodeName=="LI"){
          if(li.className!=="active"){
            for(var i=0;i<lis.length;i++){
              if(lis[i]==li){
                break;
              }
            }
            moveTo(i);
            setTimeout(function(){
              canClick=true;
            },DURATION);
          }
        }
      }
    }
    }
     

}
</script>
<style scoped>
    *{margin:0; padding:0;}
    #main{
      width:1000px;
      margin:0 auto;
      background:url("/img/banner/bg.gif") no-repeat center top;
      margin-top:20px;
    }
    #banner{
      width:1000px;
      overflow:hidden;
      position:relative;
    }
    #ul-imgs{
      list-style:none;
    }
    #ul-imgs.transition{
      transition:all .5s linear;
    }
    #ul-imgs>li{
      width:1000px;
      float:left;
    }
    #ul-imgs>li>ul{
      list-style: none;
      width:700px;
      margin:0 auto;
      display: flex;
      justify-content: space-around;
      align-items: center;
    }
    #ul-imgs>li>ul>li{
       margin:50px 0; 
    }
    #ul-idxs{
      width:100px;
      margin:0 auto;
      list-style:none;
      position:absolute;
      bottom:25px;
      left:50%;
      margin-left:-50px;
    }
    #ul-idxs>li{
      float:left;
      width:10px; height:10px;
      background-color:#fff;
      border-radius:5px;
      margin:0 5px;
      cursor:pointer;
    }
    #ul-idxs>li.active{
      background-color:blue;
    }
    #btn-left,#btn-right{
      height: 25px;
      width: 25px;
      position:absolute;
      top:40%;
      background-repeat:no-repeat;
      background-position:center;
      cursor:pointer;
    }
    #btn-left{
      left:20px;
      background: url("/img/banner/icon.png") no-repeat 0% 13%;
    }
    #btn-right{
      right:20px;
      background: url("/img/banner/icon.png") no-repeat 0% 33.5%;
    }
  </style>