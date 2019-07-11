//创建首页路由
const express=require("express")
const router=express.Router();
const pool=require("../tspool");
//首页数据路由get,返回轮播数据,推荐数据,排行数据
router.get("/ind",(req,res)=>{
    var sql=" SELECT title,subtitle,author,img,class,href FROM ts_index";
    pool.query(sql,(err,result)=>{
            if(err) throw err;
            // console.log(result)
            res.send(result)
        }
    ) 
})
router.get("/hot",(req,res)=>{
    var sql=" SELECT title,img,href FROM ts_hot";
    pool.query(sql,(err,result)=>{
            if(err) throw err;
            // console.log(result)
            res.send(result)
        }
    ) 
})
router.get("/ban",(req,res)=>{
    var sql="SELECT title,subtitle,img,href FROM ts_banner";
    pool.query(sql,(err,result)=>{
            if(err) throw err;
            // console.log(result)
            res.send(result)
        }
    ) 
})
//导出路由
module.exports=router;