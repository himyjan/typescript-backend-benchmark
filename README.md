# TypeScript Backend Benchmark

Benchmarking setup for few backend frameworks

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/cplepage/typescript-backend-benchmark)

## Uses
* [esbuild](https://github.com/evanw/esbuild) for ts transpilation
* [autocannon](https://github.com/mcollina/autocannon) as benchmarking tool

## How to use
1. Build the ts files
```shell
npm run build
```
2. Run a benchmark
```shell
node bench [DIRNAME]
```
### Example
```shell
node bench express
```
