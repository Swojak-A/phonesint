const countryCodeMappings = {
    pl: {
        countryName: "Poland",
        countryCode: "PL",
        prefixSlice: 4,
        prefixes: [{value: "", meta: "No prefix"}, {value: '+48', meta:"Prefix with plus"}, {value: '0048', meta: "Prefix with zeros"}, {value:'48', meta: "Normal prefix"}],
        separators: [{value: ' ', meta: "Empty spaces"}, {value: '-', meta: "Dash separator"}, {value:'', meta:"No separator"}]
    },
    us: {
        countryName: "United States",
        countryCode: "US",
        prefixSlice: 3,
        prefixes: [{value: '', meta: 'No prefix'}, {value: '+1', meta: 'Prefix with plus'}, {value: '001', meta: 'Prefix with zeros'}, {value: '1', meta: 'Normal prefix'}],
        separators: [{value: ' ', meta: "Empty spaces"}, {value: '-', meta: "Dash separator"}, {value:'', meta:"No separator"}]
    },
    gb: {
        countryName: "United Kingdom",
        countryCode: "GB",
        prefixSlice: 4,
        prefixes: [{value: '', meta: 'No prefix'}, {value: '+44', meta: 'Prefix with plus'}, {value: '0044', meta: 'Prefix with zeros'}, {value: '44', meta: 'Normal prefix'}],
        separators: [{value: ' ', meta: "Empty spaces"}, {value: '-', meta: "Dash separator"}, {value:'', meta:"No separator"}]
    }
}

export default countryCodeMappings;
