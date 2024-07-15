// updatePersonByName.js
const Person = require('./models/person');

const personName = 'John Doe';

Person.findOneAndUpdate(
  { name: personName },
  { age: 20 },
  { new: true },
  (err, data) => {
    if (err) {
      console.error(err);
    } else {
      console.log('Person updated successfully:', data);
    }
  }
);