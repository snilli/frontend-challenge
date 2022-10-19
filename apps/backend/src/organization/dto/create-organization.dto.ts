import { UseSchema } from 'src/common/decorators/use-schema.decorator'
import * as yup from 'yup'

export const createCatSchema = yup.object().shape({
	a: yup.string().required(),
})

@UseSchema(createCatSchema)
export class CreateOrganizationDto {
	a: string
}
