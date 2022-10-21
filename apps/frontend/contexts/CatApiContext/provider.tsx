import { FC, PropsWithChildren } from 'react'
import { CatApi } from '../../services/the-cat-api'
import { CatApiContext } from './context'

interface CatApiProviderProps extends PropsWithChildren {
	catApi: CatApi
}

const CatApiProvider: FC<CatApiProviderProps> = (props) => {
	return <CatApiContext.Provider value={{ catApi: props.catApi }}>{props.children}</CatApiContext.Provider>
}

export { CatApiProvider }
