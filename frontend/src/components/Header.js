import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import { ReactComponent as Logo } from '../images/logo.svg';

const navbarStyle = {
  backgroundColor: 'red',
};

const Header = () => {
  return (
    <Navbar style={navbarStyle} variant="light">
      <Container>
        <Logo style={{ maxWidth: '18rem', maxHeight: '3rem' }} />
      </Container>
    </Navbar>
  );
};

export default Header;
