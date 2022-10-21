import type { BreedState } from './state'

import { atom, useAtomValue } from 'jotai'
import store from '..'

const breedAtom = atom<BreedState>((get) => get(store).breed)

export const useGetBreedsInfoSelector = () => {
	return useAtomValue(breedAtom).breeds.info
}
