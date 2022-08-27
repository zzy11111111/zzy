  var mySwiper = new Swiper ('.swiper-container', {
  direction: 'horizontal',
  loop: true,
  autoplay:2000,
  grabCursor : false,
  // 如果需要分页器
  pagination: '.swiper-pagination',
})       

class zhiding {
  constructor() {
      this.$icon = $('#icon');
      this.$boxz = $('#boxz');
      this.addevent();
  }
  addevent() {
      let that = this;
      this.$icon.on({
          'mouseenter': function () {
              that.$boxz.css('display', 'block')
          },
          'mouseout': function () {
              that.$boxz.css('display', 'none')
          }
          
      })
     $(window).scroll(function(){
       if($(document).scrollTop()>900){
          // that.$icon.css('display','block')
          that.$icon.fadeIn(1000);

       }else{
          // that.$icon.css('display','none')
          that.$icon.fadeOut(1000);
       }
     }) 
  }
  

}
$(function () {
  new zhiding()
})



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