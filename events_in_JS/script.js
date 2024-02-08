// //  ways to handle events
// // using Html attributes 
// // using properties e.g. ele.onclick
// // adding event listener using js
// ele=document.getElementById("btn")
// const ActionOnClick =()=>{
// alert("heyy dont click me it hurts too much !!!!");
// }
// ele.addEventListener("click",ActionOnClick);
// // ele.addEventListener(onclick,()=>{
// //     alert("heyy dont click me it hurts");
// //     });

// anonymous function is a function with no name it is used to be passed as a function argument to call it since defining a function takes space what if we want to call it only once in such case anonymous function comes into picture

// function show(){
//     console.log("helloo");
// }
// setTimeout(show,3000); //we know that time out do only once so memory wasted t ostore show()

// anonymous function 
// setTimeout(function (){
//     console.log("hyeee");
// },3000)

// anonymous function 
// setTimeout(()=>{
//     console.log("hyeee");
// },3000)

// setTimeout(show(),3000)  wrong 
// setTimeout(show,3000)  correct

// arrow function use===it uses lexical this 
// this is the arent object to the function that is x 
// let x={
//     name:"harry",
//     job:'programmer',
//     salary:2000,
//     show:function(){
//         console.log(`my name is ${this.name} and i am paid ${this.salary}`)
//     }
// }
// x.show();
// normal traditional anonymous or named function return the window object while using this as shown below
// let x={
//     name:"harry",
//     job:'programmer',
//     salary:2000,
//     show:function(){
//     setTimeout(function(){
//     console.log(this)
//     console.log(`my name is ${this.name} and i am paid ${this.salary}`)} 
//     ,2000)
//     }
// }
// x.show();

// lambda function uses lexical this 
// let x={
//     name:"harry",
//     job:'programmer',
//     salary:2000,
//     show:function(){
//         setTimeout(()=>{
//          console.log(`my name is ${this.name}`)
//         }
//         ,2000)
//         }
//     }
// x.show();

// passing funciton as argument has two ways and both with different meaning 
// setTimeout(caller(),2000);  //it means that first call the caller function and then return the value as arguement to the setTimeout 
// setTimeout(caller,2000);  // it means that function is passed as a reference so first call setTimeout the the function will be called after the delay

// correct way 
// function tamasha(){
//     console.log("function called!!!!??");
// }

// ele=document.getElementById("btn");
// ele.addEventListener('dblclick',tamasha
// )
// ele=document.getElementById("btn");
// ele.removeEventListener('dblclick',tamasha
// )


// you will se that the envent wasnot removed beacuse you are passing anonymous function which is treated as a differnet function that is passed to the addEventListener
// ele=document.getElementById("btn");
// ele.addEventListener('dblclick',()=>{
//     console.log("function called!!!!??");
// }

// ) 
// ele.removeEventListener('dblclick',()=>{
//     console.log("function called!!!!??");
// }
// )

// ele.addEventListener('dblclick',()=>{
//     console.log("function called!!")
// })
// ele.addEventListener('click',()=>{
//     console.log("function called!!")
// })
