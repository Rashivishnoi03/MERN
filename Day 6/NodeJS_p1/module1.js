const sum = function (a,b){
    console.log(a+b);
}
const mul = function (a,b){
    console.log(a*b);
}



module.exports = {
    fn1:sum,
    fn2:mul,
};

const sum = function sum(a, b) {
    console.log(a + b);
  };
  
  // sum(20, 30);
  
  // module.exports = sum;
  
  const mul = function (a, b) {
    console.log(a * b);
  };
  
  // module.exports = {
  //   fn1: sum,
  //   fn2: mul,
  // };
  const lame = "rashi";
  module.exports = {
    sum,
    mul,
    lame,
  };