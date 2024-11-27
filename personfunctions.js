// personFunctions.js
const Person = require('./models/person');

// Create and Save a Record
const createAndSavePerson = async () => {
  try {
    const person = new Person({
      name: "Alice",
      age: 30,
      favoriteFoods: ["Pizza", "Ice Cream"],
    });
    const data = await person.save();
    console.log("Saved person:", data);
  } catch (err) {
    console.error(err);
  }
};

// Create Multiple People
const createManyPeople = async (arrayOfPeople) => {
  try {
    const data = await Person.create(arrayOfPeople);
    console.log("Inserted people:", data);
  } catch (err) {
    console.error(err);
  }
};

// Find People by Name
const findPeopleByName = async (name) => {
  try {
    const data = await Person.find({ name });
    console.log("Found people:", data);
  } catch (err) {
    console.error(err);
  }
};

// Find One Person by Favorite Food
const findOneByFood = async (food) => {
  try {
    const data = await Person.findOne({ favoriteFoods: food });
    console.log("Found person:", data);
  } catch (err) {
    console.error(err);
  }
};

// Find a Person by ID
const findPersonById = async (personId) => {
  try {
    const data = await Person.findById(personId);
    console.log("Found by ID:", data);
  } catch (err) {
    console.error(err);
  }
};

// Update Person's Favorite Foods
const addFoodById = async (personId) => {
  try {
    const person = await Person.findById(personId);
    person.favoriteFoods.push("Hamburger");
    const updatedPerson = await person.save();
    console.log("Updated person:", updatedPerson);
  } catch (err) {
    console.error(err);
  }
};

// Update a Person's Age by Name
const updatePersonAgeByName = async (personName) => {
  try {
    const data = await Person.findOneAndUpdate(
      { name: personName },
      { age: 20 },
      { new: true } // Return updated document
    );
    console.log("Updated person:", data);
  } catch (err) {
    console.error(err);
  }
};

// Delete a Person by ID
const deletePersonById = async (personId) => {
  try {
    const data = await Person.findByIdAndRemove(personId);
    console.log("Deleted person:", data);
  } catch (err) {
    console.error(err);
  }
};

// Delete All People with Name
const deletePeopleByName = async (name) => {
  try {
    const result = await Person.deleteMany({ name });
    console.log("Deleted people:", result);
  } catch (err) {
    console.error(err);
  }
};

// Chain Search Query Helpers
const findPeopleWhoLikeBurritos = async () => {
  try {
    const data = await Person.find({ favoriteFoods: "Burritos" })
      .sort("name")
      .limit(2)
      .select("-age")
      .exec();
    console.log("Query result:", data);
  } catch (err) {
    console.error(err);
  }
};

// Export all functions
module.exports = {
  createAndSavePerson,
  createManyPeople,
  findPeopleByName,
  findOneByFood,
  findPersonById,
  addFoodById,
  updatePersonAgeByName,
  deletePersonById,
  deletePeopleByName,
  findPeopleWhoLikeBurritos,
};
