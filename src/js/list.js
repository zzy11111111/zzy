/*
    实现点击左边和上边导航条切换商品的效果
        给所有盒子的display 属性设置为none
        当点击左边 / 导航栏选项时 给盒子加上自定义属性 
        获取所有box 遍历 有满足这个属性的设置属性为 black

        ？ 如何实现左边两个或更多选项同时点击时 商品信息的切换
        ? 如何实现 点击价格 按价格顺序排序
*/
class SwitchGoods {
    constructor() {
        // 获取所有的加号/减号 添加伸缩功能
        this.btn = document.querySelectorAll('#content .center .left .big span')
        // 获取所有的box 返回伪数组 
        this.box = document.querySelectorAll('#content .center .right  .box')
        // 获取所有的排斥框div所在的ul  添加点击和互斥和点击效果
        this.mutes = document.querySelectorAll('#content .center .left .big ul li ')
        //获取所有的盒子外面的a标签
        this.a = document.querySelectorAll('#content .center .right a ')
        // 获取导航栏 销量 / 新品 / 价格 的点击按钮
        this.cut = document.querySelectorAll('nav .center ul li')
        // 获取 按价格排序的按钮 上箭头 
        this.up = this.cut[2].children[2]
        // 获取 按价格排序的按钮 下箭头
        this.down = this.cut[2].children[1]
        // 获取回到顶部按钮
        this.top = document.querySelector('#returntop')
        // 设置空数字 用来获取所有商品的信息
        this.arr = []
        // 初始化
        this.init()
        // 添加事件
        this.addEvent()
    }
    addEvent() {
        let that = this
        // 遍历 + / - 号 添加事件
        for (let i = 0, len = this.btn.length; i < len; i++) {
            // 给每个+ / - 号添加点击事件
            this.btn[i].onclick = function () {
                // 获取 每个ul 返回伪数组
                let radio = document.querySelectorAll('#content .center .left .big ul')
                // 如果属性是隐藏 则展示出来
                if ($(radio[i]).is(":hidden")) {
                    $(radio[i]).show(500)
                    $(this).text('-')
                    $(this).css("fontSize", '25px',)
                } else { //否则 隐藏
                    $(radio[i]).hide(500)
                    $(this).text('+')
                    $(this).css("fontSize", '18px',)
                }
            }
        }

        // 尺寸的十七个互斥选线框
        // 给第一个互斥框添加点击事件
        this.mutes[0].onclick = function (e) {
            // 遍历所有box 
            for (let i = 0, len = that.box.length; i < len; i++) {
                // box的属性data-size 是16 显示
                if ($(that.box[i]).attr('data-size') == '16cm') {
                    that.box[i].style.display = 'block'
                } else { // 否贼让其display 为 none
                    that.box[i].style.display = 'none'
                }

            }
            if (that.mutes[0].children[0].style.background == 'black') {
                $(this.children[0]).css('background', '') //如果是清空背景色
                $(this.children[0]).html('') // 内容设置为空（对号）
                //并且让所有商品盒子显示
                for (let i = 0, len = that.box.length; i < len; i++) {
                    that.box[i].style.display = 'block'
                }
            } else { //不是添加背景颜色
                // 获取当前点击的 同行数量
                let num = e.target.parentNode.children.length
                // 循环 
                for (let k = 0; k < num; k++) { //排他思想
                    // 给 每个点击的 父亲（li）的父亲（ul）的子元素（返回伪数组）的下标伪k的第一个子元素（div）设置样式背景色为空 （干掉所有人）
                    $(this.parentNode.children[k].children[0]).css('background', '')
                    $(this.parentNode.children[k].children[0]).html('&#10004;') // 解决点击选取对号文本的问题
                }
                // 给自己设置样式 （留下自己）
                $(this.children[0]).css('background', 'black')
                //回到顶部
                var top = document.body.scrollTop || document.documentElement.scrollTop
                scrollBy(0, -top);
            }

        }
        // 给第二个互斥框添加点击事件
        this.mutes[1].onclick = function (e) {
            // 遍历所有box 
            for (let i = 0, len = that.box.length; i < len; i++) {
                // box的属性data-size 是13 显示
                if ($(that.box[i]).attr('data-size') == '13cm') {
                    that.box[i].style.display = 'block'
                } else { // 否贼让其display 为 none
                    that.box[i].style.display = 'none'
                }

            }
            if (that.mutes[1].children[0].style.background == 'black') {
                $(this.children[0]).css('background', '')
                $(this.children[0]).html('')
                for (let i = 0, len = that.box.length; i < len; i++) {
                    that.box[i].style.display = 'block'
                }
            } else {
                let num = e.target.parentNode.children.length
                // 循环 
                for (let k = 0; k < num; k++) {
                    $(this.parentNode.children[k].children[0]).css('background', '')
                    $(this.parentNode.children[k].children[0]).html('&#10004;') // 解决点击选取对号文本的问题
                }
                $(this.children[0]).css('background', 'black')
                var top = document.body.scrollTop || document.documentElement.scrollTop
                scrollBy(0, -top);
            }
        }
        // 给第三个互斥框添加点击事件
        this.mutes[2].onclick = function (e) {
            // 遍历所有box 
            for (let i = 0, len = that.box.length; i < len; i++) {
                // box的属性data-size 是13 显示
                if ($(that.box[i]).attr('data-size') == '10cm') {
                    that.box[i].style.display = 'block'
                } else { // 否贼让其display 为 none
                    that.box[i].style.display = 'none'
                }
            }
            if (that.mutes[2].children[0].style.background == 'black') {
                $(this.children[0]).css('background', '')
                $(this.children[0]).html('')
                for (let i = 0, len = that.box.length; i < len; i++) {
                    that.box[i].style.display = 'block'
                }
            } else {
                let num = e.target.parentNode.children.length
                // 循环 
                for (let k = 0; k < num; k++) {
                    console.log(1);
                    $(this.parentNode.children[k].children[0]).css('background', '')
                    $(this.parentNode.children[k].children[0]).html('&#10004;') // 解决点击选取对号文本的问题
                }
                $(this.children[0]).css('background', 'black')
                var top = document.body.scrollTop || document.documentElement.scrollTop
                scrollBy(0, -top);
            }
        }
        // 给第四个互斥框添加点击事件
        this.mutes[3].onclick = function (e) {
           

            for (let i = 0, len = that.box.length; i < len; i++) {
                if ($(that.box[i]).attr('data-size') == '19cm') {
                    that.box[i].style.display = 'block'
                } else {
                    that.box[i].style.display = 'none'
                }
            }
            if (that.mutes[3].children[0].style.background == 'black') {
                $(this.children[0]).css('background', '')
                $(this.children[0]).html('')
                for (let i = 0, len = that.box.length; i < len; i++) {
                    that.box[i].style.display = 'block'
                }
            } else {
                let num = e.target.parentNode.children.length
                for (let k = 0; k < num; k++) {
                    $(this.parentNode.children[k].children[0]).css('background', '')
                    $(this.parentNode.children[k].children[0]).html('&#10004;') // 解决点击选取对号文本的问题
                }
                $(this.children[0]).css('background', 'black')
                var top = document.body.scrollTop || document.documentElement.scrollTop
                scrollBy(0, -top);
            }
        }
        // 给第五个互斥框添加点击事件
        this.mutes[4].onclick = function (e) {
            for (let i = 0, len = that.box.length; i < len; i++) {
                if ($(that.box[i]).attr('data-size') == '28cm') {
                    that.box[i].style.display = 'block'
                } else {
                    that.box[i].style.display = 'none'
                }
            }
            if (that.mutes[4].children[0].style.background == 'black') {
                $(this.children[0]).css('background', '')
                $(this.children[0]).html('')
                for (let i = 0, len = that.box.length; i < len; i++) {
                    that.box[i].style.display = 'block'
                }
            } else {
                let num = e.target.parentNode.children.length
                for (let k = 0; k < num; k++) {
                    $(this.parentNode.children[k].children[0]).css('background', '')
                    $(this.parentNode.children[k].children[0]).html('&#10004;') // 解决点击选取对号文本的问题
                }
                $(this.children[0]).css('background', 'black')
                var top = document.body.scrollTop || document.documentElement.scrollTop
                scrollBy(0, -top);
            }
        }
        // 给第六个互斥框添加点击事件
        this.mutes[5].onclick = function (e) {
            for (let i = 0, len = that.box.length; i < len; i++) {
                if ($(that.box[i]).attr('data-size') == '90g') {
                    that.box[i].style.display = 'block'
                } else {
                    that.box[i].style.display = 'none'
                }
            }
            if (that.mutes[5].children[0].style.background == 'black') {
                $(this.children[0]).css('background', '')
                $(this.children[0]).html('')
                for (let i = 0, len = that.box.length; i < len; i++) {
                    that.box[i].style.display = 'block'
                }
            } else {
                let num = e.target.parentNode.children.length
                for (let k = 0; k < num; k++) {
                    $(this.parentNode.children[k].children[0]).css('background', '')
                    $(this.parentNode.children[k].children[0]).html('&#10004;') // 解决点击选取对号文本的问题
                }
                $(this.children[0]).css('background', 'black')
                var top = document.body.scrollTop || document.documentElement.scrollTop
                scrollBy(0, -top);
            }
        }
        // 给第七个互斥框添加点击事件
        this.mutes[6].onclick = function (e) {
            for (let i = 0, len = that.box.length; i < len; i++) {
                if ($(that.box[i]).attr('data-size') == '135g') {
                    that.box[i].style.display = 'block'
                } else {
                    that.box[i].style.display = 'none'
                }
            }
            if (that.mutes[6].children[0].style.background == 'black') {
                $(this.children[0]).css('background', '')
                $(this.children[0]).html('')
                for (let i = 0, len = that.box.length; i < len; i++) {
                    that.box[i].style.display = 'block'
                }
            } else {
                let num = e.target.parentNode.children.length
                for (let k = 0; k < num; k++) {
                    $(this.parentNode.children[k].children[0]).css('background', '')
                    $(this.parentNode.children[k].children[0]).html('&#10004;') // 解决点击选取对号文本的问题
                }
                $(this.children[0]).css('background', 'black')
                var top = document.body.scrollTop || document.documentElement.scrollTop
                scrollBy(0, -top);
            }
        }
        // 给第八个互斥框添加点击事件
        this.mutes[7].onclick = function (e) {
            for (let i = 0, len = that.box.length; i < len; i++) {
                if ($(that.box[i]).attr('data-size') == '10ml') {
                    that.box[i].style.display = 'block'
                } else {
                    that.box[i].style.display = 'none'
                }
            }
            if (that.mutes[7].children[0].style.background == 'black') {
                $(this.children[0]).css('background', '')
                $(this.children[0]).html('')
                for (let i = 0, len = that.box.length; i < len; i++) {
                    that.box[i].style.display = 'block'
                }
            } else {
                let num = e.target.parentNode.children.length
                for (let k = 0; k < num; k++) {
                    $(this.parentNode.children[k].children[0]).css('background', '')
                    $(this.parentNode.children[k].children[0]).html('&#10004;') // 解决点击选取对号文本的问题
                }
                $(this.children[0]).css('background', 'black')
                var top = document.body.scrollTop || document.documentElement.scrollTop
                scrollBy(0, -top);
            }
        }
        // 给第九个互斥框添加点击事件
        this.mutes[8].onclick = function (e) {
            for (let i = 0, len = that.box.length; i < len; i++) {
                if ($(that.box[i]).attr('data-size') == '20cm') {
                    that.box[i].style.display = 'block'
                } else {
                    that.box[i].style.display = 'none'
                }
            }
            if (that.mutes[8].children[0].style.background == 'black') {
                $(this.children[0]).css('background', '')
                $(this.children[0]).html('')
                for (let i = 0, len = that.box.length; i < len; i++) {
                    that.box[i].style.display = 'block'
                }
            } else {
                let num = e.target.parentNode.children.length
                for (let k = 0; k < num; k++) {
                    $(this.parentNode.children[k].children[0]).css('background', '')
                    $(this.parentNode.children[k].children[0]).html('&#10004;') // 解决点击选取对号文本的问题
                }
                $(this.children[0]).css('background', 'black')
                var top = document.body.scrollTop || document.documentElement.scrollTop
                scrollBy(0, -top);
            }
        }
        // 给第十个互斥框添加点击事件
        this.mutes[9].onclick = function (e) {
            for (let i = 0, len = that.box.length; i < len; i++) {
                if ($(that.box[i]).attr('data-size') == '40cm') {
                    that.box[i].style.display = 'block'
                } else {
                    that.box[i].style.display = 'none'
                }
            }
            if (that.mutes[9].children[0].style.background == 'black') {
                $(this.children[0]).css('background', '')
                $(this.children[0]).html('')
                for (let i = 0, len = that.box.length; i < len; i++) {
                    that.box[i].style.display = 'block'
                }
            } else {
                let num = e.target.parentNode.children.length
                for (let k = 0; k < num; k++) {
                    $(this.parentNode.children[k].children[0]).css('background', '')
                    $(this.parentNode.children[k].children[0]).html('&#10004;') // 解决点击选取对号文本的问题
                }
                $(this.children[0]).css('background', 'black')
                var top = document.body.scrollTop || document.documentElement.scrollTop
                scrollBy(0, -top);
            }
        }
        // 给第十一个互斥框添加点击事件
        this.mutes[10].onclick = function (e) {
            for (let i = 0, len = that.box.length; i < len; i++) {
                if ($(that.box[i]).attr('data-size') == '70cm') {
                    that.box[i].style.display = 'block'
                } else {
                    that.box[i].style.display = 'none'
                }
            }
            if (that.mutes[10].children[0].style.background == 'black') {
                $(this.children[0]).css('background', '')
                $(this.children[0]).html('')
                for (let i = 0, len = that.box.length; i < len; i++) {
                    that.box[i].style.display = 'block'
                }
            } else {
                let num = e.target.parentNode.children.length
                for (let k = 0; k < num; k++) {
                    $(this.parentNode.children[k].children[0]).css('background', '')
                    $(this.parentNode.children[k].children[0]).html('&#10004;') // 解决点击选取对号文本的问题
                }
                $(this.children[0]).css('background', 'black')
                var top = document.body.scrollTop || document.documentElement.scrollTop
                scrollBy(0, -top);
            }
        }
        // 给第十二个互斥框添加点击事件
        this.mutes[11].onclick = function (e) {
            for (let i = 0, len = that.box.length; i < len; i++) {
                if ($(that.box[i]).attr('data-size') == 'mm13cm') {
                    that.box[i].style.display = 'block'
                } else {
                    that.box[i].style.display = 'none'
                }
            }
            if (that.mutes[11].children[0].style.background == 'black') {
                $(this.children[0]).css('background', '')
                $(this.children[0]).html('')
                for (let i = 0, len = that.box.length; i < len; i++) {
                    that.box[i].style.display = 'block'
                }
            } else {
                let num = e.target.parentNode.children.length
                for (let k = 0; k < num; k++) {
                    $(this.parentNode.children[k].children[0]).css('background', '')
                    $(this.parentNode.children[k].children[0]).html('&#10004;') // 解决点击选取对号文本的问题
                }
                $(this.children[0]).css('background', 'black')
                var top = document.body.scrollTop || document.documentElement.scrollTop
                scrollBy(0, -top);
            }
        }
        // 给第十三个互斥框添加点击事件
        this.mutes[12].onclick = function (e) {
            for (let i = 0, len = that.box.length; i < len; i++) {
                if ($(that.box[i]).attr('data-size') == '22cm') {
                    that.box[i].style.display = 'block'
                } else {
                    that.box[i].style.display = 'none'
                }
            }
            if (that.mutes[12].children[0].style.background == 'black') {
                $(this.children[0]).css('background', '')
                $(this.children[0]).html('')
                for (let i = 0, len = that.box.length; i < len; i++) {
                    that.box[i].style.display = 'block'
                }
            } else {
                let num = e.target.parentNode.children.length
                for (let k = 0; k < num; k++) {
                    $(this.parentNode.children[k].children[0]).css('background', '')
                    $(this.parentNode.children[k].children[0]).html('&#10004;') // 解决点击选取对号文本的问题
                }
                $(this.children[0]).css('background', 'black')
                var top = document.body.scrollTop || document.documentElement.scrollTop
                scrollBy(0, -top);
            }
        }
        // 给第十四个互斥框添加点击事件
        this.mutes[13].onclick = function (e) {
            for (let i = 0, len = that.box.length; i < len; i++) {
                if ($(that.box[i]).attr('data-size') == '14cm') {
                    that.box[i].style.display = 'block'
                } else {
                    that.box[i].style.display = 'none'
                }
            }
            if (that.mutes[13].children[0].style.background == 'black') {
                $(this.children[0]).css('background', '')
                $(this.children[0]).html('')
                for (let i = 0, len = that.box.length; i < len; i++) {
                    that.box[i].style.display = 'block'
                }
            } else {
                let num = e.target.parentNode.children.length
                for (let k = 0; k < num; k++) {
                    $(this.parentNode.children[k].children[0]).css('background', '')
                    $(this.parentNode.children[k].children[0]).html('&#10004;') // 解决点击选取对号文本的问题
                }
                $(this.children[0]).css('background', 'black')
                var top = document.body.scrollTop || document.documentElement.scrollTop
                scrollBy(0, -top);
            }
        }
        // 给第十五个互斥框添加点击事件
        this.mutes[14].onclick = function (e) {
            for (let i = 0, len = that.box.length; i < len; i++) {
                if ($(that.box[i]).attr('data-size') == '25cm') {
                    that.box[i].style.display = 'block'
                } else {
                    that.box[i].style.display = 'none'
                }
            }
            if (that.mutes[14].children[0].style.background == 'black') {
                $(this.children[0]).css('background', '')
                $(this.children[0]).html('')
                for (let i = 0, len = that.box.length; i < len; i++) {
                    that.box[i].style.display = 'block'
                }
            } else {
                let num = e.target.parentNode.children.length
                for (let k = 0; k < num; k++) {
                    $(this.parentNode.children[k].children[0]).css('background', '')
                    $(this.parentNode.children[k].children[0]).html('&#10004;') // 解决点击选取对号文本的问题
                }
                $(this.children[0]).css('background', 'black')
                var top = document.body.scrollTop || document.documentElement.scrollTop
                scrollBy(0, -top);
            }
        }
        // 给第十六个互斥框添加点击事件
        this.mutes[15].onclick = function (e) {
            for (let i = 0, len = that.box.length; i < len; i++) {
                if ($(that.box[i]).attr('data-size') == '27cm') {
                    that.box[i].style.display = 'block'
                } else {
                    that.box[i].style.display = 'none'
                }
            }
            if (that.mutes[15].children[0].style.background == 'black') {
                $(this.children[0]).css('background', '')
                $(this.children[0]).html('')
                for (let i = 0, len = that.box.length; i < len; i++) {
                    that.box[i].style.display = 'block'
                }
            } else {
                let num = e.target.parentNode.children.length
                for (let k = 0; k < num; k++) {
                    $(this.parentNode.children[k].children[0]).css('background', '')
                    $(this.parentNode.children[k].children[0]).html('&#10004;') // 解决点击选取对号文本的问题
                }
                $(this.children[0]).css('background', 'black')
                var top = document.body.scrollTop || document.documentElement.scrollTop
                scrollBy(0, -top);
            }
        }
        // 给第十七个互斥框添加点击事件
        this.mutes[16].onclick = function (e) {
            for (let i = 0, len = that.box.length; i < len; i++) {
                if ($(that.box[i]).attr('data-size') == '50ml') {
                    that.box[i].style.display = 'block'
                } else {
                    that.box[i].style.display = 'none'
                }
            }
            if (that.mutes[16].children[0].style.background == 'black') {
                $(this.children[0]).css('background', '')
                $(this.children[0]).html('')
                for (let i = 0, len = that.box.length; i < len; i++) {
                    that.box[i].style.display = 'block'
                }
            } else {
                let num = e.target.parentNode.children.length
                for (let k = 0; k < num; k++) {
                    $(this.parentNode.children[k].children[0]).css('background', '')
                    $(this.parentNode.children[k].children[0]).html('&#10004;') // 解决点击选取对号文本的问题
                }
                $(this.children[0]).css('background', 'black')
                var top = document.body.scrollTop || document.documentElement.scrollTop
                scrollBy(0, -top);
            }
        }

        // 颜色的五个互斥点击框
        // 给第十八个互斥框添加点击事件
        this.mutes[17].onclick = function (e) {
            for (let i = 0, len = that.box.length; i < len; i++) {
                if ($(that.box[i]).attr('data-color') == 'red') {
                    that.box[i].style.display = 'block'
                } else {
                    that.box[i].style.display = 'none'
                }

            }
            if (that.mutes[17].children[0].style.background == 'black') {
                $(this.children[0]).css('background', '')
                $(this.children[0]).html('')
                for (let i = 0, len = that.box.length; i < len; i++) {
                    that.box[i].style.display = 'block'
                }
            } else {
                let num = e.target.parentNode.children.length
                for (let k = 0; k < num; k++) {
                    $(this.parentNode.children[k].children[0]).css('background', '')
                    $(this.parentNode.children[k].children[0]).html('&#10004;') // 解决点击选取对号文本的问题
                }
                $(this.children[0]).css('background', 'black')
                var top = document.body.scrollTop || document.documentElement.scrollTop
                scrollBy(0, -top);
            }
        }
        // 给第十九个互斥框添加点击事件
        this.mutes[18].onclick = function (e) {
            for (let i = 0, len = that.box.length; i < len; i++) {
                //                                          朱砂红
                if ($(that.box[i]).attr('data-color-1') == 'cinnabar') {
                    that.box[i].style.display = 'block'
                } else {
                    that.box[i].style.display = 'none'
                }
            }
            if (that.mutes[18].children[0].style.background == 'black') {
                $(this.children[0]).css('background', '')
                $(this.children[0]).html('')
                for (let i = 0, len = that.box.length; i < len; i++) {
                    that.box[i].style.display = 'block'
                }
            } else {
                let num = e.target.parentNode.children.length
                for (let k = 0; k < num; k++) {
                    $(this.parentNode.children[k].children[0]).css('background', '')
                    $(this.parentNode.children[k].children[0]).html('&#10004;') // 解决点击选取对号文本的问题
                }
                $(this.children[0]).css('background', 'black')
                var top = document.body.scrollTop || document.documentElement.scrollTop
                scrollBy(0, -top);
            }
        }
        // 给第二十个互斥框添加点击事件
        this.mutes[19].onclick = function (e) {
            for (let i = 0, len = that.box.length; i < len; i++) {
                if ($(that.box[i]).attr('data-double-color') == 'red') {
                    that.box[i].style.display = 'block'
                } else {
                    that.box[i].style.display = 'none'
                }
            }
            if (that.mutes[19].children[0].style.background == 'black') {
                $(this.children[0]).css('background', '')
                $(this.children[0]).html('')
                for (let i = 0, len = that.box.length; i < len; i++) {
                    that.box[i].style.display = 'block'
                }
            } else {
                let num = e.target.parentNode.children.length
                for (let k = 0; k < num; k++) {
                    $(this.parentNode.children[k].children[0]).css('background', '')
                    $(this.parentNode.children[k].children[0]).html('&#10004;') // 解决点击选取对号文本的问题
                }
                $(this.children[0]).css('background', 'black')
                var top = document.body.scrollTop || document.documentElement.scrollTop
                scrollBy(0, -top);
            }
        }
        // 给第二十一个互斥框添加点击事件
        this.mutes[20].onclick = function (e) {
            for (let i = 0, len = that.box.length; i < len; i++) {
                if ($(that.box[i]).attr('data-love') == 'love') {
                    that.box[i].style.display = 'block'
                } else {
                    that.box[i].style.display = 'none'
                }
            }
            if (that.mutes[20].children[0].style.background == 'black') {
                $(this.children[0]).css('background', '')
                $(this.children[0]).html('')
                for (let i = 0, len = that.box.length; i < len; i++) {
                    that.box[i].style.display = 'block'
                }
            } else {
                let num = e.target.parentNode.children.length
                for (let k = 0; k < num; k++) {
                    $(this.parentNode.children[k].children[0]).css('background', '')
                    $(this.parentNode.children[k].children[0]).html('&#10004;') // 解决点击选取对号文本的问题
                }
                $(this.children[0]).css('background', 'black')
                var top = document.body.scrollTop || document.documentElement.scrollTop
                scrollBy(0, -top);
            }
        }
        // 给第二十二个互斥框添加点击事件
        this.mutes[21].onclick = function (e) {
            for (let i = 0, len = that.box.length; i < len; i++) {
                if ($(that.box[i]).attr('data-vow') == 'yes') {
                    that.box[i].style.display = 'block'
                } else {
                    that.box[i].style.display = 'none'
                }
            }
            if (that.mutes[21].children[0].style.background == 'black') {
                $(this.children[0]).css('background', '')
                $(this.children[0]).html('')
                for (let i = 0, len = that.box.length; i < len; i++) {
                    that.box[i].style.display = 'block'
                }
            } else {
                let num = e.target.parentNode.children.length
                for (let k = 0; k < num; k++) {
                    $(this.parentNode.children[k].children[0]).css('background', '')
                    $(this.parentNode.children[k].children[0]).html('&#10004;') // 解决点击选取对号文本的问题
                }
                $(this.children[0]).css('background', 'black')
                var top = document.body.scrollTop || document.documentElement.scrollTop
                scrollBy(0, -top);
            }
        }

        //系列的七个互斥选项框
        // 给第二十三个互斥框添加点击事件 合作 cooperation
        this.mutes[22].onclick = function (e) {
            for (let i = 0, len = that.box.length; i < len; i++) {
                if ($(that.box[i]).attr('data-series') == 'cooperation') {
                    that.box[i].style.display = 'block'
                } else {
                    that.box[i].style.display = 'none'
                }
            }
            if (that.mutes[22].children[0].style.background == 'black') {
                $(this.children[0]).css('background', '')
                $(this.children[0]).html('')
                for (let i = 0, len = that.box.length; i < len; i++) {
                    that.box[i].style.display = 'block'
                }
            } else {
                let num = e.target.parentNode.children.length
                for (let k = 0; k < num; k++) {
                    $(this.parentNode.children[k].children[0]).css('background', '')
                    $(this.parentNode.children[k].children[0]).html('&#10004;') // 解决点击选取对号文本的问题
                }
                $(this.children[0]).css('background', 'black')
                var top = document.body.scrollTop || document.documentElement.scrollTop
                scrollBy(0, -top);
            }
        }
        // 给第二十四个互斥框添加点击事件 经典 classic
        this.mutes[23].onclick = function (e) {
            for (let i = 0, len = that.box.length; i < len; i++) {
                if ($(that.box[i]).attr('data-series') == 'classic') {
                    that.box[i].style.display = 'block'
                } else {
                    that.box[i].style.display = 'none'
                }
            }
            if (that.mutes[23].children[0].style.background == 'black') {
                $(this.children[0]).css('background', '')
                $(this.children[0]).html('')
                for (let i = 0, len = that.box.length; i < len; i++) {
                    that.box[i].style.display = 'block'
                }
            } else {
                let num = e.target.parentNode.children.length
                for (let k = 0; k < num; k++) {
                    $(this.parentNode.children[k].children[0]).css('background', '')
                    $(this.parentNode.children[k].children[0]).html('&#10004;') // 解决点击选取对号文本的问题
                }
                $(this.children[0]).css('background', 'black')
                var top = document.body.scrollTop || document.documentElement.scrollTop
                scrollBy(0, -top);
            }
        }
        // 给第二十五个互斥框添加点击事件 玫瑰 rose
        this.mutes[24].onclick = function (e) {
            for (let i = 0, len = that.box.length; i < len; i++) {
                if ($(that.box[i]).attr('data-series') == 'rose') {
                    that.box[i].style.display = 'block'
                } else {
                    that.box[i].style.display = 'none'
                }
            }
            if (that.mutes[24].children[0].style.background == 'black') {
                $(this.children[0]).css('background', '')
                $(this.children[0]).html('')
                for (let i = 0, len = that.box.length; i < len; i++) {
                    that.box[i].style.display = 'block'
                }
            } else {
                let num = e.target.parentNode.children.length
                for (let k = 0; k < num; k++) {
                    $(this.parentNode.children[k].children[0]).css('background', '')
                    $(this.parentNode.children[k].children[0]).html('&#10004;') // 解决点击选取对号文本的问题
                }
                $(this.children[0]).css('background', 'black')
                var top = document.body.scrollTop || document.documentElement.scrollTop
                scrollBy(0, -top);
            }
        }
        // 给第二十六个互斥框添加点击事件 公仔 doll
        this.mutes[25].onclick = function (e) {
            for (let i = 0, len = that.box.length; i < len; i++) {
                if ($(that.box[i]).attr('data-series') == 'doll') {
                    that.box[i].style.display = 'block'
                } else {
                    that.box[i].style.display = 'none'
                }
            }
            if (that.mutes[25].children[0].style.background == 'black') {
                $(this.children[0]).css('background', '')
                $(this.children[0]).html('')
                for (let i = 0, len = that.box.length; i < len; i++) {
                    that.box[i].style.display = 'block'
                }
            } else {
                let num = e.target.parentNode.children.length
                for (let k = 0; k < num; k++) {
                    $(this.parentNode.children[k].children[0]).css('background', '')
                    $(this.parentNode.children[k].children[0]).html('&#10004;') // 解决点击选取对号文本的问题
                }
                $(this.children[0]).css('background', 'black')
                var top = document.body.scrollTop || document.documentElement.scrollTop
                scrollBy(0, -top);
            }
        }
        // 给第二十七个互斥框添加点击事件 心爱 treasure
        this.mutes[26].onclick = function (e) {
            for (let i = 0, len = that.box.length; i < len; i++) {
                if ($(that.box[i]).attr('data-series') == 'treasure') {
                    that.box[i].style.display = 'block'
                } else {
                    that.box[i].style.display = 'none'
                }
            }
            if (that.mutes[26].children[0].style.background == 'black') {
                $(this.children[0]).css('background', '')
                $(this.children[0]).html('')
                for (let i = 0, len = that.box.length; i < len; i++) {
                    that.box[i].style.display = 'block'
                }
            } else {
                let num = e.target.parentNode.children.length
                for (let k = 0; k < num; k++) {
                    $(this.parentNode.children[k].children[0]).css('background', '')
                    $(this.parentNode.children[k].children[0]).html('&#10004;') // 解决点击选取对号文本的问题
                }
                $(this.children[0]).css('background', 'black')
                var top = document.body.scrollTop || document.documentElement.scrollTop
                scrollBy(0, -top);
            }
        }
        // 给第二十八个互斥框添加点击事件 音乐 music
        this.mutes[27].onclick = function (e) {
            for (let i = 0, len = that.box.length; i < len; i++) {
                if ($(that.box[i]).attr('data-series') == 'music') {
                    that.box[i].style.display = 'block'
                } else {
                    that.box[i].style.display = 'none'
                }
            }
            if (that.mutes[27].children[0].style.background == 'black') {
                $(this.children[0]).css('background', '')
                $(this.children[0]).html('')
                for (let i = 0, len = that.box.length; i < len; i++) {
                    that.box[i].style.display = 'block'
                }
            } else {
                let num = e.target.parentNode.children.length
                for (let k = 0; k < num; k++) {
                    $(this.parentNode.children[k].children[0]).css('background', '')
                    $(this.parentNode.children[k].children[0]).html('&#10004;') // 解决点击选取对号文本的问题
                }
                $(this.children[0]).css('background', 'black')
                var top = document.body.scrollTop || document.documentElement.scrollTop
                scrollBy(0, -top);
            }
        }
        // 给第二十九个互斥框添加点击事件 星座 constellation
        this.mutes[28].onclick = function (e) {
            for (let i = 0, len = that.box.length; i < len; i++) {
                if ($(that.box[i]).attr('data-series') == 'constellation') {
                    that.box[i].style.display = 'block'
                } else {
                    that.box[i].style.display = 'none'
                }
            }
            if (that.mutes[28].children[0].style.background == 'black') {
                $(this.children[0]).css('background', '')
                $(this.children[0]).html('')
                for (let i = 0, len = that.box.length; i < len; i++) {
                    that.box[i].style.display = 'block'
                }
            } else {
                let num = e.target.parentNode.children.length
                for (let k = 0; k < num; k++) {
                    $(this.parentNode.children[k].children[0]).css('background', '')
                    $(this.parentNode.children[k].children[0]).html('&#10004;') // 解决点击选取对号文本的问题
                }
                $(this.children[0]).css('background', 'black')
                var top = document.body.scrollTop || document.documentElement.scrollTop
                scrollBy(0, -top);
            }
        }

        // 形状的八个互斥选项框
        // 给第三十个互斥框添加点击事件   圆形
        this.mutes[29].onclick = function (e) {
            for (let i = 0, len = that.box.length; i < len; i++) {
                if ($(that.box[i]).attr('data-form') == 'round') {
                    that.box[i].style.display = 'block'
                } else {
                    that.box[i].style.display = 'none'
                }
            }
            if (that.mutes[29].children[0].style.background == 'black') {
                $(this.children[0]).css('background', '')
                $(this.children[0]).html('')
                for (let i = 0, len = that.box.length; i < len; i++) {
                    that.box[i].style.display = 'block'
                }
            } else {
                let num = e.target.parentNode.children.length
                for (let k = 0; k < num; k++) {
                    $(this.parentNode.children[k].children[0]).css('background', '')
                    $(this.parentNode.children[k].children[0]).html('&#10004;') // 解决点击选取对号文本的问题
                }
                $(this.children[0]).css('background', 'black')
                var top = document.body.scrollTop || document.documentElement.scrollTop
                scrollBy(0, -top);
            }
        }
        // 给第三十一个互斥框添加点击事件      花盒
        this.mutes[30].onclick = function (e) {
            for (let i = 0, len = that.box.length; i < len; i++) {
                if ($(that.box[i]).attr('data-form') == 'flowerport') {
                    that.box[i].style.display = 'block'
                } else {
                    that.box[i].style.display = 'none'
                }
            }
            if (that.mutes[30].children[0].style.background == 'black') {
                console.log(1);
                $(this.children[0]).css('background', '')
                $(this.children[0]).html('')
                for (let i = 0, len = that.box.length; i < len; i++) {
                    that.box[i].style.display = 'block'
                }
            } else {
                let num = e.target.parentNode.children.length
                for (let k = 0; k < num; k++) {
                    $(this.parentNode.children[k].children[0]).css('background', '')
                    $(this.parentNode.children[k].children[0]).html('&#10004;') // 解决点击选取对号文本的问题
                }
                $(this.children[0]).css('background', 'black')
                var top = document.body.scrollTop || document.documentElement.scrollTop
                scrollBy(0, -top);
            }
        }
        // 给第三十二个互斥框添加点击事件    方形
        this.mutes[31].onclick = function (e) {
            for (let i = 0, len = that.box.length; i < len; i++) {
                if ($(that.box[i]).attr('data-form') == 'square') {
                    that.box[i].style.display = 'block'
                } else {
                    that.box[i].style.display = 'none'
                }
            }
            if (that.mutes[31].children[0].style.background == 'black') {
                $(this.children[0]).css('background', '')
                $(this.children[0]).html('')
                for (let i = 0, len = that.box.length; i < len; i++) {
                    that.box[i].style.display = 'block'
                }
            } else {
                let num = e.target.parentNode.children.length
                for (let k = 0; k < num; k++) {
                    $(this.parentNode.children[k].children[0]).css('background', '')
                    $(this.parentNode.children[k].children[0]).html('&#10004;') // 解决点击选取对号文本的问题
                }
                $(this.children[0]).css('background', 'black')
                var top = document.body.scrollTop || document.documentElement.scrollTop
                scrollBy(0, -top);
            }
        }
        // 给第三十三个互斥框添加点击事件   心形 
        this.mutes[32].onclick = function (e) {
            for (let i = 0, len = that.box.length; i < len; i++) {
                if ($(that.box[i]).attr('data-form') == 'heart') {
                    that.box[i].style.display = 'block'
                } else {
                    that.box[i].style.display = 'none'
                }
            }
            if (that.mutes[32].children[0].style.background == 'black') {
                $(this.children[0]).css('background', '')
                $(this.children[0]).html('')
                for (let i = 0, len = that.box.length; i < len; i++) {
                    that.box[i].style.display = 'block'
                }
            } else {
                let num = e.target.parentNode.children.length
                for (let k = 0; k < num; k++) {
                    $(this.parentNode.children[k].children[0]).css('background', '')
                    $(this.parentNode.children[k].children[0]).html('&#10004;') // 解决点击选取对号文本的问题
                }
                $(this.children[0]).css('background', 'black')
                var top = document.body.scrollTop || document.documentElement.scrollTop
                scrollBy(0, -top);
            }
        }
        // 给第三十四个互斥框添加点击事件   圆球
        this.mutes[33].onclick = function (e) {
            for (let i = 0, len = that.box.length; i < len; i++) {
                if ($(that.box[i]).attr('data-form') == 'ball') {
                    that.box[i].style.display = 'block'
                } else {
                    that.box[i].style.display = 'none'
                }
            }
            if (that.mutes[33].children[0].style.background == 'black') {
                $(this.children[0]).css('background', '')
                $(this.children[0]).html('')
                for (let i = 0, len = that.box.length; i < len; i++) {
                    that.box[i].style.display = 'block'
                }
            } else {
                let num = e.target.parentNode.children.length
                for (let k = 0; k < num; k++) {
                    $(this.parentNode.children[k].children[0]).css('background', '')
                    $(this.parentNode.children[k].children[0]).html('&#10004;') // 解决点击选取对号文本的问题
                }
                $(this.children[0]).css('background', 'black')
                var top = document.body.scrollTop || document.documentElement.scrollTop
                scrollBy(0, -top);
            }
        }
        // 给第三十五个互斥框添加点击事件   水滴
        this.mutes[34].onclick = function (e) {
            for (let i = 0, len = that.box.length; i < len; i++) {
                if ($(that.box[i]).attr('data-form') == 'water') {
                    that.box[i].style.display = 'block'
                } else {
                    that.box[i].style.display = 'none'
                }
            }
            if (that.mutes[34].children[0].style.background == 'black') {
                $(this.children[0]).css('background', '')
                $(this.children[0]).html('')
                for (let i = 0, len = that.box.length; i < len; i++) {
                    that.box[i].style.display = 'block'
                }
            } else {
                let num = e.target.parentNode.children.length
                for (let k = 0; k < num; k++) {
                    $(this.parentNode.children[k].children[0]).css('background', '')
                    $(this.parentNode.children[k].children[0]).html('&#10004;') // 解决点击选取对号文本的问题
                }
                $(this.children[0]).css('background', 'black')
                var top = document.body.scrollTop || document.documentElement.scrollTop
                scrollBy(0, -top);
            }
        }
        // 给第三十六个互斥框添加点击事件   钟罩
        this.mutes[35].onclick = function (e) {
            for (let i = 0, len = that.box.length; i < len; i++) {
                if ($(that.box[i]).attr('data-form1') == 'belljar') {
                    that.box[i].style.display = 'block'
                } else {
                    that.box[i].style.display = 'none'
                }
            }
            if (that.mutes[35].children[0].style.background == 'black') {
                $(this.children[0]).css('background', '')
                $(this.children[0]).html('')
                for (let i = 0, len = that.box.length; i < len; i++) {
                    that.box[i].style.display = 'block'
                }
            } else {
                let num = e.target.parentNode.children.length
                for (let k = 0; k < num; k++) {
                    $(this.parentNode.children[k].children[0]).css('background', '')
                    $(this.parentNode.children[k].children[0]).html('&#10004;') // 解决点击选取对号文本的问题
                }
                $(this.children[0]).css('background', 'black')
                var top = document.body.scrollTop || document.documentElement.scrollTop
                scrollBy(0, -top);
            }
        }
        // 给第三十七个互斥框添加点击事件   圆罩
        this.mutes[36].onclick = function (e) {
            for (let i = 0, len = that.box.length; i < len; i++) {
                if ($(that.box[i]).attr('data-form') == 'roundcover') {
                    that.box[i].style.display = 'block'
                } else {
                    that.box[i].style.display = 'none'
                }
            }
            if (that.mutes[36].children[0].style.background == 'black') {
                $(this.children[0]).css('background', '')
                $(this.children[0]).html('')
                for (let i = 0, len = that.box.length; i < len; i++) {
                    that.box[i].style.display = 'block'
                }
            } else {
                let num = e.target.parentNode.children.length
                for (let k = 0; k < num; k++) {
                    $(this.parentNode.children[k].children[0]).css('background', '')
                    $(this.parentNode.children[k].children[0]).html('&#10004;') // 解决点击选取对号文本的问题
                }
                $(this.children[0]).css('background', 'black')
                var top = document.body.scrollTop || document.documentElement.scrollTop
                scrollBy(0, -top);
            }
        }

        // 给导航条的销量按钮添加事件
        this.cut[0].onclick = function () {
            // 把所有商品盒子显示
            for (let i = 0, len = that.box.length; i < len; i++) {
                that.box[i].style.display = 'block'
            }
            // 循环遍历 干掉所有人的样式
            for (let i = 0, len = that.cut.length; i < len; i++) {
                that.cut[i].style.color = ''
                that.cut[i].children[0].style.display = 'none'
            }
            // 然后给自己添加样式
            that.cut[0].style.color = '#484848'
            that.cut[0].children[0].style.display = 'block'
            // 干掉 价格的上下排序箭头
            that.up.style.display = 'none'
            that.down.style.display = 'none'
        }
        // 给导航条的新品按钮添加事件
        this.cut[1].onclick = function () {
            // / 干掉所有样式
            for (let i = 0, len = that.cut.length; i < len; i++) {
                that.cut[i].style.color = ''
                that.cut[i].children[0].style.display = 'none'
            }
            // 给自己设置样式
            that.cut[1].style.color = '#484848'
            that.cut[1].children[0].style.display = 'block'
            // 干掉价格的箭头
            that.up.style.display = 'none'
            that.down.style.display = 'none'

            // 循环商品列表 找出新品 设置属性为block 其他设置隐藏
            for (let i = 0, len = that.box.length; i < len; i++) {
                if ($(that.box[i]).attr('data-new') == 'new') {
                    that.box[i].style.display = 'block'
                } else {
                    that.box[i].style.display = 'none'
                }
            }
        }
        // 给导航条的价格按钮添加事件
        this.cut[2].onclick = function () {
            // 循环三个点击按钮 全部干掉
            for (let i = 0, len = that.cut.length; i < len; i++) {
                that.cut[i].style.color = ''
                that.cut[i].children[0].style.display = 'none'
            }
            // 然后给自己添加颜色和 display属性值为block
            that.cut[2].style.color = '#484848'
            that.cut[2].children[0].style.display = 'block'
            // 显示上下箭头
            that.up.style.display = 'block'
            that.down.style.display = 'block'
            // 如果上箭头背景色是黑色 就把下箭头颜色设置为黑色 上箭头设置为灰色 
            if (that.up.style.borderColor == 'black') {
                that.down.style.borderColor = 'black'
                that.up.style.borderColor = '#999'
                // 这里添加商品县市区价格从小到大排序
                // for (let i = 0; i < that.arr.length; i++) {
                //     let list = []
                //     for (let j = 0; j < that.arr.length - 1; j++) {
                //         if (that.arr[j].price > that.arr[j + 1].price) {
                //             // 换对象
                //             let t = that.arr[j]
                //             that.arr[j] = that.arr[j + 1]
                //             that.arr[j + 1] = t
                //         }
                //     }
                // }
            } else { // 否贼 下箭头设置为灰色 上箭头设置为黑色
                that.up.style.borderColor = 'black'
                that.down.style.borderColor = '#999'
                // 这里添加商品显示区 价格由从大到小排序

            }
        }
        // 滚动条滚动事件
        window.onscroll = function () {
            // 滚动距离
            var scrolltop = document.body.scrollTop || document.documentElement.scrollTop
            // console.log(scrolltop);
            if (scrolltop > 800) {
                $(that.top).fadeIn(500)
            } else {
                $(that.top).fadeOut(500)
            }
        }
        // 给其添加点击事件 点击返回顶部
        this.top.onclick = function () {
            var top = document.body.scrollTop || document.documentElement.scrollTop
            scrollBy(0, -top);
        }
        //添加移出事件
        this.top.onmouseleave = function () {
            this.children[0].style.transform = 'rotate(' + -180 + 'deg)'
        }
        // 添加移入事件
        this.top.onmouseenter = function () {
            this.children[0].style.transform = 'rotate(' + -360 + 'deg)'
        }

    }
    init() {
        // 把第一个的字体和隐藏下划线找出来
        this.cut[0].style.color = '#484848'
        this.cut[0].children[0].style.display = 'block'
        for (let i = 0, len = this.box.length; i < len; i++) {
            let obj = {
                src: this.box[i].children[1].innerText,
                series: this.box[i].children[1].innerText,
                name: this.box[i].children[2].innerText,
                price: parseInt(this.box[i].children[3].innerText.replace('￥', ''))
            }
            this.arr.push(obj)
        }

    }
}
new SwitchGoods()

// 头部的js代码 
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



// 开关 = true
// 按钮.onclick = function () {
//     if (开关 = true) {
//         if (判断不复合属性的) {
//             记录数组中arr
//             干掉
//             开关 = false
//         }
//     }else{
//         for(遍历数组) {
//             设置为 block
//         }
//     }

// }