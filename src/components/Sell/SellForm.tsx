import React from 'react';
import {Label, Spacer} from '../kit';
import {Col, Container, Row} from 'react-bootstrap';

export function SellForm() {
  return (
    <div>
      <Container>
        <Row>
          <Col xs={6}>
            <Label
              label="You Receive"
              name="receiveAmount"
              placeholder="BRL (from R$5.2/USDT)"
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
        <Spacer />
        <Row>
          <Col xs={12}>
            <Label
              label="Payment Info"
              name="availSupply"
              placeholder="Meet me at EthereumSP (Ermia)"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
