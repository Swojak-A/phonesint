export function encodeGoogleSearchQuery(queriedNumber, quotationMarks = true) {
  let queryString;

  if (quotationMarks) {
    if (Array.isArray(queriedNumber)) {
      queryString = queriedNumber.map((q) => `"${q}"`).join("+OR+");
    } else {
      queryString = `"${queriedNumber}"`;
    }
  } else {
    if (Array.isArray(queriedNumber)) {
      queryString = queriedNumber.join("+OR+");
    } else {
      queryString = queriedNumber;
    }
  }

  return `https://www.google.com/search?q=${encodeURIComponent(
    queryString
  ).replace(/%20/g, "+")}`;
}
