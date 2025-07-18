import React from 'react';
import { Container } from 'react-bootstrap';

function Footer() {
  return (
    <div className="bg-dark text-white py-3 mt-5">
      <Container className="text-center">
        <small>&copy; {new Date().getFullYear()} Saurav Kumar. All rights reserved.</small>
      </Container>
    </div>
  );
}

export default Footer;
