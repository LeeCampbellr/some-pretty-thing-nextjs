const path = require("path")

module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["dev.someprettything.com", "spt.nyc3.digitaloceanspaces.com"],
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "utils")],
  },
}
