import { useContext } from 'react'
import { CatApiContext } from './context'

const useCatApi = () => {
	const context = useContext(CatApiContext)
	if (!context) {
		throw new Error('hook was called outside of CatApiContext context')
	}

	return { ...context }
}

export { useCatApi }
