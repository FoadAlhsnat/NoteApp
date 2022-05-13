import React from 'react'
import {Navbar,Container} from 'react-bootstrap'

type HeaderProps={

}

const Header:React.FC<HeaderProps> = (props) => {
  return (
    <Navbar bg="dark" variant='dark'>
    <Container>
      <Navbar.Brand>Note App</Navbar.Brand>
    </Container>
  </Navbar>
  )
}

export default Header