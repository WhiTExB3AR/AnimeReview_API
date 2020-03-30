//Define the dependences
const http = require("http");
const app = require("./app");

//Define PORT
const port = process.env.PORT || 3000;

//Create a Server
const server = http.createServer(app);

//Listen a PORT
server.listen(port);
