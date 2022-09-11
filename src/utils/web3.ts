import Web3 from 'web3';

export function weiToEther(wei: string) {
  return Web3.utils.fromWei(wei);
}

export function numberToHex(number: number) {
  return Web3.utils.numberToHex(number);
}
