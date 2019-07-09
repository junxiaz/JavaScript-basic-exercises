// 包装类

var n1 = 123;
var n2 = new Number(123);

console.log(typeof(n1));
console.log(typeof(n2));

var s1 = 'aaa';
var s2 = new String('aaa');

console.log(typeof(s1));
console.log(typeof(s2));

var b1 = true;
var b2 = new Boolean(true);

console.log(typeof(b1));
console.log(typeof(b2));

var arr = [1,2,3,4];
arr.length = 2;
console.log(arr);

var str = '1234';
//str.length = 2;
var strTmp = new String(str);
strTmp.length = 2;
// strTmp摧毁
console.log(str);

var iNum = 123;
//iNum.toString();
var iTmp = new Number(iNum);
iTmp.toString();
// iTmp摧毁
console.log(iNum);

true.toString();

