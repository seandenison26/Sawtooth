const express = require("express");
const redux = require("redux");
const reducers = require("./reducers")

const store = redux.createStore(reducers.bigDaddyReduce);

store.subscribe((state)=>{console.log(state)});

store.dispatch({type:""});

const app = express();

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.listen(3000, function () {
	console.log('Example app listening on port 3000!')
})
