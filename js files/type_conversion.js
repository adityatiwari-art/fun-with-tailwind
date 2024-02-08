"use strict";
let a = 33;
let b = String(a);
console.log(typeof b + " " + b);

let c = "33";
let d = Number(c);
console.log(typeof d + " " + d);

let e = "343abc"; //converted to number but value is NaN means not a number
let f = Number(e);
console.log(typeof f + " " + f);

let g = true;
let h = String(g);
console.log(typeof h + " " + h);

let i = 1;
let j = Boolean(i);
console.log(typeof j + " " + j);

let k = null;
let l = Number(k);
console.log(typeof l + " " + l);

let m = undefined;
let n = Number(m);
console.log(typeof n + " " + n);

let o = undefined;
let p = String(o);
console.log(typeof p + " " + p);

console.log(2 + 3 + "4"); //addition first so adds 54 
console.log("2" + 3 + 4); //string first so concat 234

console.log(2+true)  //implicit conversion
console.log(+true);  //true converted to number for addition
console.log(+"");

console.log(null>=0)  //null to 0 conversion
console.log(null>0)
console.log(null==0)

let BigNumber=23435698472893472142n;   //n is used to specify the number as bigInt
