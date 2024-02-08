// // factorial using reduce and for loop
// a=10;
// list=[]
// for (let i = 1; i <= a; i++) {
//      list[i-1]=i;
// }
// fact=list.reduce((a,b)=>{
//     return a*b;
// })
// console.log(fact)

// without reduce 
// a=5
// fact=1;
// for (let i = a; i >=1; i--) {
//     fact=fact*i;
// }
// console.log(fact)

// function factorial(e){
//     if(e==1){
//     return 1;
//     }
//     return (e*factorial(e-1));
// }
// console.log(factorial(10));

// a=10;
// newarray=Array.from(Array(a+1).keys())
// let c=newarray.slice(1,).reduce((a,b)=>{
//     return a*b;
// })
// console.log(c)
// console.log(newarray)
// console.info("heeloo this is an info")
// console.error("negative age entered");
// console.warn("negative age not allowed");
// assert is used to show a message when the conditon given results in false value 
// console.assert(3+4==8,"condition result in false");
// console.clear();
// alert("welcome");
// confirm("are you male")
// let c=prompt("ente the value of c ","45")   second pramenter as default value 

// The Document Object Model (DOM) is a programming interface for web documents. It represents the structure of a document as a tree of objects, where each object corresponds to a part of the document, such as elements, attributes, and text. The DOM provides a way for programs to dynamically access and manipulate the content, structure, and style of a document.
// For example, you can use the DOM to:

// Access and modify HTML elements and attributes.
// Add or remove elements from the document.
// Change the content or style of elements dynamically.
// Respond to user events, such as clicks or keystrokes.

// DOM reresents a document as a tree of objects or nodes which are the element of the document
                                    // window--uppper level object in browser
                                    // |DOM 
                                    // |BOM
                                    // |JAVASCRIPT CORE
// DOM 
// document.title="MYHOME"
// document.body.style.background="red";
console.log(document.body)

// BOM 
// pprovides addtional object for workingin browser. alert ,confirm all are the objects in bom 
// href=hypertext reference 
let a=prompt("enter the value of a ",5);
if(a>4){
    window.location.href=('http://google.com') 
    // redirect to some age based on the inut value 
}

// in dev tools $0= represents the DOM of current selected element for which you can write js in console
// $0.style.background="green"

