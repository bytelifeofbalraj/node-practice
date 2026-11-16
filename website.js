// Mini Project: Index, About, Contact Website

const http = require("node:http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.statusCode = 200;
    res.setHeader("content-type", "text/html");
    res.end("<h1>Home</h1><p>Welcome to my website.</p>");
  } else if (req.url === "/about") {
    res.statusCode = 200;
    res.setHeader("content-type", "text/html");
    res.end("<h1>About</h1><p>This site was built with Node.js.</p>");
  } else if (req.url === "/contact") {
    res.statusCode = 200;
    res.setHeader("content-type", "text/html");
    res.end("<h1>Contact</h1><p>Email: hello@example.com</p>");
  } else {
    res.statusCode = 404;
    res.setHeader("content-type", "text/html");
    res.end("<h1>Not Found</h1>");
  }
});

server.listen(3000, "127.0.0.1", () => {
  console.log("You are listening to 127.0.0.1:3000");
});
