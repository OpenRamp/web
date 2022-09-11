import React from 'react';
import {Col, Container, Row} from 'react-bootstrap';
import {Stepper} from '../components/Stepper/Stepper';

export function Home() {
  return (
    <Container>
      <Row>
        <Col xs={12} sm={12} md={6} lg={7}>
          Left side
        </Col>
        <Col xs={12} sm={12} md={6} lg={5}>
          <Stepper />
        </Col>
      </Row>
    </Container>
  );
}
