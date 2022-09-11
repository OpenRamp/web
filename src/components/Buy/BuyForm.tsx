import React from 'react';
import {Label, Spacer} from '../kit';
import {Col, Container, Row} from 'react-bootstrap';

export function BuyForm() {
  return (
    <div>
      <Container>
        <Row>
          <Col xs={6}>
            <Label
              label="You Pay"
              name="payAmount"
              placeholder="BRL (from R$5.2/USDT)"
            />
          </Col>
          <Col xs={6}>
            <Label
              label="Preferred Rate"
              name="preferredRate"
              placeholder="1 USDT= "
            />
          </Col>
        </Row>
        <Spacer />
        <Row>
          <Col xs={6}>
            <Label
              label="Available Supply"
              name="availSupply"
              placeholder="0.00 Units"
            />
          </Col>
          <Col xs={6}>
            <Label
              label="Payment Method(s)"
              name="paymentMethods"
              placeholder="Cash"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
