/**
 * Copyright 2018 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *     http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// If the loader is already loaded, just stop.
if (!self.define) {
  const singleRequire = name => {
    if (name !== 'require') {
      name = name + '.js';
    }
    let promise = Promise.resolve();
    if (!registry[name]) {
      
        promise = new Promise(async resolve => {
          if ("document" in self) {
            const script = document.createElement("script");
            script.src = name;
            document.head.appendChild(script);
            script.onload = resolve;
          } else {
            importScripts(name);
            resolve();
          }
        });
      
    }
    return promise.then(() => {
      if (!registry[name]) {
        throw new Error(`Module ${name} didn’t register its module`);
      }
      return registry[name];
    });
  };

  const require = (names, resolve) => {
    Promise.all(names.map(singleRequire))
      .then(modules => resolve(modules.length === 1 ? modules[0] : modules));
  };
  
  const registry = {
    require: Promise.resolve(require)
  };

  self.define = (moduleName, depsNames, factory) => {
    if (registry[moduleName]) {
      // Module is already loading or loaded.
      return;
    }
    registry[moduleName] = Promise.resolve().then(() => {
      let exports = {};
      const module = {
        uri: location.origin + moduleName.slice(1)
      };
      return Promise.all(
        depsNames.map(depName => {
          switch(depName) {
            case "exports":
              return exports;
            case "module":
              return module;
            default:
              return singleRequire(depName);
          }
        })
      ).then(deps => {
        const facValue = factory(...deps);
        if(!exports.default) {
          exports.default = facValue;
        }
        return exports;
      });
    });
  };
}
define("./service-worker.js",['./workbox-915bc96f'], function (workbox) { 'use strict';

  /**
  * Welcome to your Workbox-powered service worker!
  *
  * You'll need to register this file in your web app.
  * See https://goo.gl/nhQhGp
  *
  * The rest of the code is auto-generated. Please don't update this file
  * directly; instead, make changes to your Workbox build configuration
  * and re-run your build process.
  * See https://goo.gl/2aRDsh
  */

  self.addEventListener('message', event => {
    if (event.data && event.data.type === 'SKIP_WAITING') {
      self.skipWaiting();
    }
  });
  /**
   * The precacheAndRoute() method efficiently caches and responds to
   * requests for URLs in the manifest.
   * See https://goo.gl/S9QRab
   */

  workbox.precacheAndRoute([{
    "url": "/icon_1024x1024.11da271efb46ea94ba05134ef7f70996.png",
    "revision": "11da271efb46ea94ba05134ef7f70996"
  }, {
    "url": "/icon_128x128.f7272cbb20901dac6d70026cd8d2cf26.png",
    "revision": "f7272cbb20901dac6d70026cd8d2cf26"
  }, {
    "url": "/icon_192x192.dcecbcd265dbdfa9ae72305231132eb8.png",
    "revision": "dcecbcd265dbdfa9ae72305231132eb8"
  }, {
    "url": "/icon_256x256.1b34bb127cef1fc276ec46fe8530a383.png",
    "revision": "1b34bb127cef1fc276ec46fe8530a383"
  }, {
    "url": "/icon_384x384.de5a10f1a6f9c51b1cdae5c345f0c713.png",
    "revision": "de5a10f1a6f9c51b1cdae5c345f0c713"
  }, {
    "url": "/icon_512x512.c5927aa0d644e4e52081d28458c9d01a.png",
    "revision": "c5927aa0d644e4e52081d28458c9d01a"
  }, {
    "url": "/icon_96x96.556ec27e8c38a4b1947c6f81ed8cd1b6.png",
    "revision": "556ec27e8c38a4b1947c6f81ed8cd1b6"
  }, {
    "url": "/index.html",
    "revision": "8a9b60fc1e5e45c3959e48e0c0ffe9dc"
  }, {
    "url": "/manifest.3d329a0913d0bd4053a7b360c7b19ebb.json",
    "revision": "3d329a0913d0bd4053a7b360c7b19ebb"
  }, {
    "url": "/src_pages_Favs_js.app.bundle.js",
    "revision": "eff8f9aa9f3024840f90c49f39730c64"
  }, {
    "url": "/src_pages_User_js.app.bundle.js",
    "revision": "973a9668d38520481363370e5c1aa55a"
  }, {
    "url": "/vendors-node_modules_intersection-observer_intersection-observer_js.app.bundle.js",
    "revision": "69ba7318bfb82d786abec6b72622cc4f"
  }], {});
  workbox.registerRoute(/https:\/\/petgram-server.damianvigo.vercel.app\//, new workbox.NetworkFirst({
    "cacheName": "api",
    plugins: []
  }), 'GET');

});
