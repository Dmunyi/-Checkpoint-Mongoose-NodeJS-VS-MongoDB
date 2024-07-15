// findOnePerson.js
const Person = require('./models/person');

const food = 'pizza';

Person.findOne({ favoriteFoods: food }, (err, data) => {
  if (err) {
    console.error(err);
  } else {
    console.log('Person found:', data);
  }
});