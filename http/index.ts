import * as http from "http";

const handler = (req, res) => {
    res.end("hello world");
};

http.createServer(handler).listen(8000);
