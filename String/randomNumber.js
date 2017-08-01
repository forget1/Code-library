//count取值范围0-36
//randomNumber(10)
//"2584316588472575"
//randomNumber(14)
//"9b405070dd00122640c192caab84537"
//Math.random().toString(36).substring(2);
//"83vhdx10rmjkyb9"
function randomNumber(count){
   return Math.random().toString(count).substring(2);
}