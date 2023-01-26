import { NestFactory } from '@nestjs/core';
import { Controller, Get, Module } from '@nestjs/common';
import {FastifyAdapter} from "@nestjs/platform-fastify";

@Controller('hello')
class HelloController {
    @Get()
    hello(): string {
        return 'hello world';
    }
}

@Module({
    controllers: [HelloController],
    providers: [],
})
class AppModule {}

const app = await NestFactory.create(AppModule, new FastifyAdapter());
await app.listen(8000);
