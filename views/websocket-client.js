const WS = new WebSocket('ws://localhost:3232');
WS.onmessage = (payload)=>{
    displayMessages(payload.data);
};
WS.onopen = ()=> {
    displayTitle('CONNECTED TO SERVER');
};
WS.onclose = ()=> {
    displayTitle('DISCONNECTED TO SERVER');
};
function displayTitle(title){
    $('.message-info').html(title);
}
function displayMessages(message){
    $('div.message-info').append(`<h2>`+message+`</h2>`);
}

$('#send-message').click(function(){
    WS.send($('#sendmessage').serialize());
   // WS.send($('#message').val());
});


// document.forms[0].onsubmit = ()=>{

//   let input = document.getElementById('message');

//   // console.log(input.value);

//     WS.send(input.value);


// };