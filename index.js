const path = require('path') 
const fs = require('fs') 
/*
const option = { 
key: fs.readFileSync(path.resolve(__dirname, 'ssl/server.key')), 
cert: fs.readFileSync(path.resolve(__dirname, 'ssl/server.crt')) 
}
*/
const host = "now";
const port = "3000";
console.log("https://"+host+":"+port);
const server = require('https').createServer(async function (req, res) {

switch(req.method){
case "GET":
console.log(req.method);
switch(req.url){
case "/":
res.writeHead(200, {'Content-Type': 'text/html'});
res.write('/'); //write a response
res.end(); //end the response
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

res.write(JSON.stringify(json));
res.end();
break;
getRealJson()
};
break;
case "POST":
console.log(req.method);
break;
};

});
server.listen(port);

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
