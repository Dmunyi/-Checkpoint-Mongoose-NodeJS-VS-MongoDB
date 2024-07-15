// findPersonById.js
const Person = require('./models/person');

const personId = '5f6c7b9e2c71f83f44c9d';

Person.findById(personId, (err, data) => {
  if (err) {
    console.error(err);
  } else {
    console.log('Person found:', data);
  }
});