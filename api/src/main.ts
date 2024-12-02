import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // ここでCORSを有効化
  app.enableCors({
    origin: 'http://localhost:3000', // フロントエンドのオリジン（ポート3000）を許可
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true,  // 必要に応じてクッキーをサポートする場合
  });
  await app.listen(3001);
}
bootstrap();
