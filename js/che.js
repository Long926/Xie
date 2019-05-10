function Che(){
    this.tbody = document.querySelector("tbody")
    this.url = "http://localhost/jackchan/ctrl/lie.php"

    this.init()

    this.addEvent()
}
Che.prototype.init = function(){
    var that = this;
    ajaxGet(this.url).then(function(res){
        that.res = JSON.parse(res)
        that.getCookie()
    })

}
Che.prototype.getCookie = function(){
    this.goods = getCookie("goods")!="" ? JSON.parse(getCookie("goods")) : [];
    
    this.display()
}
Che.prototype.display = function(){
    var str = ""
    for(var i=0;i<this.res.length;i++){
        for(var j=0;j<this.goods.length;j++){
            if(this.res[i].goodsId == this.goods[j].id){
                str += `<tr index="${this.goods[j].id}">
                            <td><img src="${this.res[i].src}"/></td>
                            <td>${this.res[i].title}</td>
                            <td>${this.res[i].pic}</td>
                            <td><input type="number" min=1 value="${this.goods[j].num}" class="num"></td>
                            <td><em class="dele">删除</em></td>
                        </tr>`;
            }
        }
    }
    this.tbody.innerHTML = str;
}
Che.prototype.addEvent = function(){
    var that = this;
    this.tbody.addEventListener("input",function(eve){
        var e = eve || window.event;
        var target = e.target || e.srcElement;
        if(target.className == "num"){
            that.num = target.value;
            that.id = target.parentNode.parentNode.getAttribute("index");
            that.changeCookie(function(i){
                that.goods[i].num = that.num
            })
        }
    })
    this.tbody.addEventListener("click",function(eve){
        var e = eve || window.event;
        var target = e.target || e.srcElement;
        if(target.className == "dele"){
            that.id = target.parentNode.parentNode.getAttribute("index");
            target.parentNode.parentNode.remove();
            that.changeCookie(function(i){
                that.goods.splice(i,1)
            })
        }
    })
}
Che.prototype.changeCookie = function(callback){
    for(var i=0;i<this.goods.length;i++){
        if(this.goods[i].id == this.id){
            callback(i)
        }
    }
    setCookie("goods",JSON.stringify(this.goods))
}
new Che();