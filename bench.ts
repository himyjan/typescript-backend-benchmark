import autocannon from "autocannon";
import {dirname, resolve} from "path";
import {fileURLToPath} from "url";
import * as fs from "fs";
import {fork} from "child_process";
const __dirname = dirname(fileURLToPath(import.meta.url));


const test = process.argv.pop();

if(!fs.existsSync(resolve(__dirname, test))){
    console.log(`Unknown framework ${test}`);
    process.exit(1);
}

const serverProcess = fork(resolve(__dirname, test, "index"));

autocannon({
    url: "http://localhost:8000",
    connections: 5,
    duration: 10,
    requests: [
        {
            method: 'GET',
            path: '/hello'
        }
    ]
}, (err, res) => {
    serverProcess.kill();

    if(err) throw err;

    console.log(autocannon.printResult(res));

    process.exit(1)
})
