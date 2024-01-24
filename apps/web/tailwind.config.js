const { scopedPreflightStyles } = require("tailwindcss-scoped-preflight");
const sharedConfig = require("tailwind-config/tailwind.config.js");

module.exports = {
  presets: [sharedConfig],
  plugins: [
    // ... other plugins
    scopedPreflightStyles({
      cssSelector: ".twp", // or .tailwind-preflight or even [data-twp=true] - any valid CSS selector of your choice
      mode: "matched only", // it's the default
    }),
  ],
};
