import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    token: "",
    message: ""
}

export const spotifySlice = createSlice({
    name: 'spotifyConfig',
    initialState,
    reducers: {
        setToken: (state, { payload }) => {
            state.token = payload
        },
        setMessage: (state, {payload}) => {
            state.message = payload
        },
    }
})
