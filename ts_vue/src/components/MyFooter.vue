<template>
    <div class="container">
    <div class="row ml-lg-4">
        <div class="mt-3 col-lg-4 footer_top">
            <p ><img src="img/logo.png" alt=""/></p>
            <p><img src="img/footer/footerFont.png" alt=""/></p>
        </div>
        <div class="mt-3 col-lg-4">
            <div class="row footer_center">
                <div class="col-4">
                    <h5 >新手帮助</h5>
                    <ul class="list-unstyled">
                        <li>
                            <a class="a3 my_small ml-1" href="#">新手指南</a>
                        </li>
                        <li>
                            <a class="a3 my_small ml-1" href="#">服务宗旨</a>
                        </li>
                        <li>
                            <a class="a3 my_small ml-1" href="#">常见问题</a>
                        </li>
                    </ul>
                </div>
                <div class="col-4">
                    <h5 >会员帮助</h5>
                    <ul class="list-unstyled">
                        <li>
                            <a class="a3 my_small ml-1" href="#">会员特权</a>
                        </li>
                        <li>
                            <a class="a3 my_small ml-1" href="#">会员积分</a>
                        </li>
                    </ul>
                </div>
                <div class="col-4">
                    <h5 >关于我们</h5>
                    <ul class="list-unstyled">
                        <li>
                            <a class="a3 my_small ml-1" href="#">关于我们</a>
                        </li>
                        <li>
                            <a class="a3 my_small ml-1" href="#">联系我们</a>
                        </li>
                        <li>
                            <a class="a3 my_small ml-1" href="#">
                                <img src="img/footer/wechat.png" alt=""/>
                                <img class="ml-2" src="img/footer/sinablog.png" alt=""/>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="mt-3 col-lg-4">
            <div class="row footer_bottom">
                <div class="col-5 p-0">
                    <h6>爱阅读客户端</h6>
                    <p class="mb-2" ><img src="img/footer/ios.png" alt=""/></p>
                    <p class="m-0" ><img src="img/footer/android.png" alt=""/></p>
                </div>
                <div class="col-7 mt-1">
                    <img src="img/footer/erweima.png" alt=""/>
                </div>
            </div>

        </div>
    </div>
    <div class="d-flex justify-content-around flex-wrap justify-content-center mt-4">
        <a class="my_small m-3 al" href="#">爱阅官网</a>
        <a class="my_small m-3 al" href="#">爱阅小说</a>
        <a class="my_small m-3 al" href="#">爱阅读</a>
        <a class="my_small m-3 al" href="#">树丛阅读</a>
        <a class="my_small m-3 al" href="#">书虫夜读</a>
        <a class="my_small m-3 al" href="#">爱阅微信</a>
        <a class="my_small m-3 al" href="#">爱阅英文</a>
        <a class="my_small m-3 al" href="#">合作声明</a>
        <a class="my_small m-3 al" href="#">商务洽谈</a>
        <a class="my_small m-3 al" href="#">法律声明</a>
    </div>
</div>
</template>
<script>
export default {
    name:"my-footer",
    data(){
        return{}
    }
}
</script>
<style scoped>
h5{
    color: #333;
    font-size: 16px;
}
.a3{
    color:#808080;
}
.a3:hover{
    text-decoration: none;
    color:#333;
}
h6{
    color:#333;
    font-size:16px;
    margin-left: 14px;
}
@media screen and (max-width: 991px){
    .footer_center{
        margin-left:5rem;
    }
    .footer_bottom{
        margin-left: 11rem;
    }
    .footer_top{
        margin-left: 6rem;
    }
}
@media screen and (max-width: 767px){
    .footer_bottom{
        margin-left: 7rem;
    }
    .footer_top{
        margin-left: 4rem;
    }
    .footer_center{
        margin-left:3rem;
    }
}
.al:hover{
    text-decoration:none;
}
</style>
