/** @type {import('next').NextConfig} */
const path = require('path')

const nextConfig = {
    scssOptions: {
        includePaths: [path.join(__dirname, 'styles'), __dirname],
      },
}

module.exports = nextConfig