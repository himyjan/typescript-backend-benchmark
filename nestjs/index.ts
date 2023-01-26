import { NestFactory } from '@nestjs/core';
import { Controller, Get, Module } from '@nestjs/common';

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

const app = await NestFactory.create(AppModule);
await app.listen(8000);
