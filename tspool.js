//创建连接池
const mysql=require("mysql");
const pool=mysql.createPool({
    host:"w.rdc.sae.sina.com.cn",
    port:"3306",
    user:"x0x1mmxww4",
    password:"zmjwx1ki14yw3z3h2w43lzi5y1zhj4my4w1y12my",
    database:"app_vuets",
    connectionLimit:"10"
})
// 导出连接池
module.exports=pool;