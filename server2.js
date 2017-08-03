const express = require("express");
const redux = require("redux");
const reducers = require("./reducers")

const store = redux.createStore(reducers.bigDaddyReduce);

store.subscribe(() => {console.log(store.getState())});

const app = express();

app.get('/', function (req, res) {
	store.dispatch({type:"INCREASE_SERVER_CALLS"});
	res.send(`This is call ${store.getState().serverCalls}!`);
})

app.listen(3000, function () {
	console.log('Example app listening on port 3000!')
})
