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



//生成验证码
var code; //在全局 定义验证码
function createCode() {
    code = new Array();
    var codeLength = 4; //验证码的长度
    var checkCode = document.getElementById("checkCode");
    checkCode.value = "";
    var selectChar = new Array(2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z');
    for (var i = 0; i < codeLength; i++) {
        var charIndex = Math.floor(Math.random() * 32);
        code += selectChar[charIndex];
    }
    if (code.length != codeLength) {
        createCode();
    }
    checkCode.value = code;
}


class Registor {
    constructor() {
        //用户名
        this.us = document.querySelector('#us');
        //密码
        this.ps = document.querySelector('#ps');
        //确认密码
        this.sure = document.querySelector('#sure');
        // 验证码
        this.inputCode = document.getElementById("input1");
        // 会员政策
        this.che = document.getElementById('che')
            //注册
        this.reg = document.querySelector('#reg');

        //设置开关
        this.arr = [false, false, false, false, false];
        //添加事件
        this.addEvent();

    }
    addEvent() {
        //记录this
        let that = this; //实例对象
        this.us.onblur = function() {
            //正则
            let re = /^(?:(?:\+|00)86)?1\d{10}$/;
            //获取用户名
            let us = this.value;
            //检测
            if (re.test(us)) {
                this.style.color = 'black';
                that.arr[0] = true;
            } else {
                this.style.color = 'red';
                that.arr[0] = false;
            }
        }
        this.ps.onblur = function() {
            //正则
            let re = /^\w{3,12}$/;
            //获取密码
            let ps = this.value;
            //检测
            if (re.test(ps)) {
                this.style.color = 'black';
                that.arr[1] = true;
            } else {
                this.style.color = 'red';
                that.arr[1] = false;
            }
        }
        this.sure.onblur = function() {
            //获取密码
            let ps = that.ps.value;
            //获取确认密码
            let sure = this.value;
            //检测
            if (ps === sure) {
                this.style.color = 'black';
                that.arr[2] = true;
            } else {
                this.style.color = 'red';
                that.arr[2] = false;
            }
        }
        this.inputCode.onblur = function() {
            let inputCode = this.value.toUpperCase()
                // 判断验证码
            if (inputCode.length <= 0) {
                alert("请输入验证码！");
                that.arr[3] = false;
            } else if (inputCode != code) {
                alert("验证码输入错误！");
                createCode();
                that.arr[3] = false;
            } else {
                that.arr[3] = true;
            }
        }
        let a = 1;
        this.che.onclick = function() {
            a++
            if (a % 2) {
                that.arr[4] = false;
            } else {
                that.arr[4] = true;
            }
        }

        this.reg.onclick = function() {
            //检测开关
            if (that.arr.includes(false)) {
                alert('请完善注册信息!');
            } else {
                //获取cookie
                let cookie_str = Q.getCookie('users') ? Q.getCookie('users') : '';
                //转对象
                let cookie_obj = Q.convertStrToObj(cookie_str);
                //获取当前用户名
                let us = that.us.value;
                //获取当前密码
                let ps = that.ps.value;
                //检测 in
                if (us in cookie_obj) {
                    alert('用户名已存在！');
                    return; //结束函数
                } else {
                    //将新启用添加到对象中
                    cookie_obj[us] = ps;
                    //存入cookie
                    Q.cookie('users', JSON.stringify(cookie_obj), { expires: 7, path: '/' });
                    alert('注册成功！');
                }
            }
        }

    }
}
new Registor

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