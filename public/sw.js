importScripts('/scripts/serviceworker-cache-polyfill.js');

self.addEventListener('install',function (e) {
  e.waitUntil(
    caches.open('calculator').then(function (cache) {return cache.addAll([
            '/',
            '/index.html',
            '/scripts/app.js',
            '/css/normalize.css',
            '/css/app.css'
        ])
      })
    );
  });

self.addEventListener('fetch',function (event) {
  console.log(event.request.url);
});
