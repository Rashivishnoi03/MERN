
console.log('Start');

const req = fetch('https://dummyjson.com/products/1')             // ye hai promise
const res = req.then(res => res.json())                              //  
res.then((data) => console.log(data))
 
console.log('End');