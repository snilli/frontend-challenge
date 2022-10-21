import { AddBreedListAction, AddImagesAction, GetBreedImagePayload, GetBreedPayload } from './interfaces'
export { getBreedListAction, getImagesAction }
const getBreedListAction = (payload: Array<GetBreedPayload>): AddBreedListAction => {
	return { type: 'BREED/ADD_LIST', payload }
}

const getImagesAction = (payload: GetBreedImagePayload): AddImagesAction => {
	return { type: 'BREED/ADD_IMAGES', payload }
}
