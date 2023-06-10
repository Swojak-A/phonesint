const countryCodeMappings = {
    pl: {
        countryName: "Poland",
        countryCode: "PL",
        prefixSlice: 4,
        prefixesArray: ["", '+48', '0048', '48'],
        separatorsArray: [' ', '-', ''],
    },
    us: {
        countryName: "United States",
        countryCode: "US",
        prefixSlice: 3,
        prefixesArray: ["", '+1', '001', '1'],
        separatorsArray: [' ', '-', ''],
    },
    gb: {
        countryName: "United Kingdom",
        countryCode: "GB",
        prefixSlice: 4,
        prefixesArray: ["", '+44', '0044', '44'],
        separatorsArray: [' ', '-', ''],
    }
}

export default countryCodeMappings;
