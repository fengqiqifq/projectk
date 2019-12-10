class Register {
    constructor() {
        this.user = document.getElementById("user")
        this.pass = document.getElementById("pass")
        this.reg = document.getElementById("reg")
        this.log = document.getElementById("log")
        this.span = document.querySelector("span")
        this.addEvent()
    }
    addEvent() {
        var that = this;
        this.reg.onclick = function () {
            that.u = that.user.value;
            that.p = that.pass.value;

            that.setMsg();

        }
        this.log.onclick=function(){
            location.href="login.html";
        }
    }
    setMsg() {
        this.msg = getCookie("userMsg") ? JSON.parse(getCookie("userMsg")) : [];
        if (this.msg.length < 1) {
            this.msg.push({
                user: this.u,
                pass: this.p,
                onoff: 0
            })
            this.succes();
        } else {
            var type=this.msg.some((val, idx) => {
                return val.user === this.u
            });
            if (type) {
                this.span.innerHTML = "用户名重复"
            } else {
                this.msg.push({
                    user: this.u,
                    pass: this.p,
                    onoff: 0
                })
                this.succes();
            }
        }
        setCookie("userMsg",JSON.stringify(this.msg))

    }
    succes(){
        this.span.innerHTML="注册成功，5秒后<a href='login.html'>跳转到登录</a>"
        setTimeout(() => {
            location.href="login.html"
        }, 5000);
    }
}
new Register;
