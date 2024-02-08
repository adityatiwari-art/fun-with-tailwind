// searching the DOM 
console.log("hello");
let target=document.body.getElementsByClassName('box');
target[1].style.backgroundColor="green";  //2 means 3rd child
document.getElementById('red').style.backgroundColor="red";  //direct selection 
document.querySelector(".box").style.backgroundColor="pink"; //for first matched selector only
document.querySelectorAll('.box'); //return a node list or element list hence roerty to a list cannot be applied
document.querySelectorAll('.box').forEach((e)=>{
    e.style.backgroundColor="yellow";
})
// document.querySelector("#red").style.backgroundColor="purple";
// foreach list function used to access all list elements one by one 
document.getElementsByTagName('div');  //return a list of same tag 
// matches ,closest,contains methods
document.matches(".box")
// false since the body has no selector named .box 
e=document.body.children[0].matches(".container")
// true   in console output
// closest() searchges for the closest anscestor having the selector 
// e[1].closest(".container")   e=document.body.children(0).children(1)
// document.querySelector(".container").contains(document.querySelector(".box"))
// // true
// e=document.querySelector(".container")
// // true
// e.contains(document.body.children[0])
// // true