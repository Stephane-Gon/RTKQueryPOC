import styled from "styled-components"
import { Link } from "react-router-dom";

import { useGetFeaturedPlaylistsQuery } from './logic/playlistsApiSlice'
import SpinningLoader from "../../components/SpinningLoader"


const PlaylistsDisplay = () => {
    const {
        isLoading,
        isError,
        isSuccess,
        // isFetching,
        data,
    } = useGetFeaturedPlaylistsQuery('getFeaturedPlaylists')

    if(isLoading) return <SpinningLoader />
    if(isError) return <h1>Error</h1>
    let content
    if(isLoading) {
        content = <SpinningLoader />
    } else if(isError) {
        content = <h1>Error</h1>
    } else if(isSuccess) {
        content = (
            <>
                <h1>Featured Playlists:</h1>

                <PlaylistsWrapper>
                    {
                        data?.items.map((item) => 
                            <Album key={item.id}>
                                { item?.images && <Image src={item.images[0].url}></Image>}
                                {item.name}
                                <CustomLink to={`/playlist/${item?.id}`}>Details</CustomLink>

                            </Album>
                        )
                    }
                </PlaylistsWrapper>
            </>
        )
    }

    return (
        <Wrapper>
            { content }
        </Wrapper>
    )
}

export default PlaylistsDisplay

const Wrapper = styled.div`
    width: 80%;
    margin 50px auto 100px auto;

    > h1 {
        margin-bottom: 20px;
    }
`

const PlaylistsWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    row-gap: 10px;
`

const Album = styled.div`
    background: rgba(255, 255, 255, 0.27);
    width: 180px;
    border-radius: 3px;
    padding: 15px 5px;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Image = styled.img`
    width: 150px;
    aspect-ratio: 1;
`

const CustomLink = styled(Link)`
    color: #1dc05d;
`