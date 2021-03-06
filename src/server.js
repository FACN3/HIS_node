const http = require("http");
const router = require("./router");

const host =  '0.0.0.0' || process.env.HOST || "localhost";
const port = process.env.PORT || 9000;

http.createServer(router).listen(port, host, () => {
  console.log(`Server running at port http://${host}:${port}`);
});
