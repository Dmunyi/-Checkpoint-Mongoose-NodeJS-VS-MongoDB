// deletePerson.js
const Person = require('./models/person');

const personId = '5f6c7b9e2c71f81b744b3a';

Person.findByIdAndRemove(personId, (err, data) => {
  if (err) {
    console.error(err);
  } else {
    console.log('Person deleted successfully:', data);
  }
});