importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/23d0c54b796ae98009b1.js",
    "revision": "8b19ee3aea08cbb692096236c62fdfcf"
  },
  {
    "url": "/_nuxt/44fcb5bde0f9e0d03d80.js",
    "revision": "d0daecc327eb49db4d4db1c663e5f035"
  },
  {
    "url": "/_nuxt/467d66693bdba2086c30.js",
    "revision": "5bc6b6dda89645c53d76b93cd0d8910a"
  },
  {
    "url": "/_nuxt/4984f5e5155c4c96595f.js",
    "revision": "6155975f29137aa6d5227dce63af9365"
  },
  {
    "url": "/_nuxt/523b9d8e6c9fd141b1e7.js",
    "revision": "32bb5c290d4db96be3fe89b6a981b2ac"
  },
  {
    "url": "/_nuxt/5d6efb29605afd3c0057.js",
    "revision": "929651d4d8d8f28e092fb9fc96407906"
  },
  {
    "url": "/_nuxt/6f19469468e7112d6365.js",
    "revision": "b18664dfc388b4a2f84d0d7a62985269"
  },
  {
    "url": "/_nuxt/716b77c4bbac13f758ed.js",
    "revision": "3ece34dcfae155c3f28d7ead53db53a0"
  },
  {
    "url": "/_nuxt/817057561e11a589f521.js",
    "revision": "7c220c6c117488423227d25c45ba7534"
  },
  {
    "url": "/_nuxt/9e630c34ba2010196a2f.js",
    "revision": "455bd603cf082a354de1608729aff26b"
  },
  {
    "url": "/_nuxt/abf62009d4339807a41e.js",
    "revision": "16d7371ebde615b9f1ddbed18e73900d"
  },
  {
    "url": "/_nuxt/c1b527ae5cc1e0a61e77.js",
    "revision": "0f01231314cfbf35be2982ffd85c78e1"
  },
  {
    "url": "/_nuxt/c6aff73e3b483b0349ee.js",
    "revision": "69463afc133ae219b946031624fb3c4b"
  },
  {
    "url": "/_nuxt/dcfb6af6d27cfe56cbcc.js",
    "revision": "74e6325d2845d90c3cca7aad54f613ba"
  },
  {
    "url": "/_nuxt/f9515fd25ab430a3e581.js",
    "revision": "4b7a93ac022fe4b2bc83b56d8077ab53"
  }
], {
  "cacheId": "multisender.app",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')
