//var iNum = 86;
//document.write('iNum = ' + iNum + '<br>');
//
//// 八进制
//var oNum = 070;
//document.write('oNum = ' + oNum + '<br>');
//
//// 十六进制
//var xNum = 0x1f;
//document.write('xNum = ' + xNum + '<br>');
//
//// 浮点数
//var fNum = 5.01;
//document.write('fNum = ' + fNum + '<br>');

//// 浮点数，科学记数法
//fNum = 5.61e7; // 5.61 * 10^7
//document.write('fNum = ' + fNum + '<br>');
//
//iNum = Number.MAX_VALUE;
//document.write('iNum = ' + iNum + '<br>');
//
//iNum = Number.MIN_VALUE;
//document.write('iNum = ' + iNum + '<br>');
//
//iNum = Number.POSITIVE_INFINITY;
//document.write('iNum = ' + iNum + '<br>');
//
//iNum = 5;//Number.MAX_VALUE * 1.1;
//document.write('iNum = ' + iNum + '<br>');
//document.write('iNum == Number.POSITIVE_INFINITY = ' + (iNum == Number.POSITIVE_INFINITY) + '<br>');
//document.write('isFinite(iNum) = ' + isFinite(iNum) + '<br>');

//iNum = NaN; // Not a Number
//document.write('iNum = ' + iNum + '<br>');
//document.write('(iNum === iNum) = ' + (iNum === iNum) + '<br>');
//document.write('isNaN(iNum) = ' + isNaN(iNum) + '<br>');

var sToken = 'hello"\' world!';
document.write('sToken = ' + sToken + '<br>');

sToken = 'hello world!';
document.write('sToken = ' + sToken + '<br>');

var sToken2 = sToken.concat(' abc', ' ccc', ' ccc', ' ccc', ' ccc', ' ccc', ' ccc', ' ccc', ' ccc', ' ccc', ' ccc', ' ccc我');
document.write('sToken2 = ' + sToken2 + '<br>');

document.write('sToken2.length = ' + sToken2.length + '<br>');

//hello world!
//012345678901
//0         1
sToken2 = 'hello world!';
var iLength = sToken2.indexOf('o');
document.write('charAt = ' + sToken2.charAt(iLength) + '<br>');
document.write('substring = ' + sToken2.substring(0, iLength + 1) + '<br>');

sToken2 = 'abcd abce a234 1341234 asdfsdf';
var iStart = sToken2.indexOf(' '), iEnd;
if(iStart != -1){
	iEnd = sToken2.indexOf(' ', iStart + 1);
	if(iEnd != -1){
		document.write('substring = [' + sToken2.substring(iStart + 1, iEnd) + ']<br>');
	}
}

// boolean
var bCheck = (12 == 2);
document.write('bCheck = ' + bCheck + '<br>');

// undefined
var oTemp;
document.write('oTemp = ' + oTemp + '<br>');
document.write('oTemp2 = ' + typeof oTemp + '<br>');

oTemp = 1;
document.write('typeof oTemp = ' + typeof oTemp + '<br>');
oTemp = 'abc';
document.write('typeof oTemp = ' + typeof oTemp + '<br>');
oTemp = true;
document.write('typeof oTemp = ' + typeof oTemp + '<br>');
oTemp = null;
document.write('typeof oTemp = ' + typeof oTemp + '<br>');
oTemp = undefined;
document.write('typeof oTemp = ' + typeof oTemp + '<br>');
var oTemp233;
document.write('typeof oTemp = ' + typeof oTemp + '<br>');

document.write('(undefined == undefined)' + (undefined == undefined) + '<br>');
document.write('(null == null)' + (null == null) + '<br>');
document.write('(undefined == null)' + (undefined == null) + '<br>');
