import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import helmet from '@fastify/helmet'
import compression from '@fastify/compress'
import { contentParser } from 'fastify-multer'
import { PrismaService } from './common/services/prisma.service'

async function bootstrap() {
	const app = await NestFactory.create<NestFastifyApplication>(AppModule, new FastifyAdapter())
	await app.register(compression, { encodings: ['gzip', 'deflate'] })
	await app.register(helmet)
	await app.register(contentParser)

	const options = new DocumentBuilder()
		.setTitle('Cats example')
		.setDescription('The cats API description')
		.setVersion('1.0')
		.addTag('cats')
		.addBearerAuth()
		.build()
	const document = SwaggerModule.createDocument(app, options)
	SwaggerModule.setup('api', app, document)

	const prismaService = app.get(PrismaService)
	await prismaService.enableShutdownHooks(app)

	await app.listen(3002, '0.0.0.0')
	console.log(`Application is running on: ${await app.getUrl()}`)
}
bootstrap()
