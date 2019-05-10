function Goods(){
    this.cont = document.getElementById("frame");
    this.url = 'ctrl/lie.php';
    this.init();
    this.addEvent();
}
Goods.prototype.init = function(){
    var that = this;
    ajaxGet(this.url).then(function(res){
        that.res = JSON.parse(res)
        that.display()
    })
}
Goods.prototype.display = function(){
    var str = "";
    for(var i=0;i<this.res.length;i++){
        str += `<div class="box" index="${this.res[i].goodsId}">
                    <img src="${this.res[i].src}">
                    <span>${this.res[i].pic}</span>
                    <p>${this.res[i].title}</p>
                   <em class="add">加入购物车</em>
                </div>`
    }
    this.cont.innerHTML = str;
}
Goods.prototype.addEvent = function(){
    var that = this;
    this.cont.addEventListener("click",function(eve){
        var e = eve || window.event;
        var target = e.target || e.srcElement;
        if(target.className == "add"){
            that.id = target.parentNode.getAttribute("index");
            that.setCookie()
        }
    })
}
Goods.prototype.setCookie = function(){
    this.goods = getCookie("goods");
    if(this.goods == ""){
        this.goods = [{
            id:this.id,
            num:1
        }];
    }else{
        var onoff = true;
        this.goods = JSON.parse(this.goods)
        for(var i=0;i<this.goods.length;i++){
            if(this.goods[i].id == this.id){
                this.goods[i].num++;
                onoff = false;
                break;
            }
        }
        if(onoff){
            this.goods.push({
                id:this.id,
                num:1
            })
        }
    }
    setCookie("goods",JSON.stringify(this.goods))
}

new Goods();