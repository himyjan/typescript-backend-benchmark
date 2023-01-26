import * as http from "http";

const handler = (req, res) => {
    res.writeHead(200, "text/plain");
    res.end("hello world");
};

http.createServer(handler).listen(8000);
