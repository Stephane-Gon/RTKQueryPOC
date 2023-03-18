import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const baseQuery = fetchBaseQuery({
    baseUrl : 'https://api.spotify.com/v1/',
    prepareHeaders: (headers) => {
        let token = window.localStorage.getItem("token")
        if(token) {
            headers.set("Authorization", `Bearer ${token}`)
        }
        return headers
    }
})

// CAN BE USED TO HANDLE AUTHENTICATION TOKENS...
const generalInterceptor = async (args, api, extraOptions) => {
    let result = await baseQuery(args, api, extraOptions)
  
    if(result?.error) {
        console.log('ERROR : ', result.error)
    } else {
        console.log('RESULT: ', result)
    }
    return result
}


export const spotifyApi = createApi({
    reducerPath: 'spotifyApi',
    baseQuery: generalInterceptor,
    tagTypes:['Album', 'Playlist'],
    endpoints: builder => ({})
})
