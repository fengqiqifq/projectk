var goods = [{
    img:"https://haitao.nosdn1.127.net/3e766f0097f247d4ada2dc17deb491a91544088658873jpceiqak10164.jpg?imageView&thumbnail=430x430",
    name:"三只松鼠 清秋葵花脆 40克",
    price:"￥16.9"
},{
    img:"https://haitao.nos.netease.com/2cd9003ada14455eae9d153bb5186a311548410185527jrbvg1lq10641.jpg?imageView&thumbnail=430x430",
    name:"爱茉莉 美妆仙护发精油70毫升/瓶 3瓶装",
    price:"￥95"
},{
    img:"https://haitao.nosdn2.127.net/976a563710dd4463b61aa5dedbad42d01539244125512jn4a7kfe11090.jpg?imageView&thumbnail=430x430",
    name:"三只松鼠每日干果_玫瑰红葡萄干",
    price:"￥12.9"
},{
    img:"https://pop.nosdn.127.net/d025f6a4-4120-44a4-8272-df9b8b216073?imageView&thumbnail=430x430",
    name:"百草味一字豆腐干200g辣味零食豆制品",
    price:"￥18.9"
}];

var cont = document.getElementById("cont")

var str = "";
for(var i=0;i<goods.length;i++){


    str += '<div class="classification"><img src="'+ goods[i].img +'" alt=""><p>'+ goods[i].name +'</p><span>' + goods[i].price + '</span></div>';
    
}

cont.innerHTML = str;
