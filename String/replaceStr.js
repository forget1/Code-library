//replaceStr(字符串,字符格式, 替换方式,替换的字符（默认*）)
function replaceStr(str, regArr, type,ARepText) {
    var regtext = '', Reg = null,replaceText=ARepText||'*';
    //replaceStr('18819322663',[3,5,3],0)
    //188*****663
    //repeatStr是在上面定义过的（字符串循环复制），大家注意哦
    if (regArr.length === 3 && type === 0) {
        regtext = '(\\w{' + regArr[0] + '})\\w{' + regArr[1] + '}(\\w{' + regArr[2] + '})'
        Reg = new RegExp(regtext);
        var replaceCount = repeatStr(replaceText, regArr[1]);
        return str.replace(Reg, '$1' + replaceCount + '$2')
    }
    //replaceStr('asdasdasdaa',[3,5,3],1)
    //***asdas***
    else if (regArr.length === 3 && type === 1) {
        regtext = '\\w{' + regArr[0] + '}(\\w{' + regArr[1] + '})\\w{' + regArr[2] + '}'
        Reg = new RegExp(regtext);
        var replaceCount1 = repeatSte(replaceText, regArr[0]);
        var replaceCount2 = repeatSte(replaceText, regArr[2]);
        return str.replace(Reg, replaceCount1 + '$1' + replaceCount2)
    }
    //replaceStr('1asd88465asdwqe3',[5],0)
    //*****8465asdwqe3
    else if (regArr.length === 1 && type == 0) {
        regtext = '(^\\w{' + regArr[0] +  '})'
        Reg = new RegExp(regtext);
        var replaceCount = repeatSte(replaceText, regArr[0]);
        return str.replace(Reg, replaceCount)
    }
    //replaceStr('1asd88465asdwqe3',[5],1,'+')
    //"1asd88465as+++++"
    else if (regArr.length === 1 && type == 1) {
        regtext = '(\\w{' + regArr[0] +  '}$)'
        Reg = new RegExp(regtext);
        var replaceCount = repeatSte(replaceText, regArr[0]);
        return str.replace(Reg, replaceCount)
    }
}
