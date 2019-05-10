    class Login{
        constructor(){
            this.user = document.getElementById("user");
            this.email = document.getElementById("user");
            this.pass = document.getElementById("pass");
            this.btn = document.getElementById("btn");
            this.ming = document.getElementById("ming");
            this.init();
            this.getData();
        }
        init(){
            var that = this;
            this.btn.onclick = function(){
                that.verification();
            }
        }
        getData(){
            this.data = localStorage.getItem("data");
            if(this.data == null){
                this.data = []
            }else{
                this.data = JSON.parse(this.data)
            }
        }
        verification(){
            for(var i=0;i<this.data.length;i++){
                if((this.data[i].user == this.user.value && this.data[i].pass == this.pass.value) || 
                (this.data[i].email == this.user.value && this.data[i].pass == this.pass.value)){
                    this.ming.innerHTML = "登陆成功";
                   
                    this.data[i].onoff = 1;
                    localStorage.setItem("data",JSON.stringify(this.data));
                    console.log(JSON.stringify(this.data))
                    location.href = "xie.html";
                    return;
                }
            }
            this.ming.innerHTML = "用户名密码不符";
        }
    }
    new Login();