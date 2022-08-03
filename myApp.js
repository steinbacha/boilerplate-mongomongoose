require('dotenv').config();
require('mongodb');
const { setInternalBufferSize } = require('bson');
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });


let personSchema = new mongoose.Schema({
  name: {type: String},
  age: {type: Number},
  favoriteFoods: {type: Array}
});

const Person = mongoose.model("Person", personSchema);  

const createAndSavePerson = (done) => {
  let adam = new Person({name: 'Adam', age: 28, favoriteFoods: ['sushi']});
  adam.save((error, data) => {
    if(error) return console.log(error);
    done(null, data);  
  });
};

const createManyPeople = (arrayOfPeople, done) => {
  Person.create(arrayOfPeople, (error, people) => {
    if(error) return console.log(error);
    done(null, people);
  });
};

const findPeopleByName = (personName, done) => {
  Person.find({name: personName}, (error, data) => {
    if(error) return console.log(error);
    done(null, data);
  });
};

//test committ

const findOneByFood = (food, done) => {
  Person.findOne({favoriteFoods: food}, (error, data) => {
    if(error) return console.log(error);
    done(null, data);
});
};

const findPersonById = (personId, done) => {
  Person.findById({_id: personId}, (error, data) => {
    if(error) return console.log(error);
    done(null, data);
  });
};

const findEditThenSave = (personId, done) => {
  Person.findById({_id: personId}, (error, data) => {
    const foodToAdd = "hamburger";
    Person.favoriteFoods.push(foodToAdd);
    Person.save(error)
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
