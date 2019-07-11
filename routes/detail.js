//创建详情页路由
const express=require("express")
const router=express.Router();
const pool=require("../tspool");
//详情路由get
router.get("/detail",(req,res)=>{
    var tid=req.query.tid;
    // console.log(tid)
    var sql="SELECT title,subtitle,author,img,price,num FROM ts_detail WHERE tid=?"
    pool.query(sql,[tid],(err,result)=>{
        if(err) throw err;
        if(result.length>0){
            res.send(result)
        }
    })
})
//导出路由
module.exports=router;