import { HttpClient, HttpsRequestPayload } from '../../utils/http-client'
import { CatApiInput, CatApiOption } from './interfaces'

export class CatApi {
	private readonly https: HttpClient
	private readonly apiKey: string

	constructor(option: CatApiOption) {
		this.https = new HttpClient()
		this.apiKey = option.apiKey
	}

	private static getHeaders(apiKey: string): { [name: string]: string } {
		const headers: Record<string, string> = {
			'Content-Type': 'application/json',
			Accept: 'application/json',
			'x-api-key': apiKey,
		}

		return headers
	}

	async request<T extends CatApiInput<E>, E>(input: T): Promise<E> {
		const payload = input.getRequestPayload()
		const data = payload.body

		const req: HttpsRequestPayload = {
			name: `Ninja::${payload.name}`,
			url: this.getUrl(),
			body: data,
			path: payload.path,
			method: payload.method,
			headers: CatApi.getHeaders(this.apiKey),
		}

		const res = await this.https.request(req)
		return res.data
	}

	private getUrl(): string {
		return 'https://api.thecatapi.com/v1/'
	}
}
