function randomName(){
var s1;
var s2;
var s3;
var num1=Math.round(Math.random()*10);
var num2=Math.round(Math.random()*10);
var num3=Math.round(Math.random()*10);
// console.log(num1);

if(num1>=0 && num1<=3.33){
    s1="Crazy";
}
else if(num1>=3.33 && num1<=6.66){
    s1="Amazing";
}
else if(num1>=6.66 && num1<=9.99){
    s1="Fire";
}

if(num2>=0 && num2<=3.33){
    s2="Engine";
}
else if(num2>=3.33 && num2<=6.66){
    s2="Foods";
}
else if(num2>=6.66&& num2<=9.99){
    s2="Garments";
}

if(num3>=0 && num3<=3.33){
    s3="Bros";
}
else if(num3>=3.33 && num3<=6.66){
    s3="Limited";
}
else if(num3>=6.66 && num3<=9.99){
    s3="Hub";
}
console.log(`${s1} ${s2} ${s3}`);
}
randomName();
// SAAS=software as a service
