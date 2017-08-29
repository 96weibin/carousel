var oImgs = document.getElementsByTagName('img');
var srcs = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg'];
var speed = 1;
var startAt = 0;
var time = 3;
var k;
var wrapper = document.querySelector('.wrapper');
var rBtn = document.querySelector('.rBtn');
var lBtn = document.querySelector('.lBtn');
lunbo(oImgs, srcs, speed, time, startAt);

function lunbo(obj, srcs, speed, time, startAt){
    wrapper.onmouseover = function(){
        clearInterval(timer);
    }
    wrapper.onmouseout = function(){
        timer = setInterval(move, time);        
    }
    rBtn.onmouseover = function(){
        this.style.backgroundColor = '#f0f';        
    }
    lBtn.onmouseover = function(){
        this.style.backgroundColor = '#f0f';
    }
    rBtn.onmouseout = function() {
        this.style.background = "url(img/more.png)";
    }
    lBtn.onmouseout = function() {
        this.style.background = "url(img/back.png)";
    }
    lBtn.onclick = function(){
        if(k > 0 ){
            k = --startAt;  
        }else{
            k = oImgs.length;
            startAt = oImgs.length;
        } 
        console.log(k);     
        oImgs[0].style.left = 0;
        oImgs[1].style.left = 500 + 'px';
        oImgs[2].style.left = 1000 + 'px';
        oImgs[0].src ='img/' + srcs[k];
        console.log(srcs[k]);
    }
    rBtn.onclick = function(){
        if(k < oImgs.length){
            k = ++startAt;  
        }else{
            k = 0;
            startAt = 0;
        }
        console.log(k);             
        oImgs[0].style.left = 0; 
        oImgs[1].style.left = 500 + 'px';
        oImgs[2].style.left = 1000 + 'px';        
        oImgs[0].src ='img/' + srcs[k];
        console.log(srcs[k]);
        
    }
    var timer = null;
    run();
    function run() {
        clearInterval(timer);
        timer = setInterval(move, time);
    }
    function move() {
        obj[0].style.left = obj[0].offsetLeft - speed + 'px'; 
        obj[1].style.left = obj[1].offsetLeft - speed + 'px'; 
        obj[2].style.left = obj[2].offsetLeft - speed + 'px'; 


        if(obj[0].offsetLeft == -500) {
            obj[0].style.left = 1000+'px';

            if(startAt <= oImgs.length){
                startAt++
            }else{
                startAt = 0;
            }

            obj[0].src = 'img/' + srcs[startAt]
        }
        if(obj[1].offsetLeft == -500) {

            obj[1].style.left = 1000+'px';

            if(startAt <= oImgs.length){
                startAt++
            }else{
                startAt = 0;
            }

            obj[1].src = 'img/' + srcs[startAt]
        }
        if(obj[2].offsetLeft == -500) {
            obj[2].style.left = 1000+'px';

            if(startAt <= oImgs.length){
                startAt++
            }else{
                startAt = 0;
            }

            obj[2].src = 'img/' + srcs[startAt]
        }      
    }
    (function (srcs){//  动态获取   url的长度    把url给  img
        for(var i = 0; i < 3; i++, startAt++) {
            obj[i].src = 'img/' + srcs[startAt];
            // console.log(oImgs[i].src + "----" + urls[i]);
        }
    }(srcs))

}

