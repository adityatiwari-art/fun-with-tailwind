function randomNumberGenerator(){
    // random numbers between 0 to 255
    // int value of (a+r*(a-b)) where r is any random number here a=0,b=255 

    let val1=Math.ceil(Math.random()*255);
    let val2=Math.ceil(Math.random()*255);
    let val3=Math.ceil(Math.random()*255);
    return `rgb(${val1},${val2},${val3})`
}
Array.from(document.querySelector(".container").children).forEach(e => {
    e.style.backgroundColor=randomNumberGenerator();
});

// all html collection doesnot support array methods hence the children is converted to array before 
