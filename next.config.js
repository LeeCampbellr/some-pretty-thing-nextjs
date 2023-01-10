const withReactSvg = require("next-react-svg")
const path = require("path")

module.exports = withReactSvg({
  reactStrictMode: true,
  images: {
    domains: [
      "dev.someprettything.com",
      "spt.nyc3.digitaloceanspaces.com",
      "img.shopstyle-cdn.com",
      "i.ytimg.com",
    ],
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "utils")],
  },

  include: path.resolve(__dirname, "assets"),
  webpack(config, options) {
    return config
  },
})
