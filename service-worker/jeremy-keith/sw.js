var cacheFiles = ['/css/reset.css']

//precaching
addEventListener('install', event => {
    caches.open('files').then(cache => {
        cache.addAll(cacheFiles);
    })
})

//cache first
addEventListener('fetch', event => {
  var acceptHeaders = event.request.headers.get('Accept');
  if(acceptHeaders.includes('text/html') || acceptHeaders.includes('text/css')) {
    event.respondWith(fetch(event.request)).then(response => {
      return response;
    }).catch(error => {
      // return caches.match('offline.html');
    })
  }
})