
// console.log(msg);

// msg="else";
// function env(){
//     console.log(msg);
//     var msg = "hello";
//     console.log(msg);
//     msg = "else";
//     console.log(msg);
// }
// env();
// console.log(msg);      //not defined outside the function


// function env(){
//     for(var i=0;i<5;i++){
//         console.log('--',i);
//     }
// }
// env();
//     let msg = 'hello';

// console.log(msg);

// const msg = 'hello1123';
// console.log(msg);
// {

//     msg = 'hello';
// }
// console.log(msg);

// alert('hello');

// let age = 20;
// let name = 'rashi'
// console.log(typeof(age));
// console.log(typeof(name));

// let arr = ['a','b'];
// arr[0] = 'ab';
// console.log(arr);

// let age = 20;
// let str = "12";
// let ans = age + str;
// console.log(ans);

// let age = 20;
// let str = "12";
// let ans = age - str;
// console.log(ans);   

// let age = 20;
// let str = "12";
// let ans = age * str;
// console.log(ans);  

// let str = '12';
// let age = 20;
// let ans = parseInt(str)+age;
// console.log(ans);

// let a ='12';
// let b = 12;

// if(a==b){
//     console.log('yes');
// }
// else{
//     console.log('no');
// }

// if(a===b){
//     console.log('yes again');
// }
// else{
//     console.log('no again');
// }

// let a=['a','b','m','f'];

// let cpy=[...a];

// console.log(a ,cpy);

// if(a==cpy){
//     console.log('yes');
// }
// else{
//     console.log('no');
// }
// if(a===cpy){
//     console.log('yes again');
// }
// else{
//     console.log('no again');
// }

// const str = 'Khan';
// const usrname = `My name is: ${str}`;
// console.log(usrname);

// const str = 'Khan';
// const usrname = 'My name is: ';
// const ans = `${usrname} ${str}`;
// console.log(ans);

// const a='My';
// const b='name';
// const c='is';
// const d=':';
// const str='Rashi';

// const ans = `${a} ${b} ${c} ${d} ${str}`;
// const ans2 = 

// function print(str='nothing is here'){
//     console.log(str);
// }
// const s = 'HELLO';
// print(s);

// function sum(a,b){
//     if(a && b){
//         console.log(a+b);
//     }
//     else{
//         console.log(a);
//     }
// }
// sum(10);

// let a='';
// console.log();

//function declaration
// function print(){
//     console.log('--');
// }

// //function assignment(name)
// let a= function print(){
//     console.log('--');
// }

// //function assignment(anonymous)
// let b=function(){

// }
// //arrow function assignment
// let c = () => {
//     console.log('--');
// }
// print();
// a();
// b(); 
// c();   

// let a=2;

// switch(a){
//     case 1:{
//         console.log('one');
//         break;
//     }
//     case 2:{
//         console.log('two');
//         break;
//     }
//     case 3:{
//         console.log('three');
//         break;
//     }
//     default:{
//         console.log('not 1,2,3');
//     }
// }

    // const obj = new Object();
    // obj[1]='one';
    // obj['name']='rashi';
    // obj[12]='twelve';
    // console.log(obj);

    // const obj = {
    //     1:'one',
    //     'name':'Rashi',
    //     12:'twelve',
    // };

    // const fulName1 = obj.firstName + ' ' + obj.lastName;
    // const fulName2 = ${obj.firstName} $(obj.lastName);
    // console.log(fulName1);
    // console.log(fulName2);

    // const x = prompt('please enter ur name');
    // console.log(x);

    const obj = {
        'firstName': 'Rashi',
        'lastName': 'Vishnoi',
        'age': 23,
        'address': 'Delhi',

    };
    const x = prompt('please enter ur name');
    console.log(obj[x]);