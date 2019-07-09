// this用法：

// 1.脚本中，this初始化为window

//console.log(this);

// 2.在普通函数中，this初始化为window

//function f(){
//	console.log(this);
//}
//
//f();

// 3. 在object调用的函数中，this被指定为object，谁调用，指向谁。

//var obj = {
//	name: 'a',
//	f2: function(){
//		console.log(this);
//	}
//};
//
//obj.f2();
//var f = obj.f2;
//f();

// 4. call\apply中，this可以被指定，被指定为第一参数
//var obj = {
//	name: 'a',
//	f2: function(x,y){
//		console.log(this);
//	}
//};
//
//var arr = [];
//
//obj.f2(1,2);
//var f = obj.f2;
//f.call(obj,1,2);
//f.apply(obj,[1,2]);

// 5. 在new的构造函数中，this被指向正在创建的对象
//function F(){
//	console.log(this);
//}
//
//var obj = new F();

//var name = 'The window';
//var object = {
//	name: 'my object',
//	getNameFunc: function(){
//		return function(){
//			return this.name;
//		};
//	},
//	getNameFunc2: function(){
//		return this.name;
//	}
//};
//var a = object.getNameFunc()();
//// 等价于
////var f = object.getNameFunc();
////var a = f();
//console.log(a); // window
//console.log(object.getNameFunc2()); // object

//var i = 1;
//var obj = {
//	i:2,
//	f: function(){
//		console.log(this.i);
//	}
//};
//
//var f2 = obj.f;
////f2();//1
////obj.f();//2
//
//var obj2 = {
//	i:3,
//	f: function(ff){
//		ff();
//	},
//	f2:function(){
//		function fff(){
//			console.log(this.i);
//		}
//		return fff;
//	}
//};
//obj2.f(obj.f); // 1
//obj2.f = obj.f;
//obj2.f(); // 3
//obj2.f2()(); // 1
//
//function fa(x){
//	var aaa = 0;
//	function fb(x){
//		if(x > 0){
//			return fb(x-1);
//		}else{
//			aaa++;
//			return aaa;
//		}
//	}
//	
//	if(x > 0){
//		return fa(x-1);
//	}else{
//		return fb;
//	}
//}
//
//
//var fb1 = fa(0);
//console.log(fb1());
//
//var fb2 = fa(1);
//console.log(fb2());
//console.log(fb1());
//console.log(fb1());
//console.log(fb1());
//console.log(fb2());



