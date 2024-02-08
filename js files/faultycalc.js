var choice =4 ;  //prompt("enter your choice 1 for +,2 for - ,3 for * ,4 for /")
var a = 8;//prompt("enter var a :")
var b =2 ;// prompt("enter avr b :");
var c;
var ranNo = Math.random();
console.log(ranNo);
if (choice == 1) {
  if (ranNo < 0.1) {
    c = a - b;
    console.log("result:" + c);
  } else {
    c = a + b;
    console.log("result:" + c);
  }
} else if (choice == 2) {
  if (ranNo < 0.1) {
    c = a / b;
    console.log("result:" + c);
  } else {
    c = a - b;
    console.log("result:" + c);
  }
} else if (choice == 3) {
  if (ranNo < 0.1) {
    c = a + b;
    console.log("result:" + c);
  } else {
    c = a * b;
    console.log("result:" + c);
  }
} else if (choice == 4) {
  if (ranNo < 0.1) {
    c = a * b;
    console.log("result:" + c);
  } else {
    c = a / b;
    console.log("result:" + c);
  }
} else {
  console.log("invalid choice");
}
