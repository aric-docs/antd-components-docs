module.exports = {
  maximumFileSizeToCacheInBytes: 100 * 1024 * 1024,
  globDirectory: 'dist/',
  globPatterns: ['**/*.{js,png,svg,json,txt,css,map}'],
  globIgnores: ['*/fallback.js'],
  globFollow: true,
  swDest: 'dist/sw.js',
  skipWaiting: false,
  clientsClaim: false,
  runtimeCaching: [
    {
      urlPattern: /\/static\/js\//,
      handler: 'CacheFirst',
      options: { cacheName: 'static-js' }
    },
    {
      urlPattern: /\/static\/css\//,
      handler: 'CacheFirst',
      options: {
        cacheName: 'static-css'
      }
    },
    {
      urlPattern: /\/static\/media\//,
      handler: 'CacheFirst',
      options: {
        cacheName: 'static-media'
      }
    },
    {
      urlPattern: /^https:\/\/unpkg\.com/,
      handler: 'CacheFirst',
      options: {
        cacheName: 'unpkg',
        cacheableResponse: {
          statuses: [0, 200]
        }
      }
    },
    {
      urlPattern: /^https:\/\/at\.alicdn\.com/,
      handler: 'CacheFirst',
      options: {
        cacheName: 'at-alicdn',
        cacheableResponse: {
          statuses: [0, 200]
        }
      }
    }
  ]
};
