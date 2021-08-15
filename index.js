const axios = require('axios');
const express = require('express');

let app = express();
const port = process.env.PORT || 9999;

app.get('/',(req, res) => {
	res.send(`<h1> Hello World</h1>`);
});
app.get('/about',(req, res) => {
	res.send(`<h1> Hello About this Page</h1>`);
});
app.get('/service',(req, res) => {
	res.send(`<h1> Hello Service this page</h1>`);
});

app.get('/service/:id',(req, res) => {
	res.send(`<h1> Hello Service this page ${req.params.id}</h1>`);
});

app.get('/service/:id/page/:page',(req, res) => {
	res.send(`<h1> Hello Service this page ${req.params.id} - ${req.params.page}</h1>`);
});


app.listen(port);
console.log('server connection'+port);