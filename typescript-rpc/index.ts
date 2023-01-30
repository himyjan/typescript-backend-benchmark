import createHandler from "typescript-rpc/createHandler";
import * as http from "http";

const api = {
    hello() {
        return "Hello World";
    }
}

const handler = createHandler(api);

http.createServer(handler).listen(8000);
