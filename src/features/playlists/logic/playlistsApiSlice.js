import { spotifyApi } from "../../apis/spotifyApi";

const playlistsApiSlice = spotifyApi.injectEndpoints({
    endpoints: (builder) => ({
        getFeaturedPlaylists: builder.query({
            query: () => '/browse/featured-playlists',
            transformResponse: (response) => {
                return response.playlists
            },
            providesTags: ({ items }) => [
                { type: 'Playlist', id: 'LIST' },
                ...items.map((item) => ({ type: 'Playlist', id: item.id }))
            ]
        }),
        getPlaylist: builder.query({
            query: ({ id }) => `/playlists/${id}`,
            providesTags: ({ id }) => [
                { type: 'Playlist', id: 'LIST' },
                ({ type: 'Playlist', id })
            ]
        })
    })
})

export const {
    useGetFeaturedPlaylistsQuery,
    useGetPlaylistQuery
} = playlistsApiSlice