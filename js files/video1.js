// console.log("hello world");
// alert("hello welcome to the dark web");
// var a=prompt("enter your age");  //to create a variable in js 
// console.log("your age is " + a);
// var istrue= confirm("are you a male");
// if(istrue){
//     console.log("you are a male");
// }
// else{
//     console.log("you are a women ");
// }
// document.title="this is the new title"; //use to set new page title 
// document.body.style.backgroundColor="red";   //used to add inline css at any element 

// variables in js 
// var has global scope 
// let has block scope if outside then global 
// var a=5;
// const b=6;
// {
//     let b=7;
//     var a=66;  //since var has global scope it and the outer one are same
//     console.log(a);
//     console.log(typeof b);   //number
// }
// console.log(b);
// console.log(a);
// // identifier can start with _ and $
// console.log(typeof a,typeof b)


// datatypes in js --1.primitive 2.object-it is a key value pair
// numbers,string,null,undefined,bigInt
// the typeof null is  object it is because it was used since the initials and cannot be modified
// let a=5;
// let b="harry";
// let c=null;
// let d;
// let e=undefined;
// let obj={
//     name:"aditya",
//     "roll no":11691
// }
// obj.salary="100cr"; //to add or modify new field in it
// console.log(a,b,c,d,e,obj);
// console.log(typeof a,typeof b,typeof c,typeof d,typeof e,typeof obj);
// console.log(obj);

// imp*********************************************************
// exponet operator in js is **
// some new comparison operators 
// ===, !==
// === ,compares not only value but also their types similarily !==
// to see working it go to terminal type node(known as repl--read evaluate print loop) and type your query as 
// "3"==3  //o/p is true since value is same 
// but 
// "3"===3  //false
// let i=0;
// for (let i = 0; i < 10; i++) {
//     console.log(i);   
// }

// let obj={
//     name:"aditya",
//     role:"programmer"
// };
// for (const key in obj) {
//     console.log(key,obj[key]);
// }

// let str="programmer";
// for (const iterator of str) {
//     console.log(iterator)
// }

// let a=0;
// while(a<10){
//     console.log(a++);
// }

// post-loop or do while loop 
// let  a=10;
// do {
//     console.log(a--);
// } while (a<4);

// function sum(a,b){
//     console.log("sum is"+(a+b));
// }
// sum(3,4);

// arrow function behaves as a variable and a function at the same Time it is used to pass a function as a paramenter to the other/arroiw function is  a  anonymous function assigned to a variable and it is also called as lambda function
// a=6;
// const func=(b)=>{
//     return b+3;
// }
// // console.log(func(a));
// function sum(a,b){
//     console.log("sum is"+(a+b));
// }
// sum(3,func(6));

// function sum(a,b){
//         return (a+b);
//     }

// function mul(a,b){
//         console.log("product is"+(a*b));
//     }
// mul(sum(3,4),5)

