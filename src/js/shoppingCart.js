let trun = {
    convertStrToObj(str) {
        if (!str) {
            return {};
        }
        return JSON.parse(str);
    }
};
class Cart {
    constructor() {
        this.cart = document.querySelector('.cartbox');
        this.selectAll = document.querySelector('#selectAll');
        this.flag = true
        this.init();
    }
    init() {
        let that = this
        let storage = window.localStorage;
        //替换本地存储key值
        let storage_str = storage.getItem('products') ? storage.getItem('products') : '';
        let storage_obj = trun.convertStrToObj(storage_str);
        for (let key in storage_obj) {
            let goods = storage_obj[key];
            let ul = document.createElement('ul');
            ul.className = 'buy';
            ul.setAttribute('data-good-id', key);
            ul.innerHTML = `<li>
            <div class="input"><input type="checkbox" class="selectOne"></div>
            <div class="img"> <img src="${goods.src}" alt="">
                <div class="productInformation">
                    <div class="set">${goods.set}</div>
                    <div class="name">${goods.name}</div>
                </div>
            </div>
            <div class="price">￥${goods.price}</div>
            <div class="num">
                <div class="border">
                    <a href="javascript:;"><div class="minus">-</div></a>
                    <input type="text" class="number" value="${goods.num}">
                    <a href="javascript:;"> <div class="plus">+</div></a>       
                </div>
            </div>
            <div class="del">删除</div>
        </li>`
            let id = ul.getAttribute('data-good-id');
            let total = document.querySelector('.total');
            total.innerText = "合计：￥" + storage_obj[id].price * storage_obj[id].num;
            this.cart.appendChild(ul);
        }
        //获取所有的-
        let minus = document.querySelectorAll('.minus');
        //添加事件
        for (let i = 0, len = minus.length; i < len; i++) {
            minus[i].onclick = function () {
                //后端
                //获取商品Id
                // let id = this.parentNode.parentNode.parentNode.parentNode.parentNode.getAttribute('data-good-id');
                let ul = document.querySelector('.buy');
                let id = ul.getAttribute('data-good-id');
                //获取后端数据
                let storage = window.localStorage;
                //替换key值
                let storage_str = storage.getItem('products') ? storage.getItem('products') : '';
                //转对象
                let storage_obj = trun.convertStrToObj(storage_str);
                if (storage_obj[id].num > 1) {
                    storage_obj[id].num--;
                }
                //存入本地存储中
                storage.setItem('products', JSON.stringify(storage_obj));
                //前端
                this.parentNode.nextElementSibling.value = storage_obj[id].num;
                //合计
                let total = document.querySelector('.total');
                total.innerText = "合计：￥" + storage_obj[id].price * storage_obj[id].num;
            }
        }
        //获取所有的+
        let plus = document.querySelectorAll('.plus');
        //添加事件
        for (let i = 0, len = plus.length; i < len; i++) {
            plus[i].onclick = function () {
                //后端
                //获取商品Id
                //  let id = this.parentNode.parentNode.parentNode.parentNode.parentNode.getAttribute('data-good-id');
                let ul = document.querySelector('.buy');
                let id = ul.getAttribute('data-good-id');

                //获取后端数据
                let storage = window.localStorage;
                let storage_str = storage.getItem('products') ? storage.getItem('products') : '';
                //转对象
                let storage_obj = trun.convertStrToObj(storage_str);

                storage_obj[id].num++;

                //存入本地存储中
                storage.setItem('products', JSON.stringify(storage_obj));
                //前端
                this.parentNode.previousElementSibling.value = storage_obj[id].num;
                //合计
                let total = document.querySelector('.total');
                //   alert(storage_obj[id].price * storage_obj[id].num)
                total.innerText = "合计：￥" + storage_obj[id].price * storage_obj[id].num;
            }
        }

        //获取所有的数量框
        let input = document.querySelectorAll('.border>input');
        //添加事件
        for (let i = 0, len = input.length; i < len; i++) {
            input[i].onblur = function () {
                //后端
                //获取商品Id
                // let id = this.parentNode.parentNode.parentNode.parentNode.getAttribute('data-good-id');
                let ul = document.querySelector('.buy');
                let id = ul.getAttribute('data-good-id');
                //获取后端数据
                let storage = window.localStorage;
                let storage_str = storage.getItem('products') ? storage.getItem('products') : '';
                //转对象
                let storage_obj = trun.convertStrToObj(storage_str);
                let num = this.value;
                if (/^\d+$/.test(num) && num > 0) {
                    storage_obj[id].num = num;
                } else {
                    storage_obj[id].num = 1;
                }
                //存入本地存储中
                storage.setItem('products', JSON.stringify(storage_obj));
                //前端
                this.value = storage_obj[id].num;
                //合计
                let total = document.querySelector('.total');
                total.innerText = "合计：￥" + storage_obj[id].price * storage_obj[id].num;
            }
        }
        //获取所有的删除按钮
        let dels = document.querySelectorAll('.del');
        //添加事件
        for (let i = 0, len = dels.length; i < len; i++) {
            dels[i].onclick = function () {
                //后端
                //获取商品Id
                // let id = this.parentNode.parentNode.getAttribute('data-good-id');
                let ul = document.querySelector('.buy');
                let id = ul.getAttribute('data-good-id');
                //获取后端数据
                let storage = window.localStorage;
                let storage_str = storage.getItem('products') ? storage.getItem('products') : '';
                //转对象
                let storage_obj = trun.convertStrToObj(storage_str);
                //删除这个商品
                //delete ：删除对象中指定的属性
                delete storage_obj[id];
                //存入本地存储中
                storage.setItem('products', JSON.stringify(storage_obj));
                //前端
                this.parentNode.parentNode.remove();
                //合计
                let total = document.querySelector('.total');
                total.innerText = "合计：￥";

            }
        }

        //全选功能


        this.selectAll.onclick = function () {
            var selectOnes = document.querySelectorAll('.selectOne');
            if (that.flag) {
                for (var i = 0; i < selectOnes.length; i++) {
                    selectOnes[i].checked = true;
                }
                that.flag = false
            }else{
                for (var i = 0; i < selectOnes.length; i++) {
                    selectOnes[i].checked = false;
                }
                that.flag = true
            }

        }
    }
}
new Cart();

// var key = "products";
// var value = {
//     2: {
//         "src": "../img/cart-good02.jpg",
//         "name": "恒久-花盒-16支-朱砂",
//         "color": "白色",
//         "size": 36,
//         "price": 600,
//         "num": 1,
//         "set":'合作系列'
//     }
// }
// window.localStorage.setItem(key, JSON.stringify(value));



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
class Footer {
    constructor() {
        this.btn = document.querySelectorAll('footer .center .left .top ul li a')
        this.box = document.querySelector('footer .center .left .hidden')
        this.addEvent()
    }
    addEvent() {
        let that = this
        for (let i = 0, len = this.btn.length; i < len; i++) {
            this.btn[i].onclick = function () {
                if ($(that.box).is(':hidden')) {
                    $(that.box).show(230)
                } else {
                    $(that.box).hide(230)
                }
            }
        }
    }
}
new Footer()