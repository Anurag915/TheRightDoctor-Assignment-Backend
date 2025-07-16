const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");
const Person = require("./models/Person");

const app = express();

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/persondb", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.set("view engine", "ejs");

// ROUTES

// GET /person - List of people
app.get("/person", async (req, res) => {
  const people = await Person.find();
  res.render("index", { people });
});

// GET /person/new - Show form to create a person
app.get("/person/new", (req, res) => {
  res.render("new");
});

// POST /person - Add new person
app.post("/person", async (req, res) => {
  await Person.create(req.body);
  res.redirect("/person");
});

// GET /person/:id/edit - Show edit form
app.get("/person/:id/edit", async (req, res) => {
  const person = await Person.findById(req.params.id);
  res.render("edit", { person });
});

// PUT /person/:id - Update person
app.put("/person/:id", async (req, res) => {
  await Person.findByIdAndUpdate(req.params.id, req.body);
  res.redirect("/person");
});

// GET /person/:id/delete - Show delete confirmation
app.get("/person/:id/delete", async (req, res) => {
  const person = await Person.findById(req.params.id);
  res.render("delete", { person });
});

// DELETE /person/:id - Delete person
app.delete("/person/:id", async (req, res) => {
  await Person.findByIdAndDelete(req.params.id);
  res.redirect("/person");
});

// Start server
app.listen(3000, () => {
  console.log("Server is running at http://localhost:3000");
});
// Redirect root URL to /person
app.get("/", (req, res) => {
  res.redirect("/person");
});
