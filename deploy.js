const HDWalletProvider = require('@truffle/hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('./compile');

// const provider = new HDWalletProvider(
//   'REPLACE_WITH_YOUR_MNEMONIC',
//   // remember to change this to your own phrase!
//   'https://rinkeby.infura.io/v3/15c1d32581894b88a92d8d9e519e476c'
//   // remember to change this to your own endpoint!
// );
const provider = new HDWalletProvider(
  'disease summer cable balance thunder base detail arrow oppose abstract boring liberty prevent iron height lava network melody daughter jacket story awesome bench cactus',
  'https://rinkeby.infura.io/v3/269187bb1157494e8d01490cdc7fdb7a'
);
 
const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log('Attempting to deploy from account', accounts[0]);
  console.log('AACCC', accounts);
  const result = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({ data: bytecode })
    .send({ gas: '1000000', from: accounts[4] });

  console.log('Contract deployed to', result.options.address);
  provider.engine.stop();
};
deploy();
