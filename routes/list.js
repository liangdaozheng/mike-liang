// 创建列表路由
const express=require("express");
const router=express.Router();
const pool=require("../tspool");
//创建列表路由get 
router.get("/list",(req,res)=>{
    var sql="SELECT title,author,img,href,subtitle FROM ts_list "
    pool.query(sql,(err,result)=>{
        if(err) throw err;
        if(result.length>0){
            res.send(result)
        }
    })
})

//导出路由
module.exports=router;