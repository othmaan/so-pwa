this.workbox=this.workbox||{},this.workbox.streams=function(){"use strict";try{self.workbox.v["workbox:streams:3.2.0"]=1}catch(e){}function e(e){const n=e.map(e=>Promise.resolve(e).then(e=>(e=e).body&&e.body.getReader?e.body.getReader():e.getReader?e.getReader():new Response(e).body.getReader()));var t;let r,s;let o=0;return{done:new Promise((e,n)=>{r=e,s=n}),stream:new ReadableStream({pull(e){return n[o].then(e=>e.read()).then(t=>{if(t.done)return++o>=n.length?(e.close(),void r()):this.pull(e);e.enqueue(t.value)}).catch(e=>{throw s(e),e})},cancel(){r()}})}}function n(e={}){const n=new Headers(e);return n.has("content-type")||n.set("content-type","text/html"),n}function t(t,r){const{done:s,stream:o}=e(t),c=n(r);return{done:s,response:new Response(o,{headers:c})}}function r(){try{return new ReadableStream({start(){}}),!0}catch(e){return!1}}var s=Object.freeze({concatenate:e,concatenateToResponse:t,isSupported:r});var o={concatenate:e,concatenateToResponse:t,isSupported:r,strategy:function(e,s){return o=babelHelpers.asyncToGenerator(function*({event:o,url:c,params:a}){if(r()){const{done:n,response:r}=t(e.map(function(e){return e({event:o,url:c,params:a})}),s);return o.waitUntil(n),r}const u=yield Promise.all(e.map(function(e){return e({event:o,url:c,params:a})}).map((i=babelHelpers.asyncToGenerator(function*(e){const n=yield e;return n instanceof Response?n.blob():n}),function(e){return i.apply(this,arguments)})));var i;const p=n(s);return new Response(new Blob(u),{headers:p})}),function(e){return o.apply(this,arguments)};var o}};return Object.assign(o,s)}();

//# sourceMappingURL=workbox-streams.prod.js.map
