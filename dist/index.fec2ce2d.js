// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"8mjwl":[function(require,module,exports) {
"use strict";
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "ae738161fec2ce2d";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"9u7qN":[function(require,module,exports) {
var _pexels = require("pexels");
var _dotenv = require("dotenv");
var _loandings = require("./components/Loandings");
var _modal404 = require("./components/Modal404");
var _buttonUp = require("./components/ButtonUp");
var _footer = require("./components/Footer");
var _photosBig = require("./components/PhotosBig");
var _modal = require("./components/Modal");
_dotenv.config();
const CLAVE_API_PEXELS = "563492ad6f917000010000013873317c4e6e45bcb487b545be484bf4";
const client = (0, _pexels.createClient)(CLAVE_API_PEXELS);
let queryBoxAllPhotos = document.querySelector("#section-img-all");
let containerbigPhoto = document.querySelector("#section-img-one-big");
const buttonSeach = document.querySelector("#button-seach");
const elementinput = document.querySelector("#buscador");
const input_seach = document.querySelector("#buscador");
let buttonMorePhotos = document.createElement("button");
buttonMorePhotos.innerHTML = "<span></span><span></span><span></span><span></span>Mostrar mas";
buttonMorePhotos.id = "button-more-photos";
let wanted;
let contador = 1;
newPhoto();
//return Button of mores photos
const Morephotos = (result = 0)=>{
    buttonMorePhotos.addEventListener("click", ()=>{
        (0, _loandings.Loadings)();
        contador++;
        input_seach.value == "" ? newPhoto(contador) : seachPhotos(input_seach.value, contador);
    });
    if (buttonMorePhotos.isConnected) buttonMorePhotos.remove();
    window.onscroll = ()=>{
        (0, _buttonUp.ButtonUp)(true);
        if (document.documentElement.scrollTop > 50 && result >= 78) document.getElementById("content-button-more").appendChild(buttonMorePhotos);
        document.documentElement.scrollTop > 10 && (0, _buttonUp.ButtonUp)();
    };
};
//return new photos
function newPhoto(page = 1) {
    (0, _loandings.Loadings)();
    client.photos.curated({
        page: page,
        per_page: 80
    }).then((photos)=>{
        (0, _photosBig.PhotoBig)(photos.photos[0], page);
        seephotos(photos);
        Morephotos(photos.total_results);
    });
}
const infiniti = ()=>{
    if (input_seach.value == "Ana zamora") {
        (0, _photosBig.removerImgBig)(true);
        Morephotos();
        while(queryBoxAllPhotos.firstChild)queryBoxAllPhotos.removeChild(queryBoxAllPhotos.firstChild);
        require("4da25acb7662aee5").then((infiniti)=>infiniti.Infinito());
    } else {
        if (input_seach.value != wanted) seachPhotos(input_seach.value);
        else if (input_seach.value == "") alert("Ingresar una palabra!");
        else alert("ya esta Mostrada!");
    }
};
buttonSeach.addEventListener("click", infiniti);
elementinput.addEventListener("keydown", (e)=>{
    if (e.key == "Enter") infiniti();
});
//return photos seachs
function seachPhotos(query, page = 1) {
    (0, _modal.removerModal)();
    (0, _loandings.Loadings)();
    client.photos.search({
        query,
        page,
        per_page: 80
    }).then((photos)=>{
        seephotos(photos);
        Morephotos(photos.total_results);
        wanted = query;
    });
}
// return photos and see photos on the app
const seephotos = (photos)=>{
    if (input_seach.value == "") ;
    else if (input_seach.value != "" && input_seach.value != wanted) {
        while(queryBoxAllPhotos.firstChild)queryBoxAllPhotos.removeChild(queryBoxAllPhotos.firstChild);
        containerbigPhoto.firstChild && containerbigPhoto.remove();
        (0, _photosBig.removerImgBig)(true);
        contador = 1;
    }
    if (photos.total_results != 0) {
        (0, _modal404.Modals)(true);
        photos.photos.map((photo)=>{
            const img = document.createElement("img");
            img.loading = "eager";
            img.style = `background-color:${photo.avg_color}`;
            img.src = `${photo.src.portrait}`;
            img.alt = photo.alt;
            img.addEventListener("click", (e)=>(0, _modal.ModalInfo)(photo));
            //img.addEventListener("click",(e)=> import("./components/Modal").then(modal=>modal.ModalInfo(photo)))
            queryBoxAllPhotos.appendChild(img);
        });
    } else if (photos.total_results == 0) (0, _modal404.Modals)();
    (0, _footer.Footer)();
};

},{"pexels":"h38pK","dotenv":"lErsX","./components/Loandings":"lAD5c","./components/Modal404":"fUW4j","./components/ButtonUp":"cWeyc","./components/Footer":"7hLEw","./components/PhotosBig":"daIyF","./components/Modal":"aD677","4da25acb7662aee5":"f89AV"}],"h38pK":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createClient", ()=>c);
var process = require("process");
process;
var t = {
    photo: "https://api.pexels.com/v1/",
    video: "https://api.pexels.com/videos/",
    collections: "https://api.pexels.com/v1/collections/"
};
function r(r, e) {
    var n = {
        method: "GET",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "User-Agent": "Pexels/JavaScript",
            Authorization: r
        }
    }, o = t[e];
    return function(t, r) {
        return fetch("" + o + t + "?" + function(t) {
            return Object.keys(t).map(function(r) {
                return r + "=" + t[r];
            }).join("&");
        }(r || {}), n).then(function(t) {
            if (!t.ok) throw new Error(t.statusText);
            return t.json();
        });
    };
}
function e(t) {
    var e = r(t, "collections");
    return {
        all: function(t) {
            return void 0 === t && (t = {}), e("", t);
        },
        media: function(t) {
            var r = t.id, n = function(t, r) {
                if (null == t) return {};
                var e, n, o = {}, i = Object.keys(t);
                for(n = 0; n < i.length; n++)r.indexOf(e = i[n]) >= 0 || (o[e] = t[e]);
                return o;
            }(t, [
                "id"
            ]);
            return e("" + r, n);
        },
        featured: function(t) {
            return void 0 === t && (t = {}), e("featured", t);
        }
    };
}
function n(t) {
    return !(!t || !t.photos);
}
var o = {
    __proto__: null,
    isPhotos: n,
    isVideos: function(t) {
        return !(!t || !t.videos);
    },
    isError: function(t) {
        return !!t.error;
    }
};
function i(t) {
    var e = r(t, "photo");
    return {
        search: function(t) {
            return e("/search", t);
        },
        curated: function(t) {
            return void 0 === t && (t = {}), e("/curated", t);
        },
        show: function(t) {
            return e("/photos/" + t.id);
        },
        random: function() {
            try {
                var t = Math.floor(1e3 * Math.random());
                return Promise.resolve(this.curated({
                    page: t,
                    per_page: 1
                })).then(function(t) {
                    return n(t) ? t.photos[0] : t;
                });
            } catch (t1) {
                return Promise.reject(t1);
            }
        }
    };
}
function u(t) {
    var e = r(t, "video");
    return {
        search: function(t) {
            return e("/search", t);
        },
        popular: function(t) {
            return void 0 === t && (t = {}), e("/popular", t);
        },
        show: function(t) {
            return e("/videos/" + t.id);
        }
    };
}
function c(t) {
    if (!t || "string" != typeof t) throw new TypeError("An ApiKey must be provided when initiating the Pexel's client.");
    return {
        typeCheckers: o,
        photos: i(t),
        videos: u(t),
        collections: e(t)
    };
}
require("isomorphic-fetch");

},{"process":"d5jf4","isomorphic-fetch":"fy50b","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"d5jf4":[function(require,module,exports) {
// shim for using process in browser
var process = module.exports = {};
// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.
var cachedSetTimeout;
var cachedClearTimeout;
function defaultSetTimout() {
    throw new Error("setTimeout has not been defined");
}
function defaultClearTimeout() {
    throw new Error("clearTimeout has not been defined");
}
(function() {
    try {
        if (typeof setTimeout === "function") cachedSetTimeout = setTimeout;
        else cachedSetTimeout = defaultSetTimout;
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === "function") cachedClearTimeout = clearTimeout;
        else cachedClearTimeout = defaultClearTimeout;
    } catch (e1) {
        cachedClearTimeout = defaultClearTimeout;
    }
})();
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) //normal enviroments in sane situations
    return setTimeout(fun, 0);
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch (e1) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }
}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) //normal enviroments in sane situations
    return clearTimeout(marker);
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e1) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }
}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;
function cleanUpNextTick() {
    if (!draining || !currentQueue) return;
    draining = false;
    if (currentQueue.length) queue = currentQueue.concat(queue);
    else queueIndex = -1;
    if (queue.length) drainQueue();
}
function drainQueue() {
    if (draining) return;
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;
    var len = queue.length;
    while(len){
        currentQueue = queue;
        queue = [];
        while(++queueIndex < len)if (currentQueue) currentQueue[queueIndex].run();
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}
process.nextTick = function(fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) for(var i = 1; i < arguments.length; i++)args[i - 1] = arguments[i];
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) runTimeout(drainQueue);
};
// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function() {
    this.fun.apply(null, this.array);
};
process.title = "browser";
process.browser = true;
process.env = {};
process.argv = [];
process.version = ""; // empty string to avoid regexp issues
process.versions = {};
function noop() {}
process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;
process.listeners = function(name) {
    return [];
};
process.binding = function(name) {
    throw new Error("process.binding is not supported");
};
process.cwd = function() {
    return "/";
};
process.chdir = function(dir) {
    throw new Error("process.chdir is not supported");
};
process.umask = function() {
    return 0;
};

},{}],"fy50b":[function(require,module,exports) {
// the whatwg-fetch polyfill installs the fetch() function
// on the global object (window or self)
//
// Return that as the export for use in Webpack, Browserify etc.
require("whatwg-fetch");
module.exports = self.fetch.bind(self);

},{"whatwg-fetch":"fBkAK"}],"fBkAK":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Headers", ()=>Headers);
parcelHelpers.export(exports, "Request", ()=>Request);
parcelHelpers.export(exports, "Response", ()=>Response);
parcelHelpers.export(exports, "DOMException", ()=>DOMException);
parcelHelpers.export(exports, "fetch", ()=>fetch);
var global = typeof globalThis !== "undefined" && globalThis || typeof self !== "undefined" && self || typeof global !== "undefined" && global;
var support = {
    searchParams: "URLSearchParams" in global,
    iterable: "Symbol" in global && "iterator" in Symbol,
    blob: "FileReader" in global && "Blob" in global && function() {
        try {
            new Blob();
            return true;
        } catch (e) {
            return false;
        }
    }(),
    formData: "FormData" in global,
    arrayBuffer: "ArrayBuffer" in global
};
function isDataView(obj) {
    return obj && DataView.prototype.isPrototypeOf(obj);
}
if (support.arrayBuffer) {
    var viewClasses = [
        "[object Int8Array]",
        "[object Uint8Array]",
        "[object Uint8ClampedArray]",
        "[object Int16Array]",
        "[object Uint16Array]",
        "[object Int32Array]",
        "[object Uint32Array]",
        "[object Float32Array]",
        "[object Float64Array]"
    ];
    var isArrayBufferView = ArrayBuffer.isView || function(obj) {
        return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1;
    };
}
function normalizeName(name) {
    if (typeof name !== "string") name = String(name);
    if (/[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(name) || name === "") throw new TypeError('Invalid character in header field name: "' + name + '"');
    return name.toLowerCase();
}
function normalizeValue(value) {
    if (typeof value !== "string") value = String(value);
    return value;
}
// Build a destructive iterator for the value list
function iteratorFor(items) {
    var iterator = {
        next: function() {
            var value = items.shift();
            return {
                done: value === undefined,
                value: value
            };
        }
    };
    if (support.iterable) iterator[Symbol.iterator] = function() {
        return iterator;
    };
    return iterator;
}
function Headers(headers) {
    this.map = {};
    if (headers instanceof Headers) headers.forEach(function(value, name) {
        this.append(name, value);
    }, this);
    else if (Array.isArray(headers)) headers.forEach(function(header) {
        this.append(header[0], header[1]);
    }, this);
    else if (headers) Object.getOwnPropertyNames(headers).forEach(function(name) {
        this.append(name, headers[name]);
    }, this);
}
Headers.prototype.append = function(name, value) {
    name = normalizeName(name);
    value = normalizeValue(value);
    var oldValue = this.map[name];
    this.map[name] = oldValue ? oldValue + ", " + value : value;
};
Headers.prototype["delete"] = function(name) {
    delete this.map[normalizeName(name)];
};
Headers.prototype.get = function(name) {
    name = normalizeName(name);
    return this.has(name) ? this.map[name] : null;
};
Headers.prototype.has = function(name) {
    return this.map.hasOwnProperty(normalizeName(name));
};
Headers.prototype.set = function(name, value) {
    this.map[normalizeName(name)] = normalizeValue(value);
};
Headers.prototype.forEach = function(callback, thisArg) {
    for(var name in this.map)if (this.map.hasOwnProperty(name)) callback.call(thisArg, this.map[name], name, this);
};
Headers.prototype.keys = function() {
    var items = [];
    this.forEach(function(value, name) {
        items.push(name);
    });
    return iteratorFor(items);
};
Headers.prototype.values = function() {
    var items = [];
    this.forEach(function(value) {
        items.push(value);
    });
    return iteratorFor(items);
};
Headers.prototype.entries = function() {
    var items = [];
    this.forEach(function(value, name) {
        items.push([
            name,
            value
        ]);
    });
    return iteratorFor(items);
};
if (support.iterable) Headers.prototype[Symbol.iterator] = Headers.prototype.entries;
function consumed(body) {
    if (body.bodyUsed) return Promise.reject(new TypeError("Already read"));
    body.bodyUsed = true;
}
function fileReaderReady(reader) {
    return new Promise(function(resolve, reject) {
        reader.onload = function() {
            resolve(reader.result);
        };
        reader.onerror = function() {
            reject(reader.error);
        };
    });
}
function readBlobAsArrayBuffer(blob) {
    var reader = new FileReader();
    var promise = fileReaderReady(reader);
    reader.readAsArrayBuffer(blob);
    return promise;
}
function readBlobAsText(blob) {
    var reader = new FileReader();
    var promise = fileReaderReady(reader);
    reader.readAsText(blob);
    return promise;
}
function readArrayBufferAsText(buf) {
    var view = new Uint8Array(buf);
    var chars = new Array(view.length);
    for(var i = 0; i < view.length; i++)chars[i] = String.fromCharCode(view[i]);
    return chars.join("");
}
function bufferClone(buf) {
    if (buf.slice) return buf.slice(0);
    else {
        var view = new Uint8Array(buf.byteLength);
        view.set(new Uint8Array(buf));
        return view.buffer;
    }
}
function Body() {
    this.bodyUsed = false;
    this._initBody = function(body) {
        /*
      fetch-mock wraps the Response object in an ES6 Proxy to
      provide useful test harness features such as flush. However, on
      ES5 browsers without fetch or Proxy support pollyfills must be used;
      the proxy-pollyfill is unable to proxy an attribute unless it exists
      on the object before the Proxy is created. This change ensures
      Response.bodyUsed exists on the instance, while maintaining the
      semantic of setting Request.bodyUsed in the constructor before
      _initBody is called.
    */ this.bodyUsed = this.bodyUsed;
        this._bodyInit = body;
        if (!body) this._bodyText = "";
        else if (typeof body === "string") this._bodyText = body;
        else if (support.blob && Blob.prototype.isPrototypeOf(body)) this._bodyBlob = body;
        else if (support.formData && FormData.prototype.isPrototypeOf(body)) this._bodyFormData = body;
        else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) this._bodyText = body.toString();
        else if (support.arrayBuffer && support.blob && isDataView(body)) {
            this._bodyArrayBuffer = bufferClone(body.buffer);
            // IE 10-11 can't handle a DataView body.
            this._bodyInit = new Blob([
                this._bodyArrayBuffer
            ]);
        } else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) this._bodyArrayBuffer = bufferClone(body);
        else this._bodyText = body = Object.prototype.toString.call(body);
        if (!this.headers.get("content-type")) {
            if (typeof body === "string") this.headers.set("content-type", "text/plain;charset=UTF-8");
            else if (this._bodyBlob && this._bodyBlob.type) this.headers.set("content-type", this._bodyBlob.type);
            else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8");
        }
    };
    if (support.blob) {
        this.blob = function() {
            var rejected = consumed(this);
            if (rejected) return rejected;
            if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
            else if (this._bodyArrayBuffer) return Promise.resolve(new Blob([
                this._bodyArrayBuffer
            ]));
            else if (this._bodyFormData) throw new Error("could not read FormData body as blob");
            else return Promise.resolve(new Blob([
                this._bodyText
            ]));
        };
        this.arrayBuffer = function() {
            if (this._bodyArrayBuffer) {
                var isConsumed = consumed(this);
                if (isConsumed) return isConsumed;
                if (ArrayBuffer.isView(this._bodyArrayBuffer)) return Promise.resolve(this._bodyArrayBuffer.buffer.slice(this._bodyArrayBuffer.byteOffset, this._bodyArrayBuffer.byteOffset + this._bodyArrayBuffer.byteLength));
                else return Promise.resolve(this._bodyArrayBuffer);
            } else return this.blob().then(readBlobAsArrayBuffer);
        };
    }
    this.text = function() {
        var rejected = consumed(this);
        if (rejected) return rejected;
        if (this._bodyBlob) return readBlobAsText(this._bodyBlob);
        else if (this._bodyArrayBuffer) return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer));
        else if (this._bodyFormData) throw new Error("could not read FormData body as text");
        else return Promise.resolve(this._bodyText);
    };
    if (support.formData) this.formData = function() {
        return this.text().then(decode);
    };
    this.json = function() {
        return this.text().then(JSON.parse);
    };
    return this;
}
// HTTP methods whose capitalization should be normalized
var methods = [
    "DELETE",
    "GET",
    "HEAD",
    "OPTIONS",
    "POST",
    "PUT"
];
function normalizeMethod(method) {
    var upcased = method.toUpperCase();
    return methods.indexOf(upcased) > -1 ? upcased : method;
}
function Request(input, options) {
    if (!(this instanceof Request)) throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');
    options = options || {};
    var body = options.body;
    if (input instanceof Request) {
        if (input.bodyUsed) throw new TypeError("Already read");
        this.url = input.url;
        this.credentials = input.credentials;
        if (!options.headers) this.headers = new Headers(input.headers);
        this.method = input.method;
        this.mode = input.mode;
        this.signal = input.signal;
        if (!body && input._bodyInit != null) {
            body = input._bodyInit;
            input.bodyUsed = true;
        }
    } else this.url = String(input);
    this.credentials = options.credentials || this.credentials || "same-origin";
    if (options.headers || !this.headers) this.headers = new Headers(options.headers);
    this.method = normalizeMethod(options.method || this.method || "GET");
    this.mode = options.mode || this.mode || null;
    this.signal = options.signal || this.signal;
    this.referrer = null;
    if ((this.method === "GET" || this.method === "HEAD") && body) throw new TypeError("Body not allowed for GET or HEAD requests");
    this._initBody(body);
    if (this.method === "GET" || this.method === "HEAD") {
        if (options.cache === "no-store" || options.cache === "no-cache") {
            // Search for a '_' parameter in the query string
            var reParamSearch = /([?&])_=[^&]*/;
            if (reParamSearch.test(this.url)) // If it already exists then set the value with the current time
            this.url = this.url.replace(reParamSearch, "$1_=" + new Date().getTime());
            else {
                // Otherwise add a new '_' parameter to the end with the current time
                var reQueryString = /\?/;
                this.url += (reQueryString.test(this.url) ? "&" : "?") + "_=" + new Date().getTime();
            }
        }
    }
}
Request.prototype.clone = function() {
    return new Request(this, {
        body: this._bodyInit
    });
};
function decode(body) {
    var form = new FormData();
    body.trim().split("&").forEach(function(bytes) {
        if (bytes) {
            var split = bytes.split("=");
            var name = split.shift().replace(/\+/g, " ");
            var value = split.join("=").replace(/\+/g, " ");
            form.append(decodeURIComponent(name), decodeURIComponent(value));
        }
    });
    return form;
}
function parseHeaders(rawHeaders) {
    var headers = new Headers();
    // Replace instances of \r\n and \n followed by at least one space or horizontal tab with a space
    // https://tools.ietf.org/html/rfc7230#section-3.2
    var preProcessedHeaders = rawHeaders.replace(/\r?\n[\t ]+/g, " ");
    // Avoiding split via regex to work around a common IE11 bug with the core-js 3.6.0 regex polyfill
    // https://github.com/github/fetch/issues/748
    // https://github.com/zloirock/core-js/issues/751
    preProcessedHeaders.split("\r").map(function(header) {
        return header.indexOf("\n") === 0 ? header.substr(1, header.length) : header;
    }).forEach(function(line) {
        var parts = line.split(":");
        var key = parts.shift().trim();
        if (key) {
            var value = parts.join(":").trim();
            headers.append(key, value);
        }
    });
    return headers;
}
Body.call(Request.prototype);
function Response(bodyInit, options) {
    if (!(this instanceof Response)) throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');
    if (!options) options = {};
    this.type = "default";
    this.status = options.status === undefined ? 200 : options.status;
    this.ok = this.status >= 200 && this.status < 300;
    this.statusText = options.statusText === undefined ? "" : "" + options.statusText;
    this.headers = new Headers(options.headers);
    this.url = options.url || "";
    this._initBody(bodyInit);
}
Body.call(Response.prototype);
Response.prototype.clone = function() {
    return new Response(this._bodyInit, {
        status: this.status,
        statusText: this.statusText,
        headers: new Headers(this.headers),
        url: this.url
    });
};
Response.error = function() {
    var response = new Response(null, {
        status: 0,
        statusText: ""
    });
    response.type = "error";
    return response;
};
var redirectStatuses = [
    301,
    302,
    303,
    307,
    308
];
Response.redirect = function(url, status) {
    if (redirectStatuses.indexOf(status) === -1) throw new RangeError("Invalid status code");
    return new Response(null, {
        status: status,
        headers: {
            location: url
        }
    });
};
var DOMException = global.DOMException;
try {
    new DOMException();
} catch (err) {
    DOMException = function(message, name) {
        this.message = message;
        this.name = name;
        var error = Error(message);
        this.stack = error.stack;
    };
    DOMException.prototype = Object.create(Error.prototype);
    DOMException.prototype.constructor = DOMException;
}
function fetch(input, init) {
    return new Promise(function(resolve, reject) {
        var request = new Request(input, init);
        if (request.signal && request.signal.aborted) return reject(new DOMException("Aborted", "AbortError"));
        var xhr = new XMLHttpRequest();
        function abortXhr() {
            xhr.abort();
        }
        xhr.onload = function() {
            var options = {
                status: xhr.status,
                statusText: xhr.statusText,
                headers: parseHeaders(xhr.getAllResponseHeaders() || "")
            };
            options.url = "responseURL" in xhr ? xhr.responseURL : options.headers.get("X-Request-URL");
            var body = "response" in xhr ? xhr.response : xhr.responseText;
            setTimeout(function() {
                resolve(new Response(body, options));
            }, 0);
        };
        xhr.onerror = function() {
            setTimeout(function() {
                reject(new TypeError("Network request failed"));
            }, 0);
        };
        xhr.ontimeout = function() {
            setTimeout(function() {
                reject(new TypeError("Network request failed"));
            }, 0);
        };
        xhr.onabort = function() {
            setTimeout(function() {
                reject(new DOMException("Aborted", "AbortError"));
            }, 0);
        };
        function fixUrl(url) {
            try {
                return url === "" && global.location.href ? global.location.href : url;
            } catch (e) {
                return url;
            }
        }
        xhr.open(request.method, fixUrl(request.url), true);
        if (request.credentials === "include") xhr.withCredentials = true;
        else if (request.credentials === "omit") xhr.withCredentials = false;
        if ("responseType" in xhr) {
            if (support.blob) xhr.responseType = "blob";
            else if (support.arrayBuffer && request.headers.get("Content-Type") && request.headers.get("Content-Type").indexOf("application/octet-stream") !== -1) xhr.responseType = "arraybuffer";
        }
        if (init && typeof init.headers === "object" && !(init.headers instanceof Headers)) Object.getOwnPropertyNames(init.headers).forEach(function(name) {
            xhr.setRequestHeader(name, normalizeValue(init.headers[name]));
        });
        else request.headers.forEach(function(value, name) {
            xhr.setRequestHeader(name, value);
        });
        if (request.signal) {
            request.signal.addEventListener("abort", abortXhr);
            xhr.onreadystatechange = function() {
                // DONE (success or failure)
                if (xhr.readyState === 4) request.signal.removeEventListener("abort", abortXhr);
            };
        }
        xhr.send(typeof request._bodyInit === "undefined" ? null : request._bodyInit);
    });
}
fetch.polyfill = true;
if (!global.fetch) {
    global.fetch = fetch;
    global.Headers = Headers;
    global.Request = Request;
    global.Response = Response;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"lErsX":[function(require,module,exports) {
var process = require("process");
const fs = require("fs");
const path = require("path");
const os = require("os");
const LINE = /(?:^|^)\s*(?:export\s+)?([\w.-]+)(?:\s*=\s*?|:\s+?)(\s*'(?:\\'|[^'])*'|\s*"(?:\\"|[^"])*"|\s*`(?:\\`|[^`])*`|[^#\r\n]+)?\s*(?:#.*)?(?:$|$)/mg;
// Parser src into an Object
function parse(src) {
    const obj = {};
    // Convert buffer to string
    let lines = src.toString();
    // Convert line breaks to same format
    lines = lines.replace(/\r\n?/mg, "\n");
    let match;
    while((match = LINE.exec(lines)) != null){
        const key = match[1];
        // Default undefined or null to empty string
        let value = match[2] || "";
        // Remove whitespace
        value = value.trim();
        // Check if double quoted
        const maybeQuote = value[0];
        // Remove surrounding quotes
        value = value.replace(/^(['"`])([\s\S]*)\1$/mg, "$2");
        // Expand newlines if double quoted
        if (maybeQuote === '"') {
            value = value.replace(/\\n/g, "\n");
            value = value.replace(/\\r/g, "\r");
        }
        // Add to object
        obj[key] = value;
    }
    return obj;
}
function _log(message) {
    console.log(`[dotenv][DEBUG] ${message}`);
}
function _resolveHome(envPath) {
    return envPath[0] === "~" ? path.join(os.homedir(), envPath.slice(1)) : envPath;
}
// Populates process.env from .env file
function config(options) {
    let dotenvPath = path.resolve(process.cwd(), ".env");
    let encoding = "utf8";
    const debug = Boolean(options && options.debug);
    const override = Boolean(options && options.override);
    if (options) {
        if (options.path != null) dotenvPath = _resolveHome(options.path);
        if (options.encoding != null) encoding = options.encoding;
    }
    try {
        // Specifying an encoding returns a string instead of a buffer
        const parsed = DotenvModule.parse(fs.readFileSync(dotenvPath, {
            encoding
        }));
        Object.keys(parsed).forEach(function(key) {
            if (!Object.prototype.hasOwnProperty.call(process.env, key)) parsed[key];
            else {
                if (override === true) parsed[key];
                if (debug) {
                    if (override === true) _log(`"${key}" is already defined in \`process.env\` and WAS overwritten`);
                    else _log(`"${key}" is already defined in \`process.env\` and was NOT overwritten`);
                }
            }
        });
        return {
            parsed
        };
    } catch (e) {
        if (debug) _log(`Failed to load ${dotenvPath} ${e.message}`);
        return {
            error: e
        };
    }
}
const DotenvModule = {
    config,
    parse
};
module.exports.config = DotenvModule.config;
module.exports.parse = DotenvModule.parse;
module.exports = DotenvModule;

},{"process":"d5jf4","fs":"jhUEF","path":"loE3o","os":"6yyXu"}],"jhUEF":[function(require,module,exports) {
"use strict";

},{}],"loE3o":[function(require,module,exports) {
// 'path' module extracted from Node.js v8.11.1 (only the posix part)
// transplited with Babel
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
"use strict";
var process = require("process");
function assertPath(path) {
    if (typeof path !== "string") throw new TypeError("Path must be a string. Received " + JSON.stringify(path));
}
// Resolves . and .. elements in a path with directory names
function normalizeStringPosix(path, allowAboveRoot) {
    var res = "";
    var lastSegmentLength = 0;
    var lastSlash = -1;
    var dots = 0;
    var code;
    for(var i = 0; i <= path.length; ++i){
        if (i < path.length) code = path.charCodeAt(i);
        else if (code === 47 /*/*/ ) break;
        else code = 47 /*/*/ ;
        if (code === 47 /*/*/ ) {
            if (lastSlash === i - 1 || dots === 1) ;
            else if (lastSlash !== i - 1 && dots === 2) {
                if (res.length < 2 || lastSegmentLength !== 2 || res.charCodeAt(res.length - 1) !== 46 /*.*/  || res.charCodeAt(res.length - 2) !== 46 /*.*/ ) {
                    if (res.length > 2) {
                        var lastSlashIndex = res.lastIndexOf("/");
                        if (lastSlashIndex !== res.length - 1) {
                            if (lastSlashIndex === -1) {
                                res = "";
                                lastSegmentLength = 0;
                            } else {
                                res = res.slice(0, lastSlashIndex);
                                lastSegmentLength = res.length - 1 - res.lastIndexOf("/");
                            }
                            lastSlash = i;
                            dots = 0;
                            continue;
                        }
                    } else if (res.length === 2 || res.length === 1) {
                        res = "";
                        lastSegmentLength = 0;
                        lastSlash = i;
                        dots = 0;
                        continue;
                    }
                }
                if (allowAboveRoot) {
                    if (res.length > 0) res += "/..";
                    else res = "..";
                    lastSegmentLength = 2;
                }
            } else {
                if (res.length > 0) res += "/" + path.slice(lastSlash + 1, i);
                else res = path.slice(lastSlash + 1, i);
                lastSegmentLength = i - lastSlash - 1;
            }
            lastSlash = i;
            dots = 0;
        } else if (code === 46 /*.*/  && dots !== -1) ++dots;
        else dots = -1;
    }
    return res;
}
function _format(sep, pathObject) {
    var dir = pathObject.dir || pathObject.root;
    var base = pathObject.base || (pathObject.name || "") + (pathObject.ext || "");
    if (!dir) return base;
    if (dir === pathObject.root) return dir + base;
    return dir + sep + base;
}
var posix = {
    // path.resolve([from ...], to)
    resolve: function resolve() {
        var resolvedPath = "";
        var resolvedAbsolute = false;
        var cwd;
        for(var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--){
            var path;
            if (i >= 0) path = arguments[i];
            else {
                if (cwd === undefined) cwd = process.cwd();
                path = cwd;
            }
            assertPath(path);
            // Skip empty entries
            if (path.length === 0) continue;
            resolvedPath = path + "/" + resolvedPath;
            resolvedAbsolute = path.charCodeAt(0) === 47 /*/*/ ;
        }
        // At this point the path should be resolved to a full absolute path, but
        // handle relative paths to be safe (might happen when process.cwd() fails)
        // Normalize the path
        resolvedPath = normalizeStringPosix(resolvedPath, !resolvedAbsolute);
        if (resolvedAbsolute) {
            if (resolvedPath.length > 0) return "/" + resolvedPath;
            else return "/";
        } else if (resolvedPath.length > 0) return resolvedPath;
        else return ".";
    },
    normalize: function normalize(path) {
        assertPath(path);
        if (path.length === 0) return ".";
        var isAbsolute = path.charCodeAt(0) === 47 /*/*/ ;
        var trailingSeparator = path.charCodeAt(path.length - 1) === 47 /*/*/ ;
        // Normalize the path
        path = normalizeStringPosix(path, !isAbsolute);
        if (path.length === 0 && !isAbsolute) path = ".";
        if (path.length > 0 && trailingSeparator) path += "/";
        if (isAbsolute) return "/" + path;
        return path;
    },
    isAbsolute: function isAbsolute(path) {
        assertPath(path);
        return path.length > 0 && path.charCodeAt(0) === 47 /*/*/ ;
    },
    join: function join() {
        if (arguments.length === 0) return ".";
        var joined;
        for(var i = 0; i < arguments.length; ++i){
            var arg = arguments[i];
            assertPath(arg);
            if (arg.length > 0) {
                if (joined === undefined) joined = arg;
                else joined += "/" + arg;
            }
        }
        if (joined === undefined) return ".";
        return posix.normalize(joined);
    },
    relative: function relative(from, to) {
        assertPath(from);
        assertPath(to);
        if (from === to) return "";
        from = posix.resolve(from);
        to = posix.resolve(to);
        if (from === to) return "";
        // Trim any leading backslashes
        var fromStart = 1;
        for(; fromStart < from.length; ++fromStart){
            if (from.charCodeAt(fromStart) !== 47 /*/*/ ) break;
        }
        var fromEnd = from.length;
        var fromLen = fromEnd - fromStart;
        // Trim any leading backslashes
        var toStart = 1;
        for(; toStart < to.length; ++toStart){
            if (to.charCodeAt(toStart) !== 47 /*/*/ ) break;
        }
        var toEnd = to.length;
        var toLen = toEnd - toStart;
        // Compare paths to find the longest common path from root
        var length = fromLen < toLen ? fromLen : toLen;
        var lastCommonSep = -1;
        var i = 0;
        for(; i <= length; ++i){
            if (i === length) {
                if (toLen > length) {
                    if (to.charCodeAt(toStart + i) === 47 /*/*/ ) // We get here if `from` is the exact base path for `to`.
                    // For example: from='/foo/bar'; to='/foo/bar/baz'
                    return to.slice(toStart + i + 1);
                    else if (i === 0) // We get here if `from` is the root
                    // For example: from='/'; to='/foo'
                    return to.slice(toStart + i);
                } else if (fromLen > length) {
                    if (from.charCodeAt(fromStart + i) === 47 /*/*/ ) // We get here if `to` is the exact base path for `from`.
                    // For example: from='/foo/bar/baz'; to='/foo/bar'
                    lastCommonSep = i;
                    else if (i === 0) // We get here if `to` is the root.
                    // For example: from='/foo'; to='/'
                    lastCommonSep = 0;
                }
                break;
            }
            var fromCode = from.charCodeAt(fromStart + i);
            var toCode = to.charCodeAt(toStart + i);
            if (fromCode !== toCode) break;
            else if (fromCode === 47 /*/*/ ) lastCommonSep = i;
        }
        var out = "";
        // Generate the relative path based on the path difference between `to`
        // and `from`
        for(i = fromStart + lastCommonSep + 1; i <= fromEnd; ++i)if (i === fromEnd || from.charCodeAt(i) === 47 /*/*/ ) {
            if (out.length === 0) out += "..";
            else out += "/..";
        }
        // Lastly, append the rest of the destination (`to`) path that comes after
        // the common path parts
        if (out.length > 0) return out + to.slice(toStart + lastCommonSep);
        else {
            toStart += lastCommonSep;
            if (to.charCodeAt(toStart) === 47 /*/*/ ) ++toStart;
            return to.slice(toStart);
        }
    },
    _makeLong: function _makeLong(path) {
        return path;
    },
    dirname: function dirname(path) {
        assertPath(path);
        if (path.length === 0) return ".";
        var code = path.charCodeAt(0);
        var hasRoot = code === 47 /*/*/ ;
        var end = -1;
        var matchedSlash = true;
        for(var i = path.length - 1; i >= 1; --i){
            code = path.charCodeAt(i);
            if (code === 47 /*/*/ ) {
                if (!matchedSlash) {
                    end = i;
                    break;
                }
            } else // We saw the first non-path separator
            matchedSlash = false;
        }
        if (end === -1) return hasRoot ? "/" : ".";
        if (hasRoot && end === 1) return "//";
        return path.slice(0, end);
    },
    basename: function basename(path, ext) {
        if (ext !== undefined && typeof ext !== "string") throw new TypeError('"ext" argument must be a string');
        assertPath(path);
        var start = 0;
        var end = -1;
        var matchedSlash = true;
        var i;
        if (ext !== undefined && ext.length > 0 && ext.length <= path.length) {
            if (ext.length === path.length && ext === path) return "";
            var extIdx = ext.length - 1;
            var firstNonSlashEnd = -1;
            for(i = path.length - 1; i >= 0; --i){
                var code = path.charCodeAt(i);
                if (code === 47 /*/*/ ) // If we reached a path separator that was not part of a set of path
                // separators at the end of the string, stop now
                {
                    if (!matchedSlash) {
                        start = i + 1;
                        break;
                    }
                } else {
                    if (firstNonSlashEnd === -1) {
                        // We saw the first non-path separator, remember this index in case
                        // we need it if the extension ends up not matching
                        matchedSlash = false;
                        firstNonSlashEnd = i + 1;
                    }
                    if (extIdx >= 0) {
                        // Try to match the explicit extension
                        if (code === ext.charCodeAt(extIdx)) {
                            if (--extIdx === -1) // We matched the extension, so mark this as the end of our path
                            // component
                            end = i;
                        } else {
                            // Extension does not match, so our result is the entire path
                            // component
                            extIdx = -1;
                            end = firstNonSlashEnd;
                        }
                    }
                }
            }
            if (start === end) end = firstNonSlashEnd;
            else if (end === -1) end = path.length;
            return path.slice(start, end);
        } else {
            for(i = path.length - 1; i >= 0; --i){
                if (path.charCodeAt(i) === 47 /*/*/ ) // If we reached a path separator that was not part of a set of path
                // separators at the end of the string, stop now
                {
                    if (!matchedSlash) {
                        start = i + 1;
                        break;
                    }
                } else if (end === -1) {
                    // We saw the first non-path separator, mark this as the end of our
                    // path component
                    matchedSlash = false;
                    end = i + 1;
                }
            }
            if (end === -1) return "";
            return path.slice(start, end);
        }
    },
    extname: function extname(path) {
        assertPath(path);
        var startDot = -1;
        var startPart = 0;
        var end = -1;
        var matchedSlash = true;
        // Track the state of characters (if any) we see before our first dot and
        // after any path separator we find
        var preDotState = 0;
        for(var i = path.length - 1; i >= 0; --i){
            var code = path.charCodeAt(i);
            if (code === 47 /*/*/ ) {
                // If we reached a path separator that was not part of a set of path
                // separators at the end of the string, stop now
                if (!matchedSlash) {
                    startPart = i + 1;
                    break;
                }
                continue;
            }
            if (end === -1) {
                // We saw the first non-path separator, mark this as the end of our
                // extension
                matchedSlash = false;
                end = i + 1;
            }
            if (code === 46 /*.*/ ) {
                // If this is our first dot, mark it as the start of our extension
                if (startDot === -1) startDot = i;
                else if (preDotState !== 1) preDotState = 1;
            } else if (startDot !== -1) // We saw a non-dot and non-path separator before our dot, so we should
            // have a good chance at having a non-empty extension
            preDotState = -1;
        }
        if (startDot === -1 || end === -1 || // We saw a non-dot character immediately before the dot
        preDotState === 0 || // The (right-most) trimmed path component is exactly '..'
        preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) return "";
        return path.slice(startDot, end);
    },
    format: function format(pathObject) {
        if (pathObject === null || typeof pathObject !== "object") throw new TypeError('The "pathObject" argument must be of type Object. Received type ' + typeof pathObject);
        return _format("/", pathObject);
    },
    parse: function parse(path) {
        assertPath(path);
        var ret = {
            root: "",
            dir: "",
            base: "",
            ext: "",
            name: ""
        };
        if (path.length === 0) return ret;
        var code = path.charCodeAt(0);
        var isAbsolute = code === 47 /*/*/ ;
        var start;
        if (isAbsolute) {
            ret.root = "/";
            start = 1;
        } else start = 0;
        var startDot = -1;
        var startPart = 0;
        var end = -1;
        var matchedSlash = true;
        var i = path.length - 1;
        // Track the state of characters (if any) we see before our first dot and
        // after any path separator we find
        var preDotState = 0;
        // Get non-dir info
        for(; i >= start; --i){
            code = path.charCodeAt(i);
            if (code === 47 /*/*/ ) {
                // If we reached a path separator that was not part of a set of path
                // separators at the end of the string, stop now
                if (!matchedSlash) {
                    startPart = i + 1;
                    break;
                }
                continue;
            }
            if (end === -1) {
                // We saw the first non-path separator, mark this as the end of our
                // extension
                matchedSlash = false;
                end = i + 1;
            }
            if (code === 46 /*.*/ ) {
                // If this is our first dot, mark it as the start of our extension
                if (startDot === -1) startDot = i;
                else if (preDotState !== 1) preDotState = 1;
            } else if (startDot !== -1) // We saw a non-dot and non-path separator before our dot, so we should
            // have a good chance at having a non-empty extension
            preDotState = -1;
        }
        if (startDot === -1 || end === -1 || // We saw a non-dot character immediately before the dot
        preDotState === 0 || // The (right-most) trimmed path component is exactly '..'
        preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
            if (end !== -1) {
                if (startPart === 0 && isAbsolute) ret.base = ret.name = path.slice(1, end);
                else ret.base = ret.name = path.slice(startPart, end);
            }
        } else {
            if (startPart === 0 && isAbsolute) {
                ret.name = path.slice(1, startDot);
                ret.base = path.slice(1, end);
            } else {
                ret.name = path.slice(startPart, startDot);
                ret.base = path.slice(startPart, end);
            }
            ret.ext = path.slice(startDot, end);
        }
        if (startPart > 0) ret.dir = path.slice(0, startPart - 1);
        else if (isAbsolute) ret.dir = "/";
        return ret;
    },
    sep: "/",
    delimiter: ":",
    win32: null,
    posix: null
};
posix.posix = posix;
module.exports = posix;

},{"process":"d5jf4"}],"6yyXu":[function(require,module,exports) {
exports.endianness = function() {
    return "LE";
};
exports.hostname = function() {
    if (typeof location !== "undefined") return location.hostname;
    else return "";
};
exports.loadavg = function() {
    return [];
};
exports.uptime = function() {
    return 0;
};
exports.freemem = function() {
    return Number.MAX_VALUE;
};
exports.totalmem = function() {
    return Number.MAX_VALUE;
};
exports.cpus = function() {
    return [];
};
exports.type = function() {
    return "Browser";
};
exports.release = function() {
    if (typeof navigator !== "undefined") return navigator.appVersion;
    return "";
};
exports.networkInterfaces = exports.getNetworkInterfaces = function() {
    return {};
};
exports.arch = function() {
    return "javascript";
};
exports.platform = function() {
    return "browser";
};
exports.tmpdir = exports.tmpDir = function() {
    return "/tmp";
};
exports.EOL = "\n";
exports.homedir = function() {
    return "/";
};

},{}],"lAD5c":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Loadings", ()=>Loadings);
const queryContentLoandig = document.querySelector("#content-loandin");
const loading = document.createElement("div");
loading.className = "spinner";
const Loadings = ()=>{
    if (queryContentLoandig.firstChild != loading) {
        queryContentLoandig.appendChild(loading);
        setTimeout(()=>{
            queryContentLoandig.removeChild(loading);
        }, 5000);
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fUW4j":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Modals", ()=>Modals);
var _404Png = require("../../img/404.png");
var _404PngDefault = parcelHelpers.interopDefault(_404Png);
let queryContainerMain = document.querySelector("#container-img");
let section = document.createElement("div");
let img = document.createElement("img");
let titulo = document.createElement("h4");
let buttonModalHome = document.createElement("button");
buttonModalHome.id = "button-modal-home";
buttonModalHome.innerHTML = '<a href="/">Volver a inicio</a>';
titulo.textContent = "Imagenes no encontrada!";
titulo.id = "modal-titulo";
img.id = "modal-404";
img.src = (0, _404PngDefault.default);
img.alt = "404 error";
section.id = "modal";
const Modals = (authorization = false)=>{
    section.appendChild(titulo);
    section.appendChild(img);
    section.appendChild(buttonModalHome);
    authorization == true ? section.remove() : queryContainerMain.insertAdjacentElement("afterbegin", section);
};

},{"../../img/404.png":"454LZ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"454LZ":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("eYBaT") + "404.bf65dddf.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"lgJ39":[function(require,module,exports) {
"use strict";
var bundleURL = {};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ("" + err.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return "/";
}
function getBaseURL(url) {
    return ("" + url).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/, "$1") + "/";
} // TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ("" + url).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^/]+/);
    if (!matches) throw new Error("Origin not found");
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"cWeyc":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ButtonUp", ()=>ButtonUp);
var _upPng = require("../../img/up.png");
var _upPngDefault = parcelHelpers.interopDefault(_upPng);
let containerImg = document.querySelector("#container-img");
let buttonUp = document.createElement("a");
let img = document.createElement("img");
img.src = (0, _upPngDefault.default);
img.alt = "icon-go-up";
buttonUp.id = "button-up";
buttonUp.href = "#Banco-de-imagenes";
buttonUp.appendChild(img);
const ButtonUp = (up = false)=>up && buttonUp.isConnected ? buttonUp.remove() : containerImg.appendChild(buttonUp);

},{"../../img/up.png":"koOOh","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"koOOh":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("eYBaT") + "up.72e2edee.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"7hLEw":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Footer", ()=>Footer);
var _linkedinPng = require("../../img/icons/linkedin.png");
var _linkedinPngDefault = parcelHelpers.interopDefault(_linkedinPng);
var _instagramPng = require("../../img/icons/instagram.png");
var _instagramPngDefault = parcelHelpers.interopDefault(_instagramPng);
var _githubPng = require("../../img/icons/github.png");
var _githubPngDefault = parcelHelpers.interopDefault(_githubPng);
const ICONS = [
    {
        img: (0, _githubPngDefault.default),
        alt: "icon-gitHub",
        src: "https://github.com/SuperJav?tab=repositories"
    },
    {
        img: (0, _instagramPngDefault.default),
        alt: "icon-instagram",
        src: "https://www.instagram.com/javisuper_/"
    },
    {
        img: (0, _linkedinPngDefault.default),
        alt: "icon-linkedin",
        src: "https://www.linkedin.com/in/javielito-ramirez-brioso-53402321b/"
    }
];
let containerMain = document.querySelector(".container-main");
let containerFooter = document.createElement("footer");
let containerRedSocial = document.createElement("div");
let elementHr = document.createElement("hr");
let elementH4 = document.createElement("h4");
containerRedSocial.id = "container-red-social";
elementHr.id = "footer-linea";
elementH4.textContent = "Developed by Javi super\uD83E\uDDD1\uD83C\uDFFD‍\uD83D\uDCBB";
elementH4.id = "footer-text";
containerFooter.id = "footer";
ICONS.map((index)=>{
    let elementImg = document.createElement("img");
    let elementA = document.createElement("a");
    const { img , alt , src  } = index;
    elementImg.src = img;
    elementImg.alt = alt;
    elementA.href = src;
    elementA.target = "_black";
    elementA.append(elementImg);
    containerRedSocial.append(elementA);
});
let Footer = ()=>{
    containerFooter.appendChild(elementH4);
    containerFooter.appendChild(elementHr);
    containerFooter.appendChild(containerRedSocial);
    containerMain.appendChild(containerFooter);
};

},{"../../img/icons/linkedin.png":"iO21G","../../img/icons/instagram.png":"6qQiM","../../img/icons/github.png":"5rgIm","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iO21G":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("eYBaT") + "linkedin.d9362a9d.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"6qQiM":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("eYBaT") + "instagram.00060431.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"5rgIm":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("eYBaT") + "github.04133ff0.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"daIyF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "PhotoBig", ()=>PhotoBig);
parcelHelpers.export(exports, "removerImgBig", ()=>removerImgBig);
var _newGif = require("../../img/icons/New.gif");
var _newGifDefault = parcelHelpers.interopDefault(_newGif);
let sectionImgBig = document.querySelector("#section-img-one-big");
let elementDiv = document.createElement("div");
let elementImg = document.createElement("img");
let elementImgNew = document.createElement("img");
elementImgNew.id = "logo-new";
elementImgNew.alt = "logo-new";
elementImgNew.src = (0, _newGifDefault.default);
elementDiv.id = "img-big-one";
elementDiv.className = "big-img";
elementImg.id = "img-big";
const PhotoBig = (photo, page)=>{
    if (page == 1) {
        elementImg.src = photo.src.medium;
        elementImg.loading = "eager";
        elementImg.style = `background-color:${photo.avg_color}`;
        elementImg.alt = photo.alt;
        elementImg.addEventListener("click", (e)=>require("2a564ef5585ef6e").then((modal)=>modal.ModalInfo(photo)));
        elementDiv.appendChild(elementImgNew);
        elementDiv.appendChild(elementImg);
        sectionImgBig.append(elementDiv);
    }
};
const removerImgBig = (remover = false)=>elementDiv.remove();

},{"../../img/icons/New.gif":"iSeLw","2a564ef5585ef6e":"13sJ0","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iSeLw":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("eYBaT") + "New.16fd1bb3.gif" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"13sJ0":[function(require,module,exports) {
module.exports = Promise.resolve(module.bundle.root("aD677"));

},{}],"aD677":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ModalInfo", ()=>ModalInfo);
parcelHelpers.export(exports, "removerModal", ()=>removerModal);
var _infoPng = require("../../img/icons/info.png");
var _infoPngDefault = parcelHelpers.interopDefault(_infoPng);
var _closePng = require("../../img/icons/close.png");
var _closePngDefault = parcelHelpers.interopDefault(_closePng);
var _downloadPng = require("../../img/icons/download.png");
var _downloadPngDefault = parcelHelpers.interopDefault(_downloadPng);
let containerImg = document.querySelector("#container-img") //Variable para almacenar la modal
;
let containervisible = document.createElement("div");
containervisible.id = "container-visible";
let containerModal = document.createElement("section") //variable para almacenar todos los elemento
;
containerModal.id = "modal-info";
let containerModalFoto = document.createElement("div") //variable para almacenar el elemento foto
;
containerModalFoto.id = "modal-info-foto";
let elementImg = document.createElement("img");
elementImg.className = "modal-photo-img" //variable para almacenar la foto
;
let containerModalInfo = document.createElement("div") //variable para almacenar toda la informacion de la foto
;
containerModalInfo.id = "modal-info-info";
let elementH1 = document.createElement("h4");
let elementImgIcon = document.createElement("img");
let elementImgIconClose = document.createElement("img");
elementImgIconClose.id = "modal-title-close";
elementImgIconClose.src = (0, _closePngDefault.default);
let containerModalTitulo = document.createElement("div");
elementImgIcon.id = "modal-title-icon";
elementImgIcon.src = (0, _infoPngDefault.default);
elementImgIcon.alt = "icon-title";
containerModalTitulo.id = "modal-info-titulo";
containerModalTitulo.appendChild(elementImgIcon);
containerModalTitulo.append(elementH1);
containerModalTitulo.appendChild(elementImgIconClose);
let itemsContainerInfo1 = document.createElement("div");
itemsContainerInfo1.className = "items-container";
let itemsContainerInfo2 = document.createElement("div");
itemsContainerInfo2.className = "items-container";
let itemsContainerInfo3 = document.createElement("div");
itemsContainerInfo3.className = "items-container";
let itemsContainerInfo4 = document.createElement("div");
itemsContainerInfo4.className = "items-info-link";
let Nautor = document.createElement("h6");
let autor = document.createElement("h6");
let Nsize = document.createElement("h6");
let size = document.createElement("h6");
let Nid = document.createElement("h6");
let id = document.createElement("h6");
let Nlink = document.createElement("a");
Nlink.textContent = "Visitar IG";
Nlink.id = "autor-link";
Nlink.target = "_blank";
let NiconDescarga = document.createElement("img");
NiconDescarga.src = (0, _downloadPngDefault.default);
NiconDescarga.id = "icon-descarga-img";
let Ntextdescarga = document.createElement("h5");
Ntextdescarga.textContent = "Descargar";
let Ndescargaimg = document.createElement("button");
Ndescargaimg.id = "button-descarga";
Ndescargaimg.appendChild(NiconDescarga);
Ndescargaimg.appendChild(Ntextdescarga);
let foto;
function downloandImage(url = false, name = false) {
    if (url == false && name == false) ;
    else {
        alert("Espere un momento en lo que la imagen se muestra completamente");
        fetch(url).then((resp)=>resp.blob()).then((blob)=>{
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement("a");
            a.href = url;
            a.download = name;
            containerModalInfo.appendChild(a);
            a.click();
            window.URL.revokeObjectURL(url);
        }).catch(()=>alert("Tenemos problema para descargar esta imagen lo sentimos :("));
    }
}
Ndescargaimg.addEventListener("click", ()=>downloandImage(foto, "imagen.jpeg"));
Ndescargaimg.removeEventListener("click", downloandImage());
function ModalInfo(photo) {
    //event
    elementImgIconClose.addEventListener("click", ()=>{
        containervisible.remove();
    });
    containervisible.addEventListener("click", (e)=>{
        if (containerModal.contains(e.target)) ;
        else containervisible.remove();
    });
    elementH1.textContent = "Informacion";
    elementImg.alt = photo.alt;
    elementImg.src = photo.src.original;
    Nautor.textContent = "Foto grafiado por";
    autor.textContent = photo.photographer ? photo.photographer : "sin autor";
    Nsize.textContent = "Tama\xf1o";
    size.textContent = `${photo.width} X ${photo.height}`;
    Nid.textContent = "ID";
    id.textContent = photo.id;
    Nlink.href = photo.photographer_url;
    foto = photo.src.original;
    itemsContainerInfo1.appendChild(Nautor);
    itemsContainerInfo1.appendChild(autor);
    itemsContainerInfo2.appendChild(Nsize);
    itemsContainerInfo2.appendChild(size);
    itemsContainerInfo3.appendChild(Nid);
    itemsContainerInfo3.appendChild(id);
    itemsContainerInfo4.appendChild(Nlink);
    itemsContainerInfo4.appendChild(Ndescargaimg);
    containerModalFoto.appendChild(elementImg);
    containerModalInfo.append(itemsContainerInfo1);
    containerModalInfo.append(itemsContainerInfo2);
    containerModalInfo.append(itemsContainerInfo3);
    containerModalInfo.append(itemsContainerInfo4);
    containerModal.appendChild(containerModalTitulo);
    containerModal.appendChild(containerModalFoto);
    containerModal.appendChild(containerModalInfo);
    containervisible.append(containerModal);
    containerImg.appendChild(containervisible);
}
const removerModal = ()=>containervisible.remove();

},{"../../img/icons/info.png":"9po7E","../../img/icons/close.png":"ie0EB","../../img/icons/download.png":"2Uqs0","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9po7E":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("eYBaT") + "info.923358a1.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"ie0EB":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("eYBaT") + "close.17d60e8f.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"2Uqs0":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("eYBaT") + "download.18138ca8.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"f89AV":[function(require,module,exports) {
module.exports = require("./helpers/browser/js-loader")(require("./helpers/bundle-url").getBundleURL("eYBaT") + "Infinito.6fddc103.js" + "?" + Date.now()).catch((err)=>{
    delete module.bundle.cache[module.id];
    throw err;
}).then(()=>module.bundle.root("fQo26"));

},{"./helpers/browser/js-loader":"61B45","./helpers/bundle-url":"lgJ39"}],"61B45":[function(require,module,exports) {
"use strict";
var cacheLoader = require("../cacheLoader");
module.exports = cacheLoader(function(bundle) {
    return new Promise(function(resolve, reject) {
        // Don't insert the same script twice (e.g. if it was already in the HTML)
        var existingScripts = document.getElementsByTagName("script");
        if ([].concat(existingScripts).some(function isCurrentBundle(script) {
            return script.src === bundle;
        })) {
            resolve();
            return;
        }
        var preloadLink = document.createElement("link");
        preloadLink.href = bundle;
        preloadLink.rel = "preload";
        preloadLink.as = "script";
        document.head.appendChild(preloadLink);
        var script = document.createElement("script");
        script.async = true;
        script.type = "text/javascript";
        script.src = bundle;
        script.onerror = function(e) {
            var error = new TypeError("Failed to fetch dynamically imported module: ".concat(bundle, ". Error: ").concat(e.message));
            script.onerror = script.onload = null;
            script.remove();
            reject(error);
        };
        script.onload = function() {
            script.onerror = script.onload = null;
            resolve();
        };
        document.getElementsByTagName("head")[0].appendChild(script);
    });
});

},{"../cacheLoader":"j49pS"}],"j49pS":[function(require,module,exports) {
"use strict";
var cachedBundles = {};
var cachedPreloads = {};
var cachedPrefetches = {};
function getCache(type) {
    switch(type){
        case "preload":
            return cachedPreloads;
        case "prefetch":
            return cachedPrefetches;
        default:
            return cachedBundles;
    }
}
module.exports = function(loader, type) {
    return function(bundle) {
        var cache = getCache(type);
        if (cache[bundle]) return cache[bundle];
        return cache[bundle] = loader.apply(null, arguments).catch(function(e) {
            delete cache[bundle];
            throw e;
        });
    };
};

},{}]},["8mjwl","9u7qN"], "9u7qN", "parcelRequire846c")

//# sourceMappingURL=index.fec2ce2d.js.map
