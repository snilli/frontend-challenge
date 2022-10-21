import { useAtom } from 'jotai'

import store from '..'
import { useCatApi } from '../../contexts/CatApiContext'
import { GetBreedList } from '../../services/the-cat-api/breed/get-breed-list'

export const useBreedDispatcher = () => {
	const [state, dispatch] = useAtom(store)
	const { catApi } = useCatApi()
	const getBreedList = async () => {
		const req = new GetBreedList()
		const res = await req.request(catApi)

		dispatch({
			type: 'BREED/ADD_LIST',
			payload: res
				.filter((breed) => breed.image)
				.map((breed) => {
					return {
						image: breed.image?.url ?? '',
						id: breed.id,
						name: breed.name,
						temperament: breed.temperament,
						lifeSpan: breed.life_span,
						altNames: breed.alt_names,
						wikipediaUrl: breed.wikipedia_url,
						experimental: breed.experimental,
						hairless: breed.hairless,
						natural: breed.natural,
						rare: breed.rare,
						rex: breed.rex,
						suppressedTail: breed.suppressed_tail,
						shortLegs: breed.short_legs,
						hypoallergenic: breed.hypoallergenic,
						adaptability: breed.adaptability,
						affectionLevel: breed.affection_level,
						countryCodes: breed.country_codes,
						countryCode: breed.country_code,
						childFriendly: breed.child_friendly,
						dogFriendly: breed.dog_friendly,
						energyLevel: breed.energy_level,
						grooming: breed.grooming,
						healthIssues: breed.health_issues,
						intelligence: breed.intelligence,
						sheddingLevel: breed.shedding_level,
						socialNeeds: breed.social_needs,
						strangerFriendly: breed.stranger_friendly,
						vocalisation: breed.vocalisation,
						weight: breed.weight,
						origin: breed.origin,
						description: breed.description,
						indoor: breed.indoor,
						lap: breed.lap,
						referenceImageId: breed.reference_image_id,
					}
				})
				.sort((a, b) => a.name.localeCompare(b.name)),
		})
	}

	return {
		getBreedList,
	}
}
