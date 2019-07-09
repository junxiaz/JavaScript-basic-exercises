// 函数的定义。

// 功能，就是把数组求和。

x = [1,2,3,4,5,NaN,undefined,null,'abc'];
// 所给参数不符合要求的处理方法：
//   第一，发现不合格，拒绝服务，保证自己的代码不崩溃。
//   第二，发现不合格，把合格部分处理，返回。




// 函数的声明
//function <函数名>([<形式上的参数>]){
//	//函数体
//}
// 函数可以有形参，也可以没有
// 函数可以有返回值，也可以没有，没有的时候函数返回undefined

//function sum(arr){
//	var iRet = 0;
//	
//	for(var i = 0; i < arr.length; i++){
//		if(typeof(arr[i]) == 'number'){
//			if(!isNaN(arr[i]) && isFinite(arr[i])){
//				iRet += arr[i]
//			}
//		}
//	}
//	//console.log(iRet);
//	return iRet;
//}
//
//console.log(sum(x));

// 12345,54321，用函数实现。

function reverseNumber(num){
	if(typeof num != 'number'){
		return '';
	}
	
	if(!isFinite(num) || isNaN(num)){
		return '';
	}
	
	return +num.toString().split('').reverse().join('');
}

console.log(reverseNumber(12345));
