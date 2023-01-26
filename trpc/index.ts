import { initTRPC } from '@trpc/server';
import {createHTTPServer} from "@trpc/server/adapters/standalone";

const t = initTRPC.create();

const router = t.router;

const appRouter = router({
    "hello": t.procedure
        .query((req) => {
            return "hello world";
        })
});

const { listen } = createHTTPServer({
    router: appRouter
});

listen(8000);
