const http = require("node:http");

const server = http.createServer((req, res) => {
  console.log("A req came in :", req.method, req.url);

  res.statusCode = 200;
  res.setHeader = ("Content-Type", "text/plain");
  res.end("You reached the server. \n");
});

server.listen(3000, "127.0.0.1", () => {
  console.log("Listening on http://127.0.0.1:3000");
});
