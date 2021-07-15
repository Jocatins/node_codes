const express = require("express");
//morgan middleware
const morgan = require("morgan");
const mongoose = require("mongoose");
//creating express app
const app = express();

const dbURI =
  "mongodb+srv://jocatins:sphinx007@sphinxdb.gwd8s.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
//connect to mongo
mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => console.log("successful connection to db"))
  .catch((err) => console.log(err));

//register view engine
app.set("view engine", "ejs");

//listen for requests
app.listen(3000);

// middleware and static files
app.use(express.static("public"));
app.use(morgan("dev"));

app.get("/", (req, res) => {
  const blogs = [
    {
      title: "Yoshi finds eggs",
      snippet: "Lorem ipsum dolor sit amet consectetur",
    },
    {
      title: "Mario finds stars",
      snippet: "Lorem ipsum dolor sit amet consectetur",
    },
    {
      title: "How to defeat bowser",
      snippet: "Lorem ipsum dolor sit amet consectetur",
    },
  ];
  res.render("index", { titans: "Joca", blogs });
});

app.get("/about", (req, res) => {
  res.render("about", { titans: "About" });
});
app.get("/blogs/create", (req, res) => {
  res.render("create", { titans: "Create a new titan" });
});

//404 page
app.use((req, res) => {
  res.status(404).render("404", { titans: "404" });
});
