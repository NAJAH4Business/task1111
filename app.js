const fs = require('fs');

// 1) create object person
const person = {
  fname: 'ahmed',
  lname: 'hossam',
  age: 20,
  city: 'alex'
};

// 2) change obj to Json
const personJson = JSON.stringify(person);

// 3) store in file
fs.writeFileSync('person.json', personJson);

// 4) read file (json)
const fileData = fs.readFileSync('person.json');

// 5) Convert to obj
const personObj = JSON.parse(fileData);

// 6) Update data to ( adel ahmed , 40 , cairo)
personObj.fname = 'adel';
personObj.lname = 'ahmed';
personObj.age = 40;
personObj.city = 'cairo';

// 7) convert obj to Json
const updatedPersonJson = JSON.stringify(personObj);

// 8) store in file (writeFileSync)
fs.writeFileSync('updatedPerson.json', updatedPersonJson);
