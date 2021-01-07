//constructor function:the 1st letter shoulde be capital in the name of constructor 
function Person(firstName,lastName,DOB) {
    this.firstName=firstName;
    this.lastName=lastName;
    this.DOB=DOB;    
}

const person1= new Person('smita','musale','30/11/1998');
console.log(person1);