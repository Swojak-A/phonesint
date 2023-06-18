
export function encodeGoogleSearchQuery(queriedNumber) {
    let queryString;
    
    if (Array.isArray(queriedNumber)) {
        queryString = queriedNumber.map(q => `"${q}"`).join('+OR+');
    } else {
        queryString = `"${queriedNumber}"`;
    }

    return `https://www.google.com/search?q=${encodeURIComponent(queryString).replace(/%20/g, '+')}`;
}
