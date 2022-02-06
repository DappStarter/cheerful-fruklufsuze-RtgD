require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom drip flock tooth guard render remain soft install fork bubble small'; 
let testAccounts = [
"0xf047e873cd7e6707dd0b1dda0bc0394f14778b59414825f15814b01d5d958a1d",
"0xd485a82741c4b1a8267ca35c6a0ad5e2c691669924a3c4047dd1b479fa126bfb",
"0x1297e1052b4967cd710f785efee0b43239b2c9f0a27e7aee6547d3fdeadb9e7a",
"0x88860497166dbf148c96b0f078c7bff519f290214e78947927eac695ecb75156",
"0xc503c994227daff895f59fddbe7ec8d84945919b6b247db25ae1db9bcf9d8c6c",
"0x0f5980b5e29634cfd95aae4d08463ef3cf37674c04dc83700b86c5c33844ca32",
"0x8130299ae2cc57bf87ed46cc6ca6c263b2c1e8d9d394d133be727d4df05fd813",
"0x95d6681ab087bb92f98c07470b1415e63b40e7380c4e99e2ef7e3a3b0e03c06e",
"0x5e5f4f770934c81c6463b7cfafbf7b07d02967c390897319b6938d6c4f3231a3",
"0xef1eea5a2c18e8d94743b532968a2231f47dcd9949449348e225eadf47787385"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

