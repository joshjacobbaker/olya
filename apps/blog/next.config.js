/** @type {import('next').NextConfig} */
const withTM = require("next-transpile-modules")(["ui"])

module.exports = withTM({
  reactStrictMode: true,
  images: {
    domains: ["loremflickr.com"],
  },
})
