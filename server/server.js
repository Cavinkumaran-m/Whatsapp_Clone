const express = require("express");
const app = express();
const crypt = require("bcrypt");
app.use(express.json());

var users = [];

app.get("/users", (req, res) => {
  res.json(users);
});

app.post("/users", async (req, res) => {
  try {
    const salt = await crypt.genSalt();
    const hashedPassword = await crypt.hash(req.body.password, salt);
    //or
    // hashed = await crypt.hash(password, 10)
    // instead of two lines
    const data = { name: req.body.name, password: hashedPassword };
    users.push(data);
    res.status(201).send();
  } catch {
    res.status(500).send();
  }
});

app.post("/users/login", async (req, res) => {
  const user = users.find((user) => {
    return req.body.name === user.name;
  });
  if (user == null) {
    res.status(401).send("No such User");
  }
  try {
    if (await crypt.compare(req.body.password, user.password)) {
      res.send("Successfully logged in");
    } else {
      res.send("Wrong Password");
    }
  } catch {
    res.status(500).send("No such User");
  }
});

app.listen(3000);
