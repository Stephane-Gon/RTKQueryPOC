import styled from "styled-components"
import { Link } from "react-router-dom";

import { useGetNewAlbunsQuery } from "./logic/albumsApiSlice"
import SpinningLoader from "../../components/SpinningLoader"


const AlbumsDisplay = () => {
    const {
        isLoading,
        isError,
        isSuccess,
        // isFetching,
        data,
    } = useGetNewAlbunsQuery('getNewReleases')

    let content
    if(isLoading) {
        content = <SpinningLoader />
    } else if(isError) {
        content = <h1>Error</h1>
    } else if(isSuccess) {
        content = (
            <>
                <h1>New album releases:</h1>

                <AlbumsWrapper>
                    {
                        data?.items.map((item) => 
                            <Album key={item.id}>
                                { item?.images && <Image src={item.images[0].url}></Image>}
                                <h3>{item.name}</h3>
                                {
                                    item?.artists && item.artists.map((at, idx) => (
                                        <h5 key={idx}>{at.name}</h5>
                                    ))
                                }
                                <CustomLink to={`/album/${item?.id}`}>Details</CustomLink>
                            </Album>
                        )
                    }
                </AlbumsWrapper>
            </>
        )
    }

    return (
        <Wrapper>
            { content }
        </Wrapper>
    )
}

export default AlbumsDisplay

const Wrapper = styled.div`
    width: 80%;
    margin 50px auto 100px auto;

    > h1 {
        margin-bottom: 20px;
    }
`

const AlbumsWrapper = styled.div`
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