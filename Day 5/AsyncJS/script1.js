<<<<<<< HEAD

console.log('Start');

const req = fetch('https://dummyjson.com/products/1')             // ye hai promise
const res = req.then(res => res.json())                              //  
res.then((data) => console.log(data))
 
=======

console.log('Start');

const req = fetch('https://dummyjson.com/products/1')             // ye hai promise
const res = req.then(res => res.json())                              //  
res.then((data) => console.log(data))
 
>>>>>>> 337dbe4cde9fe131f11d934f72fd889a2217b15c
console.log('End');