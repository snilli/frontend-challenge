import { CatApi } from '.'

export interface CatApiInput<T> {
	getRequestPayload(): RequestPayload
	request(api: CatApi): Promise<T>
	// getErrorMsg(res: T): string
	// getErrorCode(res: T): string
}

export interface CatApiOption {
	apiKey: string
}

export interface RequestPayload<T = any> {
	name: string
	method: 'POST' | 'GET'
	path: string
	body?: T
}
