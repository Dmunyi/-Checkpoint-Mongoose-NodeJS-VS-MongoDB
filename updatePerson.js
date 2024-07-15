// updatePerson.js
const Person = require('./models/person');

const personId = '5f6c7b9e2c71f83f44c9d';

Person.findById(personId, (err, person) => {
  if (err) {
    console.error(err);
  } else {
    person.favoriteFoods.push('hamburger');
    person.markModified('favoriteFoods');
    person.save((err, data) => {
      if (err) {
        console.error(err);
      } else {
        console.log('Person updated successfully:', data);
      }
    });
  }
});