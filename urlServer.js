const http = require("node:http");

const server = http.createServer((req, res) => {
  const url = new URL(req.url, "http://localhost:3000");

  console.log(`Path: ${url.pathname}`);
  console.log(
    `Query params: ${JSON.stringify(Object.fromEntries(url.searchParams))}`,
  );

  res.status = 200;
  res.setHeader("Content-type", "text/plain");
  res.end(`You visited ${url.pathname} \n`);
});

server.listen(3000, "127.0.0.1", () => {
  console.log("Listening on http://127.0.0.1:3000");
});
