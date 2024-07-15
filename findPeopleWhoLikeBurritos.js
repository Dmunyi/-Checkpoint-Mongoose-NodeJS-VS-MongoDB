// findPeopleWhoLikeBurritos.js
const Person = require('./models/person');

Person.find({ favoriteFoods: 'burritos' })
  .sort({ name: 1 })
  .limit(2)
  .select('-age')
  .exec((err, data) => {
    if (err) {
      console.error(err);
    } else {
      console.log('People found:', data);
    }
  });