const withPWA = require('next-pwa')
const runtimeCaching = require('next-pwa/cache')
const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true',
})


module.exports = withBundleAnalyzer({
    /* Caso tenha outros plugins envolva eles com o bundle */
});

module.exports = withPWA({
  pwa: {
    dest: 'public',
    runtimeCaching,
  },
})
