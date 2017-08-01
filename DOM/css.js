function css(obj,json){
    for(var attr in json){
        obj.style[attr]=json[attr];
    }
}