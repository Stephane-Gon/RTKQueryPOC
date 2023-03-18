import { spotifyApi } from "../../apis/spotifyApi";
import { actions } from "../../../store/store";

const albumsApiSlice = spotifyApi.injectEndpoints({
    endpoints: (builder) => ({
        getNewAlbuns: builder.query({
            query: () => '/browse/new-releases',
            transformResponse: (response) => {
                return response.albums
            },
            async onQueryStarted(req, { dispatch }) {
                dispatch(actions.SpotifyConfig.setMessage('QUERY STARTED'));
                return req;
            },
            async onQueryFulfilled(res, { dispatch }) {
                dispatch(actions.SpotifyConfig.setMessage('QUERY FULFILLED'));
                return res;
            },
            async onQueryError(error, { dispatch }) {
                dispatch(actions.SpotifyConfig.setMessage('QUERY FAILED'));
                throw error;
            },
            providesTags: ({ items }) => [
                { type: 'Album', id: 'LIST' },
                ...items.map((item) => ({ type: 'Album', id: item.id }))
            ]
        }),
        getAlbum: builder.query({
            query: ({ id }) => `/albums/${id}`,
            providesTags: ({ id }) => [
                { type: 'Album', id: 'LIST' },
                ({ type: 'Album', id })
            ]
        })
    })
})

export const {
    useGetNewAlbunsQuery,
    useGetAlbumQuery
} = albumsApiSlice