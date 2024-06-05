const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("<h1>Home page</h1>");

  // we can send a json object if we want to
  // res.send({'someKey': 'Hello world' })
});

app.get("/hello", (req, res) => {
  res.send("<h1>Hello, World!</h1>");
});

app.get("/goodbye", (req, res) => {
	res.send("<h1>Good bye!</h1>");
});

app.listen(port, () => console.log(`Express app 01 is listening on ${port}!`));
