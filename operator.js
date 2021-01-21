// let name = new String('Maycon');
// let age = new Number(32);
// let date = new Date('2021-01-21');

// name.SurName = new String('Oliveira');

// console.log(name, name.SurName, age, date.__proto__);

// Delete propriedade
const person = {
    name: 'Maycon',
    age: 32
};

delete person.age;

console.log(person);