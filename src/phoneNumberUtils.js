import { parse, isValidNumber } from 'google-libphonenumber';

const phoneUtil = require('google-libphonenumber').PhoneNumberUtil.getInstance();
const PNF = require('google-libphonenumber').PhoneNumberFormat;

const mobileStarts = ["45", "50", "51", "53", "57", "60", "66", "69", "72", "73", "78", "79", "88"];


export function determinePLMobileNumber(plNumber) {
    let isMobile = mobileStarts.some(start => plNumber.startsWith(start));

    if (isMobile) {
        return true;
    } else {
        return false;
    }
}


export function formatPLPhoneNumber(phoneNumber) {
    let nationalNumber = phoneUtil.format(phoneNumber, PNF.NATIONAL);
    let isMobile = determinePLMobileNumber(nationalNumber);
    
    if (isMobile) {
        let mobileNumber = nationalNumber.replace(/ /g, '');
        return `+${phoneNumber.getCountryCode()} ${mobileNumber.slice(0, 3)} ${mobileNumber.slice(3, 6)} ${mobileNumber.slice(6)}`;
    } else {
        return phoneUtil.format(phoneNumber, PNF.INTERNATIONAL);
    }
}   


export function validatePhoneNumber(number, countryCode) {
    let formattedNumber = '';

    try {
        const phoneNumber = phoneUtil.parse(number, countryCode);
        if (phoneUtil.isValidNumber(phoneNumber)) {
            if (countryCode === 'PL') {
                formattedNumber = formatPLPhoneNumber(phoneNumber);
            } else {
                formattedNumber = phoneUtil.format(phoneNumber, PNF.INTERNATIONAL);
            }
            return { isValid: true, message: `Good job! Your input was: ${formattedNumber}`, phoneNumber: formattedNumber};
        } else {
            return { isValid: false, message: 'This input is not a valid phone number.', phoneNumber: null};
        }
    } catch (error) {
        return { isValid: false, message: `An error occured while parsing: ${error.message}`, phoneNumber: null};
    }
}
