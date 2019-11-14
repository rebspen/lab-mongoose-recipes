const mongoose = require('mongoose');

// Import Recipe model
const Recipe = require('./models/Recipe');

// Import data
const data = require('./data');

const MONGODB_URI = 'mongodb://localhost/recipeApp';

// Connection to the database "recipeApp"
mongoose
  .connect(MONGODB_URI, { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to Mongo!')
  })
  .catch(err => {
    console.error('Error connecting to mongo', err);
  })
  .finally(() => {
    mongoose.connection.close();
  })

  // Recipe.deleteOne(
  //   { title: "Carrot Cake"}) 
  //   .then(() => console.log("gone"))

  
