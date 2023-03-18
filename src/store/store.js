import { configureStore, combineReducers } from '@reduxjs/toolkit'

import { spotifyApi } from '../features/apis/spotifyApi'
import { spotifySlice } from '../features/spotifyConfig/spotifySlice'

const rootReducer = combineReducers({
    [spotifyApi.reducerPath]: spotifyApi.reducer,
    spotifyConfig: spotifySlice.reducer
})

export const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(spotifyApi.middleware)
})

export const actions = {
    SpotifyConfig: spotifySlice.actions
}