import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col className='text-center py-3'>
            Copyright &copy;&nbsp;
            <a href='https://cxkeeley-portfolio.netlify.app'>CX Agency</a>
            &nbsp;All rights reserved
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
