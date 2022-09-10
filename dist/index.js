/*! For license information please see index.js.LICENSE.txt */
(()=>{var t={487:t=>{var e={utf8:{stringToBytes:function(t){return e.bin.stringToBytes(unescape(encodeURIComponent(t)))},bytesToString:function(t){return decodeURIComponent(escape(e.bin.bytesToString(t)))}},bin:{stringToBytes:function(t){for(var e=[],r=0;r<t.length;r++)e.push(255&t.charCodeAt(r));return e},bytesToString:function(t){for(var e=[],r=0;r<t.length;r++)e.push(String.fromCharCode(t[r]));return e.join("")}}};t.exports=e},12:t=>{var e,r;e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",r={rotl:function(t,e){return t<<e|t>>>32-e},rotr:function(t,e){return t<<32-e|t>>>e},endian:function(t){if(t.constructor==Number)return 16711935&r.rotl(t,8)|4278255360&r.rotl(t,24);for(var e=0;e<t.length;e++)t[e]=r.endian(t[e]);return t},randomBytes:function(t){for(var e=[];t>0;t--)e.push(Math.floor(256*Math.random()));return e},bytesToWords:function(t){for(var e=[],r=0,n=0;r<t.length;r++,n+=8)e[n>>>5]|=t[r]<<24-n%32;return e},wordsToBytes:function(t){for(var e=[],r=0;r<32*t.length;r+=8)e.push(t[r>>>5]>>>24-r%32&255);return e},bytesToHex:function(t){for(var e=[],r=0;r<t.length;r++)e.push((t[r]>>>4).toString(16)),e.push((15&t[r]).toString(16));return e.join("")},hexToBytes:function(t){for(var e=[],r=0;r<t.length;r+=2)e.push(parseInt(t.substr(r,2),16));return e},bytesToBase64:function(t){for(var r=[],n=0;n<t.length;n+=3)for(var o=t[n]<<16|t[n+1]<<8|t[n+2],a=0;a<4;a++)8*n+6*a<=8*t.length?r.push(e.charAt(o>>>6*(3-a)&63)):r.push("=");return r.join("")},base64ToBytes:function(t){t=t.replace(/[^A-Z0-9+\/]/gi,"");for(var r=[],n=0,o=0;n<t.length;o=++n%4)0!=o&&r.push((e.indexOf(t.charAt(n-1))&Math.pow(2,-2*o+8)-1)<<2*o|e.indexOf(t.charAt(n))>>>6-2*o);return r}},t.exports=r},738:t=>{function e(t){return!!t.constructor&&"function"==typeof t.constructor.isBuffer&&t.constructor.isBuffer(t)}t.exports=function(t){return null!=t&&(e(t)||function(t){return"function"==typeof t.readFloatLE&&"function"==typeof t.slice&&e(t.slice(0,0))}(t)||!!t._isBuffer)}},568:(t,e,r)=>{var n,o,a,s,i;n=r(12),o=r(487).utf8,a=r(738),s=r(487).bin,(i=function(t,e){t.constructor==String?t=e&&"binary"===e.encoding?s.stringToBytes(t):o.stringToBytes(t):a(t)?t=Array.prototype.slice.call(t,0):Array.isArray(t)||t.constructor===Uint8Array||(t=t.toString());for(var r=n.bytesToWords(t),u=8*t.length,c=1732584193,f=-271733879,h=-1732584194,l=271733878,p=0;p<r.length;p++)r[p]=16711935&(r[p]<<8|r[p]>>>24)|4278255360&(r[p]<<24|r[p]>>>8);r[u>>>5]|=128<<u%32,r[14+(u+64>>>9<<4)]=u;var g=i._ff,d=i._gg,y=i._hh,b=i._ii;for(p=0;p<r.length;p+=16){var v=c,w=f,T=h,m=l;c=g(c,f,h,l,r[p+0],7,-680876936),l=g(l,c,f,h,r[p+1],12,-389564586),h=g(h,l,c,f,r[p+2],17,606105819),f=g(f,h,l,c,r[p+3],22,-1044525330),c=g(c,f,h,l,r[p+4],7,-176418897),l=g(l,c,f,h,r[p+5],12,1200080426),h=g(h,l,c,f,r[p+6],17,-1473231341),f=g(f,h,l,c,r[p+7],22,-45705983),c=g(c,f,h,l,r[p+8],7,1770035416),l=g(l,c,f,h,r[p+9],12,-1958414417),h=g(h,l,c,f,r[p+10],17,-42063),f=g(f,h,l,c,r[p+11],22,-1990404162),c=g(c,f,h,l,r[p+12],7,1804603682),l=g(l,c,f,h,r[p+13],12,-40341101),h=g(h,l,c,f,r[p+14],17,-1502002290),c=d(c,f=g(f,h,l,c,r[p+15],22,1236535329),h,l,r[p+1],5,-165796510),l=d(l,c,f,h,r[p+6],9,-1069501632),h=d(h,l,c,f,r[p+11],14,643717713),f=d(f,h,l,c,r[p+0],20,-373897302),c=d(c,f,h,l,r[p+5],5,-701558691),l=d(l,c,f,h,r[p+10],9,38016083),h=d(h,l,c,f,r[p+15],14,-660478335),f=d(f,h,l,c,r[p+4],20,-405537848),c=d(c,f,h,l,r[p+9],5,568446438),l=d(l,c,f,h,r[p+14],9,-1019803690),h=d(h,l,c,f,r[p+3],14,-187363961),f=d(f,h,l,c,r[p+8],20,1163531501),c=d(c,f,h,l,r[p+13],5,-1444681467),l=d(l,c,f,h,r[p+2],9,-51403784),h=d(h,l,c,f,r[p+7],14,1735328473),c=y(c,f=d(f,h,l,c,r[p+12],20,-1926607734),h,l,r[p+5],4,-378558),l=y(l,c,f,h,r[p+8],11,-2022574463),h=y(h,l,c,f,r[p+11],16,1839030562),f=y(f,h,l,c,r[p+14],23,-35309556),c=y(c,f,h,l,r[p+1],4,-1530992060),l=y(l,c,f,h,r[p+4],11,1272893353),h=y(h,l,c,f,r[p+7],16,-155497632),f=y(f,h,l,c,r[p+10],23,-1094730640),c=y(c,f,h,l,r[p+13],4,681279174),l=y(l,c,f,h,r[p+0],11,-358537222),h=y(h,l,c,f,r[p+3],16,-722521979),f=y(f,h,l,c,r[p+6],23,76029189),c=y(c,f,h,l,r[p+9],4,-640364487),l=y(l,c,f,h,r[p+12],11,-421815835),h=y(h,l,c,f,r[p+15],16,530742520),c=b(c,f=y(f,h,l,c,r[p+2],23,-995338651),h,l,r[p+0],6,-198630844),l=b(l,c,f,h,r[p+7],10,1126891415),h=b(h,l,c,f,r[p+14],15,-1416354905),f=b(f,h,l,c,r[p+5],21,-57434055),c=b(c,f,h,l,r[p+12],6,1700485571),l=b(l,c,f,h,r[p+3],10,-1894986606),h=b(h,l,c,f,r[p+10],15,-1051523),f=b(f,h,l,c,r[p+1],21,-2054922799),c=b(c,f,h,l,r[p+8],6,1873313359),l=b(l,c,f,h,r[p+15],10,-30611744),h=b(h,l,c,f,r[p+6],15,-1560198380),f=b(f,h,l,c,r[p+13],21,1309151649),c=b(c,f,h,l,r[p+4],6,-145523070),l=b(l,c,f,h,r[p+11],10,-1120210379),h=b(h,l,c,f,r[p+2],15,718787259),f=b(f,h,l,c,r[p+9],21,-343485551),c=c+v>>>0,f=f+w>>>0,h=h+T>>>0,l=l+m>>>0}return n.endian([c,f,h,l])})._ff=function(t,e,r,n,o,a,s){var i=t+(e&r|~e&n)+(o>>>0)+s;return(i<<a|i>>>32-a)+e},i._gg=function(t,e,r,n,o,a,s){var i=t+(e&n|r&~n)+(o>>>0)+s;return(i<<a|i>>>32-a)+e},i._hh=function(t,e,r,n,o,a,s){var i=t+(e^r^n)+(o>>>0)+s;return(i<<a|i>>>32-a)+e},i._ii=function(t,e,r,n,o,a,s){var i=t+(r^(e|~n))+(o>>>0)+s;return(i<<a|i>>>32-a)+e},i._blocksize=16,i._digestsize=16,t.exports=function(t,e){if(null==t)throw new Error("Illegal argument "+t);var r=n.wordsToBytes(i(t,e));return e&&e.asBytes?r:e&&e.asString?s.bytesToString(r):n.bytesToHex(r)}}},e={};function r(n){var o=e[n];if(void 0!==o)return o.exports;var a=e[n]={exports:{}};return t[n](a,a.exports,r),a.exports}r.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return r.d(e,{a:e}),e},r.d=(t,e)=>{for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{"use strict";function t(t){var e,r;switch(t){case"GITHUB_TOKEN":try{e=Deno.env.get(t)}catch(t){e=GITHUB_TOKEN}break;case"GITHUB_MAIN_REPO":try{1==(e=(r=Deno.env.get(t)).split(", ")).length&&(e=r.split(","))}catch(t){1==(e=(r=GITHUB_MAIN_REPO).split(", ")).length&&(e=r.split(","))}break;case"GITHUB_SUB_REPO":try{1==(e=(r=Deno.env.get(t)).split(", ")).length&&(e=r.split(","))}catch(t){1==(e=(r=GITHUB_SUB_REPO).split(", ")).length&&(e=r.split(","))}break;case"GITHUB_CONFIG_NAME":try{e=Deno.env.get(t)}catch(t){e=GITHUB_CONFIG_NAME}break;default:e=Deno.env.get(t)}return e}async function e(t,e){var r=t.username,n=t.repo,o=t.token,a=t.filename,s=t.branch;if(!o||!a||!s)return console.error("[Error] Please Check the Config. (token/filename/branch)"),!1;if(!e)return console.error("[Error] Please Check the key."),!1;let i=encodeURI(`https://api.github.com/repos/${r}/${n}/commits?sha=${s}&dt=${Math.floor(1e8*Math.random())}`),u=await fetch(i,{headers:{Accept:"application/vnd.github.v3.raw",Authorization:`token ${o}`,"User-Agent":"ghKV Clinet"}}),c=await u.json();c=c[0].sha;let f=encodeURI(`https://raw.githubusercontent.com/${r}/${n}/${c}${a}?dt=${Math.floor(1e8*Math.random())}`);console.log(f);let h=await fetch(f,{headers:{Accept:"application/vnd.github.v3.raw",Authorization:`token ${o}`}}),l=await h.text();return console.log(l),l=JSON.parse(l),1==e?l:l[e]}const n="function"==typeof btoa,o="function"==typeof Buffer,a=("function"==typeof TextDecoder&&new TextDecoder,"function"==typeof TextEncoder?new TextEncoder:void 0),s=Array.prototype.slice.call("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="),i=((t=>{let e={};t.forEach(((t,r)=>e[t]=r))})(s),String.fromCharCode.bind(String)),u=("function"==typeof Uint8Array.from&&Uint8Array.from.bind(Uint8Array),t=>t.replace(/=/g,"").replace(/[+\/]/g,(t=>"+"==t?"-":"_"))),c=n?t=>btoa(t):o?t=>Buffer.from(t,"binary").toString("base64"):t=>{let e,r,n,o,a="";const i=t.length%3;for(let i=0;i<t.length;){if((r=t.charCodeAt(i++))>255||(n=t.charCodeAt(i++))>255||(o=t.charCodeAt(i++))>255)throw new TypeError("invalid character found");e=r<<16|n<<8|o,a+=s[e>>18&63]+s[e>>12&63]+s[e>>6&63]+s[63&e]}return i?a.slice(0,i-3)+"===".substring(i):a},f=o?t=>Buffer.from(t).toString("base64"):t=>{let e=[];for(let r=0,n=t.length;r<n;r+=4096)e.push(i.apply(null,t.subarray(r,r+4096)));return c(e.join(""))},h=t=>{if(t.length<2)return(e=t.charCodeAt(0))<128?t:e<2048?i(192|e>>>6)+i(128|63&e):i(224|e>>>12&15)+i(128|e>>>6&63)+i(128|63&e);var e=65536+1024*(t.charCodeAt(0)-55296)+(t.charCodeAt(1)-56320);return i(240|e>>>18&7)+i(128|e>>>12&63)+i(128|e>>>6&63)+i(128|63&e)},l=/[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g,p=o?t=>Buffer.from(t,"utf8").toString("base64"):a?t=>f(a.encode(t)):t=>c(t.replace(l,h)),g=(t,e=!1)=>e?u(p(t)):p(t);function d(t,e,r){return new Response(JSON.stringify({statusCode:t,statusInfo:e}),{headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"*"},status:r||200})}var y=r(568),b=r.n(y);addEventListener("fetch",(r=>{r.respondWith(async function(r){const n=r.url,o=new URL(n),a=(o.hostname,o.pathname),s=(Date.now(new Date),t("GITHUB_TOKEN")),i=t("GITHUB_MAIN_REPO")[0],u=t("GITHUB_MAIN_REPO")[1],c=t("GITHUB_SUB_REPO")[0],f=t("GITHUB_SUB_REPO")[1],h=t("GITHUB_CONFIG_NAME"),l={username:c.split("/")[0],repo:c.split("/")[1],token:s,filename:h,branch:f};if(a.startsWith("/api/reg")){if(y=await e(l,"user"))return d("403","已有注册账号，如需注册，请删除已有账号重试。");var p=await r.text();return p=JSON.parse(p),/^[a-z0-9_-]{3,15}$/.test(p.username)?await async function(t,r,n,o){var a=t.username,s=t.repo,i=t.token,u=t.filename,c=t.branch;let f=await fetch(`https://api.github.com/repos/${a}/${s}/contents/${u}?ref=${c}`,{method:"GET",headers:{"content-type":"application/json;charset=UTF-8","user-agent":"ghKV Client",Authorization:"token "+i}}),h=(await f.json()).sha;var l;(l=await e(t,!0)).user=n,l=JSON.stringify(l);let p={body:JSON.stringify({branch:c,message:"Upload Database by ghKV.",content:g(l),sha:h}),method:"PUT",headers:{accept:"application/vnd.github.v3+json","content-type":"application/json;charset=UTF-8","user-agent":"ghKV Client",Authorization:"token "+i}},d=await fetch(`https://api.github.com/repos/${a}/${s}/contents${u}?ref=${c}`,p);return 200==d.status||201==d.status}(l,0,[{username:p.username,password:p.password}])?d("200","注册成功。"):d("500","注册失败。"):d("403","用户名或密码不符合要求。")}var y;return a.startsWith("/api/login")?(p=await r.text(),p=JSON.parse(p),(y=await e(l,"user"))&&y[0].username==p.username&&y[0].password==p.password?d("200",b()(y[0].username+y[0].password+`${new Date(Date.now()).getFullYear()}${new Date(Date.now()).getMonth()+1}`)):d("403","用户名或密码错误。")):a.startsWith("/api/check_token")?(p=await r.text(),1==await async function(t,r){var n=await e(t,"user");return b()(n[0].username+n[0].password+`${new Date(Date.now()).getFullYear()}${new Date(Date.now()).getMonth()+1}`)==r}(l,p)?d("200","Token 有效。"):d("403","Token 无效。")):new Response(JSON.stringify({main:i,mainbranch:u,sub:c,subbranch:f,config:h}))}(r.request))}))})()})();