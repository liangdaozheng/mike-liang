<template>
    <div class="container">
        <div class="my_center">
            <img id="img1" src="img/logo (1).png" alt="错误">
        </div>
        <div class="my_center">
            <div class="my_style my_bottom">
                <span class="my_f">用户:</span>
                <input  @blur="myUname" v-model="uname" class="my_input" type="text" placeholder="长度1-10位之间" >
            </div>
            <div :class="{my_hidden1:show1}">用户名格式错误</div>
            <div class="my_style">
                <span class="my_f">密码:</span>
                    <input @blur="myUpwd" v-model="upwd" class="my_input" type="password" placeholder="长度2-12位之间">
               </div>         </div>
            <div :class="{my_hidden2:show2}">密码格式错误</div>
            <div  @click="cLog">
                 <button :disabled="nLogin" class="my_center" :class="{button1:nLogin}">登录</button>
            </div>
            <h5>
                <router-link to="/reg">快速注册</router-link>
                <span>&gt;</span>
            </h5>
        </div>
    </div>
</template>
<script>
import { constants } from 'fs';
export default {
    data(){
        return{
            uname:"",
            upwd:"",
            nLogin:true,
            show1:true,
            show2:true 
        }
    },
    methods:{
        cLog(){
            var url="user/login";
            var uparams=`uname=${this.uname}&upwd=${this.upwd}`
            if(this.upwd!=""){
                this.axios.post(url,uparams).then(res=>{
                    // console.log(res)
                    if(res.data.code==200){
                        var myName=this.uname;
                        // console.log(myName)
                        sessionStorage.setItem("myName",myName)
                        this.$router.push("/index")
                    }else{
                        alert("用户名或密码错误")
                        this.nLogin=true;
                        this.uname="";
                        this.upwd="";
                        this.show1=true;
                        this.show2=true;
                    }
                })
            }
             
        },
        // 验证用户名,错误时清空
        myUname(){
             if(this.uname!=""){
                var reg=/^\w{1,10}$/;
                if(!reg.test(this.uname)){
                    this.show1=false
                    this.uname=""
                }else{this.show1=true;}
             }else{
                this.show1=false
             }
        },
        // 验证密码错误时清空
        myUpwd(){
            if(this.upwd!=""){
                var reg=/^\w{2,12}$/;
                if(!reg.test(this.upwd)){
                    this.show2=false
                    this.upwd=""
                }else{this.show2=true;}
             }else{
                this.show2=false
             }
        }
    },
    watch:{
        uname(){
            if(this.uname.length>0){
                this.nLogin=false;
            }else{
                this.nLogin=true;
            }
        }
    }
}
</script>
<style scoped>
.my_center{
width:318px;
margin:0 auto; 
}
#img1{
    display: block;
    margin:2rem auto 1rem;
}
.my_style{

    height: 44px;
    border:1px solid #cbcbcb;
    /* padding:0 0 0 12px; */
    background:#fff;
    line-height: 44px;
    position: relative;
}
.my_bottom{
    border-bottom:0;
}
.my_hidden1{
    display: none;
}
.my_hidden2{
    display: none;
}
.my_input{
    box-sizing: border-box;
    border:0;outline:0;
    padding:10px 0;
    height:36px;
    font-family: "Microsoft Yahei", arial,sans-serif;
    color: #aaa;
    font-size: 12px;
    display: inline;
}
.my_f{
    font-family: "Microsoft Yahei", arial,sans-serif;
    color: #5f5f5f;
    font-size: 14px;
    left: 10%;
    position: absolute;
}
button{
    width: 100%;
    height: 50px;
    font-size: 18px;
    text-align: center;
    line-height: 50px;
    color: #fff;
    cursor: pointer;
    border: 0;
    border-radius: 2px;
    background: #ff7200;
    margin-top: 22px !important;
}
.button1{
    opacity: 0.5;
}
h5{
    text-align: center;
    margin-top:12px;
}
h5>a,h5>span{
    font: 14px "Microsoft Yahei","Lucida Grande", Helvetica, Arial;
    color: #666;
}
h5>a:hover,h5>span:hover{
    font: 14px "Microsoft Yahei","Lucida Grande", Helvetica, Arial;
    color: #666;
    text-decoration: none;
}
.my_err{
    padding: 0 4px;
    color: #fff;
    font-size: 12px;
    line-height: 21px;
    border-radius: 2px;
    background: #ff2400;
    position: absolute;
    top: 11.5px;
    left: 65%; 
}
</style>
