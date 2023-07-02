const countryCodeMappings = {
  pl: {
    countryName: "Poland",
    countryCode: "PL",
    prefixSlice: 4,
    defaultSeparator: " ",
    prefixes: [
      { value: "", meta: "prefix_no_prefix" },
      { value: "+48", meta: "prefix_plus" },
      { value: "0048", meta: "prefix_zeros" },
      { value: "48", meta: "prefix_standard" },
    ],
    separators: [
      { value: " ", meta: "separator_empty" },
      { value: "-", meta: "separator_dash" },
      { value: "", meta: "separator_no_separator" },
    ],
  },
  us: {
    countryName: "United States",
    countryCode: "US",
    prefixSlice: 3,
    defaultSeparator: "-",
    prefixes: [
      { value: "", meta: "prefix_no_prefix" },
      { value: "+1", meta: "prefix_plus" },
      { value: "001", meta: "prefix_zeros" },
      { value: "1", meta: "prefix_standard" },
    ],
    separators: [
      { value: " ", meta: "separator_empty" },
      { value: "-", meta: "separator_dash" },
      { value: "", meta: "separator_no_separator" },
    ],
  },
  gb: {
    countryName: "United Kingdom",
    countryCode: "GB",
    prefixSlice: 4,
    defaultSeparator: " ",
    prefixes: [
      { value: "", meta: "prefix_no_prefix" },
      { value: "+44", meta: "prefix_plus" },
      { value: "0044", meta: "prefix_zeros" },
      { value: "44", meta: "prefix_standard" },
    ],
    separators: [
      { value: " ", meta: "separator_empty" },
      { value: "-", meta: "separator_dash" },
      { value: "", meta: "prefix_standard" },
    ],
  },
};

export default countryCodeMappings;
