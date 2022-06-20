const http = require("http");

const server = http.createServer((req, res) => {
  const list = [
    { id: 1, name: "John" },
    { id: 2, name: "Mary" },
  ];

  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify(list));
});

server.listen(3000);
