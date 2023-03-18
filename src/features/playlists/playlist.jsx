import { useParams } from "react-router-dom";
import styled from "styled-components";

import { useGetPlaylistQuery } from "./logic/playlistsApiSlice";
import SpinningLoader from "../../components/SpinningLoader"

const Playlist = () => {
  const params = useParams()

  const {
    isLoading,
    isError,
    isSuccess,
    data,
    error
  } = useGetPlaylistQuery({ id : params.id })

  let content
  if(isLoading) {
      content = <SpinningLoader />
  } else if(isError) {
      console.log(error)
      content = <h1>Error</h1>
  } else if(isSuccess) {
      content = (
          <>
            <h1>{data?.name}</h1> 
            <h3>Followers: {data?.followers.total}</h3>
            { data?.images && <Image src={data.images[0].url}></Image>}

            {
              data?.tracks && data?.tracks.items.map((t, idx) => (
                <h2 key={idx} >Track {idx + 1}: <Bold>{t.track.name}</Bold></h2>
              ))
            }
          </>
      )
  }

  return (
      <Wrapper>
          { content }
      </Wrapper>
  )
}

export default Playlist



const Wrapper = styled.div`
    width: 80%;
    margin 50px auto 100px auto;

    > h1 {
        margin-bottom: 20px;
    }
`

const Image = styled.img`
    width: 640px;
    aspect-ratio: 1;
`

const Bold = styled.b`
  color: #1dc05d;
`