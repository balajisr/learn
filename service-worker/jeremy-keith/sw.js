var cacheFiles = ['/css/reset.css']

//precaching
addEventListener('install', event => {
    caches.open('files').then(cache => {
        cache.addAll(cacheFiles);
    })
})

//cache first
addEventListener('fetch', event => {
    if(event.request.headers.get('Accept').includes('text/html')) {
      event.respondWith(fetch(event.request)).then(response => {
        return response;
      }).catch(error => {
        // return caches.match('offline.html');
        console.log('offline.html')
      })
    }
})