// deleteManyPeople.js
const Person = require('./models/person');

const name = 'Mary';

Person.remove({ name }, (err, data) => {
  if (err) {
    console.error(err);
  } else {
    console.log('People deleted successfully:', data);
  }
});