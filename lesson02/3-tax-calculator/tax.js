// use node's build-in http module to create a server

//create a constant
const http = require("http");

// use to retrieve data form the URL
const url = require("url");

//require the package
http
  .createServer((req, res) => {
    // write response header
    res.writeHead(200, {
      "Content-Type": "text/html",
    });

	// retrieve data from the URL
	// eg. http://localhost:3000/?subtotal=100
	const query = url.parse(req.url, true).query;
	let subtotal = query.subtotal;

	// TODO calculate tax
	
    // write content
    res.write("<h1>Tax Calculator</h1>");
	res.write("<h2>Subtotal: " + subtotal + "</h2>");

    // end response
    res.end();
  })
  .listen(3000);

//create a server
console.log("Server is running on http://localhost:3000");
