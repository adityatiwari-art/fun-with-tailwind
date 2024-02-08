console.log("hello")
let e=document.querySelector('#head1')
// const clearME=setTimeout(() => { 
//     e.innerHTML="this is new Heading";
// }, 3000);
// document.querySelector('#Stop').addEventListener('click',()=>{
// clearTimeout(clearME);
const clearME=setInterval((str) => { 
    e.innerHTML=`your name is ${str}`;
}, 1000,Math.random());
document.querySelector('#Stop').addEventListener('click',()=>{
clearInterval(clearME);
})

// Promise.all takes a list or iterable of promises and return when all promises are fullfilled
// async function fetchingAPIData(){
//     try{
//         let response=await fetch("https://api.github.com/users");
//         let data= await response.json();
//         console.log(data);
//     }
//     catch(error){
//         console.log(error);
//     }
// }
// fetchingAPIData();
