const express = require('express'), app = express(), PORT = 3001;

app.use(express.static(__dirname));

app.get('/', (req,res) => {
	res.sendFile('./index.html');
});

app.listen(PORT,() => {
	console.log(`Client listening on ${PORT}`);
});

