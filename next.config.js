'use strict'

/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: process.env.BASEPATH,

  // TODO: below line is added to resolve twice event dispatch in the calendar reducer
  reactStrictMode: false
}

// next.config.js
module.exports = {
  eslint: {
    ignoreDuringBuilds: true
  },
  typescript: {
    ignoreBuildErrors: true
  }
}
