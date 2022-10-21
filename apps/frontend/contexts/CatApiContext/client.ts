import { CatApi } from '../../services/the-cat-api'

let catApi: CatApi
const getCatApi = (apiKey: string) => {
	if (catApi) {
		return catApi
	}

	catApi = new CatApi({ apiKey })
	return catApi
}

export { getCatApi }
