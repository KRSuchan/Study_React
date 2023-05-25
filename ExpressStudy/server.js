const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const multer = require("multer");
const form_data = multer();
const hostname = "127.0.0.1";
const port = 3000;

//app.get(["/", "/hello"]

app.set("view engine", "pug");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(form_data.array());

app.use(express.json()); // ? router, MiddleWare를 사용한다.

app.get("/", function (req, res) {
  return res.send("<h1>hello world</h1>");
});

app.listen(port, hostname, function () {
  console.log(`Server running at http://${hostname}:${port}/`);
});

app.get("/api/members/:id", function (req, res) {
  console.log(req.path);
  return res.send(`memberId:${req.params.id}`);
});

app.get("/api/members", (req, res) => {
  const name = req.query.name;
  const age = req.query.age;
  if (name != null && age != null)
    return res.send("name:" + name + ", " + "age:" + age);
});

app.post("/api/members", (req, res) => {
  const { name, age } = req.body;
  if (name != null && age != null)
    return res.send("name:" + name + ", " + "age:" + age);
});

app.get("/login", function (req, res) {
  return res.render("login");
});

app.post("/login", (req, res) => {
  const { name, age } = req.body;
  if (name != null && age != null)
    return res.send("name:" + name + ", " + "age:" + age);
  else {
    res.status(400).send("bad request");
  }
});
