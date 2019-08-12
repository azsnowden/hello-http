const http = require("http");

function handleRequestAndResponse(req, res){
console.log(req.url);
const timestamp = new Date();
console.log("Received a request!");
res.end(`${timestamp}`);

}

//what's a server?
//a server is a piece of code that does something useful for you
//usually stores data and often manipulated data

const server = http.createServer(handleRequestAndResponse);
//what is 3000
server.listen(3000)