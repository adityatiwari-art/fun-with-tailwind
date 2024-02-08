console.log("This is strings tutorial");
let a = "Harry";
console.log(a[0]);
let real_name = "Harry";
let friend = "Rohan";
console.log("His name is " + real_name + " and his friends name is " + friend);
console.log(`His name is ${real_name} and his friends name is ${friend}`) ;//template literal
let b = "ShivamSh";
console.log(b.toUpperCase());
console.log(b.toLowerCase()) ;
console.log(b.length) ;
console.log(b.slice(1, 5)) ;
console.log(b.slice(1)) ;
console.log(b.replace("Sh", "77"));
console.log(b.concat(a, "Aishwariya", "Rahul", "Priya"));
console.log(b);
// strings are immutable it means in place modification is not possible it all its functions creates a new string and return the result
console.log(b.charAt(3));
console.log(b.indexOf("iv"));
let c=" code with harry "
console.log(c.trim());
// console.log(c.trim("d"));
