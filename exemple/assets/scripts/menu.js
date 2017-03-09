

// function uneFonction() {
// 	"use strict";
// 	var loop = 0,
// 		b = 12;
// 	if (true) {
// 		for (loop = 0; loop < 5; loop++) {
//
// 		}
// 	}
// 	console.log(loop, b);
// }
// uneFonction();

// var a = undefined;
//
// if(a){
// 	console.log("ceci est vrai");
// }else{
// 	console.log("ceci est faux");
// }

// function addition(a, b) {
// 	if (((typeof a) == "number") && ((typeof b) == "number")) {
// 		console.log(a + b);
// 	}
// }
//
// addition(5, 5);
// console.log(15 === "15");

// var a = 0,
// 	b = !!a;
//
// console.log(typeof b, b);

// var tab = [5, "truc", false, "coucou", 'dong'];
// tab[0] = "indice 0";
// tab.push('element à la fin');
// for (var indice in tab) {
// 	console.log(tab[indice]);
// }
// var dernElement = tab.pop();
// console.log(dernElement, tab);
// console.log(tab.length);

// function fct() {
// 	var a = 12; //a n'est visible que dans fct() et fct1()
// 	var fct1 = function() {
// 		var a = 18; //a n'est visible que dans fct1()
// 		console.log("fct interne", a);
// 	}
// 	fct1();
// 	console.log("fonction principale", a);
// }
//
// fct();

// var a = 123;
// 
// function closure(){
// 	console.log(a);
// }
// 
// closure();


// function unAutreTruc(msg) {
// 	var char = msg[0];
// 	console.log('callback1: ', char);
// }

// function callback(msg) {
// 	console.log("callback2: ", msg);
// }

// var truc = 'coucou';
// function callback() {
// 	truc = 'pas coucou';
// 	console.log(truc);
// }
// function execute(cb) {
// 	cb();
// }
// execute(callback);
// console.log(truc);

var uneValeur = 100;

function action(){
	console.log("5sec après ", uneValeur);
}

console.log("avant");

setTimeout(action, 3000);

uneValeur = 20000;

console.log("après");