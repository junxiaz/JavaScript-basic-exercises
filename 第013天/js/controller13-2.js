// 一层的继承

//function Grand(){
//	
//}
//
//function Father(){
//	
//}
//
//var g = new Grand();
//Father.prototype = g;
//Father.prototype.constructor = Father;
//
//var f = new Father();\n

// 多层继承

function Grand(){
	
}

function Father(){
	
}

var g = new Grand();
g.abc = 123;
Father.prototype = g;
Father.prototype.constructor = Father;

function Son(){
	
}
var f = new Father();
Son.prototype = f;
Son.prototype.constructor = Son;


var s = new Son();

console.log(s.abc)

//Object -> EventTarget -> Node -> Document -> HTMLDocument
//                                        -> XMLDocument
//                            -> Element  -> ...
//                            -> Attr
//                            -> CharactorData  -> Text
//                                              -> Comment
                              
