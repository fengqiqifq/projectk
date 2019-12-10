class Magnifier{
    constructor(){
        this.sBox = document.querySelector("#magnifier .left .sBox");
        this.sImg = document.querySelector("#magnifier .left .sBox img");
        this.sSpan = document.querySelector("#magnifier .left .sBox span");
        this.bBox = document.querySelector("#magnifier .left .bBox");
        this.bImg = document.querySelector("#magnifier .left .bBox img");
        
        this.init()
    }
    init(){
        var that = this;
        this.sBox.onmouseover = function(){
            that.over()
        }
        this.sBox.onmousemove = function(eve){
            var e = eve || window.event;
            that.move(e)
        }
        this.sBox.onmouseout = function(){
            that.out()
        }
    }
    over(){
//				*2.鼠标进入让图片模糊
        this.sImg.style.opacity = "0.6";
        
        
        this.sSpan.style.display = "block";
        this.bBox.style.display = "block";
        
        this.sSpanW = (this.bBox.offsetWidth / this.bImg.offsetWidth * this.sBox.offsetWidth);
        this.sSpanH = (this.bBox.offsetHeight / this.bImg.offsetHeight * this.sBox.offsetHeight);
        
        this.sSpan.style.width = this.sSpanW + "px";
        this.sSpan.style.height = this.sSpanH + "px";
        
        this.sW = this.sBox.offsetWidth;
        this.sH = this.sBox.offsetHeight;

        this.bW = this.bBox.offsetWidth;
        this.bH = this.bBox.offsetHeight;

        this.bImgW = this.bImg.offsetWidth;
        this.bImgH = this.bImg.offsetHeight;
    }
    move(e){
        var l = e.scrollX - this.sBox.offsetLeft - this.sSpan.offsetWidth/2;
        var t = e.scrollY - this.sBox.offsetTop - this.sSpan.offsetHeight/2;
        if(l<0) l=0;
        if(t<0) t=0;
        if(l>this.sW - this.sSpanW){
            l = this.sW - this.sSpanW;
        }
        if(t>this.sH - this.sSpanH){
            t = this.sH - this.sSpanH;
        }
        this.sSpan.style.left = l + "px";
        this.sSpan.style.top = t + "px";
        this.bImg.style.left = l / (this.sW - this.sSpanW) * (this.bW - this.bImgW) + "px";
        this.bImg.style.top = t / (this.sH - this.sSpanH) * (this.bH - this.bImgH) + "px";
        
//				*4.设置span的背景图的位置为当前移动的位置，取反
        this.sSpan.style.backgroundPositionX = -l + "px";
        this.sSpan.style.backgroundPositionY = -t + "px";

    }
    out(){
//				*3.鼠标进入让图片清晰
        this.sImg.style.opacity = "1";
        
        this.sSpan.style.display = "none";
        this.bBox.style.display = "none";
    }
}

new Magnifier();

