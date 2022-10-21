import { CatApi } from '../index'
import { CatApiInput, RequestPayload } from '../interfaces'
import { Breed } from './model'

export interface GetListBreedOption {
	limit?: number
	offset?: number
}

export class GetBreedList implements CatApiInput<Breed[]> {
	constructor(private readonly options?: GetListBreedOption) {}

	async request(api: CatApi): Promise<Breed[]> {
		return await api.request(this)
	}

	getRequestPayload(): RequestPayload<GetListBreedOption> {
		return {
			name: 'GetListBreed',
			method: 'GET',
			path: `breeds`,
			body: this.options,
		}
	}
}
