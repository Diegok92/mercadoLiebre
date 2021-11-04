const express = require("express");
const path = require("path");
const app = express();

app.listen(process.env.PORT || 3000); // (|| o ??)
//     / === public /// /css/styles.css
app.use(express.static(path.join(__dirname, "public")));

// la / sgnifica: localhost: 3000
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "views/home.html"));
});

app.get("/register", function (req, res) {
  res.sendFile(path.join(__dirname, "views/register.html"));
});

app.get("/login", function (req, res) {
  res.sendFile(path.join(__dirname, "views/login.html"));
});
