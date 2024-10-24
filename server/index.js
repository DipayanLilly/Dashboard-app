const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

const USER_DATA = [];

app.post("/register", (req, res) => {
  console.log(req.body);
  USER_DATA.push(req.body);
  res.json(USER_DATA);
});

app.post("/login", (req, res) => {
  console.log(req.body);
  const { userName, password } = req.body;
  const user = USER_DATA.find((user) => user.userName === userName);
  if (user) {
    if (user.password === password) {
      res.json("Success");
    } else {
      res.json("Password is incorrect");
    }
  } else {
    res.json("No records exist");
  }
});

app.listen(3001, () => console.log("Server is running at 3001"));
