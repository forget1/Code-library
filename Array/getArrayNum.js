//getArrayNum([0,1,2,3,4,5,6,7,8,9],5,9)
//[5, 6, 7, 8, 9]
//getArrayNum([0,1,2,3,4,5,6,7,8,9],2) 不传第二个参数,默认返回从n1到数组结束的元素
//[2, 3, 4, 5, 6, 7, 8, 9]
function getArrayNum(arr,n1,n2){
    var arr1=[],len=n2||arr.length-1;
    for(var i=n1;i<=len;i++){
        arr1.push(arr[i])
    }
    return arr1;
}