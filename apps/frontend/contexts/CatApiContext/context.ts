import { createContext } from 'react'
import { CatApiContextProps } from './interfaces'

export const CatApiContext = createContext<CatApiContextProps>(null as unknown as CatApiContextProps)
