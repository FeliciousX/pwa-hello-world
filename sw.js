const cacheName = 'hello-world-pwa'

self.addEventListener('install', e => {
  console.log('SW: Installing...')
  self.skipWaiting()
  e.waitUntil(
    caches.open(cacheName).then(cache => {
      console.log('SW: Caching App Shell...')
      return cache.add('/pikto.png')
    })
  )
})

self.addEventListener('activate', e => {
  console.log(cacheName, 'is now ready to handle fetches!')
})

self.addEventListener('fetch', e => {
  console.log('SW: Intercepting', e.request)
  const url = new URL(e.request.url)

  if (url.origin === location.origin && url.pathname === '/dota2.png') {
    e.respondWith(
      caches.match('/pikto.png').then(resp => {
        return resp || fetch(e.request)
      })
    )
  }
})
