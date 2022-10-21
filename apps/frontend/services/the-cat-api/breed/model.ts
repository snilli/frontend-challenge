export interface Breed {
	id: string
	name: string
	temperament: string
	life_span: string
	alt_names: string
	wikipedia_url: string
	experimental: number
	hairless: number
	natural: number
	rare: number
	rex: number
	suppressed_tail: number
	short_legs: number
	hypoallergenic: number
	adaptability: number
	affection_level: number
	country_codes: string
	country_code: string
	child_friendly: number
	dog_friendly: number
	energy_level: number
	grooming: number
	health_issues: number
	intelligence: number
	shedding_level: number
	social_needs: number
	stranger_friendly: number
	vocalisation: number
	weight: Weight
	origin: string
	description: string
	indoor: number
	lap: number
	reference_image_id: string
	image?: Image
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
