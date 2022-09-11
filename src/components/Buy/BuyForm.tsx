import React from 'react';
import {Label, Spacer} from '../kit';
import {Col, Container, Row} from 'react-bootstrap';
import {useMetaMask} from '../../hooks/useMetaMask';

export function BuyForm() {
  const {setAmount, amount} = useMetaMask();

  return (
    <div>
      <Container>
        <Row>
          <Col xs={6}>
            <Label
              label="You Pay"
              name="payAmount"
              placeholder="1 USD"
              value={amount}
              onChange={e => setAmount(e.target.value)}
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
