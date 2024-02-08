console.log("welcome to the number guessing game");
let randNum=Math.ceil(1+Math.random()*99);
let form=document.querySelector("form");
let chances=10;
form.addEventListener('submit',function(e){
    e.preventDefault();
    if(chances!==0){
        let arr=[];
        document.querySelector('.message').innerHTML="";
        num=parseInt(document.querySelector("#num").value);
        arr[10-chances]=num;
        console.log(arr);
        if(num<=0 ||isNaN(num) ||num===null){
           document.querySelector('.message').innerHTML="Invalid Entry"; 
        }
        
        else if(num===randNum && chances>=1){
           document.querySelector('.message').innerHTML="Hurray!! You Guessed Right Number"; 
    
        }
        else if(chances>=1){
            chances--;
           document.querySelector('#chances').innerHTML=`Chances Left: ${chances}`; 
        }
        document.querySelector("#guessedNums").innerHTML+=`${num} `
    }
    else{
        document.querySelector('.message').innerHTML="Out of Chances :(";
        chances=10;
        document.querySelector("#num").value=null;
        arr=[];
    }
})