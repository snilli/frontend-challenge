import type { AnyAction } from '../../interfaces'
import { BreedEntity } from '../state'

export interface GetBreedPayload extends Omit<BreedEntity, 'images'> {
	image: string
}

export interface BreedImage {
	id: string
	width: number
	height: number
	url: string
}

export interface GetBreedImagePayload {
	id: string
	images: Array<BreedImage>
}

export type AddBreedListAction = AnyAction<'BREED/ADD_LIST', Array<GetBreedPayload>>
export type AddImagesAction = AnyAction<'BREED/ADD_IMAGES', GetBreedImagePayload>
export type ResetAction = AnyAction<'BREED/RESET', undefined>

export type BreedAction = AddBreedListAction | AddImagesAction | ResetAction
