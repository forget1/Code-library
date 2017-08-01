function randomColor(){
    //randomNumber是上面定义的函数
    //写法1
    return 'rgb(' + randomNumber(255) + ',' + randomNumber(255) + ',' + randomNumber(255) + ')';
    //写法2
    return '#'+Math.random().toString(16).substring(2).substr(0,6);
    //写法3
    var color='#';
    for(var i=0;i<6;i++){
        color+='0123456789abcdef'[randomNumber(15)];
    }
    return color;
}
//这种写法，偶尔会有问题。大家得注意哦
//Math.floor(Math.random()*0xffffff).toString(16);