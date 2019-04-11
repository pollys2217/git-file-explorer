!function(e){function r(r){for(var t,o,i=r[0],d=r[1],a=r[2],c=r[3]||[],l=0,s=[];l<i.length;l++)o=i[l],I[o]&&s.push(I[o][0]),I[o]=0;for(t in d)Object.prototype.hasOwnProperty.call(d,t)&&(e[t]=d[t]);for(F&&F(r),c.forEach(function(e){if(void 0===I[e]){I[e]=null;var r=document.createElement("link");r.crossOrigin="anonymous",A.nc&&r.setAttribute("nonce",A.nc),r.rel="prefetch",r.as="script",r.href=S(e),document.head.appendChild(r)}});s.length;)s.shift()();return H.push.apply(H,a||[]),n()}function n(){for(var e,r=0;r<H.length;r++){for(var n=H[r],t=!0,o=1;o<n.length;o++){var i=n[o];0!==I[i]&&(t=!1)}t&&(H.splice(r--,1),e=A(A.s=n[0]))}return e}var t=window.webpackHotUpdate;window.webpackHotUpdate=function(e,r){!function(e,r){if(!E[e]||!w[e])return;for(var n in w[e]=!1,r)Object.prototype.hasOwnProperty.call(r,n)&&(v[n]=r[n]);0===--y&&0===g&&P()}(e,r),t&&t(e,r)};var o,i=!0,d="cc4e0b54f707ead4d099",a=1e4,c={},l=[],s=[];function u(e){var r={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],_main:o!==e,active:!0,accept:function(e,n){if(void 0===e)r._selfAccepted=!0;else if("function"===typeof e)r._selfAccepted=e;else if("object"===typeof e)for(var t=0;t<e.length;t++)r._acceptedDependencies[e[t]]=n||function(){};else r._acceptedDependencies[e]=n||function(){}},decline:function(e){if(void 0===e)r._selfDeclined=!0;else if("object"===typeof e)for(var n=0;n<e.length;n++)r._declinedDependencies[e[n]]=!0;else r._declinedDependencies[e]=!0},dispose:function(e){r._disposeHandlers.push(e)},addDisposeHandler:function(e){r._disposeHandlers.push(e)},removeDisposeHandler:function(e){var n=r._disposeHandlers.indexOf(e);n>=0&&r._disposeHandlers.splice(n,1)},check:O,apply:D,status:function(e){if(!e)return f;p.push(e)},addStatusHandler:function(e){p.push(e)},removeStatusHandler:function(e){var r=p.indexOf(e);r>=0&&p.splice(r,1)},data:c[e]};return o=void 0,r}var p=[],f="idle";function m(e){f=e;for(var r=0;r<p.length;r++)p[r].call(null,e)}var h,v,b,y=0,g=0,x={},w={},E={};function j(e){return+e+""===e?+e:e}function O(e){if("idle"!==f)throw new Error("check() is only allowed in idle status");return i=e,m("check"),(r=a,r=r||1e4,new Promise(function(e,n){if("undefined"===typeof XMLHttpRequest)return n(new Error("No browser support"));try{var t=new XMLHttpRequest,o=A.p+""+d+".hot-update.json";t.open("GET",o,!0),t.timeout=r,t.send(null)}catch(i){return n(i)}t.onreadystatechange=function(){if(4===t.readyState)if(0===t.status)n(new Error("Manifest request to "+o+" timed out."));else if(404===t.status)e();else if(200!==t.status&&304!==t.status)n(new Error("Manifest request to "+o+" failed."));else{try{var r=JSON.parse(t.responseText)}catch(i){return void n(i)}e(r)}}})).then(function(e){if(!e)return m("idle"),null;w={},x={},E=e.c,b=e.h,m("prepare");var r=new Promise(function(e,r){h={resolve:e,reject:r}});for(var n in v={},I)_(n);return"prepare"===f&&0===g&&0===y&&P(),r});var r}function _(e){E[e]?(w[e]=!0,y++,function(e){var r=document.createElement("script");r.charset="utf-8",r.src=A.p+""+e+"."+d+".hot-update.js",r.crossOrigin="anonymous",document.head.appendChild(r)}(e)):x[e]=!0}function P(){m("ready");var e=h;if(h=null,e)if(i)Promise.resolve().then(function(){return D(i)}).then(function(r){e.resolve(r)},function(r){e.reject(r)});else{var r=[];for(var n in v)Object.prototype.hasOwnProperty.call(v,n)&&r.push(j(n));e.resolve(r)}}function D(r){if("ready"!==f)throw new Error("apply() is only allowed in ready status");var n,t,o,i,a;function s(e){for(var r=[e],n={},t=r.slice().map(function(e){return{chain:[e],id:e}});t.length>0;){var o=t.pop(),d=o.id,a=o.chain;if((i=k[d])&&!i.hot._selfAccepted){if(i.hot._selfDeclined)return{type:"self-declined",chain:a,moduleId:d};if(i.hot._main)return{type:"unaccepted",chain:a,moduleId:d};for(var c=0;c<i.parents.length;c++){var l=i.parents[c],s=k[l];if(s){if(s.hot._declinedDependencies[d])return{type:"declined",chain:a.concat([l]),moduleId:d,parentId:l};-1===r.indexOf(l)&&(s.hot._acceptedDependencies[d]?(n[l]||(n[l]=[]),u(n[l],[d])):(delete n[l],r.push(l),t.push({chain:a.concat([l]),id:l})))}}}}return{type:"accepted",moduleId:e,outdatedModules:r,outdatedDependencies:n}}function u(e,r){for(var n=0;n<r.length;n++){var t=r[n];-1===e.indexOf(t)&&e.push(t)}}r=r||{};var p={},h=[],y={},g=function(){console.warn("[HMR] unexpected require("+w.moduleId+") to disposed module")};for(var x in v)if(Object.prototype.hasOwnProperty.call(v,x)){var w;a=j(x);var O=!1,_=!1,P=!1,D="";switch((w=v[x]?s(a):{type:"disposed",moduleId:x}).chain&&(D="\nUpdate propagation: "+w.chain.join(" -> ")),w.type){case"self-declined":r.onDeclined&&r.onDeclined(w),r.ignoreDeclined||(O=new Error("Aborted because of self decline: "+w.moduleId+D));break;case"declined":r.onDeclined&&r.onDeclined(w),r.ignoreDeclined||(O=new Error("Aborted because of declined dependency: "+w.moduleId+" in "+w.parentId+D));break;case"unaccepted":r.onUnaccepted&&r.onUnaccepted(w),r.ignoreUnaccepted||(O=new Error("Aborted because "+a+" is not accepted"+D));break;case"accepted":r.onAccepted&&r.onAccepted(w),_=!0;break;case"disposed":r.onDisposed&&r.onDisposed(w),P=!0;break;default:throw new Error("Unexception type "+w.type)}if(O)return m("abort"),Promise.reject(O);if(_)for(a in y[a]=v[a],u(h,w.outdatedModules),w.outdatedDependencies)Object.prototype.hasOwnProperty.call(w.outdatedDependencies,a)&&(p[a]||(p[a]=[]),u(p[a],w.outdatedDependencies[a]));P&&(u(h,[w.moduleId]),y[a]=g)}var H,S=[];for(t=0;t<h.length;t++)a=h[t],k[a]&&k[a].hot._selfAccepted&&S.push({module:a,errorHandler:k[a].hot._selfAccepted});m("dispose"),Object.keys(E).forEach(function(e){!1===E[e]&&function(e){delete I[e]}(e)});for(var q,M,C=h.slice();C.length>0;)if(a=C.pop(),i=k[a]){var F={},L=i.hot._disposeHandlers;for(o=0;o<L.length;o++)(n=L[o])(F);for(c[a]=F,i.hot.active=!1,delete k[a],delete p[a],o=0;o<i.children.length;o++){var N=k[i.children[o]];N&&((H=N.parents.indexOf(a))>=0&&N.parents.splice(H,1))}}for(a in p)if(Object.prototype.hasOwnProperty.call(p,a)&&(i=k[a]))for(M=p[a],o=0;o<M.length;o++)q=M[o],(H=i.children.indexOf(q))>=0&&i.children.splice(H,1);for(a in m("apply"),d=b,y)Object.prototype.hasOwnProperty.call(y,a)&&(e[a]=y[a]);var R=null;for(a in p)if(Object.prototype.hasOwnProperty.call(p,a)&&(i=k[a])){M=p[a];var z=[];for(t=0;t<M.length;t++)if(q=M[t],n=i.hot._acceptedDependencies[q]){if(-1!==z.indexOf(n))continue;z.push(n)}for(t=0;t<z.length;t++){n=z[t];try{n(M)}catch(U){r.onErrored&&r.onErrored({type:"accept-errored",moduleId:a,dependencyId:M[t],error:U}),r.ignoreErrored||R||(R=U)}}}for(t=0;t<S.length;t++){var T=S[t];a=T.module,l=[a];try{A(a)}catch(U){if("function"===typeof T.errorHandler)try{T.errorHandler(U)}catch(W){r.onErrored&&r.onErrored({type:"self-accept-error-handler-errored",moduleId:a,error:W,originalError:U}),r.ignoreErrored||R||(R=W),R||(R=U)}else r.onErrored&&r.onErrored({type:"self-accept-errored",moduleId:a,error:U}),r.ignoreErrored||R||(R=U)}}return R?(m("fail"),Promise.reject(R)):(m("idle"),new Promise(function(e){e(h)}))}var k={},I={1:0},H=[];function S(e){return A.p+"static/js/"+({2:"license",3:"src-components-file-readme",4:"src-components-folder-readme",5:"src-readme"}[e]||e)+"."+{2:"149b466c",3:"da2a5d93",4:"b6f83120",5:"917a6880"}[e]+".js"}function A(r){if(k[r])return k[r].exports;var n=k[r]={i:r,l:!1,exports:{},hot:u(r),parents:(s=l,l=[],s),children:[]};return e[r].call(n.exports,n,n.exports,function(e){var r=k[e];if(!r)return A;var n=function(n){return r.hot.active?(k[n]?-1===k[n].parents.indexOf(e)&&k[n].parents.push(e):(l=[e],o=n),-1===r.children.indexOf(n)&&r.children.push(n)):(console.warn("[HMR] unexpected require("+n+") from disposed module "+e),l=[]),A(n)},t=function(e){return{configurable:!0,enumerable:!0,get:function(){return A[e]},set:function(r){A[e]=r}}};for(var i in A)Object.prototype.hasOwnProperty.call(A,i)&&"e"!==i&&"t"!==i&&Object.defineProperty(n,i,t(i));return n.e=function(e){return"ready"===f&&m("prepare"),g++,A.e(e).then(r,function(e){throw r(),e});function r(){g--,"prepare"===f&&(x[e]||_(e),0===g&&0===y&&P())}},n.t=function(e,r){return 1&r&&(e=n(e)),A.t(e,-2&r)},n}(r)),n.l=!0,n.exports}A.e=function(e){var r=[],n=I[e];if(0!==n)if(n)r.push(n[2]);else{var t=new Promise(function(r,t){n=I[e]=[r,t]});r.push(n[2]=t);var o,i=document.createElement("script");i.charset="utf-8",i.timeout=120,A.nc&&i.setAttribute("nonce",A.nc),i.src=S(e),0!==i.src.indexOf(window.location.origin+"/")&&(i.crossOrigin="anonymous"),o=function(r){i.onerror=i.onload=null,clearTimeout(d);var n=I[e];if(0!==n){if(n){var t=r&&("load"===r.type?"missing":r.type),o=r&&r.target&&r.target.src,a=new Error("Loading chunk "+e+" failed.\n("+t+": "+o+")");a.type=t,a.request=o,n[1](a)}I[e]=void 0}};var d=setTimeout(function(){o({type:"timeout",target:i})},12e4);i.onerror=i.onload=o,document.head.appendChild(i)}return Promise.all(r)},A.m=e,A.c=k,A.d=function(e,r,n){A.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:n})},A.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},A.t=function(e,r){if(1&r&&(e=A(e)),8&r)return e;if(4&r&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(A.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var t in e)A.d(n,t,function(r){return e[r]}.bind(null,t));return n},A.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return A.d(r,"a",r),r},A.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},A.p="/",A.oe=function(e){throw console.error(e),e},A.h=function(){return d};var q=window.webpackJsonp=window.webpackJsonp||[],M=q.push.bind(q);q.push=r,q=q.slice();for(var C=0;C<q.length;C++)r(q[C]);var F=M;r([[],{},0,[0,2,3,4,5]]),H.push([0,0]),n()}({"./.docz/app/db.json":function(e){e.exports={config:{title:"Git File Explorer",description:"A Gitea File Explorer React Component Library",menu:[],version:"0.1.0",repository:"https://github.com/unfoldingWord-box3/git-file-explorer",native:!1,codeSandbox:!0,themeConfig:{},separator:"-",ignore:["README.md"]},entries:[{key:"LICENSE.md",value:{id:"37854d19817c792316d481f5beb93cc7",filepath:"LICENSE.md",link:"https://github.com/unfoldingWord-box3/git-file-explorer/edit/master/LICENSE.md",slug:"license",route:"/license",name:"License",menu:"",headings:[{slug:"released-under-mit-license",depth:1,value:"Released under MIT License"}]}},{key:"src/readme.mdx",value:{name:"README",route:"/",id:"940644b83b527700902b3cca10c4088b",filepath:"src/readme.mdx",link:"https://github.com/unfoldingWord-box3/git-file-explorer/edit/master/src/readme.mdx",slug:"src-readme",menu:"",headings:[]}},{key:"src/components/file/readme.mdx",value:{name:"File",route:"/file",id:"2921d6b4db5364f797881902e39f3a2f",filepath:"src/components/file/readme.mdx",link:"https://github.com/unfoldingWord-box3/git-file-explorer/edit/master/src/components/file/readme.mdx",slug:"src-components-file-readme",menu:"",headings:[{slug:"file-component",depth:1,value:"File Component"},{slug:"example",depth:2,value:"Example"},{slug:"properties",depth:2,value:"Properties"},{slug:"sample-data",depth:2,value:"Sample Data"}]}},{key:"src/components/folder/readme.mdx",value:{name:"Folder",route:"/folder",id:"2380573f9fb7bbdf466418416d183d4c",filepath:"src/components/folder/readme.mdx",link:"https://github.com/unfoldingWord-box3/git-file-explorer/edit/master/src/components/folder/readme.mdx",slug:"src-components-folder-readme",menu:"",headings:[{slug:"folder-component",depth:1,value:"Folder Component"},{slug:"examples",depth:2,value:"Examples"},{slug:"properties",depth:2,value:"Properties"},{slug:"sample-data",depth:2,value:"Sample Data"}]}}],props:[{key:"src/components/file/File.js",value:[{description:"",displayName:"File",methods:[],actualName:"File",props:{classes:{type:{name:"object"},required:!0,description:""},path:{type:{name:"string"},required:!0,description:""},type:{type:{name:"enum",value:[{value:"'tree'",computed:!1},{value:"'blob'",computed:!1}]},required:!1,description:"",defaultValue:{value:"'blob'",computed:!1}},depth:{type:{name:"number"},required:!1,description:"",defaultValue:{value:"1",computed:!1}}}}]},{key:"src/components/folder/Folder.js",value:[{description:"",displayName:"Folder",methods:[],actualName:"Folder",props:{classes:{type:{name:"object"},required:!0,description:""},paths:{type:{name:"array"},required:!0,description:"An array of paths from the Gitea file tree api."},depth:{type:{name:"number"},required:!0,description:"The depth of the path in the tree sets the inset of the component."}}}]}]}},"./.docz/app/index.jsx":function(e,r,n){"use strict";n.r(r);var t=n("./node_modules/react/index.js"),o=n.n(t),i=n("./node_modules/react-dom/index.js"),d=n.n(i),a=n("./node_modules/docz/dist/index.esm.js"),c=n("./node_modules/docz-theme-default/dist/index.esm.js"),l={"LICENSE.md":function(){return Promise.all([n.e(0),n.e(2)]).then(n.bind(null,"./LICENSE.md"))},"src/readme.mdx":function(){return Promise.all([n.e(0),n.e(5)]).then(n.bind(null,"./src/readme.mdx"))},"src/components/file/readme.mdx":function(){return Promise.all([n.e(0),n.e(3)]).then(n.bind(null,"./src/components/file/readme.mdx"))},"src/components/folder/readme.mdx":function(){return Promise.all([n.e(0),n.e(4)]).then(n.bind(null,"./src/components/folder/readme.mdx"))}};"undefined"!==typeof l&&l&&l===Object(l)&&Object.defineProperty(l,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"imports",filename:".docz/app/imports.js"}});var s=n("./.docz/app/db.json"),u=function(){return o.a.createElement(c.a,{linkComponent:a.b,db:s},o.a.createElement(a.e,{imports:l}))},p=u;u&&u===Object(u)&&Object.defineProperty(u,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Root",filename:".docz/app/root.jsx"}});var f=[],m=[],h=function(){return m.forEach(function(e){return e&&e()})},v=document.querySelector("#root");!function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p;f.forEach(function(e){return e&&e()}),d.a.render(o.a.createElement(e,null),v,h)}(p)},0:function(e,r,n){e.exports=n("./.docz/app/index.jsx")}});
//# sourceMappingURL=app.cc4e0b54f707ead4d099.js.map