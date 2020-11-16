
# Service Worker
Today's web has absolved itself with lot of different patterns along its way all these years.

- **DOM** (Find Stuff, Do Stuff)
- **AJAX** (Update this part of page from server)
- **Web Worker** (As our javascript is gettting more and more complex, web workers help to run javascript in seperate thread. But, you don't have access to the DOM.)
- **Service Worker** (It is kind of web worker that runs on a seperate thread. It's like a man-in-middle attack with good intentions.)

## How it looks
When fetches files first time, it gets service worker file along with other files too

    client <--> www(networks) <--> server
Then service worker installs in browser and sits between client and network. It follows action based on instructions.

    client <--> SW <--> www(networks) <--> server
## Checklist
 -   It is mandatory to have 'https://'
 -   directory placement is important for scope of service worker.
 -   service worker can access async API's. Not sync API's.
## Lifecycle
1.  Register (get the js file 'serviceworker.js')
2.  Install (install in browser)
3.  Active (perform instructions)
4.  Update (when a single character changes in this file)
## Register

    <script>
	if(navigator.serviceWorker) {
	navigator.serviceWorker.register('/serviceWorker.js');
	}
    </script>
## Install
Once installed, it triggers an event which can initiate other instructions.
#### Precaching
when the service worker is installing, open a cache and put a bunch of files in that cache.

    addEventListener('install', event => {
      caches.open('files').then(cache => {
        cache.addAll(['/css/style.css','/js/script.js','/img/icon.png'])
      })
    })
#### Cache First
when a file is requested try to find that file in the cache first otherwise fetch the file from the network.

    addEventListener('fetch', event => {
      if(event.request.headers.get('Accept').includes('text/html')) {
        event.respondWith(fetch(event.request)).then(response => {
          return response;
        }).catch(error => {
          return caches.match('offline.html');
        })
      }
    })
#### Cache as you go
when a page is requested, try to fetch the page from the network first, and store a copy in the cache, otherwise try to retrieve the page from the cache, otherwise retrieve the offline page from the cache.
##### manifest.json
