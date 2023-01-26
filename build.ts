import glob from "glob";
import {dirname, resolve} from "path";
import {build} from "esbuild";
import {fileURLToPath} from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));


const files = glob.sync(resolve(__dirname, "*", "index.ts"), {ignore: ["**/node_modules/**"]});
const buildPromises = files.concat(resolve(__dirname, "bench.ts")).map(file => build({
    entryPoints: [file],
    outfile: file.replace(/\.ts$/, ".js"),
    minify: true
}));

await Promise.all(buildPromises);
