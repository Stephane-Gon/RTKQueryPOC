import { useEffect } from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'

import { actions } from '../store/store'

const REDIRECT_URI="http://localhost:5173/"
const AUTH_ENDPOINT="https://accounts.spotify.com/authorize"
const RESPONSE_TYPE="token"

const Login = () => {
  const dispatch = useDispatch()

  const { setToken, setMessage } = actions.SpotifyConfig
  const token = useSelector((state) => state.spotifyConfig.token )

  useEffect(() => {
    const hash = window.location.hash
    let bearer = ""

    if(!token && hash) {
      bearer = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]
      window.localStorage.setItem("token", bearer)
      window.location.hash = ""
      dispatch(setToken(bearer))
    }

  }, [])

  const logout = () => {
    dispatch(setToken(""))
    dispatch(setMessage(""))

  }

  return (
    <Wrapper>
      {
        !token
          ?
          <Link href={`${AUTH_ENDPOINT}?client_id=${import.meta.env.VITE_CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>Login to Spotify</Link>
          :
        <Button onClick={logout}>Logout</Button>
      }
    </Wrapper>
  )
}

export default Login

const Wrapper = styled.div`
`

const Button = styled.button`
  background:#1b1b1b;
  box-shadow: inset 2px 3px 2px rgba(0, 0, 0, 0.3);
  padding: 10px 30px;
  color:  #1dc05d;
  border-radius: 3px;
  cursor: pointer;
  transition: all .15s ease-in-out;
  text-decoration: none;

  &:hover {
    transform: scale(1.1);
  }
`

const Link = styled.a`
  background:#1b1b1b;
  box-shadow: inset 2px 3px 2px rgba(0, 0, 0, 0.3);
  padding: 10px 15px;
  color:  #1dc05d;
  border-radius: 3px;
  cursor: pointer;
  transition: all .15s ease-in-out;
  text-decoration: none;

  &:hover {
    transform: scale(1.1);
  }
`