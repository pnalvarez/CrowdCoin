import web3 from './web3';
import Factory from './build/Factory.json';

const instance = new web3.eth.Contract(
  JSON.parse(Factory.interface),
  '0x43f4A0D94521Ff3e7e5C08A4f282097cb0dEBe03'
);

export default instance;
