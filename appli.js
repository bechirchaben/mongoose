// server.js
const mongoose = require('mongoose');
require('dotenv').config(); // Load environment variables
const Person = require('./models/person');
mongoose.connect(process.env.MONGO_URI, {

}).then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Connection error:", err));

// Load models or functions from other files here
const { createAndSavePerson, ...otherFunctions } = require('./personfunctions.js');

const {
  createManyPeople,
  findPeopleByName,
  addFoodById,
  updatePersonAgeByName,
} = require('./personfunctions');

// Test createManyPeople
const testPeople = [
  { name: "John", age: 25, favoriteFoods: ["Sushi", "Burger"] },
  { name: "Mary", age: 22, favoriteFoods: ["Salad", "Pasta"] },
];
createManyPeople(testPeople);

// Test findPeopleByName
findPeopleByName("John");

// Test addFoodById (replace with a real person ID from your DB)
addFoodById("some-person-id");

// Test updatePersonAgeByName
updatePersonAgeByName("John");



