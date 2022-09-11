import React, {useMemo} from 'react';
import {Col, Container, Row} from 'react-bootstrap';
import {useParams, useLocation} from 'react-router-dom';
import {Stepper} from '../components/Stepper/Stepper';
import {config, TStepItem} from '../config';
import Web3 from 'web3';
import erc20 from '../contracts/erc20.json';
import unrampJson from '../contracts/Unramp.json';
import {useMetaMask} from '../hooks/useMetaMask';
import {toast} from 'react-toastify';

const web3 = new Web3(window.ethereum as any);

console.log(web3, 'web3');

const daiToken = '0xc542ec0E03e2C18133C51db512C7A2a6DCA1466C';
const unrampAddress = '0x86F745BE41e778c01563A83Da90E2d85bbeb114c';

const erc20Contract = new web3.eth.Contract(erc20.abi as any, daiToken);

const unramp = new web3.eth.Contract(unrampJson.abi as any, unrampAddress);

export function Home() {
  const {step} = useParams();

  const {primaryAccount, amount} = useMetaMask();

  console.log(primaryAccount, 'primaryAccount');

  const {pathname} = useLocation();

  const isSell = useMemo(() => pathname.includes('sell'), [pathname]);

  const steps = useMemo<TStepItem[]>(
    () => (isSell ? config.sellSteps : config.buySteps),
    [isSell],
  );

  const currentStep = useMemo<number>(
    () => steps.findIndex(item => item.key === step),
    [step, steps],
  );

  const handlePostAd = async () => {
    const tx = await unramp.methods.createPost(
      daiToken,
      'USD',
      amount,
      10000,
      'cash',
    );

    console.log(tx, 'tx is here');
    const data = tx.encodeABI();

    console.log(data, 'data is here');

    let gas = await unramp.methods
      .createPost(daiToken, 'USD', 1, 10000, 'cash')
      .estimateGas({from: primaryAccount});

    console.log(gas, 'gas is here');

    try {
      const receipt = await web3.eth
        .sendTransaction({
          from: primaryAccount,
          to: unrampAddress,
          value: 0,
          data,
          gas,
        })
        .on('transactionHash', transactionHash => {
          toast.info(
            `Check progress on Explorer. \nBlock Explorer: https://mumbai.polygonscan.com/tx/${transactionHash}`,
          );
        })
        .on('error', error => {
          console.log(error, 'errorr on');
          const err = error;
          // @ts-ignore
          if (error.code === 32602) {
            toast.error("You don't have enough Matic (MATIC)");
          } else {
            toast.error(error.message);
          }

          return null;
        });
      console.log(receipt, '<== receipt');
      if (receipt) {
        toast.success(
          `Transaction Successfully Done.\n Block Explorer: https://mumbai.polygonscan.com/tx/${receipt.transactionHash}`,
        );
      }
    } catch (error) {
      console.log(error, 'errorr catch');
      return null;
    }
  };

  return (
    <Container>
      <Row>
        <Col xs={12} sm={12} md={6} lg={7}>
          <div className="px-4">{steps[currentStep].component}</div>
        </Col>
        <Col xs={12} sm={12} md={6} lg={5}>
          <Stepper
            steps={steps}
            activeStep={currentStep}
            onButtonClick={handlePostAd}
          />
        </Col>
      </Row>
    </Container>
  );
}
