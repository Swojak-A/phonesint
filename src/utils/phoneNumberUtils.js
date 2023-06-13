import { parse, isValidNumber } from 'google-libphonenumber';

import countryCodeMappings from "../consts/countryCodeMappings";


const phoneUtil = require('google-libphonenumber').PhoneNumberUtil.getInstance();
const PNF = require('google-libphonenumber').PhoneNumberFormat;

const PLMobileStarts = ["45", "50", "51", "53", "57", "60", "66", "69", "72", "73", "78", "79", "88"];


export function determinePLMobileNumber(plNumber) {
    let isMobile = PLMobileStarts.some(start => plNumber.startsWith(start));

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
            if (countryCode.toLowerCase() === 'pl') {
                formattedNumber = formatPLPhoneNumber(phoneNumber);
            } else {
                formattedNumber = phoneUtil.format(phoneNumber, PNF.INTERNATIONAL);
            }
            return { isValid: true, message: `Good job! Your input was: ${formattedNumber}`, phoneNumber: formattedNumber};
        } else {
            return { isValid: false, message: 'This input does not seem to be a valid phone number.', phoneNumber: null};
        }
    } catch (error) {
        return { isValid: false, message: `An error occured while parsing: ${error.message}`, phoneNumber: null};
    }
}


export function formatNationalNumber(number, separator) {
    return number.split(' ').join(separator);
}


export function generateFormats(formattedNumber, countryCode) {
    // In this case we rely on the fact that the number is formatted in certain way:
    // - starts with '+XX ' (where XX is country code)
    // - there are already pre-existing spaces in the national number
    // Without both of these assumptions present, the function will produce incorrect results.

    console.log(`generateFormats, formatted number: ${formattedNumber}`);

    const countryCodeMapping = countryCodeMappings[countryCode.toLowerCase()];

    const nationalNumber = formattedNumber.slice(countryCodeMapping.prefixSlice);

    return countryCodeMapping.prefixesArray.reduce((formats, prefix) => {
        countryCodeMapping.separatorsArray.forEach(separator => {
            const reformattedNumber = formatNationalNumber(nationalNumber, separator);
            formats.push(`${prefix}${prefix ? " " : ""}${reformattedNumber}`);
        });
        return formats;
    }, []);
}
