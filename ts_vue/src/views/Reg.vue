<template>
   <div class="container">
    <div class="my_center">
        <img id="img1" src="img/logo (1).png" alt="">
    </div>
    <div class="my_center">
       <div class="my_style my_bottom">
           <span class="my_f">用户名:</span>
           <input @blur="myUname" v-model="uname" class="my_input" type="text" placeholder="长度1-10位之间" id="uname">
           <div :class="{my_hidden1:show1}" class="myi">用户名格式错误</div>
       </div>
       <div class="my_style my_bottom">
            <span class="my_f">密码:</span>
            <input  @blur="myUpwd" v-model="upwd" class="my_input" type="password" placeholder="长度6-12位之间"
            id="upwd">
            <div class="myi myi2" :class="{my_hidden2:show2}">密码格式错误</div>
        </div>
        <div class="my_style">
            <span class="my_f">手机号:</span>
            <input   @blur="myPhone" v-model="phone" class="my_input " type="text" id="phone">
            <div class="myi" :class="{my_hidden3:show3}">手机号输入错误</div>
        </div>
        <button @click="cReg" class="my_center" :disabled="nLogin" :class="{button1:nLogin}">立即注册</button>
        <h5>
            <router-link to="/login">登录</router-link>
            <span>&gt;</span>
        </h5>
    </div>
</div>
</template>
<script>
export default {
    data(){
        return{
            uname:"",
            upwd:"",
            phone:"",
            nLogin:true,
            show1:true,
            show2:true, 
            show3:true
        }
    },
    methods:{
         // 验证用户名,错误时清空  
        cReg(){
            var url="user/reg";
            var url2="user/creg"
            var uparams=`uname=${this.uname}&upwd=${this.upwd}&phone=${this.phone}`
            var pparams=`uname=${this.uname}`
            if(this.phone!=""){
                this.axios.post(url,pparams).then(res=>{
                    console.log(res)
                    if(res.data.code==200){
                        this.axios.post(url2,uparams).then(res=>{
                        if(res.data.code==200){
                            var myName=this.uname;
                            sessionStorage.setItem("myName",myName)
                            this.$router.push("/index")
                        }
                    })
                    }else{
                        alert("用户名已被注册")
                    }
                
                })
            }else{
                alert("请正确填写信息")
            }
        },
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
        },
        myPhone(){
            if(this.phone!=""){
                 var pho=/^1([38][0-9]|4[579]|5[0-3,5-9]|6[6]|7[0135678]|9[89])\d{8}$/;
                if(!pho.test(this.phone)){
                    this.show3=false
                    this.phone=""
                }else{this.show3=true;}
             }else{
                this.show3=false
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
<style>
.myi{
    position: absolute;
    right: -40%;
    top:2%;
    color:#f00;
}
.myi2{
    right:-35%;
}
.button1{
    opacity: 0.5;
}
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
    padding:0 0 0 12px;
    background:#fff;
    line-height: 44px;
    position: relative;
}
.my_bottom{
    border-bottom:0!important;
}
.my_hidden1{
    display: none;
}
.my_hidden2{
    display: none;
}
.my_hidden3{
    display: none;
}
.my_input{
    box-sizing: border-box;
    border:0;outline:0;
    padding:10px;
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
