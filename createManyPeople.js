const Person = require('./models/person');

const arrayOfPeople = [
  { name: 'Jane Doe', age: 25, favoriteFoods: ['tacos', 'burritos'] },
  { name: 'Bob Smith', age: 40, favoriteFoods: ['steak', 'lobster'] },
  { name: 'Alice Johnson', age: 28, favoriteFoods: ['salad', 'soup'] }
];

Person.create(arrayOfPeople, (err, data) => {
  if (err) {
    console.error(err);
  } else {
    console.log('People saved successfully:', data);
  }
});