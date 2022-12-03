require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea clog office skull dance birth range provide gesture help foster ghost'; 
let testAccounts = [
"0xe30937f81b5ea3ed60a857f03e8a369dbcf6adbd574a0c726173a56b25af99f9",
"0xd5a3dc65215cbc435eb7b7477ed3f710e205c1a59d0721e16db71faf32cc7fc2",
"0xea4779949fbb6b59ecc22ed3ed3dd4470c4649bd006b17e98aeb8254a21946ab",
"0x03d1da70e9b52acc4729d8ffdce2ef84a10ea44c6a8335578f548a7c3ccfe1a2",
"0xbe5f6ad7df4f125f32ba0685add0f42c6f29ad202a9911c2c43bf2ce0460aff7",
"0x4ae60a1d70357d4003b1083e4dee839b8bde98eb0ba9e580dbf97bbc9883e51b",
"0xb4c5aa97c1a573203ba57b3af32b0c17f30776ee6f2967f9fad01c34ac8ef7b3",
"0xeecdabd654f18ddde509b038afbcbb544b793f369a4b10c030031e79404cd8ad",
"0xaf001f14a0c4bab3c19d293177efb831c098a4e5db9ab068693a6f2dbbf363d6",
"0x101431b1490b4c54256259737321c02a2389bcd557490e0b4a45f6b1195ba23b"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

