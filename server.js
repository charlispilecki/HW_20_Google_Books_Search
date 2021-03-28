const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const mongoose = require("mongoose");
const cors = require("cors")

const Book = require("./bookModel.js");

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(cors())

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googlebooks", { 
  useNewUrlParser: true, 
  useCreateIndex: true ,
  useUnifiedTopology: true
});

// Define API routes here
app.get("/api/books", (req, res) => {
  Book.find({})
    .then(dbBook => {
      res.json(dbBook);
    })
    .catch(err => {
      res.json(err);
    });
});

app.post("/api/books", ({ body }, res) => {
  Book.create(body)
    .then(dbBook => {
      res.json(dbBook);
    })
    .catch(err => {
      res.json(err);
    });
});

app.delete("/api/books/:title", (req, res) => {
  Book.deleteOne({ title: req.params.title })
    .then(dbBook => {
      res.json(dbBook);
    })
    .catch(err => {
      res.json(err);
    });
});

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
