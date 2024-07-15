const Person = require('./models/person');

const name = 'John Doe';

Person.find({ name }, (err, data) => {
  if (err) {
    console.error(err);
  } else {
    console.log('People found:', data);
  }
});