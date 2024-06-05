// Import connect
const connect = require("connect")

// Create a 
const app = connect();

//Listen to a port
app.listen(3000);
console.log("App is running on http://localhost:3000");

// Create Middleware
function helloWorld(req, res, next) {
	res.write("Hello, World!");
	res.end();
}

function goodnightWorld(req, res, next) {
	res.write("Good night!");
	res.end();
}

function logger(req, res, next) {
	console.log("Received request to path: " + req.url);
	next();
}

function notFound(req, res, next) {
	res.write("This page does not exist!");
	res.end();
}

// Associate middleware functions with path
app.use(logger);
app.use("/hello", helloWorld);
app.use("/good-night", goodnightWorld);
app.use(notFound);

