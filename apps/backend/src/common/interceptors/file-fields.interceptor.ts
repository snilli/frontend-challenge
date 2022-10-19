import { CallHandler, ExecutionContext, Inject, mixin, NestInterceptor, Optional, Type } from '@nestjs/common'
import { Observable } from 'rxjs'
import FastifyMulter from 'fastify-multer'
import { Options, Multer, memoryStorage, Field } from 'multer'
import { transformException } from '@nestjs/platform-express/multer/multer/multer.utils'

type MulterInstance = any
export function FilesInterceptor(
	uploadFields: Field[],
	localOptions: Options = { storage: memoryStorage() },
): Type<NestInterceptor> {
	class MixinInterceptor implements NestInterceptor {
		protected multer: MulterInstance

		constructor(
			@Optional()
			@Inject('MULTER_MODULE_OPTIONS')
			options: Multer,
		) {
			this.multer = (FastifyMulter as any)({ ...options, ...localOptions })
		}

		async intercept(context: ExecutionContext, next: CallHandler): Promise<Observable<any>> {
			const ctx = context.switchToHttp()

			await new Promise<void>((resolve, reject) =>
				this.multer.fields(uploadFields)(ctx.getRequest(), ctx.getResponse(), (error: any) => {
					if (error) {
						return reject(transformException(error))
					}
					resolve()
				}),
			)

			return next.handle()
		}
	}
	const Interceptor = mixin(MixinInterceptor)
	return Interceptor as Type<NestInterceptor>
}
