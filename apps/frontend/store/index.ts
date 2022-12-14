import { atomWithStore } from 'jotai/redux'
import { configureStore, combineReducers } from '@reduxjs/toolkit'

const rootReducer = combineReducers({})

const store = configureStore({ reducer: rootReducer })

export type RootState = ReturnType<typeof store.getState>

export default atomWithStore(store)
