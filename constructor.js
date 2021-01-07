//2 ways of Function :
//1stconstructor function:the 1st letter shoulde be capital in the name of constructor 
function Person(firstName,lastName,DOB) 
{
    this.firstName=firstName;
    this.lastName=lastName;
    this.DOB=DOB;
    this.getBirthYear = function()
    {
        return this.DOB.getFullYear();
    }  ;

    this.getFullName = function ()
    {
        return `${this.firstName} ${this.lastName}`;
    };
}

const person1= new Person(`smita`,`musale`,`30/11/1998`);
console.log(person1);
console.log(person1.getBirthYear);
console.log(person1.getFullName);


//2nd prototype 

function Person2(firstName,lastName,DOB)
{
    this.firstName=firstName;
    this.lastName=lastName;
    this.DOB=DOB;
}
Person2.prototype.getBirthYear = function() 
{
    return this.DOB.getFullYear();
} 

Person2.prototype.getFullName=function ()
{
    return `${this.firstName} ${this.lastName}`;
}

const person2= new Person2('smita','musale','30/11/1998');
console.log(person2);
console.log(person2.getBirthYear);
console.log(person2.getFullName);