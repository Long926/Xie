    var otel = document.getElementById("user");
    var oemail = document.getElementById("email");
    var opass = document.getElementById("pass");
    var opass2 = document.getElementById("pass2");
    // var obtn = document.getElementById("btn");
    // var telOnoff = emailOnoff = passOnoff = pass2Onoff = false;

    otel.onblur = function(){
        var reg = /^[0-9a-zA-Z\u4e00-\u9fa5]{3,10}$/;
        if(reg.test(otel.value)){
            this.nextElementSibling.innerHTML = "可以注册";
            // telOnoff = true;
        }else{
            this.nextElementSibling.innerHTML = "请输入6到10的字符";
            // telOnoff = false;
        }
    }

    oemail.onblur = function(){
        var emReg = /^\w+@\w+(\.[a-zA-Z]{2,3}){1,2}$/;
        if(emReg.test(oemail.value)){
            this.nextElementSibling.innerHTML = ""
            // emailOnoff = true;
        }else{
            this.nextElementSibling.innerHTML = "邮件地址格式不正确"
            // emailOnoff = false;
        }
    }

    opass.onblur = function(){
        var lengthReg = /^.{6,18}$/;
        if(!lengthReg.test(this.value)){
            this.nextElementSibling.innerHTML = "请输入6~18位的密码"
            // passOnoff = false;
            return;
        }
        var a=b=c=0;
        var numReg = /\d/;
        if(numReg.test(this.value)){
            a = 1
        }
        var azReg = /[a-zA-Z]/;
        if(azReg.test(this.value)){
            b = 1
        }
        var tsReg = /[^\da-zA-Z]/;
        if(tsReg.test(this.value)){
            c = 1
        }
        switch(a+b+c){
            case 1:this.nextElementSibling.innerHTML = "密码简单";break;
            case 2:this.nextElementSibling.innerHTML = "密码一般";break;
            case 3:this.nextElementSibling.innerHTML = "密码困难";break;
        }
        // passOnoff = true; 
        if(opass2 != ""){
            if(opass2.value == opass.value){
                opass2.nextElementSibling.innerHTML = "";
                // pass2Onoff = true;
            }else{
                opass2.nextElementSibling.innerHTML = "两次输入密码不一致";
                // pass2Onoff = false;
            }
        }
    }
    opass2.onblur = function(){
        if(opass2.value == opass.value){
            this.nextElementSibling.innerHTML = "";
            // pass2Onoff = true;
        }else{
            this.nextElementSibling.innerHTML = "两次输入密码不一致";
            // pass2Onoff = false;
        }
    }

    // obtn.onclick = function(){
    //     if(telOnoff && emailOnoff && passOnoff && pass2Onoff){
    //         alert("注册成功")
    //     }else{
    //         if(!telOnoff){
    //             alert("手机号不对")
    //         }
    //         if(!emailOnoff){
    //             alert("密码错误")
    //         }
    //         if(!passOnoff){
    //             alert("确认密码错误")
    //         }
    //         if(!pass2Onoff){
    //             alert("密码错误")
    //         }
    //     }
    // }
