import { parse, isValidNumber } from 'google-libphonenumber';

export function validatePhoneNumber(number, countryCode) {
    const phoneUtil = require('google-libphonenumber').PhoneNumberUtil.getInstance();
    const PNF = require('google-libphonenumber').PhoneNumberFormat;

    try {
        const phoneNumber = phoneUtil.parse(number, countryCode);
        if (phoneUtil.isValidNumber(phoneNumber)) {
        return { isValid: true, message: `Good job! Your input was: ${phoneUtil.format(phoneNumber, PNF.INTERNATIONAL)}`};
        } else {
        return { isValid: false, message: 'This input is not a valid phone number.'};
        }
    } catch (error) {
        return { isValid: false, message: `An error occured while parsing: ${error.message}`};
    }
}
