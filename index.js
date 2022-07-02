const http = require("http");
// http
//   .createServer((req, resp) => {
//     resp.write("<h1>Hello This is Azhar Siddiqui</h1>");
//     resp.end();
//   })
//   .listen(4500);

const runServer = (req, resp) => {
  resp.write("<h1>Hello Azhar How Are You Today ??</h1>");
  resp.end();
};

http.createServer(runServer).listen(4500);
