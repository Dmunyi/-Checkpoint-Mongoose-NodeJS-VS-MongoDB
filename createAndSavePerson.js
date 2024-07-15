const Person = require('../models/Person');

const Person = new Person({
  name: 'John Doe',
  age: 30,
  favoriteFoods: ['pizza', 'sushi']
});

person.save((err, data) => {
  if (err) {
    console.error(err);
  } else {
    console.log('Person saved successfully:', data);
  }
});