import { useSelector } from 'react-redux'
import styled from 'styled-components'

import AlbumsDisplay from '../features/albuns/albumsDisplay'
import PlaylistsDisplay from '../features/playlists/playlistsDisplay'

const HomePage = () => {

  const token = useSelector((state) => state.spotifyConfig.token)

  return (
    <Wrapper>
      {
        !token ? ( 
          <TextWrapper>
            <h1>Login to retrieve data.</h1>
          </TextWrapper> 
        ) : (
          <>
            <AlbumsDisplay />
            <PlaylistsDisplay />
          </>
        )
      }
    </Wrapper>
  )
}

export default HomePage

const Wrapper = styled.div`
  height: fit-content;
  min-height: 100vh;
`


const TextWrapper = styled.div`
  width: fit-content;
  background: #1dc05d;
  margin: 200px auto;
  padding: 20px;
  border-radius: 5px;
  box-shadow: inset 2px 3px 2px rgba(0, 0, 0, 0.3);
  color:#1b1b1b;
`