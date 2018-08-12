const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const compiledFactory = require('./build/Factory.json');

const provider = new HDWalletProvider('floor mask jelly powder material obscure ball wife scale fish opinion key', 'https://rinkeby.infura.io/T1iiqfrFkmLlfwJC6Cos');

const web3 = new Web3(provider);
var block = web3.eth.getBlock("latest");
console.log("Block: " + block);
console.log("gasLimit: " + block.gasLimit);

const deploy = async () =>{

  const accounts = await web3.eth.getAccounts();

  console.log('Atempting to deploy from account', accounts[0]);
  const result = await new web3.eth.Contract(JSON.parse(compiledFactory.interface)).deploy({data: '0x' + compiledFactory.bytecode}).send({ gas: '1000000', from: accounts[0]});
  console.log('Contract deployed to', result.options.address);
};

deploy();
