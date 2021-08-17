const axios = require('axios');
const express = require('express');
const bodyParser = require('body-parser');
let app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}))

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

app.use((req, res, next) => {
	console.log('middleware');
	next();
});

app.use('/post', express.static(__dirname+'/views/form/form.html'))
app.post('/postservice',(req, res) => {
	res.send(req.body);
});

app.listen(port);
console.log('server connection'+port);