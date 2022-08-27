
class product {
    constructor() {
        // 获取大图
        this.$img = $('#img12');
        // 获取大图下面的小图的ul
        this.$ul = $('#zxc');
        // 获取购买按钮
        this.$buy = $('.ri5le');
        // 获取加入购物车按钮
        this.$char = $('.ri5cen');
        // 获取预约按钮
        this.$yu = $('.ri5ri');
        // 获取预约按钮的二维码
        this.$wai = $('.wai');
        // 获取点击加号要展开的那三部分盒子
        this.$ri1 = $('.ri11');
        this.$ri2 = $('.ri22');
        this.$ri3 = $('.ri33');
        // 获取右边需要吸顶的部分
        this.$ribox1 = $('.ribox1');
        // 获取头部文件
        this.$head = $('#header');
        // 事件
        this.addevent();
        // 页面初始化
        // this.init();

    }
    addevent() {
        // 实例对象
        let that = this;
        // 点击事件,点那个就把那个的src赋给top里面的img的src
        this.$ul.on({
            'click': function () {
                let str = '';
                str = $(this).attr("src");
                console.log(that.$img.attr("src"));
                that.$img.attr("src", str)
                console.log(str);
            }
            // 利用jquery不需要事件委托
        }, 'li>img')
        // 关于购买按钮的移入移出事件
        this.$buy.on({
            'mouseenter': () => {
                // jquery的css方法设置多个属性时用{}对象
                this.$buy.css({ 'background': '#fff', 'color': '#000' })

            },
            'mouseout': () => {
                this.$buy.css({ 'background': '#414141', 'color': '#fff' })
            },
            /*这两个location.href是检测有没有登录的登录的话就跳转到购物车页,没登陆就跳转到登录注册页*/
            'click': function () {
                if ($.cookie('users')) {
                    location.href = 'shoppingCart.html';
                } else {
                    // 此处填跳转到登录注册的地方
                    location.href = 'login.html';
                }
            }
        })
        // 关于加入购物车的移入移出事件
        this.$char.on({
            'mouseenter': () => {
                this.$char.css({ 'background': 'rgb(186,184,182)' })

            },
            'mouseout': () => {
                this.$char.css({ 'background': '#fff' })
            },
            /*此处点击跳转到购物车页 */
            'click': function () {
                location.href = 'shoppingCart.html';
                let good_id = $(this).parent().parent().attr('data-good-id');
                let $good_src = $(this).parent().prev().children().eq(0).children().eq(0).children().eq(0).children().eq(0).attr('src');
                let $good_set = $(this).parent().parent().children().eq(0).text();
                let $good_name = $(this).parent().prev().children().eq(0).children().eq(0).children().eq(1).text();
                let $good_price =$(this).parent().prev().prev().children().eq(0).text();
                console.log($good_src, $good_name, $good_price, $good_set)
                // 获取后端数据
                let storage = window.localStorage;
                console.log(storage)
                let storage_str = storage.getItem('products') ? storage.getItem('products') : '';
                console.log(storage_str)
                // 转对象
                let $storage_obj = {};
                if (storage_str !== '') {
                    $storage_obj = JSON.parse(storage_str);
                    $storage_obj[good_id].num++;
                }
                else {
                    $storage_obj[good_id] = {
                        "name": $good_name,
                        "set": $good_set,
                        "src": $good_src,
                        "price": $good_price,
                        "num": 1
                    }
                    storage.setItem('products', JSON.stringify($storage_obj));
                }
                storage.setItem('products', JSON.stringify($storage_obj));
            }

        })
        // 关于预约按钮的移入移出事件
        this.$yu.on({
            'mouseenter': () => {
                this.$yu.css({ 'background': '#fff', 'color': '#000' })
                console.log(that.$wai.css('display'))
                that.$wai.css('display', 'block')
            },
            'mouseout': () => {
                this.$yu.css({ 'background': '#414141', 'color': '#fff' })
                that.$wai.css('display', 'none')
            }
        })
        // 关于点击+弹出框
        this.$ri1.on('click', function () {
            if ($('.ri3ul').css('display') == 'none') {
                $(this).text('-')
                $('.ri3ul').css('display', 'block')
            } else {
                $(this).text('+')
                $('.ri3ul').css('display', 'none')
            }
        })
        // 关于点击+弹出框
        this.$ri2.on('click', function () {
            if ($('.ri4but').css('display') == 'none') {
                $(this).text('-')
                $('.ri4but').css('display', 'block')
            } else {
                $(this).text('+')
                $('.ri4but').css('display', 'none')
            }
        })
        // 关于点击+弹出框
        this.$ri3.on('click', function () {
            if ($('.ri5but').css('display') == 'none') {
                $(this).text('-')
                $('.ri5but').css('display', 'block')
            } else {
                $(this).text('+')
                $('.ri5but').css('display', 'none')
            }
        })
        // 关于滚动让右边部分吸顶
        $(window).scroll(function () {
            if ($(document).scrollTop() > 700) {
                that.$ribox1.css({
                    'position': 'fixed',
                    'top': '30px'
                })
            } else {
                that.$ribox1.css({
                    'position': 'relative',
                })
            }
        })
    }
}
$(function () {
    new product();
});


var o_find = document.getElementById('find')
var o_close = document.getElementById('btn-search-close')
var topnav = document.querySelector('.top-scroll')
var sav = document.querySelector('.search-box')
var site = document.querySelector('.location')
o_find.onclick = function () {
    document.getElementById('schbody').style.top = "160px";
    window.onscroll = function () {
        if (parseInt(document.documentElement.scrollTop) > 100) {
            sav.style.position = 'fixed'
            sav.style.top = '32px'
        } else if (parseInt(document.documentElement.scrollTop) <= 100) {
            sav.style.position = 'fixed'
            sav.style.top = '160px'
        }
    }
}
o_close.onclick = function () {
    document.getElementById('schbody').style.top = "-640px"
    window.onscroll = null;
}
window.addEventListener('scroll', function (e) {
    if (window.pageYOffset > 170) {
        // topnav.style.position = 'fixed'
        // topnav.style.top = '0px'
        topnav.style.display = 'block'

    } else {
        // topnav.style.position = 'fixed'
        // topnav.style.top = '-32px'
        topnav.style.display = 'none'

    }
})
site.onclick = function () {
    location.href = 'https://ditu.amap.com/'
}

// 底部js
class Footer{
    constructor(){
        this.btn = document.querySelectorAll('footer .center .left .top ul li a')
        this.box = document.querySelector('footer .center .left .hidden')
        this.addEvent()
    }
    addEvent(){
        let that = this
        for(let i = 0 , len = this.btn.length ; i < len ; i ++){
            this.btn[i].onclick = function(){
                if($(that.box).is(':hidden')){
                    $(that.box).show(230)
                }else{
                    $(that.box).hide(230)
                }
            }
        }
    }
}
new Footer()

