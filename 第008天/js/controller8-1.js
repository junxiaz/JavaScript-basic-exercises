// 构造函数
// 我们需要一种函数，能够每次以相同的方式构造对象；
// 同时，改动这个函数，所有的对象都能跟着改变。

// 构造函数，名称已大写字母开头（约定俗成）

function Student(name, age, gender){
	this.name = name;
	this.age = age;
	this.gender = gender;
}

var std = new Student('Wangli', 30, 'male');

function Student2(name, age, gender){
	var object = {};
	object.name = name;
	object.age = age;
	object.gender = gender;
	
	return object;
}

var std2 = Student2('Wangli', 30, 'male');

