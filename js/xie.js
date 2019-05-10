    class Xie{
        constructor(){
            this.li = document.querySelectorAll(".te1")
            this.xie = document.getElementById("xie")
            this.exit = document.getElementById("exit")
            this.getData()
            this.addEvent()
        }
        getData(){
            this.data = localStorage.getItem("data");
            if(this.data == null){
                this.data = []
            }else{
                this.data = JSON.parse(this.data)
            }
            this.panduan()
        }
        panduan(){
            for(var i=0;i<this.data.length;i++){
                if(this.data[i].onoff == 1){
                    this.li[0].style.display = "none";
                    this.li[1].style.display = "block";
                    this.xie.innerHTML = this.data[i].user;
                    this.successUser = this.data[i].user;
                    return;
                }
            }
            this.li[0].style.display = "block";
            this.li[1].style.display = "none";
            this.xie.innerHTML = "";
        }
        addEvent(){
            var that = this;
            this.exit.onclick = function(){               
                if(that.successUser){
                    for(var i=0;i<that.data.length;i++){
                        if(that.data[i].user === that.successUser){
                            that.data[i].onoff = 0;                           
                            localStorage.setItem("data",JSON.stringify(that.data))                         
                            that.panduan();
                            location.href = "xie.html";
                        }
                    }
                }
            }
        }
    }
    new Xie();