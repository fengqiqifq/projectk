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
                           <td class="qx"><input type="checkbox" class="c"/></td>
                            <td><img src="${this.res[i].img}"/></td>
                            <td class="name">${this.res[i].name}</td>
                            <td class="jg">${this.res[i].price}</td>
                            <td class="sl"><input type="number" class="n" min="1" value="${this.goods[j].num}"/></td>
                           <td><s>${parseInt(this.res[i].price) * this.goods[j].num}</s></td>
                            <td class="delete">删除</td>
                            </tr>`;
                }
                // console.log(str)
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
                (target.parentNode.getAttribute("index"))
                target.parentNode.remove();

                that.changeCookie(function(i){
                    that.goods.splice(i,1);
                });
            }
        })
        this.tbody.addEventListener("input", function (eve) {
            var e = eve || window.event;
            var target = e.target || e.srcElement;
            if (target.className == "n") {
                that.id = target.parentNode.parentNode.getAttribute("index");
                that.changeCookie(function(i){
                    that.goods[i].num = target.value;
                });
                console.log(target.value);
                eve.target.parentNode.parentNode.querySelector("s").innerHTML = parseInt (eve.target.parentNode.parentNode.querySelector(".jg").innerHTML)* parseInt(eve.target.value);

                // console.log(typeof (parseInt (eve.target.parentNode.parentNode.querySelector(".jg").innerHTML)))
                // console.log(parseInt (eve.target.parentNode.parentNode.querySelector("s")))
                // console.log(parseInt (eve.target.parentNode.parentNode.querySelector("s").innerHTML)
// )
                // console.log(eve.target.value)
                // console.log(parseInt(eve.target.value))
                // console.log(parseInt (eve.target.parentNode.parentNode.querySelector("s").innerHTML))

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
