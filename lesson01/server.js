const http = require("http");

http
  .createServer((request, response) => {
    // Set status code
    response.writeHead(200, { "Content-Type": "text/plain" });

    // Set content for response
    response.write("Hello World. This is a Node.js app!\n");

    // End the response to send it back
    response.end();
  })
  .listen(3000);

console.log("Server running at http://localhost:3000/");