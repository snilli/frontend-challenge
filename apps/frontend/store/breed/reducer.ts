import produce from 'immer'
import { BreedAction } from './actions/interfaces'
import { initialBreedState } from './state'

const breedReducer = (prevState = initialBreedState, action: BreedAction) => {
	switch (action.type) {
		case 'BREED/ADD_LIST': {
			return produce(prevState, (draft) => {
				const info = draft.breeds.info
				const entities = draft.breeds.entities

				for (const breed of action.payload) {
					info.push({ id: breed.id, url: breed.image, name: breed.name })

					entities[`${breed.id}`] = {
						id: breed.id,
						name: breed.name,
						temperament: breed.temperament,
						lifeSpan: breed.lifeSpan,
						altNames: breed.altNames,
						wikipediaUrl: breed.wikipediaUrl,
						experimental: breed.experimental,
						hairless: breed.hairless,
						natural: breed.natural,
						rare: breed.rare,
						rex: breed.rex,
						suppressedTail: breed.suppressedTail,
						shortLegs: breed.shortLegs,
						hypoallergenic: breed.hypoallergenic,
						adaptability: breed.adaptability,
						affectionLevel: breed.affectionLevel,
						countryCodes: breed.countryCodes,
						countryCode: breed.countryCode,
						childFriendly: breed.childFriendly,
						dogFriendly: breed.dogFriendly,
						energyLevel: breed.energyLevel,
						grooming: breed.grooming,
						healthIssues: breed.healthIssues,
						intelligence: breed.intelligence,
						sheddingLevel: breed.sheddingLevel,
						socialNeeds: breed.socialNeeds,
						strangerFriendly: breed.strangerFriendly,
						vocalisation: breed.vocalisation,
						weight: breed.weight,
						origin: breed.origin,
						description: breed.description,
						indoor: breed.indoor,
						lap: breed.lap,
						referenceImageId: breed.referenceImageId,
					}
				}
			})
		}
		case 'BREED/ADD_IMAGES': {
			return produce(prevState, (draft) => {
				const entity = draft.breeds.entities[action.payload.id]
				if (!entity) {
					return
				}

				if (!entity.images) {
					entity.images = []
				}

				for (const image of action.payload.images) {
					entity.images.push(image)
				}
			})
		}
		case 'BREED/RESET': {
			return initialBreedState
		}

		default: {
			return prevState
		}
	}
}

export { breedReducer }
