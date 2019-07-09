// 对象
// 对象的创建

var obj1 = {};
var obj2 = new Object();
// 两个方法都可以。

var objBook = {
	name: 'Book Name', // 原始成员
	pageNumber: 300,
	author: { // 引用成员
		firstname: 'aaa',
		lastname: 'bbb'
	},
	query: function(){ // 成员函数
		console.log('query');
	},
	addPage: function(){
		this.pageNumber++;
		console.log('addPage');
	}
};

console.log(++objBook['pageNumber']);
objBook.query();
objBook['query']();


