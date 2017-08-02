var library = {
	//去除空格 type-1所有空格  2-前后空格 3-前空格 4-后空格
	trim: function trim(str, type) {
      	switch (type) {
        	case 1: return str.replace(/\s+/g, "");
        	case 2: return str.replace(/(^\s*)|(\s*$)/g, "");
        	case 3: return str.replace(/(^\s*)/g, "");
        	case 4: return str.replace(/(\s*$)/g, "");
        	default: return str;
      	}
	},
	//repeatStr(str->字符串, count->次数)
	//repeatStr('123',3)
	//"123123123"
	repeatStr: function(str, count) {
		var text = '';
        for (var i = 0; i < count; i++) {
            text += str;
        }
        return text;
	},
    /*type
    *  1:首字母大写
    *  2：首页母小写
    *  3：大小写转换
    *  4：全部大写
    *  5：全部小写
     * */
    //changeCase('asdasd',1)
    //Asdasd
    changeCase: function(str,type) {
        function ToggleCase(str) {
            var itemText = ""
            str.split("").forEach(
                function (item) {
                    if (/^([a-z]+)/.test(item)) {
                        itemText += item.toUpperCase();
                    }
                    else if (/^([A-Z]+)/.test(item)) {
                        itemText += item.toLowerCase();
                    }
                    else{
                        itemText += item;
                    }
                });
            return itemText;
        }
        switch (type) {
            case 1:
                return str.replace(/^(\w)(\w+)/, function (v, v1, v2) {
                    return v1.toUpperCase() + v2.toLowerCase();
                });
            case 2:
                return str.replace(/^(\w)(\w+)/, function (v, v1, v2) {
                    return v1.toLowerCase() + v2.toUpperCase();
                });
            case 3:
                return ToggleCase(str);
            case 4:
                return str.toUpperCase();
            case 5:
                return str.toLowerCase();
            default:
                return str;
        }
    },
    //checkPwd('12asdASAD')
    //3(强度等级为3)
    checkPwd: function(str) {
        var nowLv = 0;
        if (str.length < 6) {
            return nowLv
        };
        if (/[0-9]/.test(str)) {
            nowLv++
        };
        if (/[a-z]/.test(str)) {
            nowLv++
        };
        if (/[A-Z]/.test(str)) {
            nowLv++
        };
        if (/[\.|-|_]/.test(str)) {
            nowLv++
        };
        return nowLv;
    },
    //checkType('165226226326','phone')
    //false
    //大家可以根据需要扩展
    checkType: function(str, type) {
        switch (type) {
            case 'email':
                return /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/.test(str);
            case 'phone':
                return /^1[3|4|5|7|8][0-9]{9}$/.test(str);
            case 'tel':
                return /^(0\d{2,3}-\d{7,8})(-\d{1,4})?$/.test(str);
            case 'number':
                return /^[0-9]$/.test(str);
            case 'english':
                return /^[a-zA-Z]+$/.test(str);
            case 'chinese':
                return /^[\u4E00-\u9FA5]+$/.test(str);
            case 'lower':
                return /^[a-z]+$/.test(str);
            case 'upper':
                return /^[A-Z]+$/.test(str);
            default :
                return true;
        }
    },
    countStr: function(str,strSplit) {
        return str.split(strSplit).length-1
    },
    //count取值范围0-36
    //randomNumber(10)
    //"2584316588472575"
    //randomNumber(14)
    //"9b405070dd00122640c192caab84537"
    //Math.random().toString(36).substring(2);
    //"83vhdx10rmjkyb9"
    randomNumber: function(count) {
       return Math.random().toString(count).substring(2);
    },
    //字符串替换(字符串,要替换的字符,替换成什么)
    replaceAll: function(str,AFindText,ARepText) {
    　　　raRegExp = new RegExp(AFindText,"g");
    　　　return str.replace(raRegExp,ARepText);
    },
    //replaceStr(字符串,字符格式, 替换方式,替换的字符（默认*）)
    replaceStr: function(str, regArr, type,ARepText) {
        var regtext = '', Reg = null,replaceText=ARepText||'*';
        //replaceStr('18819322663',[3,5,3],0)
        //188*****663
        //repeatStr是在上面定义过的（字符串循环复制），大家注意哦
        if (regArr.length === 3 && type === 0) {
            regtext = '(\\w{' + regArr[0] + '})\\w{' + regArr[1] + '}(\\w{' + regArr[2] + '})'
            Reg = new RegExp(regtext);
            var replaceCount = this.repeatStr(replaceText, regArr[1]);
            return str.replace(Reg, '$1' + replaceCount + '$2')
        }
        //replaceStr('asdasdasdaa',[3,5,3],1)
        //***asdas***
        else if (regArr.length === 3 && type === 1) {
            regtext = '\\w{' + regArr[0] + '}(\\w{' + regArr[1] + '})\\w{' + regArr[2] + '}'
            Reg = new RegExp(regtext);
            var replaceCount1 = this.repeatStr(replaceText, regArr[0]);
            var replaceCount2 = this.repeatStr(replaceText, regArr[2]);
            return str.replace(Reg, replaceCount1 + '$1' + replaceCount2)
        }
        //replaceStr('1asd88465asdwqe3',[5],0)
        //*****8465asdwqe3
        else if (regArr.length === 1 && type == 0) {
            regtext = '(^\\w{' + regArr[0] +  '})'
            Reg = new RegExp(regtext);
            var replaceCount = this.repeatStr(replaceText, regArr[0]);
            return str.replace(Reg, replaceCount)
        }
        //replaceStr('1asd88465asdwqe3',[5],1,'+')
        //"1asd88465as+++++"
        else if (regArr.length === 1 && type == 1) {
            regtext = '(\\w{' + regArr[0] +  '}$)'
            Reg = new RegExp(regtext);
            var replaceCount = this.repeatStr(replaceText, regArr[0]);
            return str.replace(Reg, replaceCount)
        }
    }
}