// array=[2,4,"hello",56,23.33,90]
// console.log(array[1])
// array[3]="world"
// console.log(array)
// console.log(array.toString())
// str="hello naughty"
// array2=Array.from(str)
// console.log(array2)
// // console.log(array.splice(3,2))   //remove 2 from index 3 and return the array of removed
// // console.log(array)
// console.log(array.splice(3,2,1999))  // remove 2 after index 3 and add 1999 in between and return the removed one array 
// console.log(array)
// array3=[2,3,4,5]
// array4=[4,5,6,7]
// // console.log(array3.join("and"))
// console.log(array3.concat(array4))  //concat not changes the actual one
// console.log(array.length)

// // arrays are objects *****************************************************
// console.log(array.pop())   //removes from last
// console.log(array)
// array.shift()              //removes from front
// console.log(array)
// array.unshift(345)         //adds element to the starting 
// console.log(array)
// array.push(101)
// console.log(array)         //adds to the last
// // push-pop shift-unshift 
// delete array[0]   //deletes item and replace it by undefined lenght remains the same
// console.log(array)
// array.sort();
// console.log(array)
// array5=[1,6,2,3,8]
// // array5.sort()
// // console.log(array5)
// console.log(array5.slice(2,4)) 
// array2.reverse()
// console.log(array2)

// methods in js arrays
a=[1,2,1,2,1,3]
prod=1
a.forEach((val,ind,arr) => {   //it is a method with the declaration shown having 3 parameters as value index array 
    prod=val*prod
    console.log(val,ind,arr)
});
console.log(prod)

// map() method return an array by computing on the given array 
newarray=a.map(
    (val,index,arr)=>{
        return val**2
    }
)
console.log(newarray)

// filter() method is used to filter array elemnts based on given condition 
const greaterthan2 = (e) => {
    if(e>2){
        return e
    }
}
console.log(a)
newarr2=newarray.filter(greaterthan2)
// console.log(newarray.filter((e) => {  body of method declared here
//     if(e>2){
//         return e
//     }
// }))
console.log(newarr2)

val=newarray.reduce((a,b)=>{
    return a*b
})
console.log(val)  //it reduces all the array to some value as defined

// A callback function is a function passed into another function as an argument, 
// which is then invoked inside the outer function to complete some kind of routine or action.

// Array length
// Array toString()
// Array at()
// Array join()
// Array pop()
// Array push()
// See Also:
// Search Methods
// Sort Methods
// Iteration Methods	Array shift()
// Array unshift()
// Array delete()
// Array concat()
// Array copyWithin()
// Array flat()
// Array splice()
// Array toSpliced()
// Array slice()

// console.log(8.5*4-8.2-8.24-8.98)
// // 25.42+x/4=8.8