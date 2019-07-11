//创建用户路由
const express=require("express");
const router=express.Router();
const pool=require("../tspool");
//用户名验证
router.post("/reg",(req,res)=>{
  var obj=req.body;
  var sql="SELECT uid FROM ts_user WHERE uname=?"
  pool.query(sql,[obj.uname],(err,result)=>{
    if(err) throw err;
    if(result.length>0){
      res.send({code:301,msg:'not suc'})
    }else{
      res.send({code:200,msg:'can reg'})
    }
  })
})
//1. 用户注册路由post
router.post('/creg',(req,res)=>{
  var obj=req.body;
  var sql="INSERT INTO ts_user(uname,upwd,phone) values(?,md5(?),?)";
  pool.query(sql,[obj.uname,obj.upwd,obj.phone],(err,result)=>{
    if(err) throw err;
    if(result.affectedRows>0){
      res.send({code:200,msg:'reg suc'})
    }
  })
})
// 2. 用户登录路由
router.post('/login',(req,res)=>{
  var obj=req.body;
  // console.log(obj)
  var sql="SELECT uid FROM ts_user WHERE uname=? AND upwd=md5(?)"
  pool.query(sql,[obj.uname,obj.upwd],(err,result)=>{
    if(err) throw err;
    if(result.length>0){
      req.session.loginUid=result[0].uid;
      res.send({code:200,msg:"login suc"})
    }else{
      res.send({code:301,msg:"login err"})
    }
  })
})

//导出用户路由
module.exports=router;