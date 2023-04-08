const path = require("path")

const nextReactSvgConfig = {
  include: path.resolve(__dirname, "assets"),
}

const nextConfig = {
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
}

const withReactSvg = require("next-react-svg")(nextReactSvgConfig)

module.exports = withReactSvg(nextConfig)
