function removeClass(obj,classStr){
    if (this.hasClass(obj,classStr)) {
        var reg = new RegExp('(\\s|^)' + classStr + '(\\s|$)');
        obj.className = obj.className.replace(reg, '');
    }
}