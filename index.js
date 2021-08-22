const axios = require('axios');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

let app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}))

const port = process.env.PORT || 9998;
/*
app.use('/', express.static(__dirname+'/views/index.html'), function(req, res) {
    //res.render('index.html');
});*/

app.use(express.static('views'))

app.get('/', function (req, res) {
   // res.sendFile(__dirname + '/views/index.html')
    res.render(__dirname + '/views/index.html', { title: 'Hey', message: 'Hello there!' });

})

const WebSocketServer = require('ws').Server;
const http = require('http');
const webSocketsServer = http.createServer();

const WSS = new WebSocketServer({port: 3232, httpServer: webSocketsServer});

WSS.on('connection', (ws)=>{
    ws.on('message', (message)=>{
        var message = message.toString('binary');
        console.log(message);
        if(message === 'close'){
            ws.close();
        }else {
            WSS.clients.forEach((client)=>{

                client.send(message);
            });
        }
    });
    console.log('We are connected');
});











/*app.get('/',(req, res) => {
	res.send(`<h1> Hello World</h1>`);
});*/
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

var server = app.listen(port, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})
/*
app.listen(port);
console.log('server connection'+port);*/