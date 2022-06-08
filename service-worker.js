/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "c874bc7c1479e7982f5a37fb8a319dbe"
  },
  {
    "url": "archives/index.html",
    "revision": "922beaad8966451ba2fec896bc26f006"
  },
  {
    "url": "assets/css/0.styles.31bcee9c.css",
    "revision": "675d958f0a2c097ef81664c89ec80ddb"
  },
  {
    "url": "assets/img/logo.png",
    "revision": "62fff6aeb544f1a458677d9b72993f01"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.be2735e7.js",
    "revision": "58663cec3c943fc89aacf421836517b7"
  },
  {
    "url": "assets/js/11.b2ba4821.js",
    "revision": "16b427474ff73a6c33ae56889749bb1a"
  },
  {
    "url": "assets/js/12.fb13cb8d.js",
    "revision": "eb8581d4406f4b6dee435e7f9920b4f4"
  },
  {
    "url": "assets/js/13.3dfa5380.js",
    "revision": "7d6ef8750071ce9091edf37137d8fba9"
  },
  {
    "url": "assets/js/14.605ceb13.js",
    "revision": "ff189bfcd022c5b497af22b5a949c32d"
  },
  {
    "url": "assets/js/15.5ce5ebde.js",
    "revision": "5070d5e0dd04a38098b9dc06c3a00fa6"
  },
  {
    "url": "assets/js/16.4e41a4e7.js",
    "revision": "0aebd7437fd71d6dded3cca2ca6d9609"
  },
  {
    "url": "assets/js/17.66b95ba4.js",
    "revision": "2414387fff406488c033f1ad8983e522"
  },
  {
    "url": "assets/js/18.c49544bc.js",
    "revision": "978ae8a497603843ae9f2a1e0ae502bb"
  },
  {
    "url": "assets/js/19.a8a933ec.js",
    "revision": "2d5141b56a8f29d4ce3c920e7cc6567f"
  },
  {
    "url": "assets/js/2.88bd9abc.js",
    "revision": "87aeef8027b7524bbe735a8b3fc67cfd"
  },
  {
    "url": "assets/js/20.4835e97a.js",
    "revision": "25d03d1186d1ba0886c634934a896bfe"
  },
  {
    "url": "assets/js/21.fa5069d0.js",
    "revision": "e6dd8cba0a96701bfb4cf48221a64bfc"
  },
  {
    "url": "assets/js/22.c665f8ec.js",
    "revision": "5e40b609c3168f4072a0da0a0215d7d5"
  },
  {
    "url": "assets/js/23.68b4e98a.js",
    "revision": "9d2fec25893b28d098b27a39564de093"
  },
  {
    "url": "assets/js/24.e6e6785a.js",
    "revision": "95a0a94aa875e7a2026c7e643f60aa31"
  },
  {
    "url": "assets/js/25.f96c049d.js",
    "revision": "9b08ef95853030330215d3ae177dd2bb"
  },
  {
    "url": "assets/js/3.32447bd8.js",
    "revision": "13b3de06ba0f9c5812f423ec20905bee"
  },
  {
    "url": "assets/js/4.c5e2db95.js",
    "revision": "68fb1838c5ad00849599902fc4d12aaa"
  },
  {
    "url": "assets/js/5.8898080f.js",
    "revision": "cdb38215acd9aa5b02890369385428fc"
  },
  {
    "url": "assets/js/6.10dcfb95.js",
    "revision": "a3ffea2fe7cbeb579b8ebdd96c82968e"
  },
  {
    "url": "assets/js/7.7ab9ee50.js",
    "revision": "f181721519637eb750e6b7b8175549ba"
  },
  {
    "url": "assets/js/8.2582c36e.js",
    "revision": "709263892a87ff21136b3c7ad70224df"
  },
  {
    "url": "assets/js/9.6f3a58d6.js",
    "revision": "db79967410d865192292278d3f27dd97"
  },
  {
    "url": "assets/js/app.da0710ff.js",
    "revision": "bdc3aa848e86d0630a1f45450f1e0ed0"
  },
  {
    "url": "categories/index.html",
    "revision": "06e6f3222f4efdbc2631f71185f72916"
  },
  {
    "url": "css/c-aaa.html",
    "revision": "5c13282ef2c9ea70ad1a8101f1a02ab7"
  },
  {
    "url": "css/c-bbb.html",
    "revision": "197cf7396e8123c0f38af4cb059ab7d4"
  },
  {
    "url": "css/c-ccc.html",
    "revision": "652393eec7f9beee91ab820acc14f60f"
  },
  {
    "url": "icon-192x192.png",
    "revision": "e6157e214bc046c0cbbae2e470cc42f7"
  },
  {
    "url": "icon-384x384.png",
    "revision": "c8e12b0171aa1abfc5668396b7bbf77c"
  },
  {
    "url": "icon-512x512.png",
    "revision": "fbe25362293f30dc0c7ea1b38f655476"
  },
  {
    "url": "index.html",
    "revision": "2e9ce455da5dc43e0050841865cec342"
  },
  {
    "url": "pages/0f8bb5/index.html",
    "revision": "c45b69524db079beb0d6997553bdd7b1"
  },
  {
    "url": "pages/18ed16/index.html",
    "revision": "2cc3c1fe2a62cf5a40ce0284359209f0"
  },
  {
    "url": "pages/329cd6/index.html",
    "revision": "fffb05242a2faf8ef7c420497d99a6ae"
  },
  {
    "url": "pages/45964a/index.html",
    "revision": "8826d322f71c06ef52efccc2d09907dc"
  },
  {
    "url": "pages/45bc72/index.html",
    "revision": "d70dce0cfb1491e893d50eb645bea429"
  },
  {
    "url": "pages/4b4c39/index.html",
    "revision": "1d1958d2c1beae4c51136bf46fcee182"
  },
  {
    "url": "pages/6feec4/index.html",
    "revision": "8f7d77ded97af75800945bbc73bc1a11"
  },
  {
    "url": "pages/780068/index.html",
    "revision": "fc3e0553034f11021e8254072fed26c1"
  },
  {
    "url": "pages/d61090/index.html",
    "revision": "2d3c86be8e45a8d3e4e3657f5d21c7c6"
  },
  {
    "url": "pages/edd17f/index.html",
    "revision": "d58865828b6fc9b61a536f540eb350c7"
  },
  {
    "url": "tags/index.html",
    "revision": "21c8d1ad01c03d70fe459f3a3a7cddb4"
  },
  {
    "url": "theme/index.js",
    "revision": "c493bf7545b70dee02870d8d52d2cb36"
  },
  {
    "url": "theme/util/index.js",
    "revision": "c8852d2ab7732d28b5c9a0a7799cb7ec"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
