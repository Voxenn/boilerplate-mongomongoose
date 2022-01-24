require('dotenv').config();

let express = require('express');
let mongoose = require('mongoose');
let app = express();
const { Schema } = mongoose;
const personSchema = new Schema({
    name: {type: String, required: true},
    age: Number,
    favoriteFoods: [String]
});
mongoose.connect(process.env.MONGU_URI, { useNewUrlParser: true, useUnifiedTopology: true});
let Person = mongoose.model('Person', personSchema);

const createAndSavePerson = (done) => {
  let person = new Person({name: 'Vernon',age: 33,favoriteFoods: ['Japanese', 'Korean', 'Thai']});
  person.save((err, data) => {
    if(err) return console.err();
        done(null, data);
  });
};

let arrayOfPeople = [
                        {name: 'Vernon',age: 33,favoriteFoods: ['Japanese', 'Korean', 'Thai']},
                        {name: 'Claudette',age: 70,favoriteFoods: ['Jamaican', 'Italian']},
                        {name: 'Maria',age: 51,favoriteFoods: ['British', 'Alkaline']}
                    ];

const createManyPeople = (arrayOfPeople, done) => {

    Person.create(arrayOfPeople, (err, people) => {
        if(err) return console.err();
            done(null, people);
  });
};

const findPeopleByName = (personName, done) => {
    Person.find({name: personName}, (err, person) => {
        if(err) console.err();
            done(null, person);
    });
};

const findOneByFood = (food, done) => {
    Person.findOne({favoriteFoods: food}, (err, person) => {
        if(err) console.err();
            done(null, person);
    });
};

const findPersonById = (personId, done) => {
    Person.findById(personId, (err, person) => {
        if(err) console.err();
            done(null, person);
    });
};

const findEditThenSave = (personId, done) => {
  const foodToAdd = "hamburger";
  Person.update(personId, favoriteFoods.push(foodToAdd), (err, data) => {
      if(err) console.err();
          done(null, data);
  });
};

const findAndUpdate = (personName, done) => {
  const ageToSet = 20;

  done(null /*, data*/);
};

const removeById = (personId, done) => {
  done(null /*, data*/);
};

const removeManyPeople = (done) => {
  const nameToRemove = "Mary";

  done(null /*, data*/);
};

const queryChain = (done) => {
  const foodToSearch = "burrito";

  done(null /*, data*/);
};

/** **Well Done !!**
/* You completed these challenges, let's go celebrate !
 */

//----- **DO NOT EDIT BELOW THIS LINE** ----------------------------------

exports.PersonModel = Person;
exports.createAndSavePerson = createAndSavePerson;
exports.findPeopleByName = findPeopleByName;
exports.findOneByFood = findOneByFood;
exports.findPersonById = findPersonById;
exports.findEditThenSave = findEditThenSave;
exports.findAndUpdate = findAndUpdate;
exports.createManyPeople = createManyPeople;
exports.removeById = removeById;
exports.removeManyPeople = removeManyPeople;
exports.queryChain = queryChain;
