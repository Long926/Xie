       class Register{
         constructor(){ 
            this.user = document.getElementById("user");
            this.email = document.getElementById("email");
            this.pass = document.getElementById("pass");
            this.btn = document.getElementById("btn");
            this.jing = document.getElementById("jing");
            this.init();
            this.getData();
         }
        init(){
            var that = this;
            this.btn.onclick = function(){
                that.setData()
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
        setData(){
            if(this.data.length == 0){
                this.data.push({
                    user:this.user.value,
                    email:this.email.value,
                    pass:this.pass.value,
                    onoff:0
                })
                this.jing.innerHTML = "注册成功";
                localStorage.setItem("data",JSON.stringify(this.data))
            }else{
                for(var i=0;i<this.data.length;i++){
                    if(this.data[i].user === this.user.value){
                        this.jing.innerHTML = "重名了";
                        return;
                    }
                }
                this.data.push({
                    user:this.user.value,
                    email:this.email.value,
                    pass:this.pass.value,
                    onoff:0
                })
                this.jing.innerHTML = "注册成功";
                localStorage.setItem("data",JSON.stringify(this.data))
            }
        }
     }
     new Register();