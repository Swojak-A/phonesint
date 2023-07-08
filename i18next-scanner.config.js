module.exports = {
  input: [
    "src/**/*.{js,jsx}", // Scan for js and jsx files
    // Use ! to filter out files or directories
    "!**/node_modules/**",
  ],
  output: "./src/locales/",
  options: {
    debug: false,
    sort: false,
    removeUnusedKeys: true,
    func: {
      list: ["i18next.t", "i18n.t", "t"], // Use t function for translation
      extensions: [".js", ".jsx"],
    },
    lngs: ["en", "pl"],
    defaultLng: "en",
    defaultNs: "translation",
    defaultValue: "__STRING_NOT_TRANSLATED__",
    resource: {
      loadPath: "{{lng}}/missing/{{ns}}.json",
      savePath: "{{lng}}/missing/{{ns}}.json",
      jsonIndent: 2,
      lineEnding: "\n",
    },
  },
};
