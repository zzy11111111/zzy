let Q = {
    cookie(key, value, json = {}) {
        let str = encodeURIComponent(key) + '=' + encodeURIComponent(value);
        //有效期
        if (!isNaN(json.expires)) {
            let date = new Date();
            date.setDate(date.getDate() + json.expires);
            str += ';expires=' + date;
        }
        //路径
        if (json.path) {
            str += ';path=' + json.path;
        }
        document.cookie = str;
    },
    getCookie(key) {
        let arr = document.cookie.split('; ');
        for (let i = 0, len = arr.length; i < len; i++) {
            let list = arr[i].split('=');
            if (encodeURIComponent(key) === list[0]) {
                return decodeURIComponent(list[1]);
            }
        }
    },
    removeCookie(key, json = {}) {
        console.log(json);
        if (json.path) {
            document.cookie = encodeURIComponent(key) + '=;expires=' + new Date(0) + ';path=' + json.path;
        } else {
            document.cookie = encodeURIComponent(key) + '=;expires=' + new Date(0);
        }
    },
    convertStrToObj(str) {
        if (!str) {
            return {};
        }
        return JSON.parse(str);
    }
}


class Login {
    constructor() {
        //手机号
        this.us = document.querySelector('#us');
        //密码
        this.ps = document.querySelector('#ps');
        //登录按钮
        this.log = document.querySelector('#log');
        //数组
        this.arr = [false, false];
        //添加事件
        this.addEvent();
    }
    addEvent() {
        //记录this
        let that = this;
        //前端验证
        this.us.onblur = function() {
            //正则
            let re = /^(?:(?:\+|00)86)?1\d{10}$/;
            //获取用户名
            let us = this.value;
            //检测
            if (re.test(us)) {
                // this.style.backgroundColor = 'green';
                that.arr[0] = true;
            } else {
                // this.style.backgroundColor = 'red';
                that.arr[0] = false;
            }
        }
        this.ps.onblur = function() {
            //正则
            let re = /^\w{3,12}$/;
            //获取用户名
            let ps = this.value;
            //检测
            if (re.test(ps)) {
                // this.style.backgroundColor = 'green';
                that.arr[1] = true;
            } else {
                // this.style.backgroundColor = 'red';
                that.arr[1] = false;
            }
        }
        this.log.onclick = function() {
            if (that.arr.includes(false)) {
                alert('请完善登录信息！');
                return;
            } else {
                //后端验证
                //获取cookie
                let cookie_str = Q.getCookie('users') ? Q.getCookie('users') : '';
                //转对象
                let cookie_obj = Q.convertStrToObj(cookie_str);
                //获取当前用户名
                let us = that.us.value;
                //获取当前密码
                let ps = that.ps.value;
                //检测
                if (us in cookie_obj) {
                    //用户有
                    if (ps === cookie_obj[us]) {
                        // alert('登录成功！');
                        location.href = '../index.html';
                        //创建cookie，将登录成功的用户名存储到cookie中，实现7天免登录
                        Q.cookie('logined', us, { expires: 7, path: '/' });
                    } else {
                        alert('密码错误！');
                    }
                } else {
                    alert('用户名不存在！');
                }
            }
        }
    }
}
new Login();


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