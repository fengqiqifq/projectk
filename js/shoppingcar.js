class Car {
    constructor() {
        this.url = "http://localhost/project/server/data/list.json";
        this.tbody = document.querySelector("tbody");
        this.c=document.getElementById("c");
        this.addEvent();
        this.load()
    }
    load() {

        ajaxGet(this.url, (res) => {
            this.res = JSON.parse(res);
            this.getCookie()
            // console.log(res)
        })
    }
    getCookie() {
        this.goods = getCookie("goodsCookie") ? JSON.parse(getCookie("goodsCookie")) : []
        this.display();
    }
    display() {
        var str = "";
        for (var i = 0; i < this.res.length; i++) {
            for (var j = 0; j < this.goods.length; j++) {
                if (this.res[i].goodsId === this.goods[j].id) {
                    str += `<tr index="${this.res[i].goodsId}">
                           <td><input type="checkbox" class="che"/></td>
                            <td><img src="${this.res[i].img}"/></td>
                            <td>${this.res[i].name}</td>
                            <td>${this.res[i].price}</td>
                            <td><input type="number" min="1" value="${this.goods[j].num}"/></td>
                           <td><s>${parseInt(this.res[i].price) * this.goods[j].num}</s></td>
                            <td class="delete">删除</td>
                            </tr>`;
                }
                console.log(str)
            }
        }
        this.tbody.innerHTML = str
    }
    addEvent() {
        var that = this;
        this.tbody.addEventListener("click", function (eve) {
            var e = eve || window.event;
            var target = e.target || e.srcElement;
            if (target.className == "delete") {
                that.id = target.parentNode.getAttribute("index");
                console.log(target.parentNode.getAttribute("index"))
                target.parentNode.remove();

                that.changeCookie(function(i){
                    that.goods.splice(i,1);
                });
            }
        })
        this.tbody.addEventListener("input", function (eve) {
            var e = eve || window.event;
            var target = e.target || e.srcElement;
            if (target.tagName == "INPUT") {
                that.id = target.parentNode.parentNode.getAttribute("index");
                that.changeCookie(function(i){
                    that.goods[i].num=target.value;
                });
                eve.target.parentNode.parentNode.querySelector("s").innerHTML = parseInt (eve.target.parentNode.parentNode.querySelector("i").innerHTML)* eve.target.value;
                console.log(parseInt (eve.target.parentNode.parentNode.querySelector("i").innerHTML))

            }
        })
    }
    changeCookie(cb) {
        for (var i = 0; i < this.goods.length; i++) {
            if (this.id == this.goods[i].id) {
                cb(i);
                break;
            }
        }
        setCookie("goodsCookie", JSON.stringify(this.goods));
    }
    
}
new Car;

// $(".selectAll").click(function(){
//     console.log(1)
// 	$(".che").prop("checked",$(this).prop("checked"))
    
// })