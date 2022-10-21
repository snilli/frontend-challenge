export interface BreedInfo {
	id: string
	url: string
	name: string
}

export interface Image {
	id: string
	width: number
	height: number
	url: string
}

export interface Weight {
	imperial: string
	metric: string
}

export interface BreedEntity {
	id: string
	name: string
	temperament: string
	lifeSpan: string
	altNames: string
	wikipediaUrl: string
	experimental: number
	hairless: number
	natural: number
	rare: number
	rex: number
	suppressedTail: number
	shortLegs: number
	hypoallergenic: number
	adaptability: number
	affectionLevel: number
	countryCodes: string
	countryCode: string
	childFriendly: number
	dogFriendly: number
	energyLevel: number
	grooming: number
	healthIssues: number
	intelligence: number
	sheddingLevel: number
	socialNeeds: number
	strangerFriendly: number
	vocalisation: number
	weight: Weight
	origin: string
	description: string
	indoor: number
	lap: number
	referenceImageId: string
	images?: Image[]
}

export interface BreedState {
	breeds: {
		info: Array<BreedInfo>
		entities: Record<string, BreedEntity>
	}
}

const initialBreedState: BreedState = {
	breeds: {
		info: [],
		entities: {},
	},
}

export { initialBreedState }
