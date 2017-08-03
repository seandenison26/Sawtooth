const express = require("express");
const redux = require("redux");

const store = redux.createStore();

const app = express();


app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.listen(3000, function () {
	console.log('Example app listening on port 3000!')
})
