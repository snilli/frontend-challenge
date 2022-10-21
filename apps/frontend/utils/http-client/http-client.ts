import HttpAgent, { HttpsAgent } from 'agentkeepalive'
import axios from 'axios'
import http from 'http'
import { HttpsClientException } from './error'

export interface HttpRequestOptions {
	https?: boolean
	maxRetry?: number
	delayRetry?: number
	timeout?: number
}

export interface HttpsRequestPayload {
	name?: string
	url: string
	method: 'GET' | 'POST' | 'DELETE' | 'PUT' | 'PATCH'
	path: string
	body?: any
	query?: string
	headers?: { [name: string]: string }
	timeout?: number
	json?: boolean
}

export class HttpClient {
	private readonly core: http.ClientRequestArgs
	private readonly maxRetry: number = 3
	private readonly timeout: number = 30000

	constructor(options?: HttpRequestOptions) {
		if (options) {
			if (options.https != null) {
				if (options.https) {
					this.core = {
						agent: new HttpsAgent(),
					}
				} else {
					this.core = {
						agent: new HttpAgent(),
					}
				}
			} else {
				this.core = {
					agent: new HttpsAgent(),
				}
			}

			if (options.maxRetry != null) {
				this.maxRetry = options.maxRetry
			}

			if (options.timeout != null) {
				this.timeout = options.timeout
			}
		} else {
			this.core = {
				agent: new HttpsAgent(),
			}
		}
	}

	async request(req: HttpsRequestPayload) {
		let url: string
		if (req.query) {
			url = `${req.url}${req.path}?${req.query}`
		} else {
			url = `${req.url}${req.path}`
		}

		let body: string
		if (req.json) {
			body = JSON.stringify(req.body)
		} else {
			body = req.body
		}

		return await this.send(url, body, req)
	}

	private async send(url: string, body: string, req: HttpsRequestPayload) {
		for (let i = 0; i < this.maxRetry; i++) {
			try {
				return await axios({
					url: url,
					headers: req.headers,
					httpsAgent: this.core,
					timeout: req.timeout ?? this.timeout,
					method: req.method,
					data: body,
				})
			} catch (e: any) {
				throw new HttpsClientException(e.message, req)
			}
		}

		throw new HttpsClientException('No Request', req)
	}
}
