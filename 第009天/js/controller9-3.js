// 立即执行函数
// 1. 只有函数表达式可以，函数声明不可以。
// 2. 函数表达式中的名字不会被放在GO或者AO中

//var f = function fact(x){
//	if(x <= 1)return 1;
//	else return x*fact(x-1);
//}
//
//console.log(f(4));

//var f = function fact(x){
//	if(x <= 1)return 1;
//	else return x*fact(x-1);
//}(4);
//
//console.log(f);
//var f = (function(x){...})(4);
//var f = (function(x){...}(4));
//var f = function(x){...}(4);


