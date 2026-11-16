const http = require("node:http");

const hostName = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("content-type", "text/html");
  res.end("<h1>My Server</h1><p>This is HTML</p>");
});

server.listen(port, hostName, () => {
  console.log(`Server running at http://${hostName}:${port}/`);
});
