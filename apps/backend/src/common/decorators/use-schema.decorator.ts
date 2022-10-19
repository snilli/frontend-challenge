import { AnyObjectSchema } from 'yup'

export function UseSchema(schema: AnyObjectSchema) {
	return function (constructor: Function) {
		constructor.prototype.schema = schema
	}
}
