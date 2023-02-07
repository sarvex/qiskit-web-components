!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t(e.WHATWGFetch={})}(this,(function(e){"use strict";var t="undefined"!=typeof globalThis&&globalThis||"undefined"!=typeof self&&self||void 0!==t&&t,r={searchParams:"URLSearchParams"in t,iterable:"Symbol"in t&&"iterator"in Symbol,blob:"FileReader"in t&&"Blob"in t&&function(){try{return new Blob,!0}catch(e){return!1}}(),formData:"FormData"in t,arrayBuffer:"ArrayBuffer"in t};if(r.arrayBuffer)var o=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],n=ArrayBuffer.isView||function(e){return e&&o.indexOf(Object.prototype.toString.call(e))>-1};function i(e){if("string"!=typeof e&&(e=String(e)),/[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(e)||""===e)throw new TypeError('Invalid character in header field name: "'+e+'"');return e.toLowerCase()}function s(e){return"string"!=typeof e&&(e=String(e)),e}function a(e){var t={next:function(){var t=e.shift();return{done:void 0===t,value:t}}};return r.iterable&&(t[Symbol.iterator]=function(){return t}),t}function u(e){this.map={},e instanceof u?e.forEach((function(e,t){this.append(t,e)}),this):Array.isArray(e)?e.forEach((function(e){this.append(e[0],e[1])}),this):e&&Object.getOwnPropertyNames(e).forEach((function(t){this.append(t,e[t])}),this)}function f(e){if(e.bodyUsed)return Promise.reject(new TypeError("Already read"));e.bodyUsed=!0}function c(e){return new Promise((function(t,r){e.onload=function(){t(e.result)},e.onerror=function(){r(e.error)}}))}function l(e){var t=new FileReader,r=c(t);return t.readAsArrayBuffer(e),r}function h(e){if(e.slice)return e.slice(0);var t=new Uint8Array(e.byteLength);return t.set(new Uint8Array(e)),t.buffer}function p(){return this.bodyUsed=!1,this._initBody=function(e){var t;this.bodyUsed=this.bodyUsed,this._bodyInit=e,e?"string"==typeof e?this._bodyText=e:r.blob&&Blob.prototype.isPrototypeOf(e)?this._bodyBlob=e:r.formData&&FormData.prototype.isPrototypeOf(e)?this._bodyFormData=e:r.searchParams&&URLSearchParams.prototype.isPrototypeOf(e)?this._bodyText=e.toString():r.arrayBuffer&&r.blob&&((t=e)&&DataView.prototype.isPrototypeOf(t))?(this._bodyArrayBuffer=h(e.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer])):r.arrayBuffer&&(ArrayBuffer.prototype.isPrototypeOf(e)||n(e))?this._bodyArrayBuffer=h(e):this._bodyText=e=Object.prototype.toString.call(e):this._bodyText="",this.headers.get("content-type")||("string"==typeof e?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):r.searchParams&&URLSearchParams.prototype.isPrototypeOf(e)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},r.blob&&(this.blob=function(){var e=f(this);if(e)return e;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){if(this._bodyArrayBuffer){var e=f(this);return e||(ArrayBuffer.isView(this._bodyArrayBuffer)?Promise.resolve(this._bodyArrayBuffer.buffer.slice(this._bodyArrayBuffer.byteOffset,this._bodyArrayBuffer.byteOffset+this._bodyArrayBuffer.byteLength)):Promise.resolve(this._bodyArrayBuffer))}return this.blob().then(l)}),this.text=function(){var e,t,r,o=f(this);if(o)return o;if(this._bodyBlob)return e=this._bodyBlob,t=new FileReader,r=c(t),t.readAsText(e),r;if(this._bodyArrayBuffer)return Promise.resolve(function(e){for(var t=new Uint8Array(e),r=new Array(t.length),o=0;o<t.length;o++)r[o]=String.fromCharCode(t[o]);return r.join("")}(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},r.formData&&(this.formData=function(){return this.text().then(b)}),this.json=function(){return this.text().then(JSON.parse)},this}u.prototype.append=function(e,t){e=i(e),t=s(t);var r=this.map[e];this.map[e]=r?r+", "+t:t},u.prototype.delete=function(e){delete this.map[i(e)]},u.prototype.get=function(e){return e=i(e),this.has(e)?this.map[e]:null},u.prototype.has=function(e){return this.map.hasOwnProperty(i(e))},u.prototype.set=function(e,t){this.map[i(e)]=s(t)},u.prototype.forEach=function(e,t){for(var r in this.map)this.map.hasOwnProperty(r)&&e.call(t,this.map[r],r,this)},u.prototype.keys=function(){var e=[];return this.forEach((function(t,r){e.push(r)})),a(e)},u.prototype.values=function(){var e=[];return this.forEach((function(t){e.push(t)})),a(e)},u.prototype.entries=function(){var e=[];return this.forEach((function(t,r){e.push([r,t])})),a(e)},r.iterable&&(u.prototype[Symbol.iterator]=u.prototype.entries);var y=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];function d(e,t){if(!(this instanceof d))throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');var r,o,n=(t=t||{}).body;if(e instanceof d){if(e.bodyUsed)throw new TypeError("Already read");this.url=e.url,this.credentials=e.credentials,t.headers||(this.headers=new u(e.headers)),this.method=e.method,this.mode=e.mode,this.signal=e.signal,n||null==e._bodyInit||(n=e._bodyInit,e.bodyUsed=!0)}else this.url=String(e);if(this.credentials=t.credentials||this.credentials||"same-origin",!t.headers&&this.headers||(this.headers=new u(t.headers)),this.method=(r=t.method||this.method||"GET",o=r.toUpperCase(),y.indexOf(o)>-1?o:r),this.mode=t.mode||this.mode||null,this.signal=t.signal||this.signal,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&n)throw new TypeError("Body not allowed for GET or HEAD requests");if(this._initBody(n),!("GET"!==this.method&&"HEAD"!==this.method||"no-store"!==t.cache&&"no-cache"!==t.cache)){var i=/([?&])_=[^&]*/;if(i.test(this.url))this.url=this.url.replace(i,"$1_="+(new Date).getTime());else{this.url+=(/\?/.test(this.url)?"&":"?")+"_="+(new Date).getTime()}}}function b(e){var t=new FormData;return e.trim().split("&").forEach((function(e){if(e){var r=e.split("="),o=r.shift().replace(/\+/g," "),n=r.join("=").replace(/\+/g," ");t.append(decodeURIComponent(o),decodeURIComponent(n))}})),t}function v(e,t){if(!(this instanceof v))throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');t||(t={}),this.type="default",this.status=void 0===t.status?200:t.status,this.ok=this.status>=200&&this.status<300,this.statusText=void 0===t.statusText?"":""+t.statusText,this.headers=new u(t.headers),this.url=t.url||"",this._initBody(e)}d.prototype.clone=function(){return new d(this,{body:this._bodyInit})},p.call(d.prototype),p.call(v.prototype),v.prototype.clone=function(){return new v(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new u(this.headers),url:this.url})},v.error=function(){var e=new v(null,{status:0,statusText:""});return e.type="error",e};var m=[301,302,303,307,308];v.redirect=function(e,t){if(-1===m.indexOf(t))throw new RangeError("Invalid status code");return new v(null,{status:t,headers:{location:e}})},e.DOMException=t.DOMException;try{new e.DOMException}catch(t){e.DOMException=function(e,t){this.message=e,this.name=t;var r=Error(e);this.stack=r.stack},e.DOMException.prototype=Object.create(Error.prototype),e.DOMException.prototype.constructor=e.DOMException}function w(o,n){return new Promise((function(i,a){var f=new d(o,n);if(f.signal&&f.signal.aborted)return a(new e.DOMException("Aborted","AbortError"));var c=new XMLHttpRequest;function l(){c.abort()}c.onload=function(){var e,t,r={status:c.status,statusText:c.statusText,headers:(e=c.getAllResponseHeaders()||"",t=new u,e.replace(/\r?\n[\t ]+/g," ").split("\r").map((function(e){return 0===e.indexOf("\n")?e.substr(1,e.length):e})).forEach((function(e){var r=e.split(":"),o=r.shift().trim();if(o){var n=r.join(":").trim();t.append(o,n)}})),t)};r.url="responseURL"in c?c.responseURL:r.headers.get("X-Request-URL");var o="response"in c?c.response:c.responseText;setTimeout((function(){i(new v(o,r))}),0)},c.onerror=function(){setTimeout((function(){a(new TypeError("Network request failed"))}),0)},c.ontimeout=function(){setTimeout((function(){a(new TypeError("Network request failed"))}),0)},c.onabort=function(){setTimeout((function(){a(new e.DOMException("Aborted","AbortError"))}),0)},c.open(f.method,function(e){try{return""===e&&t.location.href?t.location.href:e}catch(t){return e}}(f.url),!0),"include"===f.credentials?c.withCredentials=!0:"omit"===f.credentials&&(c.withCredentials=!1),"responseType"in c&&(r.blob?c.responseType="blob":r.arrayBuffer&&f.headers.get("Content-Type")&&-1!==f.headers.get("Content-Type").indexOf("application/octet-stream")&&(c.responseType="arraybuffer")),!n||"object"!=typeof n.headers||n.headers instanceof u?f.headers.forEach((function(e,t){c.setRequestHeader(t,e)})):Object.getOwnPropertyNames(n.headers).forEach((function(e){c.setRequestHeader(e,s(n.headers[e]))})),f.signal&&(f.signal.addEventListener("abort",l),c.onreadystatechange=function(){4===c.readyState&&f.signal.removeEventListener("abort",l)}),c.send(void 0===f._bodyInit?null:f._bodyInit)}))}w.polyfill=!0,t.fetch||(t.fetch=w,t.Headers=u,t.Request=d,t.Response=v),e.Headers=u,e.Request=d,e.Response=v,e.fetch=w,Object.defineProperty(e,"__esModule",{value:!0})})),function(e){"function"==typeof define&&define.amd?define(e):e()}((function(){"use strict";function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function r(e,r,o){return r&&t(e.prototype,r),o&&t(e,o),Object.defineProperty(e,"prototype",{writable:!1}),e}function o(e){return o=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},o(e)}function n(e,t){return n=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},n(e,t)}function i(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function s(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=o(e);if(t){var s=o(this).constructor;r=Reflect.construct(n,arguments,s)}else r=n.apply(this,arguments);return function(e,t){if(t&&("object"==typeof t||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return i(e)}(this,r)}}function a(){return a="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,r){var n=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=o(e)););return e}(e,t);if(n){var i=Object.getOwnPropertyDescriptor(n,t);return i.get?i.get.call(arguments.length<3?e:r):i.value}},a.apply(this,arguments)}var u=function(){function t(){e(this,t),Object.defineProperty(this,"listeners",{value:{},writable:!0,configurable:!0})}return r(t,[{key:"addEventListener",value:function(e,t,r){e in this.listeners||(this.listeners[e]=[]),this.listeners[e].push({callback:t,options:r})}},{key:"removeEventListener",value:function(e,t){if(e in this.listeners)for(var r=this.listeners[e],o=0,n=r.length;o<n;o++)if(r[o].callback===t)return void r.splice(o,1)}},{key:"dispatchEvent",value:function(e){if(e.type in this.listeners){for(var t=this.listeners[e.type].slice(),r=0,o=t.length;r<o;r++){var n=t[r];try{n.callback.call(this,e)}catch(e){Promise.resolve().then((function(){throw e}))}n.options&&n.options.once&&this.removeEventListener(e.type,n.callback)}return!e.defaultPrevented}}}]),t}(),f=function(t){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&n(e,t)}(c,t);var f=s(c);function c(){var t;return e(this,c),(t=f.call(this)).listeners||u.call(i(t)),Object.defineProperty(i(t),"aborted",{value:!1,writable:!0,configurable:!0}),Object.defineProperty(i(t),"onabort",{value:null,writable:!0,configurable:!0}),Object.defineProperty(i(t),"reason",{value:void 0,writable:!0,configurable:!0}),t}return r(c,[{key:"toString",value:function(){return"[object AbortSignal]"}},{key:"dispatchEvent",value:function(e){"abort"===e.type&&(this.aborted=!0,"function"==typeof this.onabort&&this.onabort.call(this,e)),a(o(c.prototype),"dispatchEvent",this).call(this,e)}}]),c}(u),c=function(){function t(){e(this,t),Object.defineProperty(this,"signal",{value:new f,writable:!0,configurable:!0})}return r(t,[{key:"abort",value:function(e){var t;try{t=new Event("abort")}catch(e){"undefined"!=typeof document?document.createEvent?(t=document.createEvent("Event")).initEvent("abort",!1,!1):(t=document.createEventObject()).type="abort":t={type:"abort",bubbles:!1,cancelable:!1}}var r=e;if(void 0===r)if("undefined"==typeof document)(r=new Error("This operation was aborted")).name="AbortError";else try{r=new DOMException("signal is aborted without reason")}catch(e){(r=new Error("This operation was aborted")).name="AbortError"}this.signal.reason=r,this.signal.dispatchEvent(t)}},{key:"toString",value:function(){return"[object AbortController]"}}]),t}();function l(e){return e.__FORCE_INSTALL_ABORTCONTROLLER_POLYFILL?(console.log("__FORCE_INSTALL_ABORTCONTROLLER_POLYFILL=true is set, will force install polyfill"),!0):"function"==typeof e.Request&&!e.Request.prototype.hasOwnProperty("signal")||!e.AbortController}"undefined"!=typeof Symbol&&Symbol.toStringTag&&(c.prototype[Symbol.toStringTag]="AbortController",f.prototype[Symbol.toStringTag]="AbortSignal"),function(e){if(l(e))if(e.fetch){var t=function(e){"function"==typeof e&&(e={fetch:e});var t=e,r=t.fetch,o=t.Request,n=void 0===o?r.Request:o,i=t.AbortController,s=t.__FORCE_INSTALL_ABORTCONTROLLER_POLYFILL,a=void 0!==s&&s;if(!l({fetch:r,Request:n,AbortController:i,__FORCE_INSTALL_ABORTCONTROLLER_POLYFILL:a}))return{fetch:r,Request:u};var u=n;(u&&!u.prototype.hasOwnProperty("signal")||a)&&((u=function(e,t){var r;t&&t.signal&&(r=t.signal,delete t.signal);var o=new n(e,t);return r&&Object.defineProperty(o,"signal",{writable:!1,enumerable:!1,configurable:!0,value:r}),o}).prototype=n.prototype);var f=r;return{fetch:function(e,t){var r=u&&u.prototype.isPrototypeOf(e)?e.signal:t?t.signal:void 0;if(r){var o;try{o=new DOMException("Aborted","AbortError")}catch(e){(o=new Error("Aborted")).name="AbortError"}if(r.aborted)return Promise.reject(o);var n=new Promise((function(e,t){r.addEventListener("abort",(function(){return t(o)}),{once:!0})}));return t&&t.signal&&delete t.signal,Promise.race([n,f(e,t)])}return f(e,t)},Request:u}}(e),r=t.fetch,o=t.Request;e.fetch=r,e.Request=o,Object.defineProperty(e,"AbortController",{writable:!0,enumerable:!1,configurable:!0,value:c}),Object.defineProperty(e,"AbortSignal",{writable:!0,enumerable:!1,configurable:!0,value:f})}else console.warn("fetch() is not available, cannot install abortcontroller-polyfill")}("undefined"!=typeof self?self:global)}));