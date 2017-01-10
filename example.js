/*function not(f){
	return function (){
		var result = f.apply(this, arguments);
		return !result;
	};
}
var event = function(x){
	return x%2 === 0;
}
var odd = not(event);
var dataArr = [1,4,5];
console.log(dataArr.every(odd));
 Array.prototype.testArg = "test";
 function funArg (){
 	console.log("第一"+arguments.testArg);
 	console.log("第二" + arguments[0]);
 }
 console.log(new Array().testArg);
 console.log(funArg("哈哈哈哈哈"));*/
 function array(a,n){
 	return Array.prototype.slice.call(a,n||0);
 }
 console.log(array(10,15).slice());
