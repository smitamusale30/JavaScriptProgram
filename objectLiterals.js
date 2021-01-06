const person={
firstName:'Smita',
lastName:'Musale',
age:22,
hobbies:['music','movie','sport'],
address:{

    street:'50 main st',
    city:'Boston',
    state:'NA'
}

}
console.log(person);
console.log(person.firstName,person.lastName);
console.log(person.hobbies[1]);
console.log(person.address.city);
const {firstName, lastName,address:{city}}=person;
console.log(firstName)

person.email='smitamusale30';
console.log(person);