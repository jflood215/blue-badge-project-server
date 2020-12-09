require("dotenv").config();
let express = require("express"); // import express
let app = express(); // create instance of express
let sequelize = require("./db");
let user = require("./controllers/usercontroller");
const favorite = require("./controllers/favoritescontroller");
const calorie = require("./controllers/caloriecontroller");
const weight = require("./controllers/weightcontroller");

sequelize.sync(); // sync models with database
app.use(require("./middleware/headers")); // CORS!
app.use(express.json()); // converts json object to object - must go above routes

app.use("/user", user); // signup and login endpoints
app.use("/favorite", favorite); // Full CRUD favorite recipes
app.use("/calorie", calorie); // Full CRUD calorie & macro calculator
app.use("/weight", weight); //Full CRUD weight tracker

app.listen(process.env.PORT, function () {
  console.log("App is connected");
});


