import web3utils from 'web3-utils';
import { formatNumberByLocale } from '../filters.js';

const WEI_IN_MTC = 1000000000000000000;

/**
 * @return {number}
 */
export function WEIToMTC(_value) {
    // console.log(parseFloat(web3utils.fromWei(_value, 'ether')), _value / WEI_IN_MTC);
    return _value / WEI_IN_MTC;
}

/**
 * @return {number}
 */
export function WeiToMTC(_value) {
    return parseFloat(web3utils.fromWei(_value, 'ether'));
}

/**
 * @return {number}
 */
export function MTCToWEI(_value) {
    return _value * WEI_IN_MTC;
}

/**
 * @param {*} _value
 * @param {number} [_tokenPrice]
 * @return {number}
 */
export function MTCToUSD(_value, _tokenPrice = 0) {
    return _value * _tokenPrice;
}

/**
 * Convert value to MTC.
 *
 * @param {string|number} _value
 * @return {string}
 */
export function toMTC(_value) {
    return formatNumberByLocale(WEIToMTC(_value));
}

/**
 * Check if given string is transaction hash, address or block number.
 *
 * @return {'transaction_hash' | 'address' | 'block' | ''}
 */
export function getTypeByStr(_str) {
    let type = '';
    let num = 0;

    if (_str) {
        if (web3utils.isHexStrict(_str)) {
            if (_str.length === 66) {
                type = 'transaction_hash';
                // } else if (web3utils.toChecksumAddress(_str)) {
            } else if (web3utils.isAddress(_str)) {
                type = 'address';
            }
        } else {
            num = parseInt(_str);
            if (!isNaN(num)) {
                type = 'block';
            }
        }
    }

    return type;
}
