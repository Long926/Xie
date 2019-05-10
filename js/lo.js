
    $(".banner").banner({
    items:$(".banner").children(".imgbanner").children("a"),
    left:$(".banner").find("#left"),
    right:$(".banner").find("#right"),
    list:true,
    autoPlay:true,
    delayTime:3000,
    moveTime:300
})
