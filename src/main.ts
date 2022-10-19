import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { AppModule } from './app.module';
import { extractPackageManagerMayorVersion } from './utils';

async function bootstrap() {
  const API_VERSION = await extractPackageManagerMayorVersion();
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
  );

  app.setGlobalPrefix(`api/v${API_VERSION}`);

  await app.listen(3000, (error, address) => console.log({ error, address }));
}
bootstrap();
