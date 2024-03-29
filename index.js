const db = require('./db');
const server = require('http').createServer(async function (req, res) {

switch(req.method){
case "GET":
console.log(req.method);
switch(req.url){
case "/":
res.writeHead(200, {'Content-Type': 'text/html'});
res.write('/'); //write a response
res.end(); //end the response
break;

case "/mockjson":
res.writeHead(200, {"Content-Type": "application/json"}); 
const mockjson = await getMockJson();
res.write(mockjson); //write a response
res.end(); //end the response
break;

case "/realjson":
res.writeHead(200, {"Content-Type": "application/json"}); 
const response = await fetch("https://api.github.com/users/spornov91");
const json = await response.json()

res.write(JSON.stringify({json}, null, 3));
res.end();
break;

case "/nightmare":
const nm = require('./nightmare');
break;

case "/db/mk1":
db.mk1(req, res);
break;

case "/db/all":
db.all(req, res);
break;

};
break;

case "POST":
console.log(req.method);
break;
};
}).listen(process.env.PORT || 3000);

//ctrl+z =  SIGTSTP
process.on('SIGTERM', () => { 
console.info('SIGTERM signal received.'); 

server.close(() => { 
console.log('Http server closed.'); 
process.exit(0); 
}); 

});

async function getMockJson(){
var arr = ["txt1", "txt2"];  
var obj = { item1: "txt1", item2: "txt2" }; 
var json = JSON.stringify({ 
anObject: obj, 
anArray: arr, 
another: "txt" 
}, null, 3);
return json;
}
