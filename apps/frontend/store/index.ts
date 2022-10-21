import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { atomWithStore } from 'jotai/redux'
import { breedReducer } from './breed'

const rootReducer = combineReducers({ breed: breedReducer })

const store = configureStore({ reducer: rootReducer })

export type RootState = ReturnType<typeof store.getState>

export default atomWithStore(store)
