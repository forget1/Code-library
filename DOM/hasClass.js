function hasClass(obj,classStr){ 
    var arr=obj.className.split(/\s+/); //这个正则表达式是因为class可以有多个,判断是否包含 
    return (arr.indexOf(classStr)==-1)?false:true;
}