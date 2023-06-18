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


export function formatNationalNumber(number, defaultSeparator, newSeparator) {
    return number.split(defaultSeparator).join(newSeparator);
}


export function generateFormats(formattedNumber, countryCode) {
    // In this case we rely on the fact that the number is formatted in certain way:
    // - starts with '+XX ' or `+X` (where XX/X is country code prefix)
    // - there are already pre-existing spaces in the national number
    // Without both of these assumptions fullfilled, the function will produce incorrect results.

    const countryCodeMapping = countryCodeMappings[countryCode.toLowerCase()];

    const nationalNumber = formattedNumber.slice(countryCodeMapping.prefixSlice);

    return countryCodeMapping.prefixes.reduce((formats, prefix) => {
        countryCodeMapping.separators.forEach(separator => {
            const reformattedNumber = formatNationalNumber(nationalNumber, countryCodeMapping.defaultSeparator, separator.value);
            const phoneNumber = `${prefix.value}${prefix.value ? " " : ""}${reformattedNumber}`;
            const meta = `${prefix.meta}; ${separator.meta}`.trim();
            formats.push({ phoneNumber, meta });
        });
        return formats;
    }, []);
}
