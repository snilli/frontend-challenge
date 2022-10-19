import { ArgumentMetadata, Injectable, PipeTransform, BadRequestException } from '@nestjs/common'

@Injectable()
export class YupValidationPipe implements PipeTransform {
	transform(value: any, { metatype }: ArgumentMetadata) {
		const { schema } = metatype?.prototype
		if (!schema) return value

		try {
			schema.validateSync(value, { abortEarly: false })
		} catch (err) {
			throw new BadRequestException(err.message)
		}
		return value
	}
}
