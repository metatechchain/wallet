// import needed libs
import Web3 from "web3";
import web3Utils from "web3-utils";

// DEFAULT_GAS_LIMIT represents the maximum amount of gas we are willing
// to pay for the DeFi calls.
const DEFAULT_GAS_LIMIT = '0x2dc6c0';

// ZERO_AMOUNT represents zero amount transferred on some calls.
const ZERO_AMOUNT = '0x0';

// METATECH_CHAIN_ID is the chain id used by Meta Tech blockchain.
const METATECH_CHAIN_ID = '0x93c';

// TESTNET_CHAIN_ID is the chain id used by Meta Tech test net.
const TESTNET_CHAIN_ID = '0x930';

/**
 * defiWrapMTC creates a contract call transaction to wrap given amount
 * of native MTC tokens into the wMTC tokens used among DeFi protocols.
 *
 * @param {string} erc20Address
 * @param {string|{BN}} amount
 * @returns {{gasLimit: string, data: string, chainId: string, to: *, nonce: undefined, value: string, gasPrice: undefined}}
 */
function defiWrapMTC(erc20Address, amount) {
    // create web3.js instance
    const web3 = new Web3();

    // make the transaction
    return {
        nonce: undefined,
        gasPrice: undefined,
        gasLimit: DEFAULT_GAS_LIMIT,
        to: erc20Address,
        value: web3Utils.numberToHex(amount),
        data: web3.eth.abi.encodeFunctionCall({
            "constant": false,
            "inputs": [],
            "name": "deposit",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": true,
            "stateMutability": "payable",
            "type": "function"
        }, []),
        chainId: METATECH_CHAIN_ID
    };
}

/**
 * defiWrapMTC creates a contract call transaction to unwrap given amount
 * of wrapped wMTC tokens used among DeFi protocols back to the native MTC tokens.
 *
 * @param {string} erc20Address
 * @param {string|{BN}} amount
 * @returns {{gasLimit: string, data: string, chainId: string, to: *, nonce: undefined, value: string, gasPrice: undefined}}
 */
function defiUnwrapMTC(erc20Address, amount) {
    // create web3.js instance
    const web3 = new Web3();

    // make the transaction
    return {
        nonce: undefined,
        gasPrice: undefined,
        gasLimit: DEFAULT_GAS_LIMIT,
        to: erc20Address,
        value: ZERO_AMOUNT,
        data: web3.eth.abi.encodeFunctionCall({
            "constant": false,
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                }
            ],
            "name": "withdraw",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        }, [amount]),
        chainId: METATECH_CHAIN_ID
    };
}

// what we export here
export default {
    defiWrapMTC,
    defiUnwrapMTC,
    METATECH_CHAIN_ID,
    TESTNET_CHAIN_ID
};
