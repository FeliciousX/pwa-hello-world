if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js')
    .then(reg => console.log('SW: Registered!', reg))
    .catch(err => console.log('SW Error:', err))

  setTimeout(() => {
    const img = new Image()
    img.src = '/dota2.png'
    document.querySelector('h1').innerHTML = 'Hello PWA!'
    document.body.appendChild(img)
  }, 3000)
}
