import createHandler from "typescript-rpc/createHandler";
import * as http from "http";

const api = {
    async hello(greeting: string) {
        return greeting + " World";
    }
}

const handler = createHandler(api);

http.createServer(handler).listen(8000);
