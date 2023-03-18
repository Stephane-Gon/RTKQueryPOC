import { useParams } from "react-router-dom";
import styled from "styled-components";

import { useGetAlbumQuery } from "./logic/albumsApiSlice"
import SpinningLoader from "../../components/SpinningLoader"

const Album = () => {
  const params = useParams()

  const {
    isLoading,
    isError,
    isSuccess,
    // isFetching,
    data,
  } = useGetAlbumQuery({ id : params.id })

  let content
  if(isLoading) {
      content = <SpinningLoader />
  } else if(isError) {
      content = <h1>Error</h1>
  } else if(isSuccess) {
      content = (
          <>
            <h1>{data?.name}</h1> 
            {
              data?.artists && (
                <h2>Artits: <Bold>{data?.artists.map((at, idx) => `${at.name} ${data.artists[idx + 1] ? '&' : ''} `)}</Bold></h2>
              )
            }
            {
              data?.label && (
                <h2>Label: <Bold>{data?.label}</Bold></h2>
              )
            }
            { data?.images && <Image src={data.images[0].url}></Image>}
            {
              data?.tracks && data?.tracks.items.map((t, idx) => (
                <h2 key={idx} >Track {idx + 1}: <Bold>{t.name}</Bold></h2>
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

export default Album

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