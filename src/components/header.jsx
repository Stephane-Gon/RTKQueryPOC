import styled from "styled-components";
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux'

import Login from "./Login";

const Header = () => {
  const message = useSelector((state) => state.spotifyConfig.message )

  return (
    <CustomHeader>
        <Heading to="/">Pobrify</Heading>
        <Message>{message ? message : ''}</Message>
        <Login />
    </CustomHeader>
  )
}

export default Header

const CustomHeader = styled.div`
  background: #1dd05d;
  padding: 20px 20px;
  height: 40px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`
const Heading = styled(Link)`
  font-size: 20px;
  font-weight: 700;
  color: #1b1b1b;
`
const Message = styled.h4`
  font-size: 20px;
  font-weight: 700;
  color: #1b1b1b;
`