//class
class Employee
{
    constructor(firstName,lastName,DOB)
    {
        this.firstName=firstName;
        this.lastName=lastName;
        this.DOB=DOB;
    }
}

Employee.prototype.getFullName=function ()
{
    return `${this.firstName} ${this.lastName}`;
}

const emp= new Employee('smita','musale','30-11-1998');
console.log(emp);
console.log(emp.getFullName());