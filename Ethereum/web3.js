import Web3 from 'web3';

let web3;

if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {

  // If return is undefined, we are in the browser and metamask is running.
  web3 = new Web3(window.web3.currentProvider);
} else {
// Else we are on the server *OR* the user in not running metamask.
const provider = new Web3.providers.HttpProvider(
  'https://rinkeby.infura.io/T1iiqfrFkmLlfwJC6Cos'
);
  web3 = new Web3(provider);
}

export default web3;
