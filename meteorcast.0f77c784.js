// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (
  modules,
  entry,
  mainEntry,
  parcelRequireName,
  externals,
  distDir,
  publicUrl,
  devServer
) {
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

  var importMap = previousRequire.i || {};
  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        if (externals[name]) {
          return externals[name];
        }
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
        globalObject
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      if (res === false) {
        return {};
      }
      // Synthesize a module to follow re-exports.
      if (Array.isArray(res)) {
        var m = {__esModule: true};
        res.forEach(function (v) {
          var key = v[0];
          var id = v[1];
          var exp = v[2] || v[0];
          var x = newRequire(id);
          if (key === '*') {
            Object.keys(x).forEach(function (key) {
              if (
                key === 'default' ||
                key === '__esModule' ||
                Object.prototype.hasOwnProperty.call(m, key)
              ) {
                return;
              }

              Object.defineProperty(m, key, {
                enumerable: true,
                get: function () {
                  return x[key];
                },
              });
            });
          } else if (exp === '*') {
            Object.defineProperty(m, key, {
              enumerable: true,
              value: x,
            });
          } else {
            Object.defineProperty(m, key, {
              enumerable: true,
              get: function () {
                if (exp === 'default') {
                  return x.__esModule ? x.default : x;
                }
                return x[exp];
              },
            });
          }
        });
        return m;
      }
      return newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.require = nodeRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.distDir = distDir;
  newRequire.publicUrl = publicUrl;
  newRequire.devServer = devServer;
  newRequire.i = importMap;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  // Only insert newRequire.load when it is actually used.
  // The code in this file is linted against ES5, so dynamic import is not allowed.
  // INSERT_LOAD_HERE

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
    }
  }
})({"7hoRO":[function(require,module,exports,__globalThis) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SERVER_PORT = 55190;
var HMR_SECURE = false;
var HMR_ENV_HASH = "439701173a9199ea";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "9440bf780f77c784";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_SERVER_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
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
declare var HMR_SERVER_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , disposedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ , bundleNotFound = false;
function getHostname() {
    return HMR_HOST || (typeof location !== 'undefined' && location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || (typeof location !== 'undefined' ? location.port : HMR_SERVER_PORT);
}
// eslint-disable-next-line no-redeclare
let WebSocket = globalThis.WebSocket;
if (!WebSocket && typeof module.bundle.root === 'function') try {
    // eslint-disable-next-line no-global-assign
    WebSocket = module.bundle.root('ws');
} catch  {
// ignore.
}
var hostname = getHostname();
var port = getPort();
var protocol = HMR_SECURE || typeof location !== 'undefined' && location.protocol === 'https:' && ![
    'localhost',
    '127.0.0.1',
    '0.0.0.0'
].includes(hostname) ? 'wss' : 'ws';
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if (!parent || !parent.isParcelRequire) {
    // Web extension context
    var extCtx = typeof browser === 'undefined' ? typeof chrome === 'undefined' ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes('test.js');
    }
    var ws;
    if (HMR_USE_SSE) ws = new EventSource('/__parcel_hmr');
    else try {
        // If we're running in the dev server's node runner, listen for messages on the parent port.
        let { workerData, parentPort } = module.bundle.root('node:worker_threads') /*: any*/ ;
        if (workerData !== null && workerData !== void 0 && workerData.__parcel) {
            parentPort.on('message', async (message)=>{
                try {
                    await handleMessage(message);
                    parentPort.postMessage('updated');
                } catch  {
                    parentPort.postMessage('restart');
                }
            });
            // After the bundle has finished running, notify the dev server that the HMR update is complete.
            queueMicrotask(()=>parentPort.postMessage('ready'));
        }
    } catch  {
        if (typeof WebSocket !== 'undefined') try {
            ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
        } catch (err) {
            // Ignore cloudflare workers error.
            if (err.message && !err.message.includes('Disallowed operation called within global scope')) console.error(err.message);
        }
    }
    if (ws) {
        // $FlowFixMe
        ws.onmessage = async function(event /*: {data: string, ...} */ ) {
            var data /*: HMRMessage */  = JSON.parse(event.data);
            await handleMessage(data);
        };
        if (ws instanceof WebSocket) {
            ws.onerror = function(e) {
                if (e.message) console.error(e.message);
            };
            ws.onclose = function() {
                console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
            };
        }
    }
}
async function handleMessage(data /*: HMRMessage */ ) {
    checkedAssets = {} /*: {|[string]: boolean|} */ ;
    disposedAssets = {} /*: {|[string]: boolean|} */ ;
    assetsToAccept = [];
    assetsToDispose = [];
    bundleNotFound = false;
    if (data.type === 'reload') fullReload();
    else if (data.type === 'update') {
        // Remove error overlay if there is one
        if (typeof document !== 'undefined') removeErrorOverlay();
        let assets = data.assets;
        // Handle HMR Update
        let handled = assets.every((asset)=>{
            return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
        });
        // Dispatch a custom event in case a bundle was not found. This might mean
        // an asset on the server changed and we should reload the page. This event
        // gives the client an opportunity to refresh without losing state
        // (e.g. via React Server Components). If e.preventDefault() is not called,
        // we will trigger a full page reload.
        if (handled && bundleNotFound && assets.some((a)=>a.envHash !== HMR_ENV_HASH) && typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') handled = !window.dispatchEvent(new CustomEvent('parcelhmrreload', {
            cancelable: true
        }));
        if (handled) {
            console.clear();
            // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
            if (typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') window.dispatchEvent(new CustomEvent('parcelhmraccept'));
            await hmrApplyUpdates(assets);
            hmrDisposeQueue();
            // Run accept callbacks. This will also re-execute other disposed assets in topological order.
            let processedAssets = {};
            for(let i = 0; i < assetsToAccept.length; i++){
                let id = assetsToAccept[i][1];
                if (!processedAssets[id]) {
                    hmrAccept(assetsToAccept[i][0], id);
                    processedAssets[id] = true;
                }
            }
        } else fullReload();
    }
    if (data.type === 'error') {
        // Log parcel errors to console
        for (let ansiDiagnostic of data.diagnostics.ansi){
            let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
            console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
        }
        if (typeof document !== 'undefined') {
            // Render the fancy html overlay
            removeErrorOverlay();
            var overlay = createErrorOverlay(data.diagnostics.html);
            // $FlowFixMe
            document.body.appendChild(overlay);
        }
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="${protocol === 'wss' ? 'https' : 'http'}://${hostname}:${port}/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, '') : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + '</div>').join('')}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ''}
      </div>
    `;
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if (typeof location !== 'undefined' && 'reload' in location) location.reload();
    else if (typeof extCtx !== 'undefined' && extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
    else try {
        let { workerData, parentPort } = module.bundle.root('node:worker_threads') /*: any*/ ;
        if (workerData !== null && workerData !== void 0 && workerData.__parcel) parentPort.postMessage('restart');
    } catch (err) {
        console.error("[parcel] \u26A0\uFE0F An HMR update was not accepted. Please restart the process.");
    }
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
    var href = link.getAttribute('href');
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', // $FlowFixMe
    href.split('?')[0] + '?' + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout || typeof document === 'undefined') return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === 'js') {
        if (typeof document !== 'undefined') {
            let script = document.createElement('script');
            script.src = asset.url + '?t=' + Date.now();
            if (asset.outputFormat === 'esmodule') script.type = 'module';
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === 'function') {
            // Worker scripts
            if (asset.outputFormat === 'esmodule') return import(asset.url + '?t=' + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + '?t=' + Date.now());
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
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != 'undefined' && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
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
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
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
        }
        // Always traverse to the parent bundle, even if we already replaced the asset in this bundle.
        // This is required in case modules are duplicated. We need to ensure all instances have the updated code.
        if (bundle.parent) hmrApply(bundle.parent, asset);
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
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    checkedAssets = {};
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else if (a !== null) {
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
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) {
            bundleNotFound = true;
            return true;
        }
        return hmrAcceptCheckOne(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return null;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    if (!cached) return true;
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
    return false;
}
function hmrDisposeQueue() {
    // Dispose all old assets.
    for(let i = 0; i < assetsToDispose.length; i++){
        let id = assetsToDispose[i][1];
        if (!disposedAssets[id]) {
            hmrDispose(assetsToDispose[i][0], id);
            disposedAssets[id] = true;
        }
    }
    assetsToDispose = [];
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        let assetsToAlsoAccept = [];
        cached.hot._acceptCallbacks.forEach(function(cb) {
            let additionalAssets = cb(function() {
                return getParents(module.bundle.root, id);
            });
            if (Array.isArray(additionalAssets) && additionalAssets.length) assetsToAlsoAccept.push(...additionalAssets);
        });
        if (assetsToAlsoAccept.length) {
            let handled = assetsToAlsoAccept.every(function(a) {
                return hmrAcceptCheck(a[0], a[1]);
            });
            if (!handled) return fullReload();
            hmrDisposeQueue();
        }
    }
}

},{}],"2R06K":[function(require,module,exports,__globalThis) {
var $parcel$ReactRefreshHelpers$0bfa = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
$parcel$ReactRefreshHelpers$0bfa.init();
var prevRefreshReg = globalThis.$RefreshReg$;
var prevRefreshSig = globalThis.$RefreshSig$;
$parcel$ReactRefreshHelpers$0bfa.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _jsxDevRuntime = require("react/jsx-dev-runtime");
var _preact = require("preact");
var _app = require("./components/App");
var _appDefault = parcelHelpers.interopDefault(_app);
// Mount Preact app to the DOM
(0, _preact.render)(/*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _appDefault.default), {}, void 0, false, {
    fileName: "src/app.js",
    lineNumber: 5,
    columnNumber: 8
}, undefined), document.getElementById('app'));

  $parcel$ReactRefreshHelpers$0bfa.postlude(module);
} finally {
  globalThis.$RefreshReg$ = prevRefreshReg;
  globalThis.$RefreshSig$ = prevRefreshSig;
}
},{"react/jsx-dev-runtime":"jCPoK","preact":"agj7k","./components/App":"1ItjM","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"7h6Pi"}],"jCPoK":[function(require,module,exports,__globalThis) {
require("534d017fa4ef05ac");
module.exports = require("12d0a72f274d0c83");

},{"534d017fa4ef05ac":"cjkvk","12d0a72f274d0c83":"jBtcg"}],"cjkvk":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Component", ()=>(0, _preact.Component));
parcelHelpers.export(exports, "Fragment", ()=>(0, _preact.Fragment));
parcelHelpers.export(exports, "createContext", ()=>(0, _preact.createContext));
parcelHelpers.export(exports, "createElement", ()=>(0, _preact.createElement));
parcelHelpers.export(exports, "createRef", ()=>(0, _preact.createRef));
parcelHelpers.export(exports, "Children", ()=>O);
parcelHelpers.export(exports, "PureComponent", ()=>N);
parcelHelpers.export(exports, "StrictMode", ()=>Cn);
parcelHelpers.export(exports, "Suspense", ()=>P);
parcelHelpers.export(exports, "SuspenseList", ()=>B);
parcelHelpers.export(exports, "__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED", ()=>hn);
parcelHelpers.export(exports, "cloneElement", ()=>_n);
parcelHelpers.export(exports, "createFactory", ()=>dn);
parcelHelpers.export(exports, "createPortal", ()=>$);
parcelHelpers.export(exports, "default", ()=>xn);
parcelHelpers.export(exports, "findDOMNode", ()=>Sn);
parcelHelpers.export(exports, "flushSync", ()=>En);
parcelHelpers.export(exports, "forwardRef", ()=>D);
parcelHelpers.export(exports, "hydrate", ()=>tn);
parcelHelpers.export(exports, "isElement", ()=>Rn);
parcelHelpers.export(exports, "isFragment", ()=>pn);
parcelHelpers.export(exports, "isMemo", ()=>yn);
parcelHelpers.export(exports, "isValidElement", ()=>mn);
parcelHelpers.export(exports, "lazy", ()=>z);
parcelHelpers.export(exports, "memo", ()=>M);
parcelHelpers.export(exports, "render", ()=>nn);
parcelHelpers.export(exports, "startTransition", ()=>x);
parcelHelpers.export(exports, "unmountComponentAtNode", ()=>bn);
parcelHelpers.export(exports, "unstable_batchedUpdates", ()=>gn);
parcelHelpers.export(exports, "useDeferredValue", ()=>w);
parcelHelpers.export(exports, "useInsertionEffect", ()=>I);
parcelHelpers.export(exports, "useSyncExternalStore", ()=>C);
parcelHelpers.export(exports, "useTransition", ()=>k);
parcelHelpers.export(exports, "version", ()=>vn);
var _preact = require("preact");
var _hooks = require("preact/hooks");
parcelHelpers.exportAll(_hooks, exports);
function g(n, t) {
    for(var e in t)n[e] = t[e];
    return n;
}
function E(n, t) {
    for(var e in n)if ("__source" !== e && !(e in t)) return !0;
    for(var r in t)if ("__source" !== r && n[r] !== t[r]) return !0;
    return !1;
}
function C(n, t) {
    var e = t(), r = (0, _hooks.useState)({
        t: {
            __: e,
            u: t
        }
    }), u = r[0].t, o = r[1];
    return (0, _hooks.useLayoutEffect)(function() {
        u.__ = e, u.u = t, R(u) && o({
            t: u
        });
    }, [
        n,
        e,
        t
    ]), (0, _hooks.useEffect)(function() {
        return R(u) && o({
            t: u
        }), n(function() {
            R(u) && o({
                t: u
            });
        });
    }, [
        n
    ]), e;
}
function R(n) {
    var t, e, r = n.u, u = n.__;
    try {
        var o = r();
        return !((t = u) === (e = o) && (0 !== t || 1 / t == 1 / e) || t != t && e != e);
    } catch (n) {
        return !0;
    }
}
function x(n) {
    n();
}
function w(n) {
    return n;
}
function k() {
    return [
        !1,
        x
    ];
}
var I = (0, _hooks.useLayoutEffect);
function N(n, t) {
    this.props = n, this.context = t;
}
function M(n, e) {
    function r(n) {
        var t = this.props.ref, r = t == n.ref;
        return !r && t && (t.call ? t(null) : t.current = null), e ? !e(this.props, n) || !r : E(this.props, n);
    }
    function u(e) {
        return this.shouldComponentUpdate = r, (0, _preact.createElement)(n, e);
    }
    return u.displayName = "Memo(" + (n.displayName || n.name) + ")", u.prototype.isReactComponent = !0, u.__f = !0, u.type = n, u;
}
(N.prototype = new (0, _preact.Component)).isPureReactComponent = !0, N.prototype.shouldComponentUpdate = function(n, t) {
    return E(this.props, n) || E(this.state, t);
};
var T = (0, _preact.options).__b;
(0, _preact.options).__b = function(n) {
    n.type && n.type.__f && n.ref && (n.props.ref = n.ref, n.ref = null), T && T(n);
};
var A = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.forward_ref") || 3911;
function D(n) {
    function t(t) {
        var e = g({}, t);
        return delete e.ref, n(e, t.ref || null);
    }
    return t.$$typeof = A, t.render = n, t.prototype.isReactComponent = t.__f = !0, t.displayName = "ForwardRef(" + (n.displayName || n.name) + ")", t;
}
var L = function(n, t) {
    return null == n ? null : (0, _preact.toChildArray)((0, _preact.toChildArray)(n).map(t));
}, O = {
    map: L,
    forEach: L,
    count: function(n) {
        return n ? (0, _preact.toChildArray)(n).length : 0;
    },
    only: function(n) {
        var t = (0, _preact.toChildArray)(n);
        if (1 !== t.length) throw "Children.only";
        return t[0];
    },
    toArray: (0, _preact.toChildArray)
}, U = (0, _preact.options).__e;
(0, _preact.options).__e = function(n, t, e, r) {
    if (n.then) {
        for(var u, o = t; o = o.__;)if ((u = o.__c) && u.__c) return null == t.__e && (t.__e = e.__e, t.__k = e.__k), u.__c(n, t);
    }
    U(n, t, e, r);
};
var F = (0, _preact.options).unmount;
function V(n, t, e) {
    return n && (n.__c && n.__c.__H && (n.__c.__H.__.forEach(function(n) {
        "function" == typeof n.__c && n.__c();
    }), n.__c.__H = null), null != (n = g({}, n)).__c && (n.__c.__P === e && (n.__c.__P = t), n.__c.__e = !0, n.__c = null), n.__k = n.__k && n.__k.map(function(n) {
        return V(n, t, e);
    })), n;
}
function W(n, t, e) {
    return n && e && (n.__v = null, n.__k = n.__k && n.__k.map(function(n) {
        return W(n, t, e);
    }), n.__c && n.__c.__P === t && (n.__e && e.appendChild(n.__e), n.__c.__e = !0, n.__c.__P = e)), n;
}
function P() {
    this.__u = 0, this.o = null, this.__b = null;
}
function j(n) {
    if (!n.__) return null;
    var t = n.__.__c;
    return t && t.__a && t.__a(n);
}
function z(n) {
    var e, r, u, o = null;
    function i(i) {
        if (e || (e = n()).then(function(n) {
            n && (o = n.default || n), u = !0;
        }, function(n) {
            r = n, u = !0;
        }), r) throw r;
        if (!u) throw e;
        return o ? (0, _preact.createElement)(o, i) : null;
    }
    return i.displayName = "Lazy", i.__f = !0, i;
}
function B() {
    this.i = null, this.l = null;
}
(0, _preact.options).unmount = function(n) {
    var t = n.__c;
    t && (t.__z = !0), t && t.__R && t.__R(), t && 32 & n.__u && (n.type = null), F && F(n);
}, (P.prototype = new (0, _preact.Component)).__c = function(n, t) {
    var e = t.__c, r = this;
    null == r.o && (r.o = []), r.o.push(e);
    var u = j(r.__v), o = !1, i = function() {
        o || r.__z || (o = !0, e.__R = null, u ? u(c) : c());
    };
    e.__R = i;
    var l = e.__P;
    e.__P = null;
    var c = function() {
        if (!--r.__u) {
            if (r.state.__a) {
                var n = r.state.__a;
                r.__v.__k[0] = W(n, n.__c.__P, n.__c.__O);
            }
            var t;
            for(r.setState({
                __a: r.__b = null
            }); t = r.o.pop();)t.__P = l, t.forceUpdate();
        }
    };
    r.__u++ || 32 & t.__u || r.setState({
        __a: r.__b = r.__v.__k[0]
    }), n.then(i, i);
}, P.prototype.componentWillUnmount = function() {
    this.o = [];
}, P.prototype.render = function(n, e) {
    if (this.__b) {
        if (this.__v.__k) {
            var r = document.createElement("div"), o = this.__v.__k[0].__c;
            this.__v.__k[0] = V(this.__b, r, o.__O = o.__P);
        }
        this.__b = null;
    }
    var i = e.__a && (0, _preact.createElement)((0, _preact.Fragment), null, n.fallback);
    return i && (i.__u &= -33), [
        (0, _preact.createElement)((0, _preact.Fragment), null, e.__a ? null : n.children),
        i
    ];
};
var H = function(n, t, e) {
    if (++e[1] === e[0] && n.l.delete(t), n.props.revealOrder && ("t" !== n.props.revealOrder[0] || !n.l.size)) for(e = n.i; e;){
        for(; e.length > 3;)e.pop()();
        if (e[1] < e[0]) break;
        n.i = e = e[2];
    }
};
function Z(n) {
    return this.getChildContext = function() {
        return n.context;
    }, n.children;
}
function Y(n) {
    var e = this, r = n.h;
    if (e.componentWillUnmount = function() {
        (0, _preact.render)(null, e.v), e.v = null, e.h = null;
    }, e.h && e.h !== r && e.componentWillUnmount(), !e.v) {
        for(var u = e.__v; null !== u && !u.__m && null !== u.__;)u = u.__;
        e.h = r, e.v = {
            nodeType: 1,
            parentNode: r,
            childNodes: [],
            __k: {
                __m: u.__m
            },
            contains: function() {
                return !0;
            },
            namespaceURI: r.namespaceURI,
            insertBefore: function(n, t) {
                this.childNodes.push(n), e.h.insertBefore(n, t);
            },
            removeChild: function(n) {
                this.childNodes.splice(this.childNodes.indexOf(n) >>> 1, 1), e.h.removeChild(n);
            }
        };
    }
    (0, _preact.render)((0, _preact.createElement)(Z, {
        context: e.context
    }, n.__v), e.v);
}
function $(n, e) {
    var r = (0, _preact.createElement)(Y, {
        __v: n,
        h: e
    });
    return r.containerInfo = e, r;
}
(B.prototype = new (0, _preact.Component)).__a = function(n) {
    var t = this, e = j(t.__v), r = t.l.get(n);
    return r[0]++, function(u) {
        var o = function() {
            t.props.revealOrder ? (r.push(u), H(t, n, r)) : u();
        };
        e ? e(o) : o();
    };
}, B.prototype.render = function(n) {
    this.i = null, this.l = new Map;
    var t = (0, _preact.toChildArray)(n.children);
    n.revealOrder && "b" === n.revealOrder[0] && t.reverse();
    for(var e = t.length; e--;)this.l.set(t[e], this.i = [
        1,
        0,
        this.i
    ]);
    return n.children;
}, B.prototype.componentDidUpdate = B.prototype.componentDidMount = function() {
    var n = this;
    this.l.forEach(function(t, e) {
        H(n, e, t);
    });
};
var q = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103, G = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/, J = /^on(Ani|Tra|Tou|BeforeInp|Compo)/, K = /[A-Z0-9]/g, Q = "undefined" != typeof document, X = function(n) {
    return ("undefined" != typeof Symbol && "symbol" == typeof Symbol() ? /fil|che|rad/ : /fil|che|ra/).test(n);
};
function nn(n, t, e) {
    return null == t.__k && (t.textContent = ""), (0, _preact.render)(n, t), "function" == typeof e && e(), n ? n.__c : null;
}
function tn(n, t, e) {
    return (0, _preact.hydrate)(n, t), "function" == typeof e && e(), n ? n.__c : null;
}
(0, _preact.Component).prototype.isReactComponent = {}, [
    "componentWillMount",
    "componentWillReceiveProps",
    "componentWillUpdate"
].forEach(function(t) {
    Object.defineProperty((0, _preact.Component).prototype, t, {
        configurable: !0,
        get: function() {
            return this["UNSAFE_" + t];
        },
        set: function(n) {
            Object.defineProperty(this, t, {
                configurable: !0,
                writable: !0,
                value: n
            });
        }
    });
});
var en = (0, _preact.options).event;
function rn() {}
function un() {
    return this.cancelBubble;
}
function on() {
    return this.defaultPrevented;
}
(0, _preact.options).event = function(n) {
    return en && (n = en(n)), n.persist = rn, n.isPropagationStopped = un, n.isDefaultPrevented = on, n.nativeEvent = n;
};
var ln, cn = {
    enumerable: !1,
    configurable: !0,
    get: function() {
        return this.class;
    }
}, fn = (0, _preact.options).vnode;
(0, _preact.options).vnode = function(n) {
    "string" == typeof n.type && function(n) {
        var t = n.props, e = n.type, u = {}, o = -1 === e.indexOf("-");
        for(var i in t){
            var l = t[i];
            if (!("value" === i && "defaultValue" in t && null == l || Q && "children" === i && "noscript" === e || "class" === i || "className" === i)) {
                var c = i.toLowerCase();
                "defaultValue" === i && "value" in t && null == t.value ? i = "value" : "download" === i && !0 === l ? l = "" : "translate" === c && "no" === l ? l = !1 : "o" === c[0] && "n" === c[1] ? "ondoubleclick" === c ? i = "ondblclick" : "onchange" !== c || "input" !== e && "textarea" !== e || X(t.type) ? "onfocus" === c ? i = "onfocusin" : "onblur" === c ? i = "onfocusout" : J.test(i) && (i = c) : c = i = "oninput" : o && G.test(i) ? i = i.replace(K, "-$&").toLowerCase() : null === l && (l = void 0), "oninput" === c && u[i = c] && (i = "oninputCapture"), u[i] = l;
            }
        }
        "select" == e && u.multiple && Array.isArray(u.value) && (u.value = (0, _preact.toChildArray)(t.children).forEach(function(n) {
            n.props.selected = -1 != u.value.indexOf(n.props.value);
        })), "select" == e && null != u.defaultValue && (u.value = (0, _preact.toChildArray)(t.children).forEach(function(n) {
            n.props.selected = u.multiple ? -1 != u.defaultValue.indexOf(n.props.value) : u.defaultValue == n.props.value;
        })), t.class && !t.className ? (u.class = t.class, Object.defineProperty(u, "className", cn)) : (t.className && !t.class || t.class && t.className) && (u.class = u.className = t.className), n.props = u;
    }(n), n.$$typeof = q, fn && fn(n);
};
var an = (0, _preact.options).__r;
(0, _preact.options).__r = function(n) {
    an && an(n), ln = n.__c;
};
var sn = (0, _preact.options).diffed;
(0, _preact.options).diffed = function(n) {
    sn && sn(n);
    var t = n.props, e = n.__e;
    null != e && "textarea" === n.type && "value" in t && t.value !== e.value && (e.value = null == t.value ? "" : t.value), ln = null;
};
var hn = {
    ReactCurrentDispatcher: {
        current: {
            readContext: function(n) {
                return ln.__n[n.__c].props.value;
            },
            useCallback: (0, _hooks.useCallback),
            useContext: (0, _hooks.useContext),
            useDebugValue: (0, _hooks.useDebugValue),
            useDeferredValue: w,
            useEffect: (0, _hooks.useEffect),
            useId: (0, _hooks.useId),
            useImperativeHandle: (0, _hooks.useImperativeHandle),
            useInsertionEffect: I,
            useLayoutEffect: (0, _hooks.useLayoutEffect),
            useMemo: (0, _hooks.useMemo),
            useReducer: (0, _hooks.useReducer),
            useRef: (0, _hooks.useRef),
            useState: (0, _hooks.useState),
            useSyncExternalStore: C,
            useTransition: k
        }
    }
}, vn = "18.3.1";
function dn(n) {
    return (0, _preact.createElement).bind(null, n);
}
function mn(n) {
    return !!n && n.$$typeof === q;
}
function pn(n) {
    return mn(n) && n.type === (0, _preact.Fragment);
}
function yn(n) {
    return !!n && !!n.displayName && ("string" == typeof n.displayName || n.displayName instanceof String) && n.displayName.startsWith("Memo(");
}
function _n(n) {
    return mn(n) ? (0, _preact.cloneElement).apply(null, arguments) : n;
}
function bn(n) {
    return !!n.__k && ((0, _preact.render)(null, n), !0);
}
function Sn(n) {
    return n && (n.base || 1 === n.nodeType && n) || null;
}
var gn = function(n, t) {
    return n(t);
}, En = function(n, t) {
    return n(t);
}, Cn = (0, _preact.Fragment), Rn = mn, xn = {
    useState: (0, _hooks.useState),
    useId: (0, _hooks.useId),
    useReducer: (0, _hooks.useReducer),
    useEffect: (0, _hooks.useEffect),
    useLayoutEffect: (0, _hooks.useLayoutEffect),
    useInsertionEffect: I,
    useTransition: k,
    useDeferredValue: w,
    useSyncExternalStore: C,
    startTransition: x,
    useRef: (0, _hooks.useRef),
    useImperativeHandle: (0, _hooks.useImperativeHandle),
    useMemo: (0, _hooks.useMemo),
    useCallback: (0, _hooks.useCallback),
    useContext: (0, _hooks.useContext),
    useDebugValue: (0, _hooks.useDebugValue),
    version: "18.3.1",
    Children: O,
    render: nn,
    hydrate: tn,
    unmountComponentAtNode: bn,
    createPortal: $,
    createElement: (0, _preact.createElement),
    createContext: (0, _preact.createContext),
    createFactory: dn,
    cloneElement: _n,
    createRef: (0, _preact.createRef),
    Fragment: (0, _preact.Fragment),
    isValidElement: mn,
    isElement: Rn,
    isFragment: pn,
    isMemo: yn,
    findDOMNode: Sn,
    Component: (0, _preact.Component),
    PureComponent: N,
    memo: M,
    forwardRef: D,
    flushSync: En,
    unstable_batchedUpdates: gn,
    StrictMode: Cn,
    Suspense: P,
    SuspenseList: B,
    lazy: z,
    __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: hn
};

},{"preact":"agj7k","preact/hooks":"83L4j","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"agj7k":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Component", ()=>x);
parcelHelpers.export(exports, "Fragment", ()=>k);
parcelHelpers.export(exports, "cloneElement", ()=>K);
parcelHelpers.export(exports, "createContext", ()=>Q);
parcelHelpers.export(exports, "createElement", ()=>_);
parcelHelpers.export(exports, "createRef", ()=>b);
parcelHelpers.export(exports, "h", ()=>_);
parcelHelpers.export(exports, "hydrate", ()=>J);
parcelHelpers.export(exports, "isValidElement", ()=>t);
parcelHelpers.export(exports, "options", ()=>l);
parcelHelpers.export(exports, "render", ()=>G);
parcelHelpers.export(exports, "toChildArray", ()=>H);
var n, l, u, t, i, o, r, e, f, c, s, a, h, p = {}, v = [], y = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, d = Array.isArray;
function w(n, l) {
    for(var u in l)n[u] = l[u];
    return n;
}
function g(n) {
    n && n.parentNode && n.parentNode.removeChild(n);
}
function _(l, u, t) {
    var i, o, r, e = {};
    for(r in u)"key" == r ? i = u[r] : "ref" == r ? o = u[r] : e[r] = u[r];
    if (arguments.length > 2 && (e.children = arguments.length > 3 ? n.call(arguments, 2) : t), "function" == typeof l && null != l.defaultProps) for(r in l.defaultProps)void 0 === e[r] && (e[r] = l.defaultProps[r]);
    return m(l, e, i, o, null);
}
function m(n, t, i, o, r) {
    var e = {
        type: n,
        props: t,
        key: i,
        ref: o,
        __k: null,
        __: null,
        __b: 0,
        __e: null,
        __c: null,
        constructor: void 0,
        __v: null == r ? ++u : r,
        __i: -1,
        __u: 0
    };
    return null == r && null != l.vnode && l.vnode(e), e;
}
function b() {
    return {
        current: null
    };
}
function k(n) {
    return n.children;
}
function x(n, l) {
    this.props = n, this.context = l;
}
function S(n, l) {
    if (null == l) return n.__ ? S(n.__, n.__i + 1) : null;
    for(var u; l < n.__k.length; l++)if (null != (u = n.__k[l]) && null != u.__e) return u.__e;
    return "function" == typeof n.type ? S(n) : null;
}
function C(n) {
    var l, u;
    if (null != (n = n.__) && null != n.__c) {
        for(n.__e = n.__c.base = null, l = 0; l < n.__k.length; l++)if (null != (u = n.__k[l]) && null != u.__e) {
            n.__e = n.__c.base = u.__e;
            break;
        }
        return C(n);
    }
}
function M(n) {
    (!n.__d && (n.__d = !0) && i.push(n) && !$.__r++ || o != l.debounceRendering) && ((o = l.debounceRendering) || r)($);
}
function $() {
    for(var n, u, t, o, r, f, c, s = 1; i.length;)i.length > s && i.sort(e), n = i.shift(), s = i.length, n.__d && (t = void 0, o = void 0, r = (o = (u = n).__v).__e, f = [], c = [], u.__P && ((t = w({}, o)).__v = o.__v + 1, l.vnode && l.vnode(t), O(u.__P, t, o, u.__n, u.__P.namespaceURI, 32 & o.__u ? [
        r
    ] : null, f, null == r ? S(o) : r, !!(32 & o.__u), c), t.__v = o.__v, t.__.__k[t.__i] = t, N(f, t, c), o.__e = o.__ = null, t.__e != r && C(t)));
    $.__r = 0;
}
function I(n, l, u, t, i, o, r, e, f, c, s) {
    var a, h, y, d, w, g, _, m = t && t.__k || v, b = l.length;
    for(f = P(u, l, m, f, b), a = 0; a < b; a++)null != (y = u.__k[a]) && (h = -1 == y.__i ? p : m[y.__i] || p, y.__i = a, g = O(n, y, h, i, o, r, e, f, c, s), d = y.__e, y.ref && h.ref != y.ref && (h.ref && B(h.ref, null, y), s.push(y.ref, y.__c || d, y)), null == w && null != d && (w = d), (_ = !!(4 & y.__u)) || h.__k === y.__k ? f = A(y, f, n, _) : "function" == typeof y.type && void 0 !== g ? f = g : d && (f = d.nextSibling), y.__u &= -7);
    return u.__e = w, f;
}
function P(n, l, u, t, i) {
    var o, r, e, f, c, s = u.length, a = s, h = 0;
    for(n.__k = new Array(i), o = 0; o < i; o++)null != (r = l[o]) && "boolean" != typeof r && "function" != typeof r ? ("string" == typeof r || "number" == typeof r || "bigint" == typeof r || r.constructor == String ? r = n.__k[o] = m(null, r, null, null, null) : d(r) ? r = n.__k[o] = m(k, {
        children: r
    }, null, null, null) : void 0 === r.constructor && r.__b > 0 ? r = n.__k[o] = m(r.type, r.props, r.key, r.ref ? r.ref : null, r.__v) : n.__k[o] = r, f = o + h, r.__ = n, r.__b = n.__b + 1, e = null, -1 != (c = r.__i = L(r, u, f, a)) && (a--, (e = u[c]) && (e.__u |= 2)), null == e || null == e.__v ? (-1 == c && (i > s ? h-- : i < s && h++), "function" != typeof r.type && (r.__u |= 4)) : c != f && (c == f - 1 ? h-- : c == f + 1 ? h++ : (c > f ? h-- : h++, r.__u |= 4))) : n.__k[o] = null;
    if (a) for(o = 0; o < s; o++)null != (e = u[o]) && 0 == (2 & e.__u) && (e.__e == t && (t = S(e)), D(e, e));
    return t;
}
function A(n, l, u, t) {
    var i, o;
    if ("function" == typeof n.type) {
        for(i = n.__k, o = 0; i && o < i.length; o++)i[o] && (i[o].__ = n, l = A(i[o], l, u, t));
        return l;
    }
    n.__e != l && (t && (l && n.type && !l.parentNode && (l = S(n)), u.insertBefore(n.__e, l || null)), l = n.__e);
    do l = l && l.nextSibling;
    while (null != l && 8 == l.nodeType);
    return l;
}
function H(n, l) {
    return l = l || [], null == n || "boolean" == typeof n || (d(n) ? n.some(function(n) {
        H(n, l);
    }) : l.push(n)), l;
}
function L(n, l, u, t) {
    var i, o, r, e = n.key, f = n.type, c = l[u], s = null != c && 0 == (2 & c.__u);
    if (null === c && null == e || s && e == c.key && f == c.type) return u;
    if (t > (s ? 1 : 0)) {
        for(i = u - 1, o = u + 1; i >= 0 || o < l.length;)if (null != (c = l[r = i >= 0 ? i-- : o++]) && 0 == (2 & c.__u) && e == c.key && f == c.type) return r;
    }
    return -1;
}
function T(n, l, u) {
    "-" == l[0] ? n.setProperty(l, null == u ? "" : u) : n[l] = null == u ? "" : "number" != typeof u || y.test(l) ? u : u + "px";
}
function j(n, l, u, t, i) {
    var o, r;
    n: if ("style" == l) {
        if ("string" == typeof u) n.style.cssText = u;
        else {
            if ("string" == typeof t && (n.style.cssText = t = ""), t) for(l in t)u && l in u || T(n.style, l, "");
            if (u) for(l in u)t && u[l] == t[l] || T(n.style, l, u[l]);
        }
    } else if ("o" == l[0] && "n" == l[1]) o = l != (l = l.replace(f, "$1")), r = l.toLowerCase(), l = r in n || "onFocusOut" == l || "onFocusIn" == l ? r.slice(2) : l.slice(2), n.l || (n.l = {}), n.l[l + o] = u, u ? t ? u.u = t.u : (u.u = c, n.addEventListener(l, o ? a : s, o)) : n.removeEventListener(l, o ? a : s, o);
    else {
        if ("http://www.w3.org/2000/svg" == i) l = l.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
        else if ("width" != l && "height" != l && "href" != l && "list" != l && "form" != l && "tabIndex" != l && "download" != l && "rowSpan" != l && "colSpan" != l && "role" != l && "popover" != l && l in n) try {
            n[l] = null == u ? "" : u;
            break n;
        } catch (n) {}
        "function" == typeof u || (null == u || !1 === u && "-" != l[4] ? n.removeAttribute(l) : n.setAttribute(l, "popover" == l && 1 == u ? "" : u));
    }
}
function F(n) {
    return function(u) {
        if (this.l) {
            var t = this.l[u.type + n];
            if (null == u.t) u.t = c++;
            else if (u.t < t.u) return;
            return t(l.event ? l.event(u) : u);
        }
    };
}
function O(n, u, t, i, o, r, e, f, c, s) {
    var a, h, p, v, y, _, m, b, S, C, M, $, P, A, H, L, T, j = u.type;
    if (void 0 !== u.constructor) return null;
    128 & t.__u && (c = !!(32 & t.__u), r = [
        f = u.__e = t.__e
    ]), (a = l.__b) && a(u);
    n: if ("function" == typeof j) try {
        if (b = u.props, S = "prototype" in j && j.prototype.render, C = (a = j.contextType) && i[a.__c], M = a ? C ? C.props.value : a.__ : i, t.__c ? m = (h = u.__c = t.__c).__ = h.__E : (S ? u.__c = h = new j(b, M) : (u.__c = h = new x(b, M), h.constructor = j, h.render = E), C && C.sub(h), h.state || (h.state = {}), h.__n = i, p = h.__d = !0, h.__h = [], h._sb = []), S && null == h.__s && (h.__s = h.state), S && null != j.getDerivedStateFromProps && (h.__s == h.state && (h.__s = w({}, h.__s)), w(h.__s, j.getDerivedStateFromProps(b, h.__s))), v = h.props, y = h.state, h.__v = u, p) S && null == j.getDerivedStateFromProps && null != h.componentWillMount && h.componentWillMount(), S && null != h.componentDidMount && h.__h.push(h.componentDidMount);
        else {
            if (S && null == j.getDerivedStateFromProps && b !== v && null != h.componentWillReceiveProps && h.componentWillReceiveProps(b, M), u.__v == t.__v || !h.__e && null != h.shouldComponentUpdate && !1 === h.shouldComponentUpdate(b, h.__s, M)) {
                for(u.__v != t.__v && (h.props = b, h.state = h.__s, h.__d = !1), u.__e = t.__e, u.__k = t.__k, u.__k.some(function(n) {
                    n && (n.__ = u);
                }), $ = 0; $ < h._sb.length; $++)h.__h.push(h._sb[$]);
                h._sb = [], h.__h.length && e.push(h);
                break n;
            }
            null != h.componentWillUpdate && h.componentWillUpdate(b, h.__s, M), S && null != h.componentDidUpdate && h.__h.push(function() {
                h.componentDidUpdate(v, y, _);
            });
        }
        if (h.context = M, h.props = b, h.__P = n, h.__e = !1, P = l.__r, A = 0, S) {
            for(h.state = h.__s, h.__d = !1, P && P(u), a = h.render(h.props, h.state, h.context), H = 0; H < h._sb.length; H++)h.__h.push(h._sb[H]);
            h._sb = [];
        } else do h.__d = !1, P && P(u), a = h.render(h.props, h.state, h.context), h.state = h.__s;
        while (h.__d && ++A < 25);
        h.state = h.__s, null != h.getChildContext && (i = w(w({}, i), h.getChildContext())), S && !p && null != h.getSnapshotBeforeUpdate && (_ = h.getSnapshotBeforeUpdate(v, y)), L = a, null != a && a.type === k && null == a.key && (L = V(a.props.children)), f = I(n, d(L) ? L : [
            L
        ], u, t, i, o, r, e, f, c, s), h.base = u.__e, u.__u &= -161, h.__h.length && e.push(h), m && (h.__E = h.__ = null);
    } catch (n) {
        if (u.__v = null, c || null != r) {
            if (n.then) {
                for(u.__u |= c ? 160 : 128; f && 8 == f.nodeType && f.nextSibling;)f = f.nextSibling;
                r[r.indexOf(f)] = null, u.__e = f;
            } else {
                for(T = r.length; T--;)g(r[T]);
                z(u);
            }
        } else u.__e = t.__e, u.__k = t.__k, n.then || z(u);
        l.__e(n, u, t);
    }
    else null == r && u.__v == t.__v ? (u.__k = t.__k, u.__e = t.__e) : f = u.__e = q(t.__e, u, t, i, o, r, e, c, s);
    return (a = l.diffed) && a(u), 128 & u.__u ? void 0 : f;
}
function z(n) {
    n && n.__c && (n.__c.__e = !0), n && n.__k && n.__k.forEach(z);
}
function N(n, u, t) {
    for(var i = 0; i < t.length; i++)B(t[i], t[++i], t[++i]);
    l.__c && l.__c(u, n), n.some(function(u) {
        try {
            n = u.__h, u.__h = [], n.some(function(n) {
                n.call(u);
            });
        } catch (n) {
            l.__e(n, u.__v);
        }
    });
}
function V(n) {
    return "object" != typeof n || null == n || n.__b && n.__b > 0 ? n : d(n) ? n.map(V) : w({}, n);
}
function q(u, t, i, o, r, e, f, c, s) {
    var a, h, v, y, w, _, m, b = i.props || p, k = t.props, x = t.type;
    if ("svg" == x ? r = "http://www.w3.org/2000/svg" : "math" == x ? r = "http://www.w3.org/1998/Math/MathML" : r || (r = "http://www.w3.org/1999/xhtml"), null != e) {
        for(a = 0; a < e.length; a++)if ((w = e[a]) && "setAttribute" in w == !!x && (x ? w.localName == x : 3 == w.nodeType)) {
            u = w, e[a] = null;
            break;
        }
    }
    if (null == u) {
        if (null == x) return document.createTextNode(k);
        u = document.createElementNS(r, x, k.is && k), c && (l.__m && l.__m(t, e), c = !1), e = null;
    }
    if (null == x) b === k || c && u.data == k || (u.data = k);
    else {
        if (e = e && n.call(u.childNodes), !c && null != e) for(b = {}, a = 0; a < u.attributes.length; a++)b[(w = u.attributes[a]).name] = w.value;
        for(a in b)if (w = b[a], "children" == a) ;
        else if ("dangerouslySetInnerHTML" == a) v = w;
        else if (!(a in k)) {
            if ("value" == a && "defaultValue" in k || "checked" == a && "defaultChecked" in k) continue;
            j(u, a, null, w, r);
        }
        for(a in k)w = k[a], "children" == a ? y = w : "dangerouslySetInnerHTML" == a ? h = w : "value" == a ? _ = w : "checked" == a ? m = w : c && "function" != typeof w || b[a] === w || j(u, a, w, b[a], r);
        if (h) c || v && (h.__html == v.__html || h.__html == u.innerHTML) || (u.innerHTML = h.__html), t.__k = [];
        else if (v && (u.innerHTML = ""), I("template" == t.type ? u.content : u, d(y) ? y : [
            y
        ], t, i, o, "foreignObject" == x ? "http://www.w3.org/1999/xhtml" : r, e, f, e ? e[0] : i.__k && S(i, 0), c, s), null != e) for(a = e.length; a--;)g(e[a]);
        c || (a = "value", "progress" == x && null == _ ? u.removeAttribute("value") : null != _ && (_ !== u[a] || "progress" == x && !_ || "option" == x && _ != b[a]) && j(u, a, _, b[a], r), a = "checked", null != m && m != u[a] && j(u, a, m, b[a], r));
    }
    return u;
}
function B(n, u, t) {
    try {
        if ("function" == typeof n) {
            var i = "function" == typeof n.__u;
            i && n.__u(), i && null == u || (n.__u = n(u));
        } else n.current = u;
    } catch (n) {
        l.__e(n, t);
    }
}
function D(n, u, t) {
    var i, o;
    if (l.unmount && l.unmount(n), (i = n.ref) && (i.current && i.current != n.__e || B(i, null, u)), null != (i = n.__c)) {
        if (i.componentWillUnmount) try {
            i.componentWillUnmount();
        } catch (n) {
            l.__e(n, u);
        }
        i.base = i.__P = null;
    }
    if (i = n.__k) for(o = 0; o < i.length; o++)i[o] && D(i[o], u, t || "function" != typeof n.type);
    t || g(n.__e), n.__c = n.__ = n.__e = void 0;
}
function E(n, l, u) {
    return this.constructor(n, u);
}
function G(u, t, i) {
    var o, r, e, f;
    t == document && (t = document.documentElement), l.__ && l.__(u, t), r = (o = "function" == typeof i) ? null : i && i.__k || t.__k, e = [], f = [], O(t, u = (!o && i || t).__k = _(k, null, [
        u
    ]), r || p, p, t.namespaceURI, !o && i ? [
        i
    ] : r ? null : t.firstChild ? n.call(t.childNodes) : null, e, !o && i ? i : r ? r.__e : t.firstChild, o, f), N(e, u, f);
}
function J(n, l) {
    G(n, l, J);
}
function K(l, u, t) {
    var i, o, r, e, f = w({}, l.props);
    for(r in l.type && l.type.defaultProps && (e = l.type.defaultProps), u)"key" == r ? i = u[r] : "ref" == r ? o = u[r] : f[r] = void 0 === u[r] && null != e ? e[r] : u[r];
    return arguments.length > 2 && (f.children = arguments.length > 3 ? n.call(arguments, 2) : t), m(l.type, f, i || l.key, o || l.ref, null);
}
function Q(n) {
    function l(n) {
        var u, t;
        return this.getChildContext || (u = new Set, (t = {})[l.__c] = this, this.getChildContext = function() {
            return t;
        }, this.componentWillUnmount = function() {
            u = null;
        }, this.shouldComponentUpdate = function(n) {
            this.props.value != n.value && u.forEach(function(n) {
                n.__e = !0, M(n);
            });
        }, this.sub = function(n) {
            u.add(n);
            var l = n.componentWillUnmount;
            n.componentWillUnmount = function() {
                u && u.delete(n), l && l.call(n);
            };
        }), n.children;
    }
    return l.__c = "__cC" + h++, l.__ = n, l.Provider = l.__l = (l.Consumer = function(n, l) {
        return n.children(l);
    }).contextType = l, l;
}
n = v.slice, l = {
    __e: function(n, l, u, t) {
        for(var i, o, r; l = l.__;)if ((i = l.__c) && !i.__) try {
            if ((o = i.constructor) && null != o.getDerivedStateFromError && (i.setState(o.getDerivedStateFromError(n)), r = i.__d), null != i.componentDidCatch && (i.componentDidCatch(n, t || {}), r = i.__d), r) return i.__E = i;
        } catch (l) {
            n = l;
        }
        throw n;
    }
}, u = 0, t = function(n) {
    return null != n && void 0 === n.constructor;
}, x.prototype.setState = function(n, l) {
    var u;
    u = null != this.__s && this.__s != this.state ? this.__s : this.__s = w({}, this.state), "function" == typeof n && (n = n(w({}, u), this.props)), n && w(u, n), null != n && this.__v && (l && this._sb.push(l), M(this));
}, x.prototype.forceUpdate = function(n) {
    this.__v && (this.__e = !0, n && this.__h.push(n), M(this));
}, x.prototype.render = k, i = [], r = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, e = function(n, l) {
    return n.__v.__b - l.__v.__b;
}, $.__r = 0, f = /(PointerCapture)$|Capture$/i, c = 0, s = F(!1), a = F(!0), h = 0;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"jnFvT":[function(require,module,exports,__globalThis) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || Object.prototype.hasOwnProperty.call(dest, key)) return;
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

},{}],"83L4j":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "useCallback", ()=>q);
parcelHelpers.export(exports, "useContext", ()=>x);
parcelHelpers.export(exports, "useDebugValue", ()=>P);
parcelHelpers.export(exports, "useEffect", ()=>y);
parcelHelpers.export(exports, "useErrorBoundary", ()=>b);
parcelHelpers.export(exports, "useId", ()=>g);
parcelHelpers.export(exports, "useImperativeHandle", ()=>F);
parcelHelpers.export(exports, "useLayoutEffect", ()=>_);
parcelHelpers.export(exports, "useMemo", ()=>T);
parcelHelpers.export(exports, "useReducer", ()=>h);
parcelHelpers.export(exports, "useRef", ()=>A);
parcelHelpers.export(exports, "useState", ()=>d);
var _preact = require("preact");
var t, r, u, i, o = 0, f = [], c = (0, _preact.options), e = c.__b, a = c.__r, v = c.diffed, l = c.__c, m = c.unmount, s = c.__;
function p(n, t) {
    c.__h && c.__h(r, n, o || t), o = 0;
    var u = r.__H || (r.__H = {
        __: [],
        __h: []
    });
    return n >= u.__.length && u.__.push({}), u.__[n];
}
function d(n) {
    return o = 1, h(D, n);
}
function h(n, u, i) {
    var o = p(t++, 2);
    if (o.t = n, !o.__c && (o.__ = [
        i ? i(u) : D(void 0, u),
        function(n) {
            var t = o.__N ? o.__N[0] : o.__[0], r = o.t(t, n);
            t !== r && (o.__N = [
                r,
                o.__[1]
            ], o.__c.setState({}));
        }
    ], o.__c = r, !r.__f)) {
        var f = function(n, t, r) {
            if (!o.__c.__H) return !0;
            var u = o.__c.__H.__.filter(function(n) {
                return !!n.__c;
            });
            if (u.every(function(n) {
                return !n.__N;
            })) return !c || c.call(this, n, t, r);
            var i = o.__c.props !== n;
            return u.forEach(function(n) {
                if (n.__N) {
                    var t = n.__[0];
                    n.__ = n.__N, n.__N = void 0, t !== n.__[0] && (i = !0);
                }
            }), c && c.call(this, n, t, r) || i;
        };
        r.__f = !0;
        var c = r.shouldComponentUpdate, e = r.componentWillUpdate;
        r.componentWillUpdate = function(n, t, r) {
            if (this.__e) {
                var u = c;
                c = void 0, f(n, t, r), c = u;
            }
            e && e.call(this, n, t, r);
        }, r.shouldComponentUpdate = f;
    }
    return o.__N || o.__;
}
function y(n, u) {
    var i = p(t++, 3);
    !c.__s && C(i.__H, u) && (i.__ = n, i.u = u, r.__H.__h.push(i));
}
function _(n, u) {
    var i = p(t++, 4);
    !c.__s && C(i.__H, u) && (i.__ = n, i.u = u, r.__h.push(i));
}
function A(n) {
    return o = 5, T(function() {
        return {
            current: n
        };
    }, []);
}
function F(n, t, r) {
    o = 6, _(function() {
        if ("function" == typeof n) {
            var r = n(t());
            return function() {
                n(null), r && "function" == typeof r && r();
            };
        }
        if (n) return n.current = t(), function() {
            return n.current = null;
        };
    }, null == r ? r : r.concat(n));
}
function T(n, r) {
    var u = p(t++, 7);
    return C(u.__H, r) && (u.__ = n(), u.__H = r, u.__h = n), u.__;
}
function q(n, t) {
    return o = 8, T(function() {
        return n;
    }, t);
}
function x(n) {
    var u = r.context[n.__c], i = p(t++, 9);
    return i.c = n, u ? (null == i.__ && (i.__ = !0, u.sub(r)), u.props.value) : n.__;
}
function P(n, t) {
    c.useDebugValue && c.useDebugValue(t ? t(n) : n);
}
function b(n) {
    var u = p(t++, 10), i = d();
    return u.__ = n, r.componentDidCatch || (r.componentDidCatch = function(n, t) {
        u.__ && u.__(n, t), i[1](n);
    }), [
        i[0],
        function() {
            i[1](void 0);
        }
    ];
}
function g() {
    var n = p(t++, 11);
    if (!n.__) {
        for(var u = r.__v; null !== u && !u.__m && null !== u.__;)u = u.__;
        var i = u.__m || (u.__m = [
            0,
            0
        ]);
        n.__ = "P" + i[0] + "-" + i[1]++;
    }
    return n.__;
}
function j() {
    for(var n; n = f.shift();)if (n.__P && n.__H) try {
        n.__H.__h.forEach(z), n.__H.__h.forEach(B), n.__H.__h = [];
    } catch (t) {
        n.__H.__h = [], c.__e(t, n.__v);
    }
}
c.__b = function(n) {
    r = null, e && e(n);
}, c.__ = function(n, t) {
    n && t.__k && t.__k.__m && (n.__m = t.__k.__m), s && s(n, t);
}, c.__r = function(n) {
    a && a(n), t = 0;
    var i = (r = n.__c).__H;
    i && (u === r ? (i.__h = [], r.__h = [], i.__.forEach(function(n) {
        n.__N && (n.__ = n.__N), n.u = n.__N = void 0;
    })) : (i.__h.forEach(z), i.__h.forEach(B), i.__h = [], t = 0)), u = r;
}, c.diffed = function(n) {
    v && v(n);
    var t = n.__c;
    t && t.__H && (t.__H.__h.length && (1 !== f.push(t) && i === c.requestAnimationFrame || ((i = c.requestAnimationFrame) || w)(j)), t.__H.__.forEach(function(n) {
        n.u && (n.__H = n.u), n.u = void 0;
    })), u = r = null;
}, c.__c = function(n, t) {
    t.some(function(n) {
        try {
            n.__h.forEach(z), n.__h = n.__h.filter(function(n) {
                return !n.__ || B(n);
            });
        } catch (r) {
            t.some(function(n) {
                n.__h && (n.__h = []);
            }), t = [], c.__e(r, n.__v);
        }
    }), l && l(n, t);
}, c.unmount = function(n) {
    m && m(n);
    var t, r = n.__c;
    r && r.__H && (r.__H.__.forEach(function(n) {
        try {
            z(n);
        } catch (n) {
            t = n;
        }
    }), r.__H = void 0, t && c.__e(t, r.__v));
};
var k = "function" == typeof requestAnimationFrame;
function w(n) {
    var t, r = function() {
        clearTimeout(u), k && cancelAnimationFrame(t), setTimeout(n);
    }, u = setTimeout(r, 35);
    k && (t = requestAnimationFrame(r));
}
function z(n) {
    var t = r, u = n.__c;
    "function" == typeof u && (n.__c = void 0, u()), r = t;
}
function B(n) {
    var t = r;
    n.__c = n.__(), r = t;
}
function C(n, t) {
    return !n || n.length !== t.length || t.some(function(t, r) {
        return t !== n[r];
    });
}
function D(n, t) {
    return "function" == typeof t ? t(n) : t;
}

},{"preact":"agj7k","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"jBtcg":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Fragment", ()=>(0, _preact.Fragment));
parcelHelpers.export(exports, "jsx", ()=>u);
parcelHelpers.export(exports, "jsxAttr", ()=>l);
parcelHelpers.export(exports, "jsxDEV", ()=>u);
parcelHelpers.export(exports, "jsxEscape", ()=>s);
parcelHelpers.export(exports, "jsxTemplate", ()=>a);
parcelHelpers.export(exports, "jsxs", ()=>u);
var _preact = require("preact");
var t = /["&<]/;
function n(r) {
    if (0 === r.length || !1 === t.test(r)) return r;
    for(var e = 0, n = 0, o = "", f = ""; n < r.length; n++){
        switch(r.charCodeAt(n)){
            case 34:
                f = "&quot;";
                break;
            case 38:
                f = "&amp;";
                break;
            case 60:
                f = "&lt;";
                break;
            default:
                continue;
        }
        n !== e && (o += r.slice(e, n)), o += f, e = n + 1;
    }
    return n !== e && (o += r.slice(e, n)), o;
}
var o = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, f = 0, i = Array.isArray;
function u(e, t, n, o, i, u) {
    t || (t = {});
    var a, c, p = t;
    if ("ref" in p) for(c in p = {}, t)"ref" == c ? a = t[c] : p[c] = t[c];
    var l = {
        type: e,
        props: p,
        key: n,
        ref: a,
        __k: null,
        __: null,
        __b: 0,
        __e: null,
        __c: null,
        constructor: void 0,
        __v: --f,
        __i: -1,
        __u: 0,
        __source: i,
        __self: u
    };
    if ("function" == typeof e && (a = e.defaultProps)) for(c in a)void 0 === p[c] && (p[c] = a[c]);
    return (0, _preact.options).vnode && (0, _preact.options).vnode(l), l;
}
function a(r) {
    var t = u((0, _preact.Fragment), {
        tpl: r,
        exprs: [].slice.call(arguments, 1)
    });
    return t.key = t.__v, t;
}
var c = {}, p = /[A-Z]/g;
function l(e, t) {
    if ((0, _preact.options).attr) {
        var f = (0, _preact.options).attr(e, t);
        if ("string" == typeof f) return f;
    }
    if (t = function(r) {
        return null !== r && "object" == typeof r && "function" == typeof r.valueOf ? r.valueOf() : r;
    }(t), "ref" === e || "key" === e) return "";
    if ("style" === e && "object" == typeof t) {
        var i = "";
        for(var u in t){
            var a = t[u];
            if (null != a && "" !== a) {
                var l = "-" == u[0] ? u : c[u] || (c[u] = u.replace(p, "-$&").toLowerCase()), s = ";";
                "number" != typeof a || l.startsWith("--") || o.test(l) || (s = "px;"), i = i + l + ":" + a + s;
            }
        }
        return e + '="' + n(i) + '"';
    }
    return null == t || !1 === t || "function" == typeof t || "object" == typeof t ? "" : !0 === t ? e : e + '="' + n("" + t) + '"';
}
function s(r) {
    if (null == r || "boolean" == typeof r || "function" == typeof r) return null;
    if ("object" == typeof r) {
        if (void 0 === r.constructor) return r;
        if (i(r)) {
            for(var e = 0; e < r.length; e++)r[e] = s(r[e]);
            return r;
        }
    }
    return n("" + r);
}

},{"preact":"agj7k","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"1ItjM":[function(require,module,exports,__globalThis) {
var $parcel$ReactRefreshHelpers$233b = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
$parcel$ReactRefreshHelpers$233b.init();
var prevRefreshReg = globalThis.$RefreshReg$;
var prevRefreshSig = globalThis.$RefreshSig$;
$parcel$ReactRefreshHelpers$233b.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _jsxDevRuntime = require("react/jsx-dev-runtime");
var _hooks = require("preact/hooks");
var _header = require("./Header");
var _headerDefault = parcelHelpers.interopDefault(_header);
var _currentWeather = require("./CurrentWeather");
var _currentWeatherDefault = parcelHelpers.interopDefault(_currentWeather);
var _forecastSection = require("./ForecastSection");
var _forecastSectionDefault = parcelHelpers.interopDefault(_forecastSection);
const App = ()=>{
    const [weatherData, setWeatherData] = (0, _hooks.useState)(null);
    const [city, setCity] = (0, _hooks.useState)('London');
    const [searchHistory, setSearchHistory] = (0, _hooks.useState)([]);
    const [loading, setLoading] = (0, _hooks.useState)(true);
    // Load search history from localStorage on mount
    (0, _hooks.useEffect)(()=>{
        const stored = localStorage.getItem('json');
        if (stored) try {
            const history = JSON.parse(stored);
            setSearchHistory(history);
            if (history.length > 0) setCity(history[history.length - 1]);
        } catch (e) {
            console.error('Error loading search history:', e);
        }
    }, []);
    // Fetch weather data
    const fetchWeatherData = async (latitude = 51.5074, longitude = -0.1278)=>{
        setLoading(true);
        try {
            const params = {
                latitude,
                longitude,
                daily: [
                    "temperature_2m_max",
                    "temperature_2m_min",
                    "sunrise",
                    "sunset"
                ],
                hourly: [
                    "temperature_2m",
                    "precipitation_probability",
                    "precipitation",
                    "rain",
                    "relative_humidity_2m"
                ],
                current: [
                    "temperature_2m",
                    "relative_humidity_2m"
                ],
                wind_speed_unit: "mph",
                temperature_unit: "fahrenheit",
                precipitation_unit: "inch",
                timezone: "auto"
            };
            const queryString = Object.entries(params).map(([key, value])=>{
                if (Array.isArray(value)) return value.map((v)=>`${key}=${encodeURIComponent(v)}`).join("&");
                return `${key}=${encodeURIComponent(value)}`;
            }).join("&");
            const url = `https://api.open-meteo.com/v1/forecast?${queryString}`;
            const response = await fetch(url);
            const data = await response.json();
            // Format the data
            const formattedData = {
                current: {
                    time: data.current?.time ? new Date(data.current.time) : null,
                    temperature_2m: data.current?.temperature_2m,
                    relative_humidity_2m: data.current?.relative_humidity_2m
                },
                hourly: {
                    time: data.hourly?.time?.map((t)=>new Date(t)) || [],
                    temperature_2m: data.hourly?.temperature_2m || [],
                    precipitation_probability: data.hourly?.precipitation_probability || [],
                    precipitation: data.hourly?.precipitation || [],
                    rain: data.hourly?.rain || [],
                    relative_humidity_2m: data.hourly?.relative_humidity_2m || []
                },
                daily: {
                    time: data.daily?.time?.map((t)=>new Date(t)) || [],
                    temperature_2m_max: data.daily?.temperature_2m_max || [],
                    temperature_2m_min: data.daily?.temperature_2m_min || [],
                    sunrise: data.daily?.sunrise?.map((t)=>new Date(t)) || [],
                    sunset: data.daily?.sunset?.map((t)=>new Date(t)) || []
                }
            };
            setWeatherData(formattedData);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching weather data:', error);
            setLoading(false);
        }
    };
    // Initial weather fetch (London default)
    (0, _hooks.useEffect)(()=>{
        // Default to London coordinates
        fetchWeatherData(51.5074, -0.1278);
    }, []);
    const handleSearch = (searchCity)=>{
        setCity(searchCity);
        // Add to search history
        const newHistory = [
            ...searchHistory,
            searchCity
        ];
        setSearchHistory(newHistory);
        localStorage.setItem('json', JSON.stringify(newHistory));
        // TODO: Geocode city name to coordinates, then fetch weather
        // For now, just fetch default location
        fetchWeatherData(51.5074, -0.1278);
    };
    return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
        children: [
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("section", {
                className: "section",
                children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                    className: "hero parallax-img fullscreen u-position-relative",
                    children: [
                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _headerDefault.default), {
                            onSearch: handleSearch,
                            searchHistory: searchHistory
                        }, void 0, false, {
                            fileName: "src/components/App.jsx",
                            lineNumber: 112,
                            columnNumber: 11
                        }, undefined),
                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _currentWeatherDefault.default), {
                            weatherData: weatherData,
                            city: city
                        }, void 0, false, {
                            fileName: "src/components/App.jsx",
                            lineNumber: 113,
                            columnNumber: 11
                        }, undefined)
                    ]
                }, void 0, true, {
                    fileName: "src/components/App.jsx",
                    lineNumber: 111,
                    columnNumber: 9
                }, undefined)
            }, void 0, false, {
                fileName: "src/components/App.jsx",
                lineNumber: 110,
                columnNumber: 7
            }, undefined),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("section", {
                className: "section",
                children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _forecastSectionDefault.default), {
                    weatherData: weatherData
                }, void 0, false, {
                    fileName: "src/components/App.jsx",
                    lineNumber: 118,
                    columnNumber: 9
                }, undefined)
            }, void 0, false, {
                fileName: "src/components/App.jsx",
                lineNumber: 117,
                columnNumber: 7
            }, undefined),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("footer", {
                className: "footer mt-10",
                children: [
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("h5", {
                        className: "title text-light",
                        children: [
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("i", {
                                className: "fas fa-meteor"
                            }, void 0, false, {
                                fileName: "src/components/App.jsx",
                                lineNumber: 123,
                                columnNumber: 11
                            }, undefined),
                            "Meteorcast"
                        ]
                    }, void 0, true, {
                        fileName: "src/components/App.jsx",
                        lineNumber: 122,
                        columnNumber: 9
                    }, undefined),
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                        className: "content",
                        children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                            className: "divider"
                        }, void 0, false, {
                            fileName: "src/components/App.jsx",
                            lineNumber: 126,
                            columnNumber: 11
                        }, undefined)
                    }, void 0, false, {
                        fileName: "src/components/App.jsx",
                        lineNumber: 125,
                        columnNumber: 9
                    }, undefined),
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("p", {
                        className: "subtitle",
                        children: "Natasha Harrington \xa9 2018."
                    }, void 0, false, {
                        fileName: "src/components/App.jsx",
                        lineNumber: 128,
                        columnNumber: 9
                    }, undefined)
                ]
            }, void 0, true, {
                fileName: "src/components/App.jsx",
                lineNumber: 121,
                columnNumber: 7
            }, undefined)
        ]
    }, void 0, true, {
        fileName: "src/components/App.jsx",
        lineNumber: 109,
        columnNumber: 5
    }, undefined);
};
exports.default = App;

  $parcel$ReactRefreshHelpers$233b.postlude(module);
} finally {
  globalThis.$RefreshReg$ = prevRefreshReg;
  globalThis.$RefreshSig$ = prevRefreshSig;
}
},{"react/jsx-dev-runtime":"kvPQf","preact/hooks":"83L4j","./Header":"8BCUx","./CurrentWeather":"ihl5n","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"7h6Pi","./ForecastSection":"21cOO"}],"kvPQf":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _compat = require("preact/compat");
var _jsxRuntime = require("preact/jsx-runtime");
parcelHelpers.exportAll(_jsxRuntime, exports);

},{"preact/compat":"cjkvk","preact/jsx-runtime":"jBtcg","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"8BCUx":[function(require,module,exports,__globalThis) {
var $parcel$ReactRefreshHelpers$bb7d = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
$parcel$ReactRefreshHelpers$bb7d.init();
var prevRefreshReg = globalThis.$RefreshReg$;
var prevRefreshSig = globalThis.$RefreshSig$;
$parcel$ReactRefreshHelpers$bb7d.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _jsxDevRuntime = require("react/jsx-dev-runtime");
var _hooks = require("preact/hooks");
const Header = ({ onSearch, searchHistory = [] })=>{
    const [searchValue, setSearchValue] = (0, _hooks.useState)('');
    const [isNavOpen, setIsNavOpen] = (0, _hooks.useState)(false);
    const handleSearch = (e)=>{
        e.preventDefault();
        if (searchValue.trim()) {
            onSearch(searchValue.trim());
            setSearchValue('');
        }
    };
    const handleHistoryClick = (city)=>{
        onSearch(city);
    };
    const toggleNav = ()=>{
        setIsNavOpen(!isNavOpen);
    };
    return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
        className: "header u-position-absolute header-clear header-animated",
        children: [
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                className: "header-brand",
                children: [
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                        className: "nav-item no-hover",
                        children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("h4", {
                            className: "title",
                            children: [
                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("i", {
                                    className: "fas fa-meteor"
                                }, void 0, false, {
                                    fileName: "src/components/Header.jsx",
                                    lineNumber: 28,
                                    columnNumber: 13
                                }, undefined),
                                "Meteorcast"
                            ]
                        }, void 0, true, {
                            fileName: "src/components/Header.jsx",
                            lineNumber: 27,
                            columnNumber: 11
                        }, undefined)
                    }, void 0, false, {
                        fileName: "src/components/Header.jsx",
                        lineNumber: 26,
                        columnNumber: 9
                    }, undefined),
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                        className: `nav-item nav-btn ${isNavOpen ? 'active' : ''}`,
                        style: {
                            cursor: 'pointer',
                            display: 'block',
                            position: 'relative',
                            marginLeft: 'auto'
                        },
                        onClick: toggleNav,
                        children: [
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("span", {}, void 0, false, {
                                fileName: "src/components/Header.jsx",
                                lineNumber: 36,
                                columnNumber: 11
                            }, undefined),
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("span", {}, void 0, false, {
                                fileName: "src/components/Header.jsx",
                                lineNumber: 37,
                                columnNumber: 11
                            }, undefined),
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("span", {}, void 0, false, {
                                fileName: "src/components/Header.jsx",
                                lineNumber: 38,
                                columnNumber: 11
                            }, undefined)
                        ]
                    }, void 0, true, {
                        fileName: "src/components/Header.jsx",
                        lineNumber: 31,
                        columnNumber: 9
                    }, undefined)
                ]
            }, void 0, true, {
                fileName: "src/components/Header.jsx",
                lineNumber: 25,
                columnNumber: 7
            }, undefined),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                className: `header-nav ${isNavOpen ? 'active' : ''}`,
                id: "nav",
                children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                    className: "nav-right",
                    children: [
                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                            className: "nav-item has-sub toggle-hover",
                            id: "dropdown",
                            children: [
                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("a", {
                                    className: "nav-dropdown-link text-light",
                                    children: "Recent Searches"
                                }, void 0, false, {
                                    fileName: "src/components/Header.jsx",
                                    lineNumber: 45,
                                    columnNumber: 13
                                }, undefined),
                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("ul", {
                                    className: "dropdown-menu dropdown-animated",
                                    id: "history-buttons",
                                    children: searchHistory.map((city, index)=>/*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("li", {
                                            children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("a", {
                                                onClick: ()=>handleHistoryClick(city),
                                                children: city.toLowerCase()
                                            }, void 0, false, {
                                                fileName: "src/components/Header.jsx",
                                                lineNumber: 51,
                                                columnNumber: 19
                                            }, undefined)
                                        }, index, false, {
                                            fileName: "src/components/Header.jsx",
                                            lineNumber: 50,
                                            columnNumber: 17
                                        }, undefined))
                                }, void 0, false, {
                                    fileName: "src/components/Header.jsx",
                                    lineNumber: 48,
                                    columnNumber: 13
                                }, undefined)
                            ]
                        }, void 0, true, {
                            fileName: "src/components/Header.jsx",
                            lineNumber: 44,
                            columnNumber: 11
                        }, undefined),
                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("form", {
                            className: "form-group",
                            onSubmit: handleSearch,
                            children: [
                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("input", {
                                    type: "search",
                                    className: "form-group-input input-small searchbox",
                                    placeholder: "Chicago",
                                    value: searchValue,
                                    onInput: (e)=>setSearchValue(e.target.value)
                                }, void 0, false, {
                                    fileName: "src/components/Header.jsx",
                                    lineNumber: 59,
                                    columnNumber: 13
                                }, undefined),
                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("button", {
                                    type: "submit",
                                    className: "form-group-btn btn-small search-btn",
                                    children: "Go"
                                }, void 0, false, {
                                    fileName: "src/components/Header.jsx",
                                    lineNumber: 66,
                                    columnNumber: 13
                                }, undefined)
                            ]
                        }, void 0, true, {
                            fileName: "src/components/Header.jsx",
                            lineNumber: 58,
                            columnNumber: 11
                        }, undefined)
                    ]
                }, void 0, true, {
                    fileName: "src/components/Header.jsx",
                    lineNumber: 43,
                    columnNumber: 9
                }, undefined)
            }, void 0, false, {
                fileName: "src/components/Header.jsx",
                lineNumber: 42,
                columnNumber: 7
            }, undefined)
        ]
    }, void 0, true, {
        fileName: "src/components/Header.jsx",
        lineNumber: 24,
        columnNumber: 5
    }, undefined);
};
exports.default = Header;

  $parcel$ReactRefreshHelpers$bb7d.postlude(module);
} finally {
  globalThis.$RefreshReg$ = prevRefreshReg;
  globalThis.$RefreshSig$ = prevRefreshSig;
}
},{"react/jsx-dev-runtime":"kvPQf","preact/hooks":"83L4j","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"7h6Pi"}],"7h6Pi":[function(require,module,exports,__globalThis) {
"use strict";
var Refresh = require("7422ead32dcc1e6b");
function debounce(func, delay) {
    {
        let timeout = undefined;
        let lastTime = 0;
        return function(args) {
            // Call immediately if last call was more than the delay ago.
            // Otherwise, set a timeout. This means the first call is fast
            // (for the common case of a single update), and subsequent updates
            // are batched.
            let now = Date.now();
            if (now - lastTime > delay) {
                lastTime = now;
                func.call(null, args);
            } else {
                clearTimeout(timeout);
                timeout = setTimeout(function() {
                    timeout = undefined;
                    lastTime = Date.now();
                    func.call(null, args);
                }, delay);
            }
        };
    }
}
var enqueueUpdate = debounce(function() {
    Refresh.performReactRefresh();
}, 30);
module.exports.init = function() {
    if (!globalThis.$RefreshReg$) {
        Refresh.injectIntoGlobalHook(globalThis);
        globalThis.$RefreshReg$ = function() {};
        globalThis.$RefreshSig$ = function() {
            return function(type) {
                return type;
            };
        };
        if (typeof window !== 'undefined') {
            let ErrorOverlay = require("e4d875b7642f9496");
            ErrorOverlay.setEditorHandler(function(errorLocation) {
                let file = `${errorLocation.fileName}:${errorLocation.lineNumber || 1}:${errorLocation.colNumber || 1}`;
                fetch(module.bundle.devServer + `/__parcel_launch_editor?file=${encodeURIComponent(file)}`);
            });
            ErrorOverlay.startReportingRuntimeErrors({
                onError: function() {}
            });
            window.addEventListener('parcelhmraccept', ()=>{
                ErrorOverlay.dismissRuntimeErrors();
            });
        }
    }
};
// Everything below is either adapted or copied from
// https://github.com/facebook/metro/blob/61de16bd1edd7e738dd0311c89555a644023ab2d/packages/metro/src/lib/polyfills/require.js
// MIT License - Copyright (c) Facebook, Inc. and its affiliates.
module.exports.prelude = function(module1) {
    globalThis.$RefreshReg$ = function(type, id) {
        Refresh.register(type, module1.id + ' ' + id);
    };
    globalThis.$RefreshSig$ = Refresh.createSignatureFunctionForTransform;
};
module.exports.postlude = function(module1) {
    if (typeof window === 'undefined') return;
    if (isReactRefreshBoundary(module1.exports)) {
        registerExportsForReactRefresh(module1);
        if (module1.hot) {
            module1.hot.dispose(function(data) {
                if (Refresh.hasUnrecoverableErrors()) window.location.reload();
                data.prevExports = module1.exports;
            });
            module1.hot.accept(function(getParents) {
                var prevExports = module1.hot.data.prevExports;
                var nextExports = module1.exports;
                // Since we just executed the code for it, it's possible
                // that the new exports make it ineligible for being a boundary.
                var isNoLongerABoundary = !isReactRefreshBoundary(nextExports);
                // It can also become ineligible if its exports are incompatible
                // with the previous exports.
                // For example, if you add/remove/change exports, we'll want
                // to re-execute the importing modules, and force those components
                // to re-render. Similarly, if you convert a class component
                // to a function, we want to invalidate the boundary.
                var didInvalidate = shouldInvalidateReactRefreshBoundary(prevExports, nextExports);
                if (isNoLongerABoundary || didInvalidate) {
                    // We'll be conservative. The only case in which we won't do a full
                    // reload is if all parent modules are also refresh boundaries.
                    // In that case we'll add them to the current queue.
                    var parents = getParents();
                    if (parents.length === 0) {
                        // Looks like we bubbled to the root. Can't recover from that.
                        window.location.reload();
                        return;
                    }
                    return parents;
                }
                enqueueUpdate();
            });
        }
    }
};
function isReactRefreshBoundary(exports) {
    if (Refresh.isLikelyComponentType(exports)) return true;
    if (exports == null || typeof exports !== 'object') // Exit if we can't iterate over exports.
    return false;
    var hasExports = false;
    var areAllExportsComponents = true;
    let isESM = '__esModule' in exports;
    for(var key in exports){
        hasExports = true;
        if (key === '__esModule') continue;
        var desc = Object.getOwnPropertyDescriptor(exports, key);
        if (desc && desc.get && !isESM) // Don't invoke getters for CJS as they may have side effects.
        return false;
        var exportValue = exports[key];
        if (!Refresh.isLikelyComponentType(exportValue)) areAllExportsComponents = false;
    }
    return hasExports && areAllExportsComponents;
}
function shouldInvalidateReactRefreshBoundary(prevExports, nextExports) {
    var prevSignature = getRefreshBoundarySignature(prevExports);
    var nextSignature = getRefreshBoundarySignature(nextExports);
    if (prevSignature.length !== nextSignature.length) return true;
    for(var i = 0; i < nextSignature.length; i++){
        if (prevSignature[i] !== nextSignature[i]) return true;
    }
    return false;
}
// When this signature changes, it's unsafe to stop at this refresh boundary.
function getRefreshBoundarySignature(exports) {
    var signature = [];
    signature.push(Refresh.getFamilyByType(exports));
    if (exports == null || typeof exports !== 'object') // Exit if we can't iterate over exports.
    // (This is important for legacy environments.)
    return signature;
    let isESM = '__esModule' in exports;
    for(var key in exports){
        if (key === '__esModule') continue;
        var desc = Object.getOwnPropertyDescriptor(exports, key);
        if (desc && desc.get && !isESM) continue;
        var exportValue = exports[key];
        signature.push(key);
        signature.push(Refresh.getFamilyByType(exportValue));
    }
    return signature;
}
function registerExportsForReactRefresh(module1) {
    var exports = module1.exports, id = module1.id;
    Refresh.register(exports, id + ' %exports%');
    if (exports == null || typeof exports !== 'object') // Exit if we can't iterate over exports.
    // (This is important for legacy environments.)
    return;
    let isESM = '__esModule' in exports;
    for(var key in exports){
        var desc = Object.getOwnPropertyDescriptor(exports, key);
        if (desc && desc.get && !isESM) continue;
        var exportValue = exports[key];
        var typeID = id + ' %exports% ' + key;
        Refresh.register(exportValue, typeID);
    }
}

},{"7422ead32dcc1e6b":"hpiFP","e4d875b7642f9496":"gnoim"}],"hpiFP":[function(require,module,exports,__globalThis) {
'use strict';
module.exports = require("96622d495519d4e");

},{"96622d495519d4e":"7AD9f"}],"7AD9f":[function(require,module,exports,__globalThis) {
/**
 * @license React
 * react-refresh-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ "use strict";
(function() {
    function computeFullKey(signature) {
        if (null !== signature.fullKey) return signature.fullKey;
        var fullKey = signature.ownKey;
        try {
            var hooks = signature.getCustomHooks();
        } catch (err) {
            return signature.forceReset = !0, signature.fullKey = fullKey;
        }
        for(var i = 0; i < hooks.length; i++){
            var hook = hooks[i];
            if ("function" !== typeof hook) return signature.forceReset = !0, signature.fullKey = fullKey;
            hook = allSignaturesByType.get(hook);
            if (void 0 !== hook) {
                var nestedHookKey = computeFullKey(hook);
                hook.forceReset && (signature.forceReset = !0);
                fullKey += "\n---\n" + nestedHookKey;
            }
        }
        return signature.fullKey = fullKey;
    }
    function resolveFamily(type) {
        return updatedFamiliesByType.get(type);
    }
    function cloneMap(map) {
        var clone = new Map();
        map.forEach(function(value, key) {
            clone.set(key, value);
        });
        return clone;
    }
    function cloneSet(set) {
        var clone = new Set();
        set.forEach(function(value) {
            clone.add(value);
        });
        return clone;
    }
    function getProperty(object, property) {
        try {
            return object[property];
        } catch (err) {}
    }
    function register(type, id) {
        if (!(null === type || "function" !== typeof type && "object" !== typeof type || allFamiliesByType.has(type))) {
            var family = allFamiliesByID.get(id);
            void 0 === family ? (family = {
                current: type
            }, allFamiliesByID.set(id, family)) : pendingUpdates.push([
                family,
                type
            ]);
            allFamiliesByType.set(type, family);
            if ("object" === typeof type && null !== type) switch(getProperty(type, "$$typeof")){
                case REACT_FORWARD_REF_TYPE:
                    register(type.render, id + "$render");
                    break;
                case REACT_MEMO_TYPE:
                    register(type.type, id + "$type");
            }
        }
    }
    function setSignature(type, key) {
        var forceReset = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : !1, getCustomHooks = 3 < arguments.length ? arguments[3] : void 0;
        allSignaturesByType.has(type) || allSignaturesByType.set(type, {
            forceReset: forceReset,
            ownKey: key,
            fullKey: null,
            getCustomHooks: getCustomHooks || function() {
                return [];
            }
        });
        if ("object" === typeof type && null !== type) switch(getProperty(type, "$$typeof")){
            case REACT_FORWARD_REF_TYPE:
                setSignature(type.render, key, forceReset, getCustomHooks);
                break;
            case REACT_MEMO_TYPE:
                setSignature(type.type, key, forceReset, getCustomHooks);
        }
    }
    function collectCustomHooksForSignature(type) {
        type = allSignaturesByType.get(type);
        void 0 !== type && computeFullKey(type);
    }
    var REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_MEMO_TYPE = Symbol.for("react.memo"), PossiblyWeakMap = "function" === typeof WeakMap ? WeakMap : Map, allFamiliesByID = new Map(), allFamiliesByType = new PossiblyWeakMap(), allSignaturesByType = new PossiblyWeakMap(), updatedFamiliesByType = new PossiblyWeakMap(), pendingUpdates = [], helpersByRendererID = new Map(), helpersByRoot = new Map(), mountedRoots = new Set(), failedRoots = new Set(), rootElements = "function" === typeof WeakMap ? new WeakMap() : null, isPerformingRefresh = !1;
    exports._getMountedRootCount = function() {
        return mountedRoots.size;
    };
    exports.collectCustomHooksForSignature = collectCustomHooksForSignature;
    exports.createSignatureFunctionForTransform = function() {
        var savedType, hasCustomHooks, didCollectHooks = !1;
        return function(type, key, forceReset, getCustomHooks) {
            if ("string" === typeof key) return savedType || (savedType = type, hasCustomHooks = "function" === typeof getCustomHooks), null == type || "function" !== typeof type && "object" !== typeof type || setSignature(type, key, forceReset, getCustomHooks), type;
            !didCollectHooks && hasCustomHooks && (didCollectHooks = !0, collectCustomHooksForSignature(savedType));
        };
    };
    exports.getFamilyByID = function(id) {
        return allFamiliesByID.get(id);
    };
    exports.getFamilyByType = function(type) {
        return allFamiliesByType.get(type);
    };
    exports.hasUnrecoverableErrors = function() {
        return !1;
    };
    exports.injectIntoGlobalHook = function(globalObject) {
        var hook = globalObject.__REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (void 0 === hook) {
            var nextID = 0;
            globalObject.__REACT_DEVTOOLS_GLOBAL_HOOK__ = hook = {
                renderers: new Map(),
                supportsFiber: !0,
                inject: function() {
                    return nextID++;
                },
                onScheduleFiberRoot: function() {},
                onCommitFiberRoot: function() {},
                onCommitFiberUnmount: function() {}
            };
        }
        if (hook.isDisabled) console.warn("Something has shimmed the React DevTools global hook (__REACT_DEVTOOLS_GLOBAL_HOOK__). Fast Refresh is not compatible with this shim and will be disabled.");
        else {
            var oldInject = hook.inject;
            hook.inject = function(injected) {
                var id = oldInject.apply(this, arguments);
                "function" === typeof injected.scheduleRefresh && "function" === typeof injected.setRefreshHandler && helpersByRendererID.set(id, injected);
                return id;
            };
            hook.renderers.forEach(function(injected, id) {
                "function" === typeof injected.scheduleRefresh && "function" === typeof injected.setRefreshHandler && helpersByRendererID.set(id, injected);
            });
            var oldOnCommitFiberRoot = hook.onCommitFiberRoot, oldOnScheduleFiberRoot = hook.onScheduleFiberRoot || function() {};
            hook.onScheduleFiberRoot = function(id, root, children) {
                isPerformingRefresh || (failedRoots.delete(root), null !== rootElements && rootElements.set(root, children));
                return oldOnScheduleFiberRoot.apply(this, arguments);
            };
            hook.onCommitFiberRoot = function(id, root, maybePriorityLevel, didError) {
                var helpers = helpersByRendererID.get(id);
                if (void 0 !== helpers) {
                    helpersByRoot.set(root, helpers);
                    helpers = root.current;
                    var alternate = helpers.alternate;
                    null !== alternate ? (alternate = null != alternate.memoizedState && null != alternate.memoizedState.element && mountedRoots.has(root), helpers = null != helpers.memoizedState && null != helpers.memoizedState.element, !alternate && helpers ? (mountedRoots.add(root), failedRoots.delete(root)) : alternate && helpers || (alternate && !helpers ? (mountedRoots.delete(root), didError ? failedRoots.add(root) : helpersByRoot.delete(root)) : alternate || helpers || didError && failedRoots.add(root))) : mountedRoots.add(root);
                }
                return oldOnCommitFiberRoot.apply(this, arguments);
            };
        }
    };
    exports.isLikelyComponentType = function(type) {
        switch(typeof type){
            case "function":
                if (null != type.prototype) {
                    if (type.prototype.isReactComponent) return !0;
                    var ownNames = Object.getOwnPropertyNames(type.prototype);
                    if (1 < ownNames.length || "constructor" !== ownNames[0] || type.prototype.__proto__ !== Object.prototype) return !1;
                }
                type = type.name || type.displayName;
                return "string" === typeof type && /^[A-Z]/.test(type);
            case "object":
                if (null != type) switch(getProperty(type, "$$typeof")){
                    case REACT_FORWARD_REF_TYPE:
                    case REACT_MEMO_TYPE:
                        return !0;
                }
                return !1;
            default:
                return !1;
        }
    };
    exports.performReactRefresh = function() {
        if (0 === pendingUpdates.length || isPerformingRefresh) return null;
        isPerformingRefresh = !0;
        try {
            var staleFamilies = new Set(), updatedFamilies = new Set(), updates = pendingUpdates;
            pendingUpdates = [];
            updates.forEach(function(_ref) {
                var family = _ref[0];
                _ref = _ref[1];
                var prevType = family.current;
                updatedFamiliesByType.set(prevType, family);
                updatedFamiliesByType.set(_ref, family);
                family.current = _ref;
                prevType.prototype && prevType.prototype.isReactComponent || _ref.prototype && _ref.prototype.isReactComponent ? _ref = !1 : (prevType = allSignaturesByType.get(prevType), _ref = allSignaturesByType.get(_ref), _ref = void 0 === prevType && void 0 === _ref || void 0 !== prevType && void 0 !== _ref && computeFullKey(prevType) === computeFullKey(_ref) && !_ref.forceReset ? !0 : !1);
                _ref ? updatedFamilies.add(family) : staleFamilies.add(family);
            });
            var update = {
                updatedFamilies: updatedFamilies,
                staleFamilies: staleFamilies
            };
            helpersByRendererID.forEach(function(helpers) {
                helpers.setRefreshHandler(resolveFamily);
            });
            var didError = !1, firstError = null, failedRootsSnapshot = cloneSet(failedRoots), mountedRootsSnapshot = cloneSet(mountedRoots), helpersByRootSnapshot = cloneMap(helpersByRoot);
            failedRootsSnapshot.forEach(function(root) {
                var helpers = helpersByRootSnapshot.get(root);
                if (void 0 === helpers) throw Error("Could not find helpers for a root. This is a bug in React Refresh.");
                failedRoots.has(root);
                if (null !== rootElements && rootElements.has(root)) {
                    var element = rootElements.get(root);
                    try {
                        helpers.scheduleRoot(root, element);
                    } catch (err) {
                        didError || (didError = !0, firstError = err);
                    }
                }
            });
            mountedRootsSnapshot.forEach(function(root) {
                var helpers = helpersByRootSnapshot.get(root);
                if (void 0 === helpers) throw Error("Could not find helpers for a root. This is a bug in React Refresh.");
                mountedRoots.has(root);
                try {
                    helpers.scheduleRefresh(root, update);
                } catch (err) {
                    didError || (didError = !0, firstError = err);
                }
            });
            if (didError) throw firstError;
            return update;
        } finally{
            isPerformingRefresh = !1;
        }
    };
    exports.register = register;
    exports.setSignature = setSignature;
})();

},{}],"gnoim":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "setEditorHandler", ()=>$da9882e673ac146b$export$25a22ac46f1bd016);
parcelHelpers.export(exports, "reportRuntimeError", ()=>$da9882e673ac146b$export$74e9101ce4078c0);
parcelHelpers.export(exports, "startReportingRuntimeErrors", ()=>$da9882e673ac146b$export$cda2c88a41631c16);
parcelHelpers.export(exports, "dismissRuntimeErrors", ()=>$da9882e673ac146b$export$1cfa6d161ca81bd9);
parcelHelpers.export(exports, "stopReportingRuntimeErrors", ()=>$da9882e673ac146b$export$25ba7d9a816639e7);
function $parcel$interopDefault(a) {
    return a && a.__esModule ? a.default : a;
}
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ /* eslint-env browser */ /* eslint-disable react/react-in-jsx-scope, no-console */ var $b6c7f0288a15c619$var$n, $b6c7f0288a15c619$export$41c562ebe57d11e2, $b6c7f0288a15c619$var$u, $b6c7f0288a15c619$export$a8257692ac88316c, $b6c7f0288a15c619$var$i, $b6c7f0288a15c619$var$r, $b6c7f0288a15c619$var$o, $b6c7f0288a15c619$var$e, $b6c7f0288a15c619$var$f, $b6c7f0288a15c619$var$c, $b6c7f0288a15c619$var$s, $b6c7f0288a15c619$var$a, $b6c7f0288a15c619$var$h, $b6c7f0288a15c619$var$p = {}, $b6c7f0288a15c619$var$y = [], $b6c7f0288a15c619$var$v = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, $b6c7f0288a15c619$var$w = Array.isArray;
function $b6c7f0288a15c619$var$d(n, l) {
    for(var u in l)n[u] = l[u];
    return n;
}
function $b6c7f0288a15c619$var$g(n) {
    n && n.parentNode && n.parentNode.removeChild(n);
}
function $b6c7f0288a15c619$export$c8a8987d4410bf2d(l, u, t) {
    var i, r, o, e = {};
    for(o in u)"key" == o ? i = u[o] : "ref" == o ? r = u[o] : e[o] = u[o];
    if (arguments.length > 2 && (e.children = arguments.length > 3 ? $b6c7f0288a15c619$var$n.call(arguments, 2) : t), "function" == typeof l && null != l.defaultProps) for(o in l.defaultProps)null == e[o] && (e[o] = l.defaultProps[o]);
    return $b6c7f0288a15c619$var$m(l, e, i, r, null);
}
function $b6c7f0288a15c619$var$m(n, t, i, r, o) {
    var e = {
        type: n,
        props: t,
        key: i,
        ref: r,
        __k: null,
        __: null,
        __b: 0,
        __e: null,
        __c: null,
        constructor: void 0,
        __v: null == o ? ++$b6c7f0288a15c619$var$u : o,
        __i: -1,
        __u: 0
    };
    return null == o && null != $b6c7f0288a15c619$export$41c562ebe57d11e2.vnode && $b6c7f0288a15c619$export$41c562ebe57d11e2.vnode(e), e;
}
function $b6c7f0288a15c619$export$7d1e3a5e95ceca43() {
    return {
        current: null
    };
}
function $b6c7f0288a15c619$export$ffb0004e005737fa(n) {
    return n.children;
}
function $b6c7f0288a15c619$export$16fa2f45be04daa8(n, l) {
    this.props = n, this.context = l;
}
function $b6c7f0288a15c619$var$S(n, l) {
    if (null == l) return n.__ ? $b6c7f0288a15c619$var$S(n.__, n.__i + 1) : null;
    for(var u; l < n.__k.length; l++)if (null != (u = n.__k[l]) && null != u.__e) return u.__e;
    return "function" == typeof n.type ? $b6c7f0288a15c619$var$S(n) : null;
}
function $b6c7f0288a15c619$var$C(n) {
    var l, u;
    if (null != (n = n.__) && null != n.__c) {
        for(n.__e = n.__c.base = null, l = 0; l < n.__k.length; l++)if (null != (u = n.__k[l]) && null != u.__e) {
            n.__e = n.__c.base = u.__e;
            break;
        }
        return $b6c7f0288a15c619$var$C(n);
    }
}
function $b6c7f0288a15c619$var$M(n) {
    (!n.__d && (n.__d = !0) && $b6c7f0288a15c619$var$i.push(n) && !$b6c7f0288a15c619$var$$.__r++ || $b6c7f0288a15c619$var$r != $b6c7f0288a15c619$export$41c562ebe57d11e2.debounceRendering) && (($b6c7f0288a15c619$var$r = $b6c7f0288a15c619$export$41c562ebe57d11e2.debounceRendering) || $b6c7f0288a15c619$var$o)($b6c7f0288a15c619$var$$);
}
function $b6c7f0288a15c619$var$$() {
    for(var n, u, t, r, o, f, c, s = 1; $b6c7f0288a15c619$var$i.length;)$b6c7f0288a15c619$var$i.length > s && $b6c7f0288a15c619$var$i.sort($b6c7f0288a15c619$var$e), n = $b6c7f0288a15c619$var$i.shift(), s = $b6c7f0288a15c619$var$i.length, n.__d && (t = void 0, o = (r = (u = n).__v).__e, f = [], c = [], u.__P && ((t = $b6c7f0288a15c619$var$d({}, r)).__v = r.__v + 1, $b6c7f0288a15c619$export$41c562ebe57d11e2.vnode && $b6c7f0288a15c619$export$41c562ebe57d11e2.vnode(t), $b6c7f0288a15c619$var$O(u.__P, t, r, u.__n, u.__P.namespaceURI, 32 & r.__u ? [
        o
    ] : null, f, null == o ? $b6c7f0288a15c619$var$S(r) : o, !!(32 & r.__u), c), t.__v = r.__v, t.__.__k[t.__i] = t, $b6c7f0288a15c619$var$z(f, t, c), t.__e != o && $b6c7f0288a15c619$var$C(t)));
    $b6c7f0288a15c619$var$$.__r = 0;
}
function $b6c7f0288a15c619$var$I(n, l, u, t, i, r, o, e, f, c, s) {
    var a, h, v, w, d, g, _ = t && t.__k || $b6c7f0288a15c619$var$y, m = l.length;
    for(f = $b6c7f0288a15c619$var$P(u, l, _, f, m), a = 0; a < m; a++)null != (v = u.__k[a]) && (h = -1 == v.__i ? $b6c7f0288a15c619$var$p : _[v.__i] || $b6c7f0288a15c619$var$p, v.__i = a, g = $b6c7f0288a15c619$var$O(n, v, h, i, r, o, e, f, c, s), w = v.__e, v.ref && h.ref != v.ref && (h.ref && $b6c7f0288a15c619$var$q(h.ref, null, v), s.push(v.ref, v.__c || w, v)), null == d && null != w && (d = w), 4 & v.__u || h.__k === v.__k ? f = $b6c7f0288a15c619$var$A(v, f, n) : "function" == typeof v.type && void 0 !== g ? f = g : w && (f = w.nextSibling), v.__u &= -7);
    return u.__e = d, f;
}
function $b6c7f0288a15c619$var$P(n, l, u, t, i) {
    var r, o, e, f, c, s = u.length, a = s, h = 0;
    for(n.__k = new Array(i), r = 0; r < i; r++)null != (o = l[r]) && "boolean" != typeof o && "function" != typeof o ? (f = r + h, (o = n.__k[r] = "string" == typeof o || "number" == typeof o || "bigint" == typeof o || o.constructor == String ? $b6c7f0288a15c619$var$m(null, o, null, null, null) : $b6c7f0288a15c619$var$w(o) ? $b6c7f0288a15c619$var$m($b6c7f0288a15c619$export$ffb0004e005737fa, {
        children: o
    }, null, null, null) : null == o.constructor && o.__b > 0 ? $b6c7f0288a15c619$var$m(o.type, o.props, o.key, o.ref ? o.ref : null, o.__v) : o).__ = n, o.__b = n.__b + 1, e = null, -1 != (c = o.__i = $b6c7f0288a15c619$var$L(o, u, f, a)) && (a--, (e = u[c]) && (e.__u |= 2)), null == e || null == e.__v ? (-1 == c && (i > s ? h-- : i < s && h++), "function" != typeof o.type && (o.__u |= 4)) : c != f && (c == f - 1 ? h-- : c == f + 1 ? h++ : (c > f ? h-- : h++, o.__u |= 4))) : n.__k[r] = null;
    if (a) for(r = 0; r < s; r++)null != (e = u[r]) && 0 == (2 & e.__u) && (e.__e == t && (t = $b6c7f0288a15c619$var$S(e)), $b6c7f0288a15c619$var$B(e, e));
    return t;
}
function $b6c7f0288a15c619$var$A(n, l, u) {
    var t, i;
    if ("function" == typeof n.type) {
        for(t = n.__k, i = 0; t && i < t.length; i++)t[i] && (t[i].__ = n, l = $b6c7f0288a15c619$var$A(t[i], l, u));
        return l;
    }
    n.__e != l && (l && n.type && !u.contains(l) && (l = $b6c7f0288a15c619$var$S(n)), u.insertBefore(n.__e, l || null), l = n.__e);
    do l = l && l.nextSibling;
    while (null != l && 8 == l.nodeType);
    return l;
}
function $b6c7f0288a15c619$export$47e4c5b300681277(n, l) {
    return l = l || [], null == n || "boolean" == typeof n || ($b6c7f0288a15c619$var$w(n) ? n.some(function(n) {
        $b6c7f0288a15c619$export$47e4c5b300681277(n, l);
    }) : l.push(n)), l;
}
function $b6c7f0288a15c619$var$L(n, l, u, t) {
    var i, r, o = n.key, e = n.type, f = l[u];
    if (null === f && null == n.key || f && o == f.key && e == f.type && 0 == (2 & f.__u)) return u;
    if (t > (null != f && 0 == (2 & f.__u) ? 1 : 0)) for(i = u - 1, r = u + 1; i >= 0 || r < l.length;){
        if (i >= 0) {
            if ((f = l[i]) && 0 == (2 & f.__u) && o == f.key && e == f.type) return i;
            i--;
        }
        if (r < l.length) {
            if ((f = l[r]) && 0 == (2 & f.__u) && o == f.key && e == f.type) return r;
            r++;
        }
    }
    return -1;
}
function $b6c7f0288a15c619$var$T(n, l, u) {
    "-" == l[0] ? n.setProperty(l, null == u ? "" : u) : n[l] = null == u ? "" : "number" != typeof u || $b6c7f0288a15c619$var$v.test(l) ? u : u + "px";
}
function $b6c7f0288a15c619$var$j(n, l, u, t, i) {
    var r;
    n: if ("style" == l) {
        if ("string" == typeof u) n.style.cssText = u;
        else {
            if ("string" == typeof t && (n.style.cssText = t = ""), t) for(l in t)u && l in u || $b6c7f0288a15c619$var$T(n.style, l, "");
            if (u) for(l in u)t && u[l] == t[l] || $b6c7f0288a15c619$var$T(n.style, l, u[l]);
        }
    } else if ("o" == l[0] && "n" == l[1]) r = l != (l = l.replace($b6c7f0288a15c619$var$f, "$1")), l = l.toLowerCase() in n || "onFocusOut" == l || "onFocusIn" == l ? l.toLowerCase().slice(2) : l.slice(2), n.l || (n.l = {}), n.l[l + r] = u, u ? t ? u.u = t.u : (u.u = $b6c7f0288a15c619$var$c, n.addEventListener(l, r ? $b6c7f0288a15c619$var$a : $b6c7f0288a15c619$var$s, r)) : n.removeEventListener(l, r ? $b6c7f0288a15c619$var$a : $b6c7f0288a15c619$var$s, r);
    else {
        if ("http://www.w3.org/2000/svg" == i) l = l.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
        else if ("width" != l && "height" != l && "href" != l && "list" != l && "form" != l && "tabIndex" != l && "download" != l && "rowSpan" != l && "colSpan" != l && "role" != l && "popover" != l && l in n) try {
            n[l] = null == u ? "" : u;
            break n;
        } catch (n) {}
        "function" == typeof u || (null == u || !1 === u && "-" != l[4] ? n.removeAttribute(l) : n.setAttribute(l, "popover" == l && 1 == u ? "" : u));
    }
}
function $b6c7f0288a15c619$var$F(n) {
    return function(u) {
        if (this.l) {
            var t = this.l[u.type + n];
            if (null == u.t) u.t = $b6c7f0288a15c619$var$c++;
            else if (u.t < t.u) return;
            return t($b6c7f0288a15c619$export$41c562ebe57d11e2.event ? $b6c7f0288a15c619$export$41c562ebe57d11e2.event(u) : u);
        }
    };
}
function $b6c7f0288a15c619$var$O(n, u, t, i, r, o, e, f, c, s) {
    var a, h, p, y, v, _, m, b, S, C, M, $, P, A, H, L, T, j = u.type;
    if (null != u.constructor) return null;
    128 & t.__u && (c = !!(32 & t.__u), o = [
        f = u.__e = t.__e
    ]), (a = $b6c7f0288a15c619$export$41c562ebe57d11e2.__b) && a(u);
    n: if ("function" == typeof j) try {
        if (b = u.props, S = "prototype" in j && j.prototype.render, C = (a = j.contextType) && i[a.__c], M = a ? C ? C.props.value : a.__ : i, t.__c ? m = (h = u.__c = t.__c).__ = h.__E : (S ? u.__c = h = new j(b, M) : (u.__c = h = new $b6c7f0288a15c619$export$16fa2f45be04daa8(b, M), h.constructor = j, h.render = $b6c7f0288a15c619$var$D), C && C.sub(h), h.props = b, h.state || (h.state = {}), h.context = M, h.__n = i, p = h.__d = !0, h.__h = [], h._sb = []), S && null == h.__s && (h.__s = h.state), S && null != j.getDerivedStateFromProps && (h.__s == h.state && (h.__s = $b6c7f0288a15c619$var$d({}, h.__s)), $b6c7f0288a15c619$var$d(h.__s, j.getDerivedStateFromProps(b, h.__s))), y = h.props, v = h.state, h.__v = u, p) S && null == j.getDerivedStateFromProps && null != h.componentWillMount && h.componentWillMount(), S && null != h.componentDidMount && h.__h.push(h.componentDidMount);
        else {
            if (S && null == j.getDerivedStateFromProps && b !== y && null != h.componentWillReceiveProps && h.componentWillReceiveProps(b, M), !h.__e && null != h.shouldComponentUpdate && !1 === h.shouldComponentUpdate(b, h.__s, M) || u.__v == t.__v) {
                for(u.__v != t.__v && (h.props = b, h.state = h.__s, h.__d = !1), u.__e = t.__e, u.__k = t.__k, u.__k.some(function(n) {
                    n && (n.__ = u);
                }), $ = 0; $ < h._sb.length; $++)h.__h.push(h._sb[$]);
                h._sb = [], h.__h.length && e.push(h);
                break n;
            }
            null != h.componentWillUpdate && h.componentWillUpdate(b, h.__s, M), S && null != h.componentDidUpdate && h.__h.push(function() {
                h.componentDidUpdate(y, v, _);
            });
        }
        if (h.context = M, h.props = b, h.__P = n, h.__e = !1, P = $b6c7f0288a15c619$export$41c562ebe57d11e2.__r, A = 0, S) {
            for(h.state = h.__s, h.__d = !1, P && P(u), a = h.render(h.props, h.state, h.context), H = 0; H < h._sb.length; H++)h.__h.push(h._sb[H]);
            h._sb = [];
        } else do h.__d = !1, P && P(u), a = h.render(h.props, h.state, h.context), h.state = h.__s;
        while (h.__d && ++A < 25);
        h.state = h.__s, null != h.getChildContext && (i = $b6c7f0288a15c619$var$d($b6c7f0288a15c619$var$d({}, i), h.getChildContext())), S && !p && null != h.getSnapshotBeforeUpdate && (_ = h.getSnapshotBeforeUpdate(y, v)), L = a, null != a && a.type === $b6c7f0288a15c619$export$ffb0004e005737fa && null == a.key && (L = $b6c7f0288a15c619$var$N(a.props.children)), f = $b6c7f0288a15c619$var$I(n, $b6c7f0288a15c619$var$w(L) ? L : [
            L
        ], u, t, i, r, o, e, f, c, s), h.base = u.__e, u.__u &= -161, h.__h.length && e.push(h), m && (h.__E = h.__ = null);
    } catch (n) {
        if (u.__v = null, c || null != o) {
            if (n.then) {
                for(u.__u |= c ? 160 : 128; f && 8 == f.nodeType && f.nextSibling;)f = f.nextSibling;
                o[o.indexOf(f)] = null, u.__e = f;
            } else for(T = o.length; T--;)$b6c7f0288a15c619$var$g(o[T]);
        } else u.__e = t.__e, u.__k = t.__k;
        $b6c7f0288a15c619$export$41c562ebe57d11e2.__e(n, u, t);
    }
    else null == o && u.__v == t.__v ? (u.__k = t.__k, u.__e = t.__e) : f = u.__e = $b6c7f0288a15c619$var$V(t.__e, u, t, i, r, o, e, c, s);
    return (a = $b6c7f0288a15c619$export$41c562ebe57d11e2.diffed) && a(u), 128 & u.__u ? void 0 : f;
}
function $b6c7f0288a15c619$var$z(n, u, t) {
    for(var i = 0; i < t.length; i++)$b6c7f0288a15c619$var$q(t[i], t[++i], t[++i]);
    $b6c7f0288a15c619$export$41c562ebe57d11e2.__c && $b6c7f0288a15c619$export$41c562ebe57d11e2.__c(u, n), n.some(function(u) {
        try {
            n = u.__h, u.__h = [], n.some(function(n) {
                n.call(u);
            });
        } catch (n) {
            $b6c7f0288a15c619$export$41c562ebe57d11e2.__e(n, u.__v);
        }
    });
}
function $b6c7f0288a15c619$var$N(n) {
    return "object" != typeof n || null == n || n.__b && n.__b > 0 ? n : $b6c7f0288a15c619$var$w(n) ? n.map($b6c7f0288a15c619$var$N) : $b6c7f0288a15c619$var$d({}, n);
}
function $b6c7f0288a15c619$var$V(u, t, i, r, o, e, f, c, s) {
    var a, h, y, v, d, _, m, b = i.props, k = t.props, x = t.type;
    if ("svg" == x ? o = "http://www.w3.org/2000/svg" : "math" == x ? o = "http://www.w3.org/1998/Math/MathML" : o || (o = "http://www.w3.org/1999/xhtml"), null != e) {
        for(a = 0; a < e.length; a++)if ((d = e[a]) && "setAttribute" in d == !!x && (x ? d.localName == x : 3 == d.nodeType)) {
            u = d, e[a] = null;
            break;
        }
    }
    if (null == u) {
        if (null == x) return document.createTextNode(k);
        u = document.createElementNS(o, x, k.is && k), c && ($b6c7f0288a15c619$export$41c562ebe57d11e2.__m && $b6c7f0288a15c619$export$41c562ebe57d11e2.__m(t, e), c = !1), e = null;
    }
    if (null == x) b === k || c && u.data == k || (u.data = k);
    else {
        if (e = e && $b6c7f0288a15c619$var$n.call(u.childNodes), b = i.props || $b6c7f0288a15c619$var$p, !c && null != e) for(b = {}, a = 0; a < u.attributes.length; a++)b[(d = u.attributes[a]).name] = d.value;
        for(a in b)if (d = b[a], "children" == a) ;
        else if ("dangerouslySetInnerHTML" == a) y = d;
        else if (!(a in k)) {
            if ("value" == a && "defaultValue" in k || "checked" == a && "defaultChecked" in k) continue;
            $b6c7f0288a15c619$var$j(u, a, null, d, o);
        }
        for(a in k)d = k[a], "children" == a ? v = d : "dangerouslySetInnerHTML" == a ? h = d : "value" == a ? _ = d : "checked" == a ? m = d : c && "function" != typeof d || b[a] === d || $b6c7f0288a15c619$var$j(u, a, d, b[a], o);
        if (h) c || y && (h.__html == y.__html || h.__html == u.innerHTML) || (u.innerHTML = h.__html), t.__k = [];
        else if (y && (u.innerHTML = ""), $b6c7f0288a15c619$var$I("template" == t.type ? u.content : u, $b6c7f0288a15c619$var$w(v) ? v : [
            v
        ], t, i, r, "foreignObject" == x ? "http://www.w3.org/1999/xhtml" : o, e, f, e ? e[0] : i.__k && $b6c7f0288a15c619$var$S(i, 0), c, s), null != e) for(a = e.length; a--;)$b6c7f0288a15c619$var$g(e[a]);
        c || (a = "value", "progress" == x && null == _ ? u.removeAttribute("value") : null != _ && (_ !== u[a] || "progress" == x && !_ || "option" == x && _ != b[a]) && $b6c7f0288a15c619$var$j(u, a, _, b[a], o), a = "checked", null != m && m != u[a] && $b6c7f0288a15c619$var$j(u, a, m, b[a], o));
    }
    return u;
}
function $b6c7f0288a15c619$var$q(n, u, t) {
    try {
        if ("function" == typeof n) {
            var i = "function" == typeof n.__u;
            i && n.__u(), i && null == u || (n.__u = n(u));
        } else n.current = u;
    } catch (n) {
        $b6c7f0288a15c619$export$41c562ebe57d11e2.__e(n, t);
    }
}
function $b6c7f0288a15c619$var$B(n, u, t) {
    var i, r;
    if ($b6c7f0288a15c619$export$41c562ebe57d11e2.unmount && $b6c7f0288a15c619$export$41c562ebe57d11e2.unmount(n), (i = n.ref) && (i.current && i.current != n.__e || $b6c7f0288a15c619$var$q(i, null, u)), null != (i = n.__c)) {
        if (i.componentWillUnmount) try {
            i.componentWillUnmount();
        } catch (n) {
            $b6c7f0288a15c619$export$41c562ebe57d11e2.__e(n, u);
        }
        i.base = i.__P = null;
    }
    if (i = n.__k) for(r = 0; r < i.length; r++)i[r] && $b6c7f0288a15c619$var$B(i[r], u, t || "function" != typeof n.type);
    t || $b6c7f0288a15c619$var$g(n.__e), n.__c = n.__ = n.__e = void 0;
}
function $b6c7f0288a15c619$var$D(n, l, u) {
    return this.constructor(n, u);
}
function $b6c7f0288a15c619$export$b3890eb0ae9dca99(u, t, i) {
    var r, o, e, f;
    t == document && (t = document.documentElement), $b6c7f0288a15c619$export$41c562ebe57d11e2.__ && $b6c7f0288a15c619$export$41c562ebe57d11e2.__(u, t), o = (r = "function" == typeof i) ? null : i && i.__k || t.__k, e = [], f = [], $b6c7f0288a15c619$var$O(t, u = (!r && i || t).__k = $b6c7f0288a15c619$export$c8a8987d4410bf2d($b6c7f0288a15c619$export$ffb0004e005737fa, null, [
        u
    ]), o || $b6c7f0288a15c619$var$p, $b6c7f0288a15c619$var$p, t.namespaceURI, !r && i ? [
        i
    ] : o ? null : t.firstChild ? $b6c7f0288a15c619$var$n.call(t.childNodes) : null, e, !r && i ? i : o ? o.__e : t.firstChild, r, f), $b6c7f0288a15c619$var$z(e, u, f);
}
function $b6c7f0288a15c619$export$fa8d919ba61d84db(n, l) {
    $b6c7f0288a15c619$export$b3890eb0ae9dca99(n, l, $b6c7f0288a15c619$export$fa8d919ba61d84db);
}
function $b6c7f0288a15c619$export$e530037191fcd5d7(l, u, t) {
    var i, r, o, e, f = $b6c7f0288a15c619$var$d({}, l.props);
    for(o in l.type && l.type.defaultProps && (e = l.type.defaultProps), u)"key" == o ? i = u[o] : "ref" == o ? r = u[o] : f[o] = null == u[o] && null != e ? e[o] : u[o];
    return arguments.length > 2 && (f.children = arguments.length > 3 ? $b6c7f0288a15c619$var$n.call(arguments, 2) : t), $b6c7f0288a15c619$var$m(l.type, f, i || l.key, r || l.ref, null);
}
function $b6c7f0288a15c619$export$fd42f52fd3ae1109(n) {
    function l(n) {
        var u, t;
        return this.getChildContext || (u = new Set, (t = {})[l.__c] = this, this.getChildContext = function() {
            return t;
        }, this.componentWillUnmount = function() {
            u = null;
        }, this.shouldComponentUpdate = function(n) {
            this.props.value != n.value && u.forEach(function(n) {
                n.__e = !0, $b6c7f0288a15c619$var$M(n);
            });
        }, this.sub = function(n) {
            u.add(n);
            var l = n.componentWillUnmount;
            n.componentWillUnmount = function() {
                u && u.delete(n), l && l.call(n);
            };
        }), n.children;
    }
    return l.__c = "__cC" + $b6c7f0288a15c619$var$h++, l.__ = n, l.Provider = l.__l = (l.Consumer = function(n, l) {
        return n.children(l);
    }).contextType = l, l;
}
$b6c7f0288a15c619$var$n = $b6c7f0288a15c619$var$y.slice, $b6c7f0288a15c619$export$41c562ebe57d11e2 = {
    __e: function(n, l, u, t) {
        for(var i, r, o; l = l.__;)if ((i = l.__c) && !i.__) try {
            if ((r = i.constructor) && null != r.getDerivedStateFromError && (i.setState(r.getDerivedStateFromError(n)), o = i.__d), null != i.componentDidCatch && (i.componentDidCatch(n, t || {}), o = i.__d), o) return i.__E = i;
        } catch (l) {
            n = l;
        }
        throw n;
    }
}, $b6c7f0288a15c619$var$u = 0, $b6c7f0288a15c619$export$a8257692ac88316c = function(n) {
    return null != n && null == n.constructor;
}, $b6c7f0288a15c619$export$16fa2f45be04daa8.prototype.setState = function(n, l) {
    var u;
    u = null != this.__s && this.__s != this.state ? this.__s : this.__s = $b6c7f0288a15c619$var$d({}, this.state), "function" == typeof n && (n = n($b6c7f0288a15c619$var$d({}, u), this.props)), n && $b6c7f0288a15c619$var$d(u, n), null != n && this.__v && (l && this._sb.push(l), $b6c7f0288a15c619$var$M(this));
}, $b6c7f0288a15c619$export$16fa2f45be04daa8.prototype.forceUpdate = function(n) {
    this.__v && (this.__e = !0, n && this.__h.push(n), $b6c7f0288a15c619$var$M(this));
}, $b6c7f0288a15c619$export$16fa2f45be04daa8.prototype.render = $b6c7f0288a15c619$export$ffb0004e005737fa, $b6c7f0288a15c619$var$i = [], $b6c7f0288a15c619$var$o = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, $b6c7f0288a15c619$var$e = function(n, l) {
    return n.__v.__b - l.__v.__b;
}, $b6c7f0288a15c619$var$$.__r = 0, $b6c7f0288a15c619$var$f = /(PointerCapture)$|Capture$/i, $b6c7f0288a15c619$var$c = 0, $b6c7f0288a15c619$var$s = $b6c7f0288a15c619$var$F(!1), $b6c7f0288a15c619$var$a = $b6c7f0288a15c619$var$F(!0), $b6c7f0288a15c619$var$h = 0;
var $23b7c1cb98b19658$var$t = /["&<]/;
function $23b7c1cb98b19658$var$n(r) {
    if (0 === r.length || !1 === $23b7c1cb98b19658$var$t.test(r)) return r;
    for(var e = 0, n = 0, o = "", f = ""; n < r.length; n++){
        switch(r.charCodeAt(n)){
            case 34:
                f = "&quot;";
                break;
            case 38:
                f = "&amp;";
                break;
            case 60:
                f = "&lt;";
                break;
            default:
                continue;
        }
        n !== e && (o += r.slice(e, n)), o += f, e = n + 1;
    }
    return n !== e && (o += r.slice(e, n)), o;
}
var $23b7c1cb98b19658$var$o = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, $23b7c1cb98b19658$var$f = 0, $23b7c1cb98b19658$var$i = Array.isArray;
function $23b7c1cb98b19658$export$34b9dba7ce09269b(e, t, n, o, i, u) {
    t || (t = {});
    var a, c, p = t;
    if ("ref" in p) for(c in p = {}, t)"ref" == c ? a = t[c] : p[c] = t[c];
    var l = {
        type: e,
        props: p,
        key: n,
        ref: a,
        __k: null,
        __: null,
        __b: 0,
        __e: null,
        __c: null,
        constructor: void 0,
        __v: --$23b7c1cb98b19658$var$f,
        __i: -1,
        __u: 0,
        __source: i,
        __self: u
    };
    if ("function" == typeof e && (a = e.defaultProps)) for(c in a)void 0 === p[c] && (p[c] = a[c]);
    return $b6c7f0288a15c619$export$41c562ebe57d11e2.vnode && $b6c7f0288a15c619$export$41c562ebe57d11e2.vnode(l), l;
}
function $23b7c1cb98b19658$export$45700d561b2268ac(r) {
    var t = $23b7c1cb98b19658$export$34b9dba7ce09269b($b6c7f0288a15c619$export$ffb0004e005737fa, {
        tpl: r,
        exprs: [].slice.call(arguments, 1)
    });
    return t.key = t.__v, t;
}
var $23b7c1cb98b19658$var$c = {}, $23b7c1cb98b19658$var$p = /[A-Z]/g;
function $23b7c1cb98b19658$export$991f6ffe102e5bac(e, t) {
    if ($b6c7f0288a15c619$export$41c562ebe57d11e2.attr) {
        var f = $b6c7f0288a15c619$export$41c562ebe57d11e2.attr(e, t);
        if ("string" == typeof f) return f;
    }
    if ("ref" === e || "key" === e) return "";
    if ("style" === e && "object" == typeof t) {
        var i = "";
        for(var u in t){
            var a = t[u];
            if (null != a && "" !== a) {
                var l = "-" == u[0] ? u : $23b7c1cb98b19658$var$c[u] || ($23b7c1cb98b19658$var$c[u] = u.replace($23b7c1cb98b19658$var$p, "-$&").toLowerCase()), s = ";";
                "number" != typeof a || l.startsWith("--") || $23b7c1cb98b19658$var$o.test(l) || (s = "px;"), i = i + l + ":" + a + s;
            }
        }
        return e + '="' + i + '"';
    }
    return null == t || !1 === t || "function" == typeof t || "object" == typeof t ? "" : !0 === t ? e : e + '="' + $23b7c1cb98b19658$var$n(t) + '"';
}
function $23b7c1cb98b19658$export$40e96e718441efeb(r) {
    if (null == r || "boolean" == typeof r || "function" == typeof r) return null;
    if ("object" == typeof r) {
        if (void 0 === r.constructor) return r;
        if ($23b7c1cb98b19658$var$i(r)) {
            for(var e = 0; e < r.length; e++)r[e] = $23b7c1cb98b19658$export$40e96e718441efeb(r[e]);
            return r;
        }
    }
    return $23b7c1cb98b19658$var$n("" + r);
}
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ /* eslint-env browser */ /**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ let $883a43040cbd0629$var$boundErrorHandler = null;
function $883a43040cbd0629$var$errorHandler(callback, e) {
    // $FlowFixMe
    if (!e.error) return;
    // $FlowFixMe
    const { error: error } = e;
    if (error instanceof Error) callback(error);
    else // Look in your browser's devtools for more information
    callback(new Error(error));
}
function $883a43040cbd0629$export$6503ec6e8aabbaf(target, callback) {
    if ($883a43040cbd0629$var$boundErrorHandler !== null) return;
    $883a43040cbd0629$var$boundErrorHandler = $883a43040cbd0629$var$errorHandler.bind(undefined, callback);
    target.addEventListener('error', $883a43040cbd0629$var$boundErrorHandler);
}
function $883a43040cbd0629$export$d07f55d4c15c0440(target) {
    if ($883a43040cbd0629$var$boundErrorHandler === null) return;
    target.removeEventListener('error', $883a43040cbd0629$var$boundErrorHandler);
    $883a43040cbd0629$var$boundErrorHandler = null;
}
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ let $900f8c32b7484e20$var$boundRejectionHandler = null;
function $900f8c32b7484e20$var$rejectionHandler(callback, e) {
    if (e == null || e.reason == null) return callback(new Error('Unknown'));
    let { reason: reason } = e;
    if (reason instanceof Error) return callback(reason);
    // A non-error was rejected, we don't have a trace :(
    // Look in your browser's devtools for more information
    return callback(new Error(reason));
}
function $900f8c32b7484e20$export$6503ec6e8aabbaf(target, callback) {
    if ($900f8c32b7484e20$var$boundRejectionHandler !== null) return;
    $900f8c32b7484e20$var$boundRejectionHandler = $900f8c32b7484e20$var$rejectionHandler.bind(undefined, callback);
    // $FlowFixMe
    target.addEventListener('unhandledrejection', $900f8c32b7484e20$var$boundRejectionHandler);
}
function $900f8c32b7484e20$export$d07f55d4c15c0440(target) {
    if ($900f8c32b7484e20$var$boundRejectionHandler === null) return;
    // $FlowFixMe
    target.removeEventListener('unhandledrejection', $900f8c32b7484e20$var$boundRejectionHandler);
    $900f8c32b7484e20$var$boundRejectionHandler = null;
}
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ let $5f72ade198404e99$var$stackTraceRegistered = false;
// Default: https://docs.microsoft.com/en-us/scripting/javascript/reference/stacktracelimit-property-error-javascript
let $5f72ade198404e99$var$restoreStackTraceValue = 10;
const $5f72ade198404e99$var$MAX_STACK_LENGTH = 50;
function $5f72ade198404e99$export$6503ec6e8aabbaf(limit = $5f72ade198404e99$var$MAX_STACK_LENGTH) {
    if ($5f72ade198404e99$var$stackTraceRegistered) return;
    try {
        $5f72ade198404e99$var$restoreStackTraceValue = Error.stackTraceLimit;
        Error.stackTraceLimit = limit;
        $5f72ade198404e99$var$stackTraceRegistered = true;
    } catch (e) {
    // Not all browsers support this so we don't care if it errors
    }
}
function $5f72ade198404e99$export$d07f55d4c15c0440() {
    if (!$5f72ade198404e99$var$stackTraceRegistered) return;
    try {
        Error.stackTraceLimit = $5f72ade198404e99$var$restoreStackTraceValue;
        $5f72ade198404e99$var$stackTraceRegistered = false;
    } catch (e) {
    // Not all browsers support this so we don't care if it errors
    }
}
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ /**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ /**
 * A representation of a stack frame.
 */ class $d35756f426c25812$export$8949fddf10447898 {
    constructor(functionName = null, fileName = null, lineNumber = null, columnNumber = null, scriptCode = null, sourceFunctionName = null, sourceFileName = null, sourceLineNumber = null, sourceColumnNumber = null, sourceScriptCode = null){
        if (functionName && functionName.indexOf('Object.') === 0) functionName = functionName.slice(7);
        if (// https://github.com/facebook/create-react-app/issues/2097
        // Let's ignore a meaningless name we get for top-level modules.
        functionName === 'friendlySyntaxErrorLabel' || functionName === 'exports.__esModule' || functionName === '<anonymous>' || !functionName) functionName = null;
        this.functionName = functionName;
        this.fileName = fileName;
        this.lineNumber = lineNumber;
        this.columnNumber = columnNumber;
        this._originalFunctionName = sourceFunctionName;
        this._originalFileName = sourceFileName;
        this._originalLineNumber = sourceLineNumber;
        this._originalColumnNumber = sourceColumnNumber;
        this._scriptCode = scriptCode;
        this._originalScriptCode = sourceScriptCode;
    }
    /**
   * Returns the name of this function.
   */ getFunctionName() {
        return this.functionName || '(anonymous function)';
    }
    /**
   * Returns the source of the frame.
   * This contains the file name, line number, and column number when available.
   */ getSource() {
        let str = '';
        if (this.fileName != null) str += this.fileName + ':';
        if (this.lineNumber != null) str += this.lineNumber + ':';
        if (this.columnNumber != null) str += this.columnNumber + ':';
        return str.slice(0, -1);
    }
    /**
   * Returns a pretty version of this stack frame.
   */ toString() {
        const functionName = this.getFunctionName();
        const source = this.getSource();
        return `${functionName}${source ? ` (${source})` : ``}`;
    }
}
var $d35756f426c25812$export$2e2bcd8739ae039 = $d35756f426c25812$export$8949fddf10447898;
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ const $865b9ffc545cb441$var$regexExtractLocation = /\(?(.+?)(?::(\d+))?(?::(\d+))?\)?$/;
function $865b9ffc545cb441$var$extractLocation(token) {
    return $865b9ffc545cb441$var$regexExtractLocation.exec(token) // $FlowFixMe
    .slice(1).map((v)=>{
        const p = Number(v);
        if (!isNaN(p)) return p;
        return v;
    });
}
const $865b9ffc545cb441$var$regexValidFrame_Chrome = /^\s*(at|in)\s.+(:\d+)/;
const $865b9ffc545cb441$var$regexValidFrame_FireFox = /(^|@)\S+:\d+|.+line\s+\d+\s+>\s+(eval|Function).+/;
function $865b9ffc545cb441$var$parseStack(stack) {
    let frames = stack.filter((e)=>$865b9ffc545cb441$var$regexValidFrame_Chrome.test(e) || $865b9ffc545cb441$var$regexValidFrame_FireFox.test(e)).map((e)=>{
        if ($865b9ffc545cb441$var$regexValidFrame_FireFox.test(e)) {
            // Strip eval, we don't care about it
            let isEval = false;
            if (/ > (eval|Function)/.test(e)) {
                e = e.replace(/ line (\d+)(?: > eval line \d+)* > (eval|Function):\d+:\d+/g, ':$1');
                isEval = true;
            }
            const data = e.split(/[@]/g);
            const last = data.pop();
            return new $d35756f426c25812$export$2e2bcd8739ae039(data.join('@') || (isEval ? 'eval' : null), ...$865b9ffc545cb441$var$extractLocation(last));
        } else {
            // Strip eval, we don't care about it
            if (e.indexOf('(eval ') !== -1) e = e.replace(/(\(eval at [^()]*)|(\),.*$)/g, '');
            if (e.indexOf('(at ') !== -1) e = e.replace(/\(at /, '(');
            const data = e.trim().split(/\s+/g).slice(1);
            const last = data.pop();
            return new $d35756f426c25812$export$2e2bcd8739ae039(data.join(' ') || null, ...$865b9ffc545cb441$var$extractLocation(last));
        }
    });
    let index = frames.findIndex((frame)=>frame.getFunctionName().includes('react-stack-bottom-frame'));
    if (index >= 0) frames = frames.slice(0, index);
    return frames;
}
/**
 * Turns an <code>Error</code>, or similar object, into a set of <code>StackFrame</code>s.
 * @alias parse
 */ function $865b9ffc545cb441$export$98e6a39c04603d36(error) {
    if (error == null) throw new Error('You cannot pass a null object.');
    if (typeof error === 'string') return $865b9ffc545cb441$var$parseStack(error.split('\n'));
    if (Array.isArray(error)) return $865b9ffc545cb441$var$parseStack(error);
    if (typeof error.stack === 'string') return $865b9ffc545cb441$var$parseStack(error.stack.split('\n'));
    throw new Error('The error you provided does not contain a stack trace.');
}
var $865b9ffc545cb441$export$2e2bcd8739ae039 = $865b9ffc545cb441$export$98e6a39c04603d36;
/**
 * Enhances a set of <code>StackFrame</code>s with their original positions and code (when available).
 * @param {StackFrame[]} frames A set of <code>StackFrame</code>s which contain (generated) code positions.
 * @param {number} [contextLines=3] The number of lines to provide before and after the line specified in the <code>StackFrame</code>.
 */ async function $df495b51087c401c$export$35b6448019ed80b8(error, contextLines = 3) {
    const frames = $865b9ffc545cb441$export$98e6a39c04603d36(error);
    // $FlowFixMe
    let res = await fetch(module.bundle.devServer + '/__parcel_code_frame', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            contextLines: contextLines,
            frames: frames.map((f)=>({
                    fileName: f.fileName,
                    lineNumber: f.lineNumber,
                    columnNumber: f.columnNumber
                }))
        })
    });
    let json = await res.json();
    return json.map((f, i)=>new $d35756f426c25812$export$8949fddf10447898(frames[i].functionName, f.fileName, f.lineNumber, f.columnNumber, f.compiledLines, frames[i].functionName, f.sourceFileName, f.sourceLineNumber, f.sourceColumnNumber, f.sourceLines));
}
var $df495b51087c401c$export$2e2bcd8739ae039 = $df495b51087c401c$export$35b6448019ed80b8;
const $6d40ebe8356580e0$var$CONTEXT_SIZE = 3;
function $6d40ebe8356580e0$export$9123e6c9c0ac21ed(crash) {
    return (error, unhandledRejection = false)=>{
        $df495b51087c401c$export$2e2bcd8739ae039(error, $6d40ebe8356580e0$var$CONTEXT_SIZE).then((stackFrames)=>{
            if (stackFrames == null) return;
            crash({
                error: error,
                unhandledRejection: unhandledRejection,
                contextSize: $6d40ebe8356580e0$var$CONTEXT_SIZE,
                stackFrames: stackFrames
            });
        }).catch((e)=>{
            // eslint-disable-next-line no-console
            console.log('Could not get the stack frames of error:', e);
        });
    };
}
function $6d40ebe8356580e0$var$patchConsole(method, onError) {
    /* eslint-disable no-console */ let original = console[method];
    console[method] = (...args)=>{
        let error = null;
        if (typeof args[0] === 'string') {
            let format = args[0].match(/%[oOdisfc]/g);
            if (format) {
                let errorIndex = format.findIndex((match)=>match === '%o' || match === '%O');
                if (errorIndex < 0) errorIndex = format.findIndex((match)=>match === '%s');
                if (errorIndex >= 0) error = args[errorIndex + 1];
                else error = args[1];
                if (!(error instanceof Error)) {
                    let index = 1;
                    let message = args[0].replace(/%[oOdisfc]/g, (match)=>{
                        switch(match){
                            case '%s':
                                return String(args[index++]);
                            case '%f':
                                return parseFloat(args[index++]);
                            case '%d':
                            case '%i':
                                return parseInt(args[index++], 10);
                            case '%o':
                            case '%O':
                                if (args[index] instanceof Error) return String(args[index++]);
                                else return JSON.stringify(args[index++]);
                            case '%c':
                                index++;
                                return '';
                        }
                    });
                    error = new Error(message);
                }
            } else error = new Error(args[0]);
        } else error = args.find((arg)=>arg instanceof Error);
        if (error && !error.message.includes('[parcel]') && typeof window !== 'undefined' && window.__REACT_DEVTOOLS_GLOBAL_HOOK__) {
            // Attempt to append the React component stack
            // TODO: use React.captureOwnerStack once stable.
            let hook = window.__REACT_DEVTOOLS_GLOBAL_HOOK__;
            if (hook.renderers instanceof Map) {
                for (let renderer of hook.renderers.values())if (typeof renderer?.currentDispatcherRef?.getCurrentStack === 'function') {
                    let stack = renderer.currentDispatcherRef.getCurrentStack();
                    if (stack) {
                        error.stack += stack;
                        break;
                    }
                }
            }
            onError(error);
        }
        original.apply(console, args);
    };
/* eslint-enable no-console */ }
function $6d40ebe8356580e0$export$38ec23daa6e8dcdf(crash) {
    const crashWithFramesRunTime = $6d40ebe8356580e0$export$9123e6c9c0ac21ed(crash);
    $883a43040cbd0629$export$6503ec6e8aabbaf(window, (error)=>crashWithFramesRunTime(error, false));
    $900f8c32b7484e20$export$6503ec6e8aabbaf(window, (error)=>crashWithFramesRunTime(error, true));
    $5f72ade198404e99$export$6503ec6e8aabbaf();
    $6d40ebe8356580e0$var$patchConsole('error', (error)=>crashWithFramesRunTime(error, false));
    return function() {
        $5f72ade198404e99$export$d07f55d4c15c0440();
        $900f8c32b7484e20$export$d07f55d4c15c0440(window);
        $883a43040cbd0629$export$d07f55d4c15c0440(window);
    };
}
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ /**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ /* eslint-env browser */ var $10ecac3e4062713a$var$t, $10ecac3e4062713a$var$r, $10ecac3e4062713a$var$u, $10ecac3e4062713a$var$i, $10ecac3e4062713a$var$o = 0, $10ecac3e4062713a$var$f = [], $10ecac3e4062713a$var$c = $b6c7f0288a15c619$export$41c562ebe57d11e2, $10ecac3e4062713a$var$e = $10ecac3e4062713a$var$c.__b, $10ecac3e4062713a$var$a = $10ecac3e4062713a$var$c.__r, $10ecac3e4062713a$var$v = $10ecac3e4062713a$var$c.diffed, $10ecac3e4062713a$var$l = $10ecac3e4062713a$var$c.__c, $10ecac3e4062713a$var$m = $10ecac3e4062713a$var$c.unmount, $10ecac3e4062713a$var$s = $10ecac3e4062713a$var$c.__;
function $10ecac3e4062713a$var$p(n, t) {
    $10ecac3e4062713a$var$c.__h && $10ecac3e4062713a$var$c.__h($10ecac3e4062713a$var$r, n, $10ecac3e4062713a$var$o || t), $10ecac3e4062713a$var$o = 0;
    var u = $10ecac3e4062713a$var$r.__H || ($10ecac3e4062713a$var$r.__H = {
        __: [],
        __h: []
    });
    return n >= u.__.length && u.__.push({}), u.__[n];
}
function $10ecac3e4062713a$export$60241385465d0a34(n) {
    return $10ecac3e4062713a$var$o = 1, $10ecac3e4062713a$export$13e3392192263954($10ecac3e4062713a$var$D, n);
}
function $10ecac3e4062713a$export$13e3392192263954(n, u, i) {
    var o = $10ecac3e4062713a$var$p($10ecac3e4062713a$var$t++, 2);
    if (o.t = n, !o.__c && (o.__ = [
        i ? i(u) : $10ecac3e4062713a$var$D(void 0, u),
        function(n) {
            var t = o.__N ? o.__N[0] : o.__[0], r = o.t(t, n);
            t !== r && (o.__N = [
                r,
                o.__[1]
            ], o.__c.setState({}));
        }
    ], o.__c = $10ecac3e4062713a$var$r, !$10ecac3e4062713a$var$r.__f)) {
        var f = function(n, t, r) {
            if (!o.__c.__H) return !0;
            var u = o.__c.__H.__.filter(function(n) {
                return !!n.__c;
            });
            if (u.every(function(n) {
                return !n.__N;
            })) return !c || c.call(this, n, t, r);
            var i = o.__c.props !== n;
            return u.forEach(function(n) {
                if (n.__N) {
                    var t = n.__[0];
                    n.__ = n.__N, n.__N = void 0, t !== n.__[0] && (i = !0);
                }
            }), c && c.call(this, n, t, r) || i;
        };
        $10ecac3e4062713a$var$r.__f = !0;
        var c = $10ecac3e4062713a$var$r.shouldComponentUpdate, e = $10ecac3e4062713a$var$r.componentWillUpdate;
        $10ecac3e4062713a$var$r.componentWillUpdate = function(n, t, r) {
            if (this.__e) {
                var u = c;
                c = void 0, f(n, t, r), c = u;
            }
            e && e.call(this, n, t, r);
        }, $10ecac3e4062713a$var$r.shouldComponentUpdate = f;
    }
    return o.__N || o.__;
}
function $10ecac3e4062713a$export$6d9c69b0de29b591(n, u) {
    var i = $10ecac3e4062713a$var$p($10ecac3e4062713a$var$t++, 3);
    !$10ecac3e4062713a$var$c.__s && $10ecac3e4062713a$var$C(i.__H, u) && (i.__ = n, i.u = u, $10ecac3e4062713a$var$r.__H.__h.push(i));
}
function $10ecac3e4062713a$export$e5c5a5f917a5871c(n, u) {
    var i = $10ecac3e4062713a$var$p($10ecac3e4062713a$var$t++, 4);
    !$10ecac3e4062713a$var$c.__s && $10ecac3e4062713a$var$C(i.__H, u) && (i.__ = n, i.u = u, $10ecac3e4062713a$var$r.__h.push(i));
}
function $10ecac3e4062713a$export$b8f5890fc79d6aca(n) {
    return $10ecac3e4062713a$var$o = 5, $10ecac3e4062713a$export$1538c33de8887b59(function() {
        return {
            current: n
        };
    }, []);
}
function $10ecac3e4062713a$export$d5a552a76deda3c2(n, t, r) {
    $10ecac3e4062713a$var$o = 6, $10ecac3e4062713a$export$e5c5a5f917a5871c(function() {
        if ("function" == typeof n) {
            var r = n(t());
            return function() {
                n(null), r && "function" == typeof r && r();
            };
        }
        if (n) return n.current = t(), function() {
            return n.current = null;
        };
    }, null == r ? r : r.concat(n));
}
function $10ecac3e4062713a$export$1538c33de8887b59(n, r) {
    var u = $10ecac3e4062713a$var$p($10ecac3e4062713a$var$t++, 7);
    return $10ecac3e4062713a$var$C(u.__H, r) && (u.__ = n(), u.__H = r, u.__h = n), u.__;
}
function $10ecac3e4062713a$export$35808ee640e87ca7(n, t) {
    return $10ecac3e4062713a$var$o = 8, $10ecac3e4062713a$export$1538c33de8887b59(function() {
        return n;
    }, t);
}
function $10ecac3e4062713a$export$fae74005e78b1a27(n) {
    var u = $10ecac3e4062713a$var$r.context[n.__c], i = $10ecac3e4062713a$var$p($10ecac3e4062713a$var$t++, 9);
    return i.c = n, u ? (null == i.__ && (i.__ = !0, u.sub($10ecac3e4062713a$var$r)), u.props.value) : n.__;
}
function $10ecac3e4062713a$export$dc8fbce3eb94dc1e(n, t) {
    $10ecac3e4062713a$var$c.useDebugValue && $10ecac3e4062713a$var$c.useDebugValue(t ? t(n) : n);
}
function $10ecac3e4062713a$export$c052f6604b7d51fe(n) {
    var u = $10ecac3e4062713a$var$p($10ecac3e4062713a$var$t++, 10), i = $10ecac3e4062713a$export$60241385465d0a34();
    return u.__ = n, $10ecac3e4062713a$var$r.componentDidCatch || ($10ecac3e4062713a$var$r.componentDidCatch = function(n, t) {
        u.__ && u.__(n, t), i[1](n);
    }), [
        i[0],
        function() {
            i[1](void 0);
        }
    ];
}
function $10ecac3e4062713a$export$f680877a34711e37() {
    var n = $10ecac3e4062713a$var$p($10ecac3e4062713a$var$t++, 11);
    if (!n.__) {
        for(var u = $10ecac3e4062713a$var$r.__v; null !== u && !u.__m && null !== u.__;)u = u.__;
        var i = u.__m || (u.__m = [
            0,
            0
        ]);
        n.__ = "P" + i[0] + "-" + i[1]++;
    }
    return n.__;
}
function $10ecac3e4062713a$var$j() {
    for(var n; n = $10ecac3e4062713a$var$f.shift();)if (n.__P && n.__H) try {
        n.__H.__h.forEach($10ecac3e4062713a$var$z), n.__H.__h.forEach($10ecac3e4062713a$var$B), n.__H.__h = [];
    } catch (t) {
        n.__H.__h = [], $10ecac3e4062713a$var$c.__e(t, n.__v);
    }
}
$10ecac3e4062713a$var$c.__b = function(n) {
    $10ecac3e4062713a$var$r = null, $10ecac3e4062713a$var$e && $10ecac3e4062713a$var$e(n);
}, $10ecac3e4062713a$var$c.__ = function(n, t) {
    n && t.__k && t.__k.__m && (n.__m = t.__k.__m), $10ecac3e4062713a$var$s && $10ecac3e4062713a$var$s(n, t);
}, $10ecac3e4062713a$var$c.__r = function(n) {
    $10ecac3e4062713a$var$a && $10ecac3e4062713a$var$a(n), $10ecac3e4062713a$var$t = 0;
    var i = ($10ecac3e4062713a$var$r = n.__c).__H;
    i && ($10ecac3e4062713a$var$u === $10ecac3e4062713a$var$r ? (i.__h = [], $10ecac3e4062713a$var$r.__h = [], i.__.forEach(function(n) {
        n.__N && (n.__ = n.__N), n.u = n.__N = void 0;
    })) : (i.__h.forEach($10ecac3e4062713a$var$z), i.__h.forEach($10ecac3e4062713a$var$B), i.__h = [], $10ecac3e4062713a$var$t = 0)), $10ecac3e4062713a$var$u = $10ecac3e4062713a$var$r;
}, $10ecac3e4062713a$var$c.diffed = function(n) {
    $10ecac3e4062713a$var$v && $10ecac3e4062713a$var$v(n);
    var t = n.__c;
    t && t.__H && (t.__H.__h.length && (1 !== $10ecac3e4062713a$var$f.push(t) && $10ecac3e4062713a$var$i === $10ecac3e4062713a$var$c.requestAnimationFrame || (($10ecac3e4062713a$var$i = $10ecac3e4062713a$var$c.requestAnimationFrame) || $10ecac3e4062713a$var$w)($10ecac3e4062713a$var$j)), t.__H.__.forEach(function(n) {
        n.u && (n.__H = n.u), n.u = void 0;
    })), $10ecac3e4062713a$var$u = $10ecac3e4062713a$var$r = null;
}, $10ecac3e4062713a$var$c.__c = function(n, t) {
    t.some(function(n) {
        try {
            n.__h.forEach($10ecac3e4062713a$var$z), n.__h = n.__h.filter(function(n) {
                return !n.__ || $10ecac3e4062713a$var$B(n);
            });
        } catch (r) {
            t.some(function(n) {
                n.__h && (n.__h = []);
            }), t = [], $10ecac3e4062713a$var$c.__e(r, n.__v);
        }
    }), $10ecac3e4062713a$var$l && $10ecac3e4062713a$var$l(n, t);
}, $10ecac3e4062713a$var$c.unmount = function(n) {
    $10ecac3e4062713a$var$m && $10ecac3e4062713a$var$m(n);
    var t, r = n.__c;
    r && r.__H && (r.__H.__.forEach(function(n) {
        try {
            $10ecac3e4062713a$var$z(n);
        } catch (n) {
            t = n;
        }
    }), r.__H = void 0, t && $10ecac3e4062713a$var$c.__e(t, r.__v));
};
var $10ecac3e4062713a$var$k = "function" == typeof requestAnimationFrame;
function $10ecac3e4062713a$var$w(n) {
    var t, r = function() {
        clearTimeout(u), $10ecac3e4062713a$var$k && cancelAnimationFrame(t), setTimeout(n);
    }, u = setTimeout(r, 100);
    $10ecac3e4062713a$var$k && (t = requestAnimationFrame(r));
}
function $10ecac3e4062713a$var$z(n) {
    var t = $10ecac3e4062713a$var$r, u = n.__c;
    "function" == typeof u && (n.__c = void 0, u()), $10ecac3e4062713a$var$r = t;
}
function $10ecac3e4062713a$var$B(n) {
    var t = $10ecac3e4062713a$var$r;
    n.__c = n.__(), $10ecac3e4062713a$var$r = t;
}
function $10ecac3e4062713a$var$C(n, t) {
    return !n || n.length !== t.length || t.some(function(t, r) {
        return t !== n[r];
    });
}
function $10ecac3e4062713a$var$D(n, t) {
    return "function" == typeof t ? t(n) : t;
}
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ const $74bb4be6e9b78681$export$f30cb9bc4f736419 = {
    // Colors for components styles
    background: 'white',
    color: 'black',
    headerColor: '#ce1126',
    primaryPreBackground: 'rgba(206, 17, 38, 0.05)',
    primaryPreColor: 'inherit',
    secondaryPreBackground: 'rgba(251, 245, 180, 0.3)',
    secondaryPreColor: 'inherit',
    footer: '#878e91',
    anchorColor: '#878e91',
    toggleBackground: 'transparent',
    toggleColor: '#878e91',
    closeColor: '#293238',
    navBackground: 'rgba(206, 17, 38, 0.05)',
    navArrow: '#ce1126',
    diffAdded: 'green',
    diffRemoved: '#ce1126',
    // Light color scheme inspired by https://chriskempson.github.io/base16/css/base16-github.css
    // base00: '#ffffff',
    base01: '#f5f5f5',
    // base02: '#c8c8fa',
    base03: '#6e6e6e',
    // base04: '#e8e8e8',
    base05: '#333333',
    // base06: '#ffffff',
    // base07: '#ffffff',
    base08: '#881280',
    // base09: '#0086b3',
    // base0A: '#795da3',
    base0B: '#1155cc',
    base0C: '#994500',
    // base0D: '#795da3',
    base0E: '#c80000'
};
const $74bb4be6e9b78681$export$3e936a8db52a10a0 = {
    // Colors for components styles
    background: '#353535',
    color: 'white',
    headerColor: '#e83b46',
    primaryPreBackground: 'rgba(206, 17, 38, 0.1)',
    primaryPreColor: '#fccfcf',
    secondaryPreBackground: 'rgba(251, 245, 180, 0.1)',
    secondaryPreColor: '#fbf5b4',
    footer: '#878e91',
    anchorColor: '#878e91',
    toggleBackground: 'transparent',
    toggleColor: '#878e91',
    closeColor: '#ffffff',
    navBackground: 'rgba(206, 17, 38, 0.2)',
    navArrow: '#ce1126',
    diffAdded: '#85e285',
    diffRemoved: '#ff5459',
    // Dark color scheme inspired by https://github.com/atom/base16-tomorrow-dark-theme/blob/master/styles/colors.less
    // base00: '#1d1f21',
    base01: '#282a2e',
    // base02: '#373b41',
    base03: '#969896',
    // base04: '#b4b7b4',
    base05: '#c5c8c6',
    // base06: '#e0e0e0',
    // base07: '#ffffff',
    base08: '#cc6666',
    // base09: '#de935f',
    // base0A: '#f0c674',
    base0B: '#b5bd68',
    base0C: '#8abeb7',
    // base0D: '#81a2be',
    base0E: '#b294bb'
};
const $74bb4be6e9b78681$export$bca14c5b3b88a9c9 = Object.fromEntries(Object.keys($74bb4be6e9b78681$export$f30cb9bc4f736419).map((key)=>[
        key,
        `light-dark(${$74bb4be6e9b78681$export$f30cb9bc4f736419[key]}, ${$74bb4be6e9b78681$export$3e936a8db52a10a0[key]})`
    ]));
const $74bb4be6e9b78681$export$7ef984671d1853d7 = {
    width: '100vw',
    height: '100vh',
    maxWidth: 'none',
    maxHeight: 'none',
    border: 0,
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
    textAlign: 'center',
    backgroundColor: $74bb4be6e9b78681$export$bca14c5b3b88a9c9.background,
    outline: 'none',
    colorScheme: 'light dark'
};
const $20d888b381d18c6c$var$overlayStyle = {
    position: 'relative',
    display: 'inline-flex',
    flexDirection: 'column',
    height: '100%',
    width: '1024px',
    maxWidth: '100%',
    overflowX: 'hidden',
    overflowY: 'auto',
    padding: '0.5rem',
    boxSizing: 'border-box',
    textAlign: 'left',
    fontFamily: 'Consolas, Menlo, monospace',
    fontSize: '11px',
    whiteSpace: 'pre-wrap',
    wordBreak: 'break-word',
    lineHeight: 1.5,
    color: $74bb4be6e9b78681$export$bca14c5b3b88a9c9.color
};
function $20d888b381d18c6c$var$ErrorOverlay(props) {
    const { shortcutHandler: shortcutHandler } = props;
    $10ecac3e4062713a$export$6d9c69b0de29b591(()=>{
        const onKeyDown = (e)=>{
            if (shortcutHandler) shortcutHandler(e.key);
        };
        window.addEventListener('keydown', onKeyDown);
        return ()=>{
            window.removeEventListener('keydown', onKeyDown);
        };
    }, [
        shortcutHandler
    ]);
    return $23b7c1cb98b19658$export$34b9dba7ce09269b("div", {
        style: $20d888b381d18c6c$var$overlayStyle,
        children: props.children
    });
}
var $20d888b381d18c6c$export$2e2bcd8739ae039 = $20d888b381d18c6c$var$ErrorOverlay;
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ const $7aae0c9ea64fc08c$var$closeButtonStyle = {
    color: $74bb4be6e9b78681$export$bca14c5b3b88a9c9.closeColor,
    lineHeight: '1rem',
    fontSize: '1.5rem',
    padding: '1rem',
    cursor: 'pointer',
    position: 'absolute',
    right: 0,
    top: 0
};
function $7aae0c9ea64fc08c$var$CloseButton({ close: close }) {
    return $23b7c1cb98b19658$export$34b9dba7ce09269b("span", {
        title: "Click or press Escape to dismiss.",
        onClick: close,
        style: $7aae0c9ea64fc08c$var$closeButtonStyle,
        children: "\xd7"
    });
}
var $7aae0c9ea64fc08c$export$2e2bcd8739ae039 = $7aae0c9ea64fc08c$var$CloseButton;
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ const $1adc179a826c5dd2$var$navigationBarStyle = {
    marginBottom: '0.5rem'
};
const $1adc179a826c5dd2$var$buttonContainerStyle = {
    marginRight: '1em'
};
const $1adc179a826c5dd2$var$_navButtonStyle = {
    border: 'none',
    borderRadius: '4px',
    padding: '3px 6px',
    cursor: 'pointer'
};
const $1adc179a826c5dd2$var$leftButtonStyle = {
    ...$1adc179a826c5dd2$var$_navButtonStyle,
    backgroundColor: $74bb4be6e9b78681$export$bca14c5b3b88a9c9.navBackground,
    color: $74bb4be6e9b78681$export$bca14c5b3b88a9c9.navArrow,
    borderTopRightRadius: '0px',
    borderBottomRightRadius: '0px',
    marginRight: '1px'
};
const $1adc179a826c5dd2$var$rightButtonStyle = {
    ...$1adc179a826c5dd2$var$_navButtonStyle,
    backgroundColor: $74bb4be6e9b78681$export$bca14c5b3b88a9c9.navBackground,
    color: $74bb4be6e9b78681$export$bca14c5b3b88a9c9.navArrow,
    borderTopLeftRadius: '0px',
    borderBottomLeftRadius: '0px'
};
function $1adc179a826c5dd2$var$NavigationBar(props) {
    const { currentError: currentError, totalErrors: totalErrors, previous: previous, next: next } = props;
    return $23b7c1cb98b19658$export$34b9dba7ce09269b("div", {
        style: $1adc179a826c5dd2$var$navigationBarStyle,
        children: [
            $23b7c1cb98b19658$export$34b9dba7ce09269b("span", {
                style: $1adc179a826c5dd2$var$buttonContainerStyle,
                children: [
                    $23b7c1cb98b19658$export$34b9dba7ce09269b("button", {
                        onClick: previous,
                        style: $1adc179a826c5dd2$var$leftButtonStyle,
                        children: "\u2190"
                    }),
                    $23b7c1cb98b19658$export$34b9dba7ce09269b("button", {
                        onClick: next,
                        style: $1adc179a826c5dd2$var$rightButtonStyle,
                        children: "\u2192"
                    })
                ]
            }),
            `${currentError} of ${totalErrors} errors on the page`
        ]
    });
}
var $1adc179a826c5dd2$export$2e2bcd8739ae039 = $1adc179a826c5dd2$var$NavigationBar;
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ /**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ const $c306e3a42547c8c2$var$headerStyle = {
    fontSize: '2em',
    fontFamily: 'sans-serif',
    color: $74bb4be6e9b78681$export$bca14c5b3b88a9c9.headerColor,
    whiteSpace: 'pre-wrap',
    // Top bottom margin spaces header
    // Right margin revents overlap with close button
    margin: '0 2rem 0.75rem 0',
    flex: '0 0 auto'
};
function $c306e3a42547c8c2$var$Header(props) {
    return $23b7c1cb98b19658$export$34b9dba7ce09269b("div", {
        style: $c306e3a42547c8c2$var$headerStyle,
        children: props.headerText
    });
}
var $c306e3a42547c8c2$export$2e2bcd8739ae039 = $c306e3a42547c8c2$var$Header;
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ /**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ /**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ const $97c30df7f5c364f7$var$_preStyle = {
    position: 'relative',
    display: 'block',
    padding: '0.5em',
    marginTop: '0.5em',
    marginBottom: '0.5em',
    overflowX: 'auto',
    whiteSpace: 'pre-wrap',
    borderRadius: '0.25rem'
};
const $97c30df7f5c364f7$var$codeStyle = {
    fontFamily: 'Consolas, Menlo, monospace'
};
function $97c30df7f5c364f7$var$CodeBlock({ main: main, codeHTML: codeHTML }) {
    const primaryPreStyle = {
        ...$97c30df7f5c364f7$var$_preStyle,
        backgroundColor: $74bb4be6e9b78681$export$bca14c5b3b88a9c9.primaryPreBackground,
        color: $74bb4be6e9b78681$export$bca14c5b3b88a9c9.primaryPreColor
    };
    const secondaryPreStyle = {
        ...$97c30df7f5c364f7$var$_preStyle,
        backgroundColor: $74bb4be6e9b78681$export$bca14c5b3b88a9c9.secondaryPreBackground,
        color: $74bb4be6e9b78681$export$bca14c5b3b88a9c9.secondaryPreColor
    };
    const preStyle = main ? primaryPreStyle : secondaryPreStyle;
    return $23b7c1cb98b19658$export$34b9dba7ce09269b("pre", {
        style: preStyle,
        children: $23b7c1cb98b19658$export$34b9dba7ce09269b("code", {
            style: $97c30df7f5c364f7$var$codeStyle,
            dangerouslySetInnerHTML: {
                __html: codeHTML
            }
        })
    });
}
var $97c30df7f5c364f7$export$2e2bcd8739ae039 = $97c30df7f5c364f7$var$CodeBlock;
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ function $f78f50d61026cdc5$export$44b1e5ee7f53eae1(sourceFileName, sourceLineNumber, sourceColumnNumber, fileName, lineNumber, columnNumber, compiled) {
    let prettyURL;
    if (!compiled && sourceFileName && typeof sourceLineNumber === 'number') {
        // Remove everything up to the first /src/ or /node_modules/
        const trimMatch = /^[/|\\].*?[/|\\]((src|node_modules)[/|\\].*)/.exec(sourceFileName);
        if (trimMatch && trimMatch[1]) prettyURL = trimMatch[1];
        else prettyURL = sourceFileName;
        prettyURL += ':' + sourceLineNumber;
        // Note: we intentionally skip 0's because they're produced by cheap webpack maps
        if (sourceColumnNumber) prettyURL += ':' + sourceColumnNumber;
    } else if (fileName && typeof lineNumber === 'number') {
        prettyURL = fileName + ':' + lineNumber;
        // Note: we intentionally skip 0's because they're produced by cheap webpack maps
        if (columnNumber) prettyURL += ':' + columnNumber;
    } else prettyURL = 'unknown';
    return prettyURL.replace('webpack://', '.');
}
var $f78f50d61026cdc5$export$2e2bcd8739ae039 = $f78f50d61026cdc5$export$44b1e5ee7f53eae1;
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var $cdea3ae92bef6910$exports = {};
'use strict';
$cdea3ae92bef6910$exports = $cdea3ae92bef6910$var$ansiHTML;
// Reference to https://github.com/sindresorhus/ansi-regex
var $cdea3ae92bef6910$var$_regANSI = /(?:(?:\u001b\[)|\u009b)(?:(?:[0-9]{1,3})?(?:(?:;[0-9]{0,3})*)?[A-M|f-m])|\u001b[A-M]/;
var $cdea3ae92bef6910$var$_defColors = {
    reset: [
        'fff',
        '000'
    ],
    black: '000',
    red: 'ff0000',
    green: '209805',
    yellow: 'e8bf03',
    blue: '0000ff',
    magenta: 'ff00ff',
    cyan: '00ffee',
    lightgrey: 'f0f0f0',
    darkgrey: '888'
};
var $cdea3ae92bef6910$var$_styles = {
    30: 'black',
    31: 'red',
    32: 'green',
    33: 'yellow',
    34: 'blue',
    35: 'magenta',
    36: 'cyan',
    37: 'lightgrey'
};
var $cdea3ae92bef6910$var$_openTags = {
    '1': 'font-weight:bold',
    '2': 'opacity:0.5',
    '3': '<i>',
    '4': '<u>',
    '8': 'display:none',
    '9': '<del>' // delete
};
var $cdea3ae92bef6910$var$_closeTags = {
    '23': '</i>',
    '24': '</u>',
    '29': '</del>' // reset delete
};
[
    0,
    21,
    22,
    27,
    28,
    39,
    49
].forEach(function(n) {
    $cdea3ae92bef6910$var$_closeTags[n] = '</span>';
});
/**
 * Converts text with ANSI color codes to HTML markup.
 * @param {String} text
 * @returns {*}
 */ function $cdea3ae92bef6910$var$ansiHTML(text) {
    // Returns the text if the string has no ANSI escape code.
    if (!$cdea3ae92bef6910$var$_regANSI.test(text)) return text;
    // Cache opened sequence.
    var ansiCodes = [];
    // Replace with markup.
    var ret = text.replace(/\033\[(\d+)m/g, function(match, seq) {
        var ot = $cdea3ae92bef6910$var$_openTags[seq];
        if (ot) {
            // If current sequence has been opened, close it.
            if (!!~ansiCodes.indexOf(seq)) {
                ansiCodes.pop();
                return '</span>';
            }
            // Open tag.
            ansiCodes.push(seq);
            return ot[0] === '<' ? ot : '<span style="' + ot + ';">';
        }
        var ct = $cdea3ae92bef6910$var$_closeTags[seq];
        if (ct) {
            // Pop sequence
            ansiCodes.pop();
            return ct;
        }
        return '';
    });
    // Make sure tags are closed.
    var l = ansiCodes.length;
    l > 0 && (ret += Array(l + 1).join('</span>'));
    return ret;
}
/**
 * Customize colors.
 * @param {Object} colors reference to _defColors
 */ $cdea3ae92bef6910$var$ansiHTML.setColors = function(colors) {
    if (typeof colors !== 'object') throw new Error('`colors` parameter must be an Object.');
    var _finalColors = {};
    for(var key in $cdea3ae92bef6910$var$_defColors){
        var hex = colors.hasOwnProperty(key) ? colors[key] : null;
        if (!hex) {
            _finalColors[key] = $cdea3ae92bef6910$var$_defColors[key];
            continue;
        }
        if ('reset' === key) {
            if (typeof hex === 'string') hex = [
                hex
            ];
            if (!Array.isArray(hex) || hex.length === 0 || hex.some(function(h) {
                return typeof h !== 'string';
            })) throw new Error('The value of `' + key + '` property must be an Array and each item could only be a hex string, e.g.: FF0000');
            var defHexColor = $cdea3ae92bef6910$var$_defColors[key];
            if (!hex[0]) hex[0] = defHexColor[0];
            if (hex.length === 1 || !hex[1]) {
                hex = [
                    hex[0]
                ];
                hex.push(defHexColor[1]);
            }
            hex = hex.slice(0, 2);
        } else if (typeof hex !== 'string') throw new Error('The value of `' + key + '` property must be a hex string, e.g.: FF0000');
        _finalColors[key] = hex;
    }
    $cdea3ae92bef6910$var$_setTags(_finalColors);
};
/**
 * Reset colors.
 */ $cdea3ae92bef6910$var$ansiHTML.reset = function() {
    $cdea3ae92bef6910$var$_setTags($cdea3ae92bef6910$var$_defColors);
};
/**
 * Expose tags, including open and close.
 * @type {Object}
 */ $cdea3ae92bef6910$var$ansiHTML.tags = {};
if (Object.defineProperty) {
    Object.defineProperty($cdea3ae92bef6910$var$ansiHTML.tags, 'open', {
        get: function() {
            return $cdea3ae92bef6910$var$_openTags;
        }
    });
    Object.defineProperty($cdea3ae92bef6910$var$ansiHTML.tags, 'close', {
        get: function() {
            return $cdea3ae92bef6910$var$_closeTags;
        }
    });
} else {
    $cdea3ae92bef6910$var$ansiHTML.tags.open = $cdea3ae92bef6910$var$_openTags;
    $cdea3ae92bef6910$var$ansiHTML.tags.close = $cdea3ae92bef6910$var$_closeTags;
}
function $cdea3ae92bef6910$var$_setTags(colors) {
    // reset all
    $cdea3ae92bef6910$var$_openTags['0'] = 'font-weight:normal;opacity:1;color:#' + colors.reset[0] + ';background:#' + colors.reset[1];
    // inverse
    $cdea3ae92bef6910$var$_openTags['7'] = 'color:#' + colors.reset[1] + ';background:#' + colors.reset[0];
    // dark grey
    $cdea3ae92bef6910$var$_openTags['90'] = 'color:#' + colors.darkgrey;
    for(var code in $cdea3ae92bef6910$var$_styles){
        var color = $cdea3ae92bef6910$var$_styles[code];
        var oriColor = colors[color] || '000';
        $cdea3ae92bef6910$var$_openTags[code] = 'color:#' + oriColor;
        code = parseInt(code);
        $cdea3ae92bef6910$var$_openTags[(code + 10).toString()] = 'background:#' + oriColor;
    }
}
$cdea3ae92bef6910$var$ansiHTML.reset();
// Map ANSI colors from what babel-code-frame uses to base16-github
// See: https://github.com/babel/babel/blob/e86f62b304d280d0bab52c38d61842b853848ba6/packages/babel-code-frame/src/index.js#L9-L22
const $b67e2a05a9c13039$var$colors = {
    reset: [
        $74bb4be6e9b78681$export$bca14c5b3b88a9c9.base05,
        'transparent'
    ],
    black: $74bb4be6e9b78681$export$bca14c5b3b88a9c9.base05,
    red: $74bb4be6e9b78681$export$bca14c5b3b88a9c9.base08 /* marker, bg-invalid */ ,
    green: $74bb4be6e9b78681$export$bca14c5b3b88a9c9.base0B /* string */ ,
    yellow: $74bb4be6e9b78681$export$bca14c5b3b88a9c9.base08 /* capitalized, jsx_tag, punctuator */ ,
    blue: $74bb4be6e9b78681$export$bca14c5b3b88a9c9.base0C,
    magenta: $74bb4be6e9b78681$export$bca14c5b3b88a9c9.base0C /* regex */ ,
    cyan: $74bb4be6e9b78681$export$bca14c5b3b88a9c9.base0E /* keyword */ ,
    gray: $74bb4be6e9b78681$export$bca14c5b3b88a9c9.base03 /* comment, gutter */ ,
    lightgrey: $74bb4be6e9b78681$export$bca14c5b3b88a9c9.base01,
    darkgrey: $74bb4be6e9b78681$export$bca14c5b3b88a9c9.base03
};
/*@__PURE__*/ $parcel$interopDefault($cdea3ae92bef6910$exports).setColors($b67e2a05a9c13039$var$colors);
// $FlowFixMe
for(let tag in /*@__PURE__*/ $parcel$interopDefault($cdea3ae92bef6910$exports).tags.open)/*@__PURE__*/ $parcel$interopDefault($cdea3ae92bef6910$exports).tags.open[tag] = /*@__PURE__*/ $parcel$interopDefault($cdea3ae92bef6910$exports).tags.open[tag].replace(/#light-dark/g, 'light-dark');
function $b67e2a05a9c13039$var$generateAnsiHTML(txt) {
    return /*@__PURE__*/ $parcel$interopDefault($cdea3ae92bef6910$exports)(txt.replace(/[&<>"']/g, (c)=>{
        switch(c){
            case '&':
                return '&amp';
            case '<':
                return '&lt;';
            case '>':
                return '&gt';
            case '"':
                return '&quot;';
            case "'":
                return '&#39;';
            default:
                return c;
        }
    }));
}
var $b67e2a05a9c13039$export$2e2bcd8739ae039 = $b67e2a05a9c13039$var$generateAnsiHTML;
const $e0e0fa52b83f95a9$var$linkStyle = {
    fontSize: '0.9em',
    marginBottom: '0.9em'
};
const $e0e0fa52b83f95a9$var$anchorStyle = {
    textDecoration: 'none',
    color: $74bb4be6e9b78681$export$bca14c5b3b88a9c9.anchorColor,
    cursor: 'pointer'
};
const $e0e0fa52b83f95a9$var$codeAnchorStyle = {
    cursor: 'pointer'
};
const $e0e0fa52b83f95a9$var$toggleStyle = {
    color: $74bb4be6e9b78681$export$bca14c5b3b88a9c9.toggleColor,
    cursor: 'pointer',
    border: 'none',
    display: 'block',
    width: '100%',
    textAlign: 'left',
    background: $74bb4be6e9b78681$export$bca14c5b3b88a9c9.toggleBackground,
    fontFamily: 'Consolas, Menlo, monospace',
    fontSize: '1em',
    padding: '0px',
    lineHeight: '1.5'
};
function $e0e0fa52b83f95a9$var$StackFrame(props) {
    const { frame: frame, critical: critical, showCode: showCode } = props;
    const { fileName: fileName, lineNumber: lineNumber, columnNumber: columnNumber, _scriptCode: scriptLines, _originalFileName: sourceFileName, _originalLineNumber: sourceLineNumber, _originalColumnNumber: sourceColumnNumber, _originalScriptCode: sourceLines } = frame;
    const functionName = frame.getFunctionName();
    const [compiled, setCompiled] = $10ecac3e4062713a$export$60241385465d0a34(!sourceLines);
    const getErrorLocation = ()=>{
        const { _originalFileName: fileName, _originalLineNumber: lineNumber } = props.frame;
        // Unknown file
        if (!fileName) return null;
        // e.g. "/path-to-my-app/webpack/bootstrap eaddeb46b67d75e4dfc1"
        const isInternalWebpackBootstrapCode = fileName.trim().indexOf(' ') !== -1;
        if (isInternalWebpackBootstrapCode) return null;
        // Code is in a real file
        return {
            fileName: fileName,
            lineNumber: lineNumber || 1
        };
    };
    const editorHandler = ()=>{
        const errorLoc = getErrorLocation();
        if (!errorLoc) return;
        props.editorHandler?.(errorLoc);
    };
    const url = $f78f50d61026cdc5$export$44b1e5ee7f53eae1(sourceFileName, sourceLineNumber, sourceColumnNumber, fileName, lineNumber, columnNumber, compiled);
    let codeBlockProps = null;
    if (showCode) {
        if (compiled && scriptLines && scriptLines.length !== 0 && lineNumber != null) codeBlockProps = {
            codeHTML: $b67e2a05a9c13039$export$2e2bcd8739ae039(scriptLines),
            main: critical
        };
        else if (!compiled && sourceLines && sourceLines.length !== 0 && sourceLineNumber != null) codeBlockProps = {
            codeHTML: $b67e2a05a9c13039$export$2e2bcd8739ae039(sourceLines),
            main: critical
        };
    }
    const canOpenInEditor = getErrorLocation() !== null && props.editorHandler !== null;
    return $23b7c1cb98b19658$export$34b9dba7ce09269b("div", {
        children: [
            $23b7c1cb98b19658$export$34b9dba7ce09269b("div", {
                children: functionName
            }),
            $23b7c1cb98b19658$export$34b9dba7ce09269b("div", {
                style: $e0e0fa52b83f95a9$var$linkStyle,
                children: $23b7c1cb98b19658$export$34b9dba7ce09269b("span", {
                    role: "link",
                    style: canOpenInEditor ? $e0e0fa52b83f95a9$var$anchorStyle : null,
                    onClick: canOpenInEditor ? editorHandler : null,
                    onKeyDown: canOpenInEditor ? (e)=>{
                        if (e.key === 'Enter') editorHandler();
                    } : null,
                    tabIndex: canOpenInEditor ? '0' : null,
                    children: url
                })
            }),
            codeBlockProps && $23b7c1cb98b19658$export$34b9dba7ce09269b("div", {
                style: {
                    marginBottom: '1.5em'
                },
                children: [
                    $23b7c1cb98b19658$export$34b9dba7ce09269b("span", {
                        onClick: canOpenInEditor ? editorHandler : null,
                        style: canOpenInEditor ? $e0e0fa52b83f95a9$var$codeAnchorStyle : null,
                        children: $23b7c1cb98b19658$export$34b9dba7ce09269b($97c30df7f5c364f7$export$2e2bcd8739ae039, {
                            ...codeBlockProps
                        })
                    }),
                    scriptLines && sourceLines && $23b7c1cb98b19658$export$34b9dba7ce09269b("button", {
                        style: $e0e0fa52b83f95a9$var$toggleStyle,
                        onClick: ()=>{
                            setCompiled(!compiled);
                        },
                        children: 'View ' + (compiled ? 'source' : 'compiled')
                    })
                ]
            })
        ]
    });
}
var $e0e0fa52b83f95a9$export$2e2bcd8739ae039 = $e0e0fa52b83f95a9$var$StackFrame;
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ const $9a1abb59f5d10ec8$var$_collapsibleStyle = {
    cursor: 'pointer',
    border: 'none',
    display: 'block',
    width: '100%',
    textAlign: 'left',
    fontFamily: 'Consolas, Menlo, monospace',
    fontSize: '1em',
    padding: '0px',
    lineHeight: '1.5'
};
const $9a1abb59f5d10ec8$var$collapsibleCollapsedStyle = {
    ...$9a1abb59f5d10ec8$var$_collapsibleStyle,
    color: $74bb4be6e9b78681$export$bca14c5b3b88a9c9.color,
    background: $74bb4be6e9b78681$export$bca14c5b3b88a9c9.background,
    marginBottom: '1.5em'
};
const $9a1abb59f5d10ec8$var$collapsibleExpandedStyle = {
    ...$9a1abb59f5d10ec8$var$_collapsibleStyle,
    color: $74bb4be6e9b78681$export$bca14c5b3b88a9c9.color,
    background: $74bb4be6e9b78681$export$bca14c5b3b88a9c9.background,
    marginBottom: '0.6em'
};
function $9a1abb59f5d10ec8$var$Collapsible(props) {
    const [collapsed, setCollapsed] = $10ecac3e4062713a$export$60241385465d0a34(true);
    const toggleCollapsed = ()=>{
        setCollapsed(!collapsed);
    };
    const count = props.children.length;
    return $23b7c1cb98b19658$export$34b9dba7ce09269b("details", {
        open: !collapsed,
        onToggle: toggleCollapsed,
        children: [
            $23b7c1cb98b19658$export$34b9dba7ce09269b("summary", {
                style: collapsed ? $9a1abb59f5d10ec8$var$collapsibleCollapsedStyle : $9a1abb59f5d10ec8$var$collapsibleExpandedStyle,
                children: (collapsed ? "\u25B6" : "\u25BC") + ` ${count} stack frames were ` + (collapsed ? 'collapsed.' : 'expanded.')
            }),
            $23b7c1cb98b19658$export$34b9dba7ce09269b("div", {
                children: [
                    props.children,
                    $23b7c1cb98b19658$export$34b9dba7ce09269b("button", {
                        onClick: toggleCollapsed,
                        style: $9a1abb59f5d10ec8$var$collapsibleExpandedStyle,
                        children: `\u{25B2} ${count} stack frames were expanded.`
                    })
                ]
            })
        ]
    });
}
var $9a1abb59f5d10ec8$export$2e2bcd8739ae039 = $9a1abb59f5d10ec8$var$Collapsible;
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ function $e95d7084caaf4e6d$export$723fa77eef12dd9f(sourceFileName, fileName) {
    return sourceFileName == null || sourceFileName === '' || sourceFileName.indexOf('~/') !== -1 || sourceFileName.indexOf('node_modules/') !== -1 || sourceFileName.indexOf('error-overlay') !== -1 || sourceFileName.trim().indexOf(' ') !== -1 || fileName == null || fileName === '';
}
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ function $a5027556d7003a42$export$64794fcb05cf0bcf(errorName) {
    switch(errorName){
        case 'EvalError':
        case 'InternalError':
        case 'RangeError':
        case 'ReferenceError':
        case 'SyntaxError':
        case 'TypeError':
        case 'URIError':
            return true;
        default:
            return false;
    }
}
var $a5027556d7003a42$export$2e2bcd8739ae039 = $a5027556d7003a42$export$64794fcb05cf0bcf;
const $5ee7d2edb790dd06$var$traceStyle = {
    fontSize: '1em',
    flex: '0 1 auto',
    minHeight: '0px',
    overflow: 'auto'
};
function $5ee7d2edb790dd06$var$StackTrace(props) {
    const { stackFrames: stackFrames, errorName: errorName, contextSize: contextSize, editorHandler: editorHandler } = props;
    const renderedFrames = [];
    let hasReachedAppCode = false, currentBundle = [], bundleCount = 0;
    stackFrames.forEach((frame, index)=>{
        const { fileName: fileName, _originalFileName: sourceFileName } = frame;
        const isInternalUrl = $e95d7084caaf4e6d$export$723fa77eef12dd9f(sourceFileName, fileName);
        const isThrownIntentionally = !$a5027556d7003a42$export$64794fcb05cf0bcf(errorName);
        const shouldCollapse = isInternalUrl && (isThrownIntentionally || hasReachedAppCode);
        if (!isInternalUrl) hasReachedAppCode = true;
        const frameEle = $23b7c1cb98b19658$export$34b9dba7ce09269b($e0e0fa52b83f95a9$export$2e2bcd8739ae039, {
            frame: frame,
            contextSize: contextSize,
            critical: index === 0,
            showCode: !shouldCollapse,
            editorHandler: editorHandler
        }, 'frame-' + index);
        const lastElement = index === stackFrames.length - 1;
        if (shouldCollapse) currentBundle.push(frameEle);
        if (!shouldCollapse || lastElement) {
            if (currentBundle.length === 1) renderedFrames.push(currentBundle[0]);
            else if (currentBundle.length > 1) {
                bundleCount++;
                renderedFrames.push($23b7c1cb98b19658$export$34b9dba7ce09269b($9a1abb59f5d10ec8$export$2e2bcd8739ae039, {
                    children: currentBundle
                }, 'bundle-' + bundleCount));
            }
            currentBundle = [];
        }
        if (!shouldCollapse) renderedFrames.push(frameEle);
    });
    return $23b7c1cb98b19658$export$34b9dba7ce09269b("div", {
        style: $5ee7d2edb790dd06$var$traceStyle,
        children: renderedFrames
    });
}
var $5ee7d2edb790dd06$export$2e2bcd8739ae039 = $5ee7d2edb790dd06$var$StackTrace;
const $2eeadf2892cff4e4$var$diffStyle = {
    backgroundColor: $74bb4be6e9b78681$export$bca14c5b3b88a9c9.primaryPreBackground,
    color: $74bb4be6e9b78681$export$bca14c5b3b88a9c9.primaryPreColor,
    padding: '0.5em',
    overflowX: 'auto',
    whiteSpace: 'pre-wrap',
    borderRadius: '0.25rem'
};
function $2eeadf2892cff4e4$export$2e2bcd8739ae039({ diff: diff }) {
    let lines = diff.split('\n').flatMap((line, i)=>[
            $2eeadf2892cff4e4$var$formatLine(line, i),
            '\n'
        ]).slice(0, -1);
    return $23b7c1cb98b19658$export$34b9dba7ce09269b("pre", {
        style: $2eeadf2892cff4e4$var$diffStyle,
        children: lines
    });
}
function $2eeadf2892cff4e4$var$formatLine(line, index) {
    if (line.startsWith('+')) return $23b7c1cb98b19658$export$34b9dba7ce09269b("span", {
        style: {
            color: $74bb4be6e9b78681$export$bca14c5b3b88a9c9.diffAdded,
            fontWeight: 'bold'
        },
        children: line
    }, index);
    else if (line.startsWith('-') || line.startsWith('>')) return $23b7c1cb98b19658$export$34b9dba7ce09269b("span", {
        style: {
            color: $74bb4be6e9b78681$export$bca14c5b3b88a9c9.diffRemoved,
            fontWeight: 'bold'
        },
        children: line
    }, index);
    else return line;
}
const $4baa71cb4cecc0ea$var$wrapperStyle = {
    display: 'flex',
    flexDirection: 'column'
};
function $4baa71cb4cecc0ea$var$RuntimeError({ errorRecord: errorRecord, editorHandler: editorHandler }) {
    const { error: error, unhandledRejection: unhandledRejection, contextSize: contextSize, stackFrames: stackFrames } = errorRecord;
    const errorName = unhandledRejection ? 'Unhandled Rejection (' + error.name + ')' : error.name;
    // Make header prettier
    const message = error.message;
    let headerText = message.match(/^\w*:/) || !errorName ? message : errorName + ': ' + message;
    headerText = headerText // TODO: maybe remove this prefix from fbjs?
    // It's just scaring people
    .replace(/^Invariant Violation:\s*/, '') // This is not helpful either:
    .replace(/^Warning:\s*/, '') // Break the actionable part to the next line.
    // AFAIK React 16+ should already do this.
    .replace(' Check the render method', '\n\nCheck the render method').replace(' Check your code at', '\n\nCheck your code at');
    let link, diff;
    if (headerText.includes('https://react.dev/link/hydration-mismatch')) {
        [headerText, diff] = headerText.split('https://react.dev/link/hydration-mismatch');
        link = 'https://react.dev/link/hydration-mismatch';
    } else if (headerText.includes('This will cause a hydration error.')) {
        [headerText, diff] = headerText.split('This will cause a hydration error.');
        headerText += 'This will cause a hydration error.';
    }
    let lines = headerText.split('\n');
    return $23b7c1cb98b19658$export$34b9dba7ce09269b("div", {
        style: $4baa71cb4cecc0ea$var$wrapperStyle,
        children: [
            $23b7c1cb98b19658$export$34b9dba7ce09269b($c306e3a42547c8c2$export$2e2bcd8739ae039, {
                headerText: lines[0]
            }),
            $23b7c1cb98b19658$export$34b9dba7ce09269b("pre", {
                children: lines.slice(1).join('\n').trim()
            }),
            link && $23b7c1cb98b19658$export$34b9dba7ce09269b("div", {
                children: $23b7c1cb98b19658$export$34b9dba7ce09269b("a", {
                    href: link,
                    target: "_blank",
                    rel: "noreferrer",
                    children: link
                })
            }),
            diff && $23b7c1cb98b19658$export$34b9dba7ce09269b($2eeadf2892cff4e4$export$2e2bcd8739ae039, {
                diff: diff.trim()
            }),
            $23b7c1cb98b19658$export$34b9dba7ce09269b($5ee7d2edb790dd06$export$2e2bcd8739ae039, {
                stackFrames: stackFrames,
                errorName: errorName,
                contextSize: contextSize,
                editorHandler: editorHandler
            })
        ]
    });
}
var $4baa71cb4cecc0ea$export$2e2bcd8739ae039 = $4baa71cb4cecc0ea$var$RuntimeError;
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ const $7606db210182b733$var$footerStyle = {
    fontFamily: 'sans-serif',
    color: $74bb4be6e9b78681$export$bca14c5b3b88a9c9.footer,
    marginTop: '0.5rem',
    flex: '0 0 auto'
};
function $7606db210182b733$var$Footer(props) {
    return $23b7c1cb98b19658$export$34b9dba7ce09269b("div", {
        style: $7606db210182b733$var$footerStyle,
        children: [
            props.line1,
            $23b7c1cb98b19658$export$34b9dba7ce09269b("br", {}),
            props.line2
        ]
    });
}
var $7606db210182b733$export$2e2bcd8739ae039 = $7606db210182b733$var$Footer;
function $d0eac8b125ed15e2$var$RuntimeErrorContainer(props) {
    const { errorRecords: errorRecords, close: close } = props;
    const totalErrors = errorRecords.length;
    let [currentIndex, setCurrentIndex] = $10ecac3e4062713a$export$60241385465d0a34(0);
    let previous = ()=>{
        setCurrentIndex(currentIndex > 0 ? currentIndex - 1 : totalErrors - 1);
    };
    let next = ()=>{
        setCurrentIndex(currentIndex < totalErrors - 1 ? currentIndex + 1 : 0);
    };
    return $23b7c1cb98b19658$export$34b9dba7ce09269b($20d888b381d18c6c$export$2e2bcd8739ae039, {
        shortcutHandler: (key)=>{
            if (key === 'Escape') props.close();
            else if (key === 'ArrowLeft') previous();
            else if (key === 'ArrowRight') next();
        },
        children: [
            $23b7c1cb98b19658$export$34b9dba7ce09269b($7aae0c9ea64fc08c$export$2e2bcd8739ae039, {
                close: close
            }),
            totalErrors > 1 && $23b7c1cb98b19658$export$34b9dba7ce09269b($1adc179a826c5dd2$export$2e2bcd8739ae039, {
                currentError: currentIndex + 1,
                totalErrors: totalErrors,
                previous: previous,
                next: next
            }),
            $23b7c1cb98b19658$export$34b9dba7ce09269b($4baa71cb4cecc0ea$export$2e2bcd8739ae039, {
                errorRecord: errorRecords[currentIndex],
                editorHandler: props.editorHandler
            }),
            $23b7c1cb98b19658$export$34b9dba7ce09269b($7606db210182b733$export$2e2bcd8739ae039, {
                line1: "This screen is visible only in development. It will not appear if the app crashes in production.",
                line2: "Open your browser\u2019s developer console to further inspect this error.  Click the 'X' or hit ESC to dismiss this message."
            })
        ]
    });
}
var $d0eac8b125ed15e2$export$2e2bcd8739ae039 = $d0eac8b125ed15e2$var$RuntimeErrorContainer;
let $da9882e673ac146b$var$iframe = null;
let $da9882e673ac146b$var$editorHandler = null;
let $da9882e673ac146b$var$currentRuntimeErrorRecords = [];
let $da9882e673ac146b$var$stopListeningToRuntimeErrors = null;
function $da9882e673ac146b$export$25a22ac46f1bd016(handler) {
    $da9882e673ac146b$var$editorHandler = handler;
    if ($da9882e673ac146b$var$iframe) $da9882e673ac146b$var$update();
}
function $da9882e673ac146b$export$74e9101ce4078c0(error, options) {
    $6d40ebe8356580e0$export$9123e6c9c0ac21ed($da9882e673ac146b$var$handleRuntimeError(options))(error, false);
}
function $da9882e673ac146b$export$cda2c88a41631c16(options) {
    if ($da9882e673ac146b$var$stopListeningToRuntimeErrors !== null) throw new Error('Already listening');
    $da9882e673ac146b$var$stopListeningToRuntimeErrors = $6d40ebe8356580e0$export$38ec23daa6e8dcdf($da9882e673ac146b$var$handleRuntimeError(options));
}
const $da9882e673ac146b$var$handleRuntimeError = (options)=>(errorRecord)=>{
        try {
            if (typeof options.onError === 'function') options.onError.call(null);
        } finally{
            if ($da9882e673ac146b$var$currentRuntimeErrorRecords.some(({ error: error })=>error === errorRecord.error)) // This fixes https://github.com/facebook/create-react-app/issues/3011.
            // eslint-disable-next-line no-unsafe-finally
            return;
            $da9882e673ac146b$var$currentRuntimeErrorRecords = $da9882e673ac146b$var$currentRuntimeErrorRecords.concat([
                errorRecord
            ]);
            $da9882e673ac146b$var$update();
        }
    };
function $da9882e673ac146b$export$1cfa6d161ca81bd9() {
    $da9882e673ac146b$var$currentRuntimeErrorRecords = [];
    $da9882e673ac146b$var$update();
}
function $da9882e673ac146b$export$25ba7d9a816639e7() {
    if ($da9882e673ac146b$var$stopListeningToRuntimeErrors === null) throw new Error('Not currently listening');
    try {
        $da9882e673ac146b$var$stopListeningToRuntimeErrors();
    } finally{
        $da9882e673ac146b$var$stopListeningToRuntimeErrors = null;
    }
}
let $da9882e673ac146b$var$rootNode, $da9882e673ac146b$var$shadow;
function $da9882e673ac146b$var$update() {
    if (!$da9882e673ac146b$var$rootNode) {
        $da9882e673ac146b$var$rootNode = document.createElement('parcel-error-overlay');
        $da9882e673ac146b$var$shadow = $da9882e673ac146b$var$rootNode.attachShadow({
            mode: 'open'
        });
        if ($da9882e673ac146b$var$rootNode) document.body?.appendChild($da9882e673ac146b$var$rootNode);
    }
    if ($da9882e673ac146b$var$currentRuntimeErrorRecords.length > 0 && $da9882e673ac146b$var$shadow) $b6c7f0288a15c619$export$b3890eb0ae9dca99($23b7c1cb98b19658$export$34b9dba7ce09269b("dialog", {
        ref: (d)=>d?.showModal(),
        style: $74bb4be6e9b78681$export$7ef984671d1853d7,
        onClose: $da9882e673ac146b$export$1cfa6d161ca81bd9,
        children: $23b7c1cb98b19658$export$34b9dba7ce09269b($da9882e673ac146b$var$ErrorOverlay, {})
    }), $da9882e673ac146b$var$shadow);
    else {
        $da9882e673ac146b$var$rootNode?.remove();
        $da9882e673ac146b$var$rootNode = null;
    }
}
function $da9882e673ac146b$var$ErrorOverlay() {
    if ($da9882e673ac146b$var$currentRuntimeErrorRecords.length > 0) return $23b7c1cb98b19658$export$34b9dba7ce09269b($d0eac8b125ed15e2$export$2e2bcd8739ae039, {
        errorRecords: $da9882e673ac146b$var$currentRuntimeErrorRecords,
        close: $da9882e673ac146b$export$1cfa6d161ca81bd9,
        editorHandler: $da9882e673ac146b$var$editorHandler
    });
    return null;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"ihl5n":[function(require,module,exports,__globalThis) {
var $parcel$ReactRefreshHelpers$b126 = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
$parcel$ReactRefreshHelpers$b126.init();
var prevRefreshReg = globalThis.$RefreshReg$;
var prevRefreshSig = globalThis.$RefreshSig$;
$parcel$ReactRefreshHelpers$b126.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _jsxDevRuntime = require("react/jsx-dev-runtime");
var _dateHelpers = require("../utils/dateHelpers");
const CurrentWeather = ({ weatherData, city = 'London' })=>{
    if (!weatherData || !weatherData.current) return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
        className: "hero-body",
        children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
            className: "content u-text-center current-div",
            children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("h1", {
                className: "city text-light title",
                children: "Loading..."
            }, void 0, false, {
                fileName: "src/components/CurrentWeather.jsx",
                lineNumber: 8,
                columnNumber: 11
            }, undefined)
        }, void 0, false, {
            fileName: "src/components/CurrentWeather.jsx",
            lineNumber: 7,
            columnNumber: 9
        }, undefined)
    }, void 0, false, {
        fileName: "src/components/CurrentWeather.jsx",
        lineNumber: 6,
        columnNumber: 7
    }, undefined);
    const { current, daily } = weatherData;
    const currentDate = new Date();
    return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
        className: "hero-body",
        children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
            className: "content u-text-center current-div",
            children: [
                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("img", {
                    src: "#",
                    alt: "",
                    className: "main-icon"
                }, void 0, false, {
                    fileName: "src/components/CurrentWeather.jsx",
                    lineNumber: 20,
                    columnNumber: 9
                }, undefined),
                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("h1", {
                    className: "city text-light title",
                    children: city
                }, void 0, false, {
                    fileName: "src/components/CurrentWeather.jsx",
                    lineNumber: 21,
                    columnNumber: 9
                }, undefined),
                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("h3", {
                    className: "dateDisp font-light subtitle",
                    children: (0, _dateHelpers.formatDate)(currentDate)
                }, void 0, false, {
                    fileName: "src/components/CurrentWeather.jsx",
                    lineNumber: 22,
                    columnNumber: 9
                }, undefined),
                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("h3", {
                    className: "temp headline-4 title",
                    children: [
                        Math.round(current.temperature_2m),
                        "\xb0F"
                    ]
                }, void 0, true, {
                    fileName: "src/components/CurrentWeather.jsx",
                    lineNumber: 26,
                    columnNumber: 9
                }, undefined),
                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("h4", {
                    className: "feelsLike font-light text-light subtitle",
                    id: "feelsLike",
                    children: [
                        "Feels like ",
                        Math.round(current.temperature_2m),
                        "\xb0F."
                    ]
                }, void 0, true, {
                    fileName: "src/components/CurrentWeather.jsx",
                    lineNumber: 29,
                    columnNumber: 9
                }, undefined),
                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                    className: "content",
                    children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                        className: "row text-light",
                        children: [
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                className: "current col-4 font-bold u-text-Center",
                                children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("ul", {
                                    className: "no-bullets",
                                    id: "current-1",
                                    children: [
                                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("li", {
                                            className: "wind",
                                            children: "Wind: --mph"
                                        }, void 0, false, {
                                            fileName: "src/components/CurrentWeather.jsx",
                                            lineNumber: 37,
                                            columnNumber: 17
                                        }, undefined),
                                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("li", {
                                            className: "humidity font-alt",
                                            children: [
                                                "Humidity: ",
                                                Math.round(current.relative_humidity_2m),
                                                "%"
                                            ]
                                        }, void 0, true, {
                                            fileName: "src/components/CurrentWeather.jsx",
                                            lineNumber: 38,
                                            columnNumber: 17
                                        }, undefined)
                                    ]
                                }, void 0, true, {
                                    fileName: "src/components/CurrentWeather.jsx",
                                    lineNumber: 36,
                                    columnNumber: 15
                                }, undefined)
                            }, void 0, false, {
                                fileName: "src/components/CurrentWeather.jsx",
                                lineNumber: 35,
                                columnNumber: 13
                            }, undefined),
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                className: "current col-4 font-bold u-text-Center",
                                children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("ul", {
                                    className: "no-bullets",
                                    id: "current-2",
                                    children: daily && daily.temperature_2m_max && daily.temperature_2m_max[0] && /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _jsxDevRuntime.Fragment), {
                                        children: [
                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("li", {
                                                children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("h4", {
                                                    className: "high text-dark",
                                                    children: [
                                                        "High: ",
                                                        Math.round(daily.temperature_2m_max[0]),
                                                        "\xb0F"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "src/components/CurrentWeather.jsx",
                                                    lineNumber: 49,
                                                    columnNumber: 23
                                                }, undefined)
                                            }, void 0, false, {
                                                fileName: "src/components/CurrentWeather.jsx",
                                                lineNumber: 48,
                                                columnNumber: 21
                                            }, undefined),
                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("li", {
                                                children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("h4", {
                                                    className: "low text-dark",
                                                    children: [
                                                        "Low: ",
                                                        Math.round(daily.temperature_2m_min[0]),
                                                        "\xb0F"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "src/components/CurrentWeather.jsx",
                                                    lineNumber: 54,
                                                    columnNumber: 23
                                                }, undefined)
                                            }, void 0, false, {
                                                fileName: "src/components/CurrentWeather.jsx",
                                                lineNumber: 53,
                                                columnNumber: 21
                                            }, undefined)
                                        ]
                                    }, void 0, true)
                                }, void 0, false, {
                                    fileName: "src/components/CurrentWeather.jsx",
                                    lineNumber: 45,
                                    columnNumber: 15
                                }, undefined)
                            }, void 0, false, {
                                fileName: "src/components/CurrentWeather.jsx",
                                lineNumber: 44,
                                columnNumber: 13
                            }, undefined),
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                className: "current col-4 font-bold u-text-center",
                                children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("ul", {
                                    className: "no-bullets",
                                    id: "current-3",
                                    children: daily && daily.sunrise && daily.sunrise[0] && /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _jsxDevRuntime.Fragment), {
                                        children: [
                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("li", {
                                                className: "sunrise",
                                                children: [
                                                    "Sunrise: ",
                                                    (0, _dateHelpers.formatTime)(daily.sunrise[0])
                                                ]
                                            }, void 0, true, {
                                                fileName: "src/components/CurrentWeather.jsx",
                                                lineNumber: 67,
                                                columnNumber: 21
                                            }, undefined),
                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("li", {
                                                className: "sunset",
                                                children: [
                                                    "Sunset: ",
                                                    (0, _dateHelpers.formatTime)(daily.sunset[0])
                                                ]
                                            }, void 0, true, {
                                                fileName: "src/components/CurrentWeather.jsx",
                                                lineNumber: 70,
                                                columnNumber: 21
                                            }, undefined)
                                        ]
                                    }, void 0, true)
                                }, void 0, false, {
                                    fileName: "src/components/CurrentWeather.jsx",
                                    lineNumber: 64,
                                    columnNumber: 15
                                }, undefined)
                            }, void 0, false, {
                                fileName: "src/components/CurrentWeather.jsx",
                                lineNumber: 63,
                                columnNumber: 13
                            }, undefined)
                        ]
                    }, void 0, true, {
                        fileName: "src/components/CurrentWeather.jsx",
                        lineNumber: 34,
                        columnNumber: 11
                    }, undefined)
                }, void 0, false, {
                    fileName: "src/components/CurrentWeather.jsx",
                    lineNumber: 33,
                    columnNumber: 9
                }, undefined),
                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("a", {
                    href: "#forecast",
                    children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("button", {
                        className: "btn-small btn-dark",
                        children: "See Forecast"
                    }, void 0, false, {
                        fileName: "src/components/CurrentWeather.jsx",
                        lineNumber: 81,
                        columnNumber: 11
                    }, undefined)
                }, void 0, false, {
                    fileName: "src/components/CurrentWeather.jsx",
                    lineNumber: 80,
                    columnNumber: 9
                }, undefined)
            ]
        }, void 0, true, {
            fileName: "src/components/CurrentWeather.jsx",
            lineNumber: 19,
            columnNumber: 7
        }, undefined)
    }, void 0, false, {
        fileName: "src/components/CurrentWeather.jsx",
        lineNumber: 18,
        columnNumber: 5
    }, undefined);
};
exports.default = CurrentWeather;

  $parcel$ReactRefreshHelpers$b126.postlude(module);
} finally {
  globalThis.$RefreshReg$ = prevRefreshReg;
  globalThis.$RefreshSig$ = prevRefreshSig;
}
},{"react/jsx-dev-runtime":"kvPQf","../utils/dateHelpers":"kwsLK","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"7h6Pi"}],"kwsLK":[function(require,module,exports,__globalThis) {
// Utility functions for date/time formatting
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "timeStamp", ()=>timeStamp);
parcelHelpers.export(exports, "weekdayStamp", ()=>weekdayStamp);
parcelHelpers.export(exports, "hourStamp", ()=>hourStamp);
parcelHelpers.export(exports, "formatDate", ()=>formatDate);
parcelHelpers.export(exports, "formatTime", ()=>formatTime);
function timeStamp(unix) {
    const millisecs = unix * 1000;
    const dateObject = new Date(millisecs);
    const dateResult = dateObject.toLocaleString("en-US", {
        month: "long",
        day: "numeric"
    });
    return dateResult;
}
function weekdayStamp(unix) {
    const millisecs = unix * 1000;
    const dateObject = new Date(millisecs);
    const dateResult = dateObject.toLocaleString("en-US", {
        weekday: "short"
    });
    return dateResult;
}
function hourStamp(unix) {
    const millisecs = unix * 1000;
    const dateObject = new Date(millisecs);
    const dateResult = dateObject.toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "numeric"
    });
    return dateResult;
}
function formatDate(date) {
    return date.toLocaleString("en-US", {
        weekday: "long",
        month: "long",
        day: "numeric"
    });
}
function formatTime(date) {
    return date.toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "2-digit"
    });
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"21cOO":[function(require,module,exports,__globalThis) {
var $parcel$ReactRefreshHelpers$aee9 = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
$parcel$ReactRefreshHelpers$aee9.init();
var prevRefreshReg = globalThis.$RefreshReg$;
var prevRefreshSig = globalThis.$RefreshSig$;
$parcel$ReactRefreshHelpers$aee9.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _jsxDevRuntime = require("react/jsx-dev-runtime");
var _hooks = require("preact/hooks");
var _weatherCard = require("./WeatherCard");
var _weatherCardDefault = parcelHelpers.interopDefault(_weatherCard);
const ForecastSection = ({ weatherData })=>{
    const [activeTab, setActiveTab] = (0, _hooks.useState)('five-day');
    if (!weatherData || !weatherData.daily) return null;
    const { daily } = weatherData;
    const formatDate = (dateObj, includeWeekday = true)=>{
        const options = includeWeekday ? {
            weekday: 'long',
            month: 'long',
            day: 'numeric'
        } : {
            month: 'long',
            day: 'numeric'
        };
        return dateObj.toLocaleString('en-US', options);
    };
    const getWeatherIcon = ()=>{
        // Default icon - can be enhanced based on weather conditions
        return 'fas fa-cloud-rain';
    };
    // Generate 5-day forecast
    const fiveDayForecast = daily.time.slice(0, 5).map((date, index)=>({
            date: formatDate(date),
            icon: getWeatherIcon(),
            high: Math.round(daily.temperature_2m_max[index]),
            low: Math.round(daily.temperature_2m_min[index])
        }));
    // Generate 7-day forecast
    const sevenDayForecast = daily.time.slice(0, 7).map((date, index)=>({
            date: formatDate(date),
            icon: getWeatherIcon(),
            high: Math.round(daily.temperature_2m_max[index]),
            low: Math.round(daily.temperature_2m_min[index])
        }));
    // Generate hourly forecast (next 24 hours)
    const hourlyForecast = weatherData.hourly?.time.slice(0, 24).map((date, index)=>({
            date: date.toLocaleString('en-US', {
                weekday: 'short',
                hour: 'numeric',
                minute: '2-digit'
            }),
            icon: getWeatherIcon(),
            high: Math.round(weatherData.hourly.temperature_2m[index]),
            low: Math.round(weatherData.hourly.precipitation_probability[index]) + '%'
        })) || [];
    return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("section", {
        className: "section",
        id: "forecast",
        children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
            className: "hero u-flex-column bg-white my-8",
            children: [
                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                    className: "content tab-container tabs-large tabs-center my-5",
                    children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("ul", {
                        children: [
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("li", {
                                className: `tab ${activeTab === 'hourly' ? 'selected' : ''}`,
                                children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                    id: "hourly-tab",
                                    className: "tab-item-content",
                                    onClick: ()=>setActiveTab('hourly'),
                                    children: "Hourly"
                                }, void 0, false, {
                                    fileName: "src/components/ForecastSection.jsx",
                                    lineNumber: 56,
                                    columnNumber: 15
                                }, undefined)
                            }, void 0, false, {
                                fileName: "src/components/ForecastSection.jsx",
                                lineNumber: 55,
                                columnNumber: 13
                            }, undefined),
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("li", {
                                className: `tab ${activeTab === 'five-day' ? 'selected' : ''}`,
                                children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                    id: "five-day-tab",
                                    className: "tab-item-content",
                                    onClick: ()=>setActiveTab('five-day'),
                                    children: "5 Day"
                                }, void 0, false, {
                                    fileName: "src/components/ForecastSection.jsx",
                                    lineNumber: 65,
                                    columnNumber: 15
                                }, undefined)
                            }, void 0, false, {
                                fileName: "src/components/ForecastSection.jsx",
                                lineNumber: 64,
                                columnNumber: 13
                            }, undefined),
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("li", {
                                className: `tab ${activeTab === 'seven-day' ? 'selected' : ''}`,
                                children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                    id: "seven-day-tab",
                                    className: "tab-item-content",
                                    onClick: ()=>setActiveTab('seven-day'),
                                    children: "7 Day"
                                }, void 0, false, {
                                    fileName: "src/components/ForecastSection.jsx",
                                    lineNumber: 74,
                                    columnNumber: 15
                                }, undefined)
                            }, void 0, false, {
                                fileName: "src/components/ForecastSection.jsx",
                                lineNumber: 73,
                                columnNumber: 13
                            }, undefined)
                        ]
                    }, void 0, true, {
                        fileName: "src/components/ForecastSection.jsx",
                        lineNumber: 54,
                        columnNumber: 11
                    }, undefined)
                }, void 0, false, {
                    fileName: "src/components/ForecastSection.jsx",
                    lineNumber: 53,
                    columnNumber: 9
                }, undefined),
                activeTab === 'five-day' && /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                    className: "content five-day-div",
                    children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                        className: "content",
                        children: fiveDayForecast.map((day, index)=>/*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _weatherCardDefault.default), {
                                date: day.date,
                                icon: day.icon,
                                high: day.high,
                                low: day.low
                            }, index, false, {
                                fileName: "src/components/ForecastSection.jsx",
                                lineNumber: 90,
                                columnNumber: 17
                            }, undefined))
                    }, void 0, false, {
                        fileName: "src/components/ForecastSection.jsx",
                        lineNumber: 88,
                        columnNumber: 13
                    }, undefined)
                }, void 0, false, {
                    fileName: "src/components/ForecastSection.jsx",
                    lineNumber: 87,
                    columnNumber: 11
                }, undefined),
                activeTab === 'seven-day' && /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                    className: "content seven-day-div",
                    children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                        className: "content",
                        children: sevenDayForecast.map((day, index)=>/*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _weatherCardDefault.default), {
                                date: day.date,
                                icon: day.icon,
                                high: day.high,
                                low: day.low
                            }, index, false, {
                                fileName: "src/components/ForecastSection.jsx",
                                lineNumber: 107,
                                columnNumber: 17
                            }, undefined))
                    }, void 0, false, {
                        fileName: "src/components/ForecastSection.jsx",
                        lineNumber: 105,
                        columnNumber: 13
                    }, undefined)
                }, void 0, false, {
                    fileName: "src/components/ForecastSection.jsx",
                    lineNumber: 104,
                    columnNumber: 11
                }, undefined),
                activeTab === 'hourly' && /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                    className: "content hourly-div",
                    children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                        className: "content",
                        children: hourlyForecast.map((hour, index)=>/*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _weatherCardDefault.default), {
                                date: hour.date,
                                icon: hour.icon,
                                high: hour.high,
                                low: hour.low
                            }, index, false, {
                                fileName: "src/components/ForecastSection.jsx",
                                lineNumber: 124,
                                columnNumber: 17
                            }, undefined))
                    }, void 0, false, {
                        fileName: "src/components/ForecastSection.jsx",
                        lineNumber: 122,
                        columnNumber: 13
                    }, undefined)
                }, void 0, false, {
                    fileName: "src/components/ForecastSection.jsx",
                    lineNumber: 121,
                    columnNumber: 11
                }, undefined)
            ]
        }, void 0, true, {
            fileName: "src/components/ForecastSection.jsx",
            lineNumber: 51,
            columnNumber: 7
        }, undefined)
    }, void 0, false, {
        fileName: "src/components/ForecastSection.jsx",
        lineNumber: 50,
        columnNumber: 5
    }, undefined);
};
exports.default = ForecastSection;

  $parcel$ReactRefreshHelpers$aee9.postlude(module);
} finally {
  globalThis.$RefreshReg$ = prevRefreshReg;
  globalThis.$RefreshSig$ = prevRefreshSig;
}
},{"react/jsx-dev-runtime":"kvPQf","preact/hooks":"83L4j","./WeatherCard":"kmkH3","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"7h6Pi"}],"kmkH3":[function(require,module,exports,__globalThis) {
var $parcel$ReactRefreshHelpers$1d40 = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
$parcel$ReactRefreshHelpers$1d40.init();
var prevRefreshReg = globalThis.$RefreshReg$;
var prevRefreshSig = globalThis.$RefreshSig$;
$parcel$ReactRefreshHelpers$1d40.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _jsxDevRuntime = require("react/jsx-dev-runtime");
const WeatherCard = ({ date, icon, high, low })=>{
    return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
        className: "row u-text-center",
        children: [
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                className: "col-3",
                children: date
            }, void 0, false, {
                fileName: "src/components/WeatherCard.jsx",
                lineNumber: 4,
                columnNumber: 7
            }, undefined),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                className: "col-3",
                children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("i", {
                    className: icon
                }, void 0, false, {
                    fileName: "src/components/WeatherCard.jsx",
                    lineNumber: 6,
                    columnNumber: 9
                }, undefined)
            }, void 0, false, {
                fileName: "src/components/WeatherCard.jsx",
                lineNumber: 5,
                columnNumber: 7
            }, undefined),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                className: "col-3 text-orange-500 font-bold",
                children: [
                    "High: ",
                    high,
                    "\xb0F"
                ]
            }, void 0, true, {
                fileName: "src/components/WeatherCard.jsx",
                lineNumber: 8,
                columnNumber: 7
            }, undefined),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                className: "col-3",
                children: [
                    "Low: ",
                    low,
                    "\xb0F"
                ]
            }, void 0, true, {
                fileName: "src/components/WeatherCard.jsx",
                lineNumber: 9,
                columnNumber: 7
            }, undefined)
        ]
    }, void 0, true, {
        fileName: "src/components/WeatherCard.jsx",
        lineNumber: 3,
        columnNumber: 5
    }, undefined);
};
exports.default = WeatherCard;

  $parcel$ReactRefreshHelpers$1d40.postlude(module);
} finally {
  globalThis.$RefreshReg$ = prevRefreshReg;
  globalThis.$RefreshSig$ = prevRefreshSig;
}
},{"react/jsx-dev-runtime":"kvPQf","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"7h6Pi"}]},["7hoRO","2R06K"], "2R06K", "parcelRequire2b1a", {}, null, null, "http://localhost:55190")

//# sourceMappingURL=meteorcast.0f77c784.js.map
