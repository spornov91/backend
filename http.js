const path = require('path') 
const fs = require('fs') 

const option = { 
key: fs.readFileSync(path.resolve(__dirname, 'ssl/server.key')), 
cert: fs.readFileSync(path.resolve(__dirname, 'ssl/server.crt')) 
}

const host = "127.0.0.1";
const port = "2012";
console.log("https://"+host+":"+port);
const server = require('https').createServer(option, function (req, res) {

switch(req.method){
case "GET":
console.log(req.method);
switch(req.url){
case "/":
res.writeHead(200, {'Content-Type': 'text/html'});
res.write('/'); //write a response
res.end(); //end the response
break;
case "/json":
res.writeHead(200, {"Content-Type": "application/json"}); 
var otherArray = ["item1", "item2"];  
var otherObject = { item1: "item1val", item2: "item2val" }; 
var json = JSON.stringify({ 
anObject: otherObject, 
anArray: otherArray, 
another: "item" 
});
res.write(json); //write a response
res.end(); //end the response
break;
};
break;
case "POST":
console.log(req.method);
break;
};

});
server.listen(port, host);

//ctrl+z =  SIGTSTP
process.on('SIGTERM', () => { 
console.info('SIGTERM signal received.'); 
server.close(() => { 
console.log('Http server closed.'); 
process.exit(0); 
}); 
});