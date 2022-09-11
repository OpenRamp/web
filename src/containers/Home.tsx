import React, {useMemo} from 'react';
import {Col, Container, Row} from 'react-bootstrap';
import {useNavigate, useParams, useLocation} from 'react-router-dom';
import {Stepper} from '../components/Stepper/Stepper';
import {config, TStepItem} from '../config';

export function Home() {
  const {step} = useParams();

  const {pathname} = useLocation();

  const navigate = useNavigate();

  const isSell = useMemo(() => pathname.includes('sell'), [pathname]);

  const steps = useMemo<TStepItem[]>(
    () => (isSell ? config.sellSteps : config.buySteps),
    [isSell],
  );

  const currentStep = useMemo<number>(
    () => steps.findIndex(item => item.key === step),
    [step, steps],
  );

  return (
    <Container>
      <Row>
        <Col xs={12} sm={12} md={6} lg={7}>
          <div className="px-4">
            {steps[currentStep].component}
          </div>
        </Col>
        <Col xs={12} sm={12} md={6} lg={5}>
          <Stepper
            steps={steps}
            activeStep={currentStep}
            onButtonClick={() =>
              navigate(
                `/${isSell ? 'sell' : 'buy'}/${
                  steps[currentStep + 1]
                    ? steps[currentStep + 1].key
                    : steps[0].key
                }`,
              )
            }
          />
        </Col>
      </Row>
    </Container>
  );
}
