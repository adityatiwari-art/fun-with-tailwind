// promises are object that tells does the async operation resolved or not(so why not) in future hence async produces a single value(it will not predict)
// user defined promise (user defined rejectio and resolved task)
// async --setTimeOut,fetch,
const promiseOne = new Promise(function (resolve, reject) {
    setTimeout(() => {
        console.log("this is inside our promise settimeout");
        resolve();
        // reject();  //self defined rejection 
    }, 1000);
});
promiseOne.then(()=>console.log("promise resolved")).catch(()=>console.log("E:something went wrong"));
console.log("this is outside promise")


// why not if else?
// because if and else exucutes synchronously but promise executes async its like checking after the timestamp

// first parameter is resolve 2nd is reject can have any name 
// new Promise(function(resolve,reject){
//     let error=true;
//     setTimeout(() => {
//         if(error===false){
//             resolve();
//         }
//         else{
//             reject();
//         }
//     }, 1000);
// }).then(()=>console.log("resolved")).catch(()=>console.log("got an error in promiseTwo"));

// promiseThree gives how to pass value 
const promiseThree=new Promise(function(resolve,reject){
    setTimeout(() => {
        let error=false;
        if(error===false){
            resolve( {username:"aditya",DomName:"chai@example.com"});
        }
        else{
            reject(error);
        }
    }, 1000);
})
promiseThree
.then((user)=>console.log(user.username))
.catch((err)=>console.log(err));

// it one then is returning something then it must require other to receive it 
const pormiseFour=new Promise((receive,reject)=>{
    setTimeout(() => {
        receive({username:"aditya8269",password:"8269XXXXXX"});
    }, 1000);
    console.log("im am after setTimeout waiting for my introduction");  //tu to gaya bete
}).then(function(userdet){
    return userdet.username;
}).then(us=>console.log("username returned by promiseFour is :" + us)).catch(()=>console.log("error in promiseFour"));

// finally() always  executes
new Promise((receive,reject)=>{
    setTimeout(() => {
        receive();
    }, 1000);
}).then(()=>console.log("line 58 promise succesfully executed")).finally(()=>console.log("im executed FINALLY :)"))
console.log("i am the boss"); //will execute first



// async/await another way to handle promises
const promiseFive=new Promise((receive,reject)=>{
    let error=false;
    setTimeout(() => {
        if(error===false)
        receive({username:"aaditya",password:"@2022"});
    else
        reject("error occured")
    }, 1000);
});
// not using then or catch using asyn function which runs async means whenb the promise will run it will be called
async function getResponseFive(){
    try{
        // when receive called 
        const response= await promiseFive;  //getting response from five
        console.log(response.username);
    }
    catch(E){
        //when reject called
        console.log(E);
    }
}
getResponseFive();
// if the error===true then it will cause problem since no catcher hence requires try catch

// comment above code to execute below since below code is not in setTimeout so executes async 0 time 
// fetch API has fetch() method that returns a promise with the data 
// fetch("https://api.github.com/users")
// .then((response)=>{
//     return (response.json());  //.json() used to convert it into object
// })
// .then((data)=>console.log(data))
// .catch(()=>console.log("error"));

// using await same thing done 
// await doesnot block code it async the function till the wait 
// async function fetchingAPIData(){
//     try{
//         let response= await fetch("https://api.github.com/users");
//         let data= await response.json();
//         console.log(data);
//     }
//     catch(error){
//         console.log(error);
//     }
// }
// fetchingAPIData();

// response.json()   parse from response object to json object 
// response.text()      parse from response object to json object 
// JSON.parse()  string to json object 