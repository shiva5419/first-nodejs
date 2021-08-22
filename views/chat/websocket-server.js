const WebSocketServer = require('ws').Server;
const WSS = new WebSocketServer({port: 3232});
WSS.on('connection', (ws)=>{
    ws.on('message', (message)=>{
        var message = message.toString('binary');
        if(message === 'close'){
            ws.close();
        }else {
            WSS.clients.forEach((client)=>{
                client.send(message);
            });
        }
        //console.log(message.toString('binary'));
    });
    console.log('We are connected');
});
