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
    }
}