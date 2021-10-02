const cacheName = 'hello-world-pwa'
const filesToCache = [
  '/',
  '/index.html',
  '/src/index.js'
]

self.addEventListener('install', e => {
  console.log('SW: Installing...')
  e.waitUntil(
    caches.open(cacheName).then(cache => {
      console.log('SW: Caching App Shell...')
      return cache.addAll(filesToCache)
    })
  )
  self.skipWaiting()
})

self.addEventListener('fetch', e => {
  console.log('SW: Intercepting', e.request)
  e.respondWith(
    caches.match(e.request).then(resp => {
      return resp || fetch(e.request)
    })
  )
})
