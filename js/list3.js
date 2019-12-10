
var cont = document.getElementById("cont")

var str = "";
for(var i=0;i<goods.length;i++){


    str += '<div class="classification"><img src="'+ goods[i].img +'" alt=""><p>'+ goods[i].name +'</p><span>' + goods[i].price + '</span></div>';
    
}

cont.innerHTML = str;