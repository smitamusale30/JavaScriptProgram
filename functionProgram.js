//normal Function
function addition(num1,num2) {

    console.log('Addition is: '+(num1+num2));
    
}
addition(5,4)

//function with return statement
function addition1(num1,num2) {

    return num1+num2;
    
}
console.log(addition1(5,4));

//Arrow function introduse ES6 or ES2015
const addition2 =(num1=1,num2=1)=> {

    console.log('Addition is: '+(num1+num2));
    
}
addition2(5,4)

//Arrow function 2
const addition3 =(num1=1,num2=1)=>  (num1+num2);
console.log(addition3(5,4));