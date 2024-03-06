const {default: axios} = require("axios");
const express = require("express");
const app = express();

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

app.get("/", (req, res) => {
  res.send("Esta es la demo de Docker");
});

app.get("/users", async (req, res) => {
  const users = await axios.get("https://jsonplaceholder.typicode.com/users");

  const usersData = users.data.map((user) => {
    return {
      name: user.name,
      email: user.email,
    };
  });

  res.json(usersData);
});
