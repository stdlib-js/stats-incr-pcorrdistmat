// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var t="function"==typeof Object.defineProperty?Object.defineProperty:null;var e,r=Object.defineProperty,n=Object.prototype,i=n.toString,o=n.__defineGetter__,u=n.__defineSetter__,a=n.__lookupGetter__,s=n.__lookupSetter__;e=function(){try{return t({},"x",{}),!0}catch(t){return!1}}()?r:function(t,e,r){var f,c,l,h;if("object"!=typeof t||null===t||"[object Array]"===i.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof r||null===r||"[object Array]"===i.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((c="value"in r)&&(a.call(t,e)||s.call(t,e)?(f=t.__proto__,t.__proto__=n,delete t[e],t[e]=r.value,t.__proto__=f):t[e]=r.value),l="get"in r,h="set"in r,c&&(l||h))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return l&&o&&o.call(t,e,r.get),h&&u&&u.call(t,e,r.set),t};var f=e;function c(t,e,r){f(t,e,{configurable:!1,enumerable:!1,writable:!1,value:r})}function l(t){return"number"==typeof t}var h="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function p(){return h&&"symbol"==typeof Symbol.toStringTag}var d=Object.prototype.toString;var y=Object.prototype.hasOwnProperty;function g(t,e){return null!=t&&y.call(t,e)}var m="function"==typeof Symbol?Symbol.toStringTag:"";var _=p()?function(t){var e,r,n;if(null==t)return d.call(t);r=t[m],e=g(t,m);try{t[m]=void 0}catch(e){return d.call(t)}return n=d.call(t),e?t[m]=r:delete t[m],n}:function(t){return d.call(t)},b=Number,v=b.prototype.toString;var w=p();function O(t){return"object"==typeof t&&(t instanceof b||(w?function(t){try{return v.call(t),!0}catch(t){return!1}}(t):"[object Number]"===_(t)))}function E(t){return l(t)||O(t)}c(E,"isPrimitive",l),c(E,"isObject",O);var j=Number.POSITIVE_INFINITY,A=b.NEGATIVE_INFINITY,T=Math.floor;function I(t){return T(t)===t}function U(t){return t<j&&t>A&&I(t)}function x(t){return l(t)&&U(t)}function N(t){return O(t)&&U(t.valueOf())}function S(t){return x(t)||N(t)}function V(t){return x(t)&&t>0}function R(t){return N(t)&&t.valueOf()>0}function B(t){return V(t)||R(t)}function L(t){return"boolean"==typeof t}c(S,"isPrimitive",x),c(S,"isObject",N),c(B,"isPrimitive",V),c(B,"isObject",R);var P=Boolean.prototype.toString;var M=p();function F(t){return"object"==typeof t&&(t instanceof Boolean||(M?function(t){try{return P.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===_(t)))}function C(t){return L(t)||F(t)}function D(){return new Function("return this;")()}c(C,"isPrimitive",L),c(C,"isObject",F);var Y="object"==typeof self?self:null,G="object"==typeof window?window:null,k="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},J="object"==typeof k?k:null;function W(t){if(arguments.length){if(!L(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return D()}if(Y)return Y;if(G)return G;if(J)return J;throw new Error("unexpected error. Unable to resolve global object.")}var z=W();function q(t,e,r){f(t,e,{configurable:!1,enumerable:!1,get:r})}var H={binary:1,bool:1,complex64:8,complex128:16,float16:2,bfloat16:2,float32:4,float64:8,float128:16,generic:null,int8:1,int16:2,int32:4,int64:8,int128:16,int256:32,uint8:1,uint8c:1,uint16:2,uint32:4,uint64:8,uint128:16,uint256:32};function X(t){return Math.abs(t)}function $(t,e){return e&&(2===t||3===t)}function K(t,e){return e&&(1===t||3===t)}function Q(t,e,r){var n,i,o,u,a;for(n=t.length,i=r,o=r,a=0;a<n;a++){if(0===t[a])return[r,r];(u=e[a])>0?o+=u*(t[a]-1):u<0&&(i+=u*(t[a]-1))}return[i,o]}function Z(t){return t.re}function tt(t){return t.im}function et(t){return"string"==typeof t}c(Q,"assign",(function(t,e,r,n){var i,o,u,a,s;for(i=t.length,o=r,u=r,s=0;s<i;s++){if(0===t[s])return n[0]=r,n[1]=r,n;(a=e[s])>0?u+=a*(t[s]-1):a<0&&(o+=a*(t[s]-1))}return n[0]=o,n[1]=u,n}));var rt=String.prototype.valueOf;var nt=p();function it(t){return"object"==typeof t&&(t instanceof String||(nt?function(t){try{return rt.call(t),!0}catch(t){return!1}}(t):"[object String]"===_(t)))}function ot(t){return et(t)||it(t)}c(ot,"isPrimitive",et),c(ot,"isObject",it);var ut=/[-\/\\^$*+?.()|[\]{}]/g;var at=/./,st=W(),ft=st.document&&st.document.childNodes,ct=Int8Array;function lt(){return/^\s*function\s*([^(]*)/i}var ht=/^\s*function\s*([^(]*)/i;c(lt,"REGEXP",ht);var pt=Array.isArray?Array.isArray:function(t){return"[object Array]"===_(t)};function dt(t){return null!==t&&"object"==typeof t}var yt=function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(e){var r,n;if(!pt(e))return!1;if(0===(r=e.length))return!1;for(n=0;n<r;n++)if(!1===t(e[n]))return!1;return!0}}(dt);function gt(t){var e,r,n,i;if(("Object"===(r=_(t).slice(8,-1))||"Error"===r)&&t.constructor){if("string"==typeof(n=t.constructor).name)return n.name;if(e=ht.exec(n.toString()))return e[1]}return dt(i=t)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":r}c(dt,"isObjectLikeArray",yt);var mt="function"==typeof at||"object"==typeof ct||"function"==typeof ft?function(t){return gt(t).toLowerCase()}:function(t){var e;return null===t?"null":"object"===(e=typeof t)?gt(t).toLowerCase():e};function _t(t){return"function"===mt(t)}var bt=RegExp.prototype.exec;var vt=p();function wt(t){return"object"==typeof t&&(t instanceof RegExp||(vt?function(t){try{return bt.call(t),!0}catch(t){return!1}}(t):"[object RegExp]"===_(t)))}function Ot(t,e,r){if(!et(t))throw new TypeError("invalid argument. First argument must be a string primitive. Value: `"+t+"`.");if(et(e))e=function(t){var e,r;if(!et(t))throw new TypeError("invalid argument. Must provide a regular expression string. Value: `"+t+"`.");if("/"===t[0])for(r=t.length-1;r>=0&&"/"!==t[r];r--);return void 0===r||r<=0?t.replace(ut,"\\$&"):(e=(e=t.substring(1,r)).replace(ut,"\\$&"),t=t[0]+e+t.substring(r))}(e),e=new RegExp(e,"g");else if(!wt(e))throw new TypeError("invalid argument. Second argument must be a string primitive or regular expression. Value: `"+e+"`.");if(!et(r)&&!_t(r))throw new TypeError("invalid argument. Third argument must be a string primitive or replacement function. Value: `"+r+"`.");return t.replace(e,r)}var Et={int8:"new Int8Array( [ {{data}} ] )",uint8:"new Uint8Array( [ {{data}} ] )",uint8c:"new Uint8ClampedArray( [ {{data}} ] )",int16:"new Int16Array( [ {{data}} ] )",uint16:"new Uint16Array( [ {{data}} ] )",int32:"new Int32Array( [ {{data}} ] )",uint32:"new Uint32Array( [ {{data}} ] )",float32:"new Float32Array( [ {{data}} ] )",float64:"new Float64Array( [ {{data}} ] )",generic:"[ {{data}} ]",binary:"new Buffer( [ {{data}} ] )",complex64:"new Complex64Array( [ {{data}} ] )",complex128:"new Complex128Array( [ {{data}} ] )"};var jt="function"==typeof Uint8Array;var At="function"==typeof Uint8Array?Uint8Array:null;var Tt,It="function"==typeof Uint8Array?Uint8Array:void 0;Tt=function(){var t,e,r;if("function"!=typeof At)return!1;try{e=new At(e=[1,3.14,-3.14,256,257]),r=e,t=(jt&&r instanceof Uint8Array||"[object Uint8Array]"===_(r))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){t=!1}return t}()?It:function(){throw new Error("not implemented")};var Ut=Tt,xt="function"==typeof Uint16Array;var Nt="function"==typeof Uint16Array?Uint16Array:null;var St,Vt="function"==typeof Uint16Array?Uint16Array:void 0;St=function(){var t,e,r;if("function"!=typeof Nt)return!1;try{e=new Nt(e=[1,3.14,-3.14,65536,65537]),r=e,t=(xt&&r instanceof Uint16Array||"[object Uint16Array]"===_(r))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){t=!1}return t}()?Vt:function(){throw new Error("not implemented")};var Rt,Bt={uint16:St,uint8:Ut};(Rt=new Bt.uint16(1))[0]=4660;var Lt=52===new Bt.uint8(Rt.buffer)[0],Pt="function"==typeof ArrayBuffer;var Mt="function"==typeof Float64Array;var Ft="function"==typeof Float64Array?Float64Array:null;var Ct,Dt="function"==typeof Float64Array?Float64Array:void 0;Ct=function(){var t,e,r;if("function"!=typeof Ft)return!1;try{e=new Ft([1,3.14,-3.14,NaN]),r=e,t=(Mt&&r instanceof Float64Array||"[object Float64Array]"===_(r))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){t=!1}return t}()?Dt:function(){throw new Error("not implemented")};var Yt=Ct,Gt="function"==typeof ArrayBuffer?ArrayBuffer:null;var kt,Jt="function"==typeof ArrayBuffer?ArrayBuffer:void 0;kt=function(){var t,e,r,n;if("function"!=typeof Gt)return!1;try{r=new Gt(16),n=r,(t=(Pt&&n instanceof ArrayBuffer||"[object ArrayBuffer]"===_(n))&&"function"==typeof Gt.isView)&&((e=new Yt(r))[0]=-3.14,e[1]=NaN,t=t&&Gt.isView(e)&&16===r.byteLength&&-3.14===e[0]&&e[1]!=e[1])}catch(e){t=!1}return t}()?Jt:function(){throw new Error("not implemented")};var Wt=kt,zt="function"==typeof DataView;var qt="function"==typeof DataView?DataView:null;var Ht,Xt="function"==typeof DataView?DataView:void 0;Ht=function(){var t,e,r,n;if("function"!=typeof qt)return!1;try{r=new Wt(24),e=new qt(r,8),n=e,(t=(zt&&n instanceof DataView||"[object DataView]"===_(n))&&"function"==typeof e.getFloat64&&"function"==typeof e.setFloat64)&&(e.setFloat64(0,-3.14),e.setFloat64(8,NaN),t=t&&e.buffer===r&&16===e.byteLength&&8===e.byteOffset&&-3.14===e.getFloat64(0)&&e.getFloat64(8)!=e.getFloat64(8))}catch(e){t=!1}return t}()?Xt:function(){throw new Error("not implemented")};var $t=Ht,Kt="function"==typeof BigInt?BigInt:void 0,Qt=["binary","complex64","complex128","float32","float64","generic","int16","int32","int8","uint16","uint32","uint8","uint8c"];function Zt(){return Qt.slice()}function te(){return{bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256}}function ee(t,e,r){f(t,e,{configurable:!1,enumerable:!0,writable:!1,value:r})}function re(t){return Object.keys(Object(t))}var ne=void 0!==Object.keys;function ie(t){return"[object Arguments]"===_(t)}var oe=function(){return ie(arguments)}();function ue(t){return t!=t}function ae(t){return l(t)&&ue(t)}function se(t){return O(t)&&ue(t.valueOf())}function fe(t){return ae(t)||se(t)}c(fe,"isPrimitive",ae),c(fe,"isObject",se);var ce=Object.prototype.propertyIsEnumerable;var le=!ce.call("beep","0");function he(t,e){var r;return null!=t&&(!(r=ce.call(t,e))&&le&&ot(t)?!ae(e=+e)&&x(e)&&e>=0&&e<t.length:r)}var pe=oe?ie:function(t){return null!==t&&"object"==typeof t&&!pt(t)&&"number"==typeof t.length&&I(t.length)&&t.length>=0&&t.length<=4294967295&&g(t,"callee")&&!he(t,"callee")},de=Array.prototype.slice;var ye=he((function(){}),"prototype"),ge=!he({toString:null},"toString");function me(t){return"object"==typeof t&&null!==t&&"number"==typeof t.length&&I(t.length)&&t.length>=0&&t.length<=9007199254740991}function _e(t,e,r){var n,i;if(!me(t)&&!et(t))throw new TypeError("invalid argument. First argument must be an array-like object. Value: `"+t+"`.");if(0===(n=t.length))return-1;if(3===arguments.length){if(!x(r))throw new TypeError("invalid argument. `fromIndex` must be an integer. Value: `"+r+"`.");if(r>=0){if(r>=n)return-1;i=r}else(i=n+r)<0&&(i=0)}else i=0;if(fe(e)){for(;i<n;i++)if(fe(t[i]))return i}else for(;i<n;i++)if(t[i]===e)return i;return-1}function be(t){return t.constructor&&t.constructor.prototype===t}var ve=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],we="undefined"==typeof window?void 0:window;var Oe=function(){var t;if("undefined"===mt(we))return!1;for(t in we)try{-1===_e(ve,t)&&g(we,t)&&null!==we[t]&&"object"===mt(we[t])&&be(we[t])}catch(t){return!0}return!1}(),Ee="undefined"!=typeof window;var je=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];var Ae=ne?function(){return 2!==(re(arguments)||"").length}(1,2)?function(t){return pe(t)?re(de.call(t)):re(t)}:re:function(t){var e,r,n,i,o,u,a;if(i=[],pe(t)){for(a=0;a<t.length;a++)i.push(a.toString());return i}if("string"==typeof t){if(t.length>0&&!g(t,"0"))for(a=0;a<t.length;a++)i.push(a.toString())}else{if(!1==(n="function"==typeof t)&&!dt(t))return i;r=ye&&n}for(o in t)r&&"prototype"===o||!g(t,o)||i.push(String(o));if(ge)for(e=function(t){if(!1===Ee&&!Oe)return be(t);try{return be(t)}catch(t){return!1}}(t),a=0;a<je.length;a++)u=je[a],e&&"constructor"===u||!g(t,u)||i.push(String(u));return i};c(Zt,"enum",te),function(t,e){var r,n,i;for(r=Ae(e),i=0;i<r.length;i++)ee(t,n=r[i],e[n])}(Zt,{bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256});var Te=["row-major","column-major"];function Ie(){return Te.slice()}function Ue(){return{"row-major":1,"column-major":2}}c(Ie,"enum",Ue);var xe=["throw","clamp","wrap"];function Ne(){return xe.slice()}function Se(){return{throw:1,clamp:2,wrap:3}}c(Ne,"enum",Se);var Ve={bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256},Re={"row-major":1,"column-major":2},Be={throw:1,clamp:2,wrap:3};var Le=new Ut(8),Pe=new $t(Le.buffer);function Me(t,e,r,n){var i,o,u;if(0===t){for(u=0;u<Le.length;u++)e[n]=0,n+=r;return e}for(o=(4294967295&t)>>>0,i=T(t/4294967296),Lt?(Pe.setUint32(0,o,Lt),Pe.setUint32(4,i,Lt)):(Pe.setUint32(0,i,Lt),Pe.setUint32(4,o,Lt)),u=0;u<Le.length;u++)e[n]=Le[u],n+=r;return e}c((function(t){var e,r,n,i;return e=new Ut(8),0===t||(i=(4294967295&t)>>>0,n=T(t/4294967296),r=new $t(e.buffer),Lt?(r.setUint32(0,i,Lt),r.setUint32(4,n,Lt)):(r.setUint32(0,n,Lt),r.setUint32(4,i,Lt))),e}),"assign",Me);var Fe={bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256},Ce={"row-major":1,"column-major":2},De={throw:1,clamp:2,wrap:3};function Ye(t,e,r,n,i,o){var u,a,s,f,c;if(!(this instanceof Ye))return new Ye(t,e,r,n,i,o);for(f=1,c=0;c<r.length;c++)f*=r[c];return a=e.BYTES_PER_ELEMENT?e.BYTES_PER_ELEMENT*f:null,this._byteLength=a,this._bytesPerElement=function(t){return H[t]||null}(t),this._buffer=e,this._dtype=t,this._length=f,this._ndims=r.length,this._offset=i,this._order=o,this._shape=r,this._strides=n,this._accessors=Boolean(e.get&&e.set),this._iterationOrder=function(t){var e,r;for(e=0,r=0;r<t.length;r++)t[r]<0&&(e+=1);return 0===e?1:e===t.length?-1:0}(n),u=function(t,e,r,n,i){var o;return 0!==t&&0!==i&&t===(o=Q(e,r,n))[1]-o[0]+1}(f,r,n,i,this._iterationOrder),s=function(t){var e,r,n,i,o,u;if(0===(r=t.length))return 0;for(e=!0,n=!0,i=X(t[0]),u=1;u<r;u++){if(o=X(t[u]),e&&o<i?e=!1:n&&o>i&&(n=!1),!n&&!e)return 0;i=o}return n&&e?3:n?1:2}(n),this._flags={ROW_MAJOR_CONTIGUOUS:K(s,u),COLUMN_MAJOR_CONTIGUOUS:$(s,u),READONLY:!1},this.__meta_dataview__=null,this}function Ge(t){return t instanceof Ye||null!==t&&"object"==typeof t&&"object"==typeof t.data&&"object"==typeof t.shape&&"object"==typeof t.strides&&"number"==typeof t.offset&&"string"==typeof t.order&&"number"==typeof t.ndims&&"string"==typeof t.dtype&&"number"==typeof t.length&&"object"==typeof t.flags&&"function"==typeof t.get&&"function"==typeof t.set}function ke(t){return function(t){return Ge(t)&&2===t.ndims&&2===t.shape.length&&2===t.strides.length}(t)&&t.shape[0]===t.shape[1]}function Je(t){return Ge(t)&&1===t.ndims&&1===t.shape.length&&1===t.strides.length}function We(){var t,e=arguments,r=e[0],n="https://stdlib.io/e/"+r+"?";for(t=1;t<e.length;t++)n+="&arg[]="+encodeURIComponent(e[t]);return n}c(Ye,"name","ndarray"),q(Ye.prototype,"byteLength",(function(){return this._byteLength})),q(Ye.prototype,"BYTES_PER_ELEMENT",(function(){return this._bytesPerElement})),q(Ye.prototype,"data",(function(){return this._buffer})),q(Ye.prototype,"dtype",(function(){return this._dtype})),q(Ye.prototype,"flags",(function(){return{ROW_MAJOR_CONTIGUOUS:(t=this._flags).ROW_MAJOR_CONTIGUOUS,COLUMN_MAJOR_CONTIGUOUS:t.COLUMN_MAJOR_CONTIGUOUS,READONLY:t.READONLY};var t})),q(Ye.prototype,"length",(function(){return this._length})),q(Ye.prototype,"ndims",(function(){return this._ndims})),q(Ye.prototype,"offset",(function(){return this._offset})),q(Ye.prototype,"order",(function(){return this._order})),q(Ye.prototype,"shape",(function(){return this._shape.slice()})),q(Ye.prototype,"strides",(function(){return this._strides.slice()})),c(Ye.prototype,"get",(function(){var t,e;for(t=this._offset,e=0;e<arguments.length;e++)t+=this._strides[e]*arguments[e];return this._accessors?this._buffer.get(t):this._buffer[t]})),c(Ye.prototype,"iget",(function(t){var e,r,n,i,o,u;if(0===(n=this._ndims))return this._accessors?this._buffer.get(this._offset):this._buffer[this._offset];if(this._flags.ROW_MAJOR_CONTIGUOUS||this._flags.COLUMN_MAJOR_CONTIGUOUS){if(1===this._iterationOrder)return this._accessors?this._buffer.get(this._offset+t):this._buffer[this._offset+t];if(-1===this._iterationOrder)return this._accessors?this._buffer.get(this.offset-t):this._buffer[this._offset-t]}if(r=this._shape,e=this._strides,i=this._offset,"column-major"===this._order){for(u=0;u<n;u++)t-=o=t%r[u],t/=r[u],i+=o*e[u];return this._accessors?this._buffer.get(i):this._buffer[i]}for(u=n-1;u>=0;u--)t-=o=t%r[u],t/=r[u],i+=o*e[u];return this._accessors?this._buffer.get(i):this._buffer[i]})),c(Ye.prototype,"set",(function(){var t,e;for(t=this._offset,e=0;e<arguments.length-1;e++)t+=this._strides[e]*arguments[e];return this._accessors?this._buffer.set(arguments[e],t):this._buffer[t]=arguments[e],this})),c(Ye.prototype,"iset",(function(t,e){var r,n,i,o,u,a;if(0===(i=this._ndims))return this._accessors?this._buffer.set(t,this._offset):this._buffer[this._offset]=t,this;if(this._flags.ROW_MAJOR_CONTIGUOUS||this._flags.COLUMN_MAJOR_CONTIGUOUS){if(1===this._iterationOrder)return this._accessors?this._buffer.set(e,this._offset+t):this._buffer[this._offset+t]=e,this;if(-1===this._iterationOrder)return this._accessors?this._buffer.set(e,this._offset-t):this._buffer[this._offset-t]=e,this}if(n=this._shape,r=this._strides,o=this._offset,"column-major"===this._order){for(a=0;a<i;a++)t-=u=t%n[a],t/=n[a],o+=u*r[a];return this._accessors?this._buffer.set(e,o):this._buffer[o]=e,this}for(a=i-1;a>=0;a--)t-=u=t%n[a],t/=n[a],o+=u*r[a];return this._accessors?this._buffer.set(e,o):this._buffer[o]=e,this})),c(Ye.prototype,"toString",(function(){var t,e,r,n,i,o;if(e=this._shape.length,r="ndarray( '"+(n=this._dtype)+"', ",t="",this._length<=100)if("complex64"===n||"complex128"===n)for(o=0;o<this._length;o++)t+=Z(i=this.iget(o))+", "+tt(i),o<this._length-1&&(t+=", ");else for(o=0;o<this._length;o++)t+=this.iget(o),o<this._length-1&&(t+=", ");else{if("complex64"===n||"complex128"===n)for(o=0;o<3;o++)t+=Z(i=this.iget(o))+", "+tt(i),o<2&&(t+=", ");else for(o=0;o<3;o++)t+=this.iget(o),o<2&&(t+=", ");if(t+=", ..., ","complex64"===n||"complex128"===n)for(o=2;o>=0;o--)t+=Z(i=this.iget(this._length-1-o))+", "+tt(i),o>0&&(t+=", ");else for(o=2;o>=0;o--)t+=this.iget(this._length-1-o),o>0&&(t+=", ")}if(r+=Ot(Et[this.dtype],"{{data}}",t),r+=", ",r+=0===e?"[]":"[ "+this._shape.join(", ")+" ]",r+=", ",r+="[ ",0===e)r+="0";else for(o=0;o<e;o++)this._strides[o]<0?r+=-this._strides[o]:r+=this._strides[o],o<e-1&&(r+=", ");return r+=" ]",r+=", ",r+="0",r+=", ",r+="'"+this._order+"'",r+=" )"})),c(Ye.prototype,"toJSON",(function(){var t,e,r,n;for(e=this._length,(t={}).type="ndarray",t.dtype=this.dtype,t.flags={READONLY:this._flags.READONLY},t.order=this._order,t.shape=this._shape.slice(),t.strides=this._strides.slice(),n=0;n<e;n++)t.strides[n]<0&&(t.strides[n]*=-1);if(t.data=[],"complex64"===t.dtype||"complex128"===t.dtype)for(n=0;n<e;n++)r=this.iget(n),t.data.push(Z(r),tt(r));else for(n=0;n<e;n++)t.data.push(this.iget(n));return t})),c(Ye.prototype,"__array_meta_dataview__","function"==typeof z.BigInt&&"function"==typeof BigInt&&"bigint"==typeof z.BigInt("1")&&"bigint"==typeof BigInt("1")?function(){var t,e,r,n,i,o,u,a,s,f,c,l,h,p;if(s=this._mode||"throw",u=this._submode||[s],r=33+16*(l=this._ndims)+(h=u.length),(a=this.__meta_dataview__)&&a.byteLength===r)return a;for(a=new $t(new Wt(r)),i=this._shape,o=this._strides,n=this._dtype,t=this._bytesPerElement,f=0,a.setInt8(f,Lt?1:0),f+=1,a.setInt16(f,Ve[n],Lt),f+=2,a.setBigInt64(f,Kt(l),Lt),c=8*l,f+=8,p=0;p<l;p++)a.setBigInt64(f,Kt(i[p]),Lt),a.setBigInt64(f+c,Kt(o[p]*t),Lt),f+=8;for(f+=c,a.setBigInt64(f,Kt(this._offset*t),Lt),f+=8,a.setInt8(f,Re[this._order]),f+=1,a.setInt8(f,Be[s]),f+=1,a.setBigInt64(f,Kt(h),Lt),f+=8,p=0;p<h;p++)a.setInt8(f,Be[u[p]]),f+=1;return e=0,e|=this._flags.READONLY?4:0,a.setInt32(f,e,Lt),this.__meta_dataview__=a,a}:function(){var t,e,r,n,i,o,u,a,s,f,c,l,h,p,d;if(f=this._mode||"throw",a=this._submode||[f],n=33+16*(h=this._ndims)+(p=a.length),(s=this.__meta_dataview__)&&s.byteLength===n)return s;for(s=new $t(new Wt(n)),e=new Ut(s.buffer),o=this._shape,u=this._strides,i=this._dtype,t=this._bytesPerElement,c=0,s.setInt8(c,Lt?1:0),c+=1,s.setInt16(c,Fe[i],Lt),Me(h,e,1,c+=2),l=8*h,c+=8,d=0;d<h;d++)Me(o[d],e,1,c),Me(u[d]*t,e,1,c+l),c+=8;for(c+=l,Me(this._offset*t,e,1,c),c+=8,s.setInt8(c,Ce[this._order]),c+=1,s.setInt8(c,De[f]),Me(p,e,1,c+=1),c+=8,d=0;d<p;d++)s.setInt8(c,De[a[d]]),c+=1;return r=0,r|=this._flags.READONLY?4:0,s.setInt32(c,r,Lt),this.__meta_dataview__=s,s});var ze=Math.sqrt;function qe(t){return x(t)&&t>=0}function He(t){return N(t)&&t.valueOf()>=0}function Xe(t){return qe(t)||He(t)}c(Xe,"isPrimitive",qe),c(Xe,"isObject",He);function $e(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(e){var r,n;if(!function(t){return null!=t&&"function"!=typeof t&&"number"==typeof t.length&&I(t.length)&&t.length>=0&&t.length<=4294967295}(e))return!1;if(0===(r=e.length))return!1;for(n=0;n<r;n++)if(!1===t(e[n]))return!1;return!0}}var Ke=$e(Xe.isPrimitive),Qe=$e(Xe.isObject),Ze=$e(Xe);c(Ze,"primitives",Ke),c(Ze,"objects",Qe);var tr=$e(S.isPrimitive),er=$e(S.isObject),rr=$e(S);c(rr,"primitives",tr),c(rr,"objects",er);var nr=Ie(),ir=nr.length;function or(t){var e;for(e=0;e<ir;e++)if(t===nr[e])return!0;return!1}var ur=Zt(),ar=ur.length;function sr(t){var e;for(e=0;e<ar;e++)if(t===ur[e])return!0;return!1}function fr(t,e,r,n){var i=Q(e,r,n);return i[0]>=0&&i[1]<t}function cr(t){var e,r,n;if(0===(e=t.length))return 0;for(r=1,n=0;n<e;n++)r*=t[n];return r}function lr(t){var e=typeof t;return null===t||"object"!==e&&"function"!==e?new TypeError("invalid argument. A provided constructor must be either an object (except null) or a function. Value: `"+t+"`."):null}var hr=Object.create;function pr(){}var dr="function"==typeof hr?hr:function(t){return pr.prototype=t,new pr};var yr="throw",gr=!1;function mr(t,e,r){if("clamp"===r)return function(t,e){return t<0?0:t>e?e:t}(t,e);if("wrap"===r)return function(t,e){var r=e+1;return t<0?((t+=r)<0&&0!=(t%=r)&&(t+=r),t):t>e?((t-=r)>e&&(t%=r),t):t}(t,e);if(t<0||t>e)throw new RangeError("invalid argument. Index must be on the interval: [0,"+e+"]. Value: `"+t+"`.");return t}var _r=Ye.prototype.iget;var br=Ye.prototype.iset;function vr(t,e){var r,n;for(r=[],n=0;n<e;n++)r.push(t[n]);return r}var wr,Or=Object.getPrototypeOf;wr=_t(Object.getPrototypeOf)?Or:function(t){var e=function(t){return t.__proto__}(t);return e||null===e?e:"[object Function]"===_(t.constructor)?t.constructor.prototype:t instanceof Object?Object.prototype:null};var Er=wr;var jr=Object.prototype;function Ar(t){var e;return!!function(t){return"object"==typeof t&&null!==t&&!pt(t)}(t)&&(e=function(t){return null==t?null:(t=Object(t),Er(t))}(t),!e||!g(t,"constructor")&&g(e,"constructor")&&_t(e.constructor)&&"[object Function]"===_(e.constructor)&&g(e,"isPrototypeOf")&&_t(e.isPrototypeOf)&&(e===jr||function(t){var e;for(e in t)if(!g(t,e))return!1;return!0}(t)))}var Tr=Ne(),Ir=Tr.length;function Ur(t){var e;for(e=0;e<Ir;e++)if(t===Tr[e])return!0;return!1}function xr(t,e){var r;if(!Ar(e))return new TypeError("invalid argument. Options must be an object. Value: `"+e+"`.");if(g(e,"mode")&&(t.mode=e.mode,!Ur(t.mode)))return new TypeError("invalid option. `mode` option must be a recognized mode. Option: `"+t.mode+"`.");if(g(e,"submode")){if(t.submode=e.submode,!pt(t.submode))return new TypeError("invalid option. `submode` option must be an array containing recognized modes. Option: `"+t.submode+"`.");if(0===t.submode.length)return new TypeError("invalid option. `submode` option must be an array containing recognized modes. Option: `"+t.submode.join(",")+"`.");for(r=0;r<t.submode.length;r++)if(!Ur(t.submode[r]))return new TypeError("invalid option. Each `submode` must be a recognized modes. Option: `"+t.submode[r]+"`.");t.submode=t.submode.slice()}return g(e,"readonly")&&(t.readonly=e.readonly,!L(t.readonly))?new TypeError("invalid option. `readonly` option must be a boolean. Option: `"+t.readonly+"`."):null}function Nr(t,e,r,n,i,o,u){var a,s,f,c,l;if(!(this instanceof Nr))return arguments.length<7?new Nr(t,e,r,n,i,o):new Nr(t,e,r,n,i,o,u);if(!sr(t))throw new TypeError("invalid argument. `dtype` argument must be a supported ndarray data type. Value: `"+t+"`.");if(!me(e))throw new TypeError("invalid argument. `buffer` argument must be an array-like object, typed-array-like, or a Buffer. Value: `"+e+"`.");if(e.get&&e.set&&(!_t(e.get)||!_t(e.set)))throw new TypeError("invalid argument. `buffer` argument `get` and `set` properties must be functions. Value: `"+e+"`.");if(!Ke(r)&&(!me(r)||r.length>0))throw new TypeError("invalid argument. `shape` argument must be an array-like object containing nonnegative integers. Value: `"+r+"`.");if((a=r.length)>32767)throw new RangeError("invalid argument. Number of dimensions must not exceed 32767 due to stack limits. Value: `"+a+"`.");if(!tr(n))throw new TypeError("invalid argument. `strides` argument must be an array-like object containing integers. Value: `"+n+"`.");if(a>0){if(n.length!==a)throw new RangeError("invalid argument. `strides` argument length must match the number of dimensions. Expected number of dimensions: "+a+". Strides length: "+n.length+".")}else{if(1!==n.length)throw new RangeError("invalid argument. `strides` length must be equal to 1 when creating a zero-dimensional ndarray.");if(0!==n[0])throw new RangeError("invalid argument. `strides` argument must contain a single element equal to `0`. Value: `"+n[0]+"`.")}if(!qe(i))throw new TypeError("invalid argument. `offset` argument must be a nonnegative integer. Value: `"+i+"`.");if(!or(o))throw new TypeError("invalid argument. `order` argument must be a supported order. Value: `"+o+"`.");if(a>0&&!fr(e.length,r,n,i)&&cr(r)>0)throw new Error("invalid arguments. The input buffer is incompatible with the specified meta data. Ensure that the offset is valid with regard to the strides array and that the buffer has enough elements to satisfy the desired array shape.");if((s={}).mode=yr,s.readonly=gr,arguments.length>6&&(f=xr(s,u)))throw f;return this._mode=s.mode,void 0===s.submode&&(s.submode=[this._mode]),this._submode=s.submode,c=vr(r,a),l=vr(n,a||1),Ye.call(this,t,e,c,l,i,o),this._flags.READONLY=s.readonly,this}function Sr(t,e){return(e?Ye:Nr)("float64",new Yt(t*t),[t,t],[t,1],0,"row-major")}function Vr(t){return Ye("float64",new Yt(t),[t],[1],0,"row-major")}function Rr(t,e){var r,n,i,o,u,a,s,f;if(f=0,V(t))n=Sr(r=t,!1);else{if(!ke(t))throw new TypeError(We("invalid argument. First argument must either specify the order of the correlation distance matrix or be a square two-dimensional ndarray for storing the correlation distance matrix. Value: `%s`.",t));r=t.shape[0],n=t}if(s=new Yt(r),i=new Yt(r),o=new Yt(r),a=Sr(r,!0),arguments.length>1){if(!Je(e))throw new TypeError(We("invalid argument. Second argument must be a one-dimensional ndarray. Value: `%s`.",e));if(cr(e.shape)!==r)throw new Error(We("invalid argument. The number of elements (means) in the second argument must match correlation distance matrix dimensions. Expected: `%u`. Actual: `%u`.",r,cr(e.shape)));return u=e,l}return u=Vr(r),c;function c(t){var e,c,l,h,p,d,y,g,m,_,b,v;if(0===arguments.length)return 0===f?null:n;if(!Je(t))throw new TypeError(We("invalid argument. Must provide a one-dimensional ndarray. Value: `%s`.",t));if(t.shape[0]!==r)throw new Error(We("0eiAH",r,t.shape[0]));if(_=(m=f)/(f+=1),e=m||1,1===f)for(b=0;b<r;b++)for(y=t.get(b),g=u.get(b),g+=(d=y-g)/f,u.set(b,g),s[b]=d,i[b]+=d*(y-g),o[b]=ze(i[b]/e),c=_*s[b],v=0;v<=b;v++)l=a.get(b,v)+c*s[v],a.set(b,v,l),a.set(v,b,l);else for(b=0;b<r;b++)for(y=t.get(b),g=u.get(b),g+=(d=y-g)/f,u.set(b,g),s[b]=d,i[b]+=d*(y-g),o[b]=ze(i[b]/e),c=_*s[b],p=o[b],v=0;v<b;v++)l=a.get(b,v)+c*s[v],a.set(b,v,l),a.set(v,b,l),h=1-l/e/(p*o[v]),n.set(b,v,h),n.set(v,b,h);return n}function l(t){var e,c,l,h,p,d;if(0===arguments.length)return 0===f?null:n;if(!Je(t))throw new TypeError(We("invalid argument. Must provide a one-dimensional ndarray. Value: `%s`.",t));if(t.shape[0]!==r)throw new Error(We("0eiAI",r,t.shape[0]));for(f+=1,p=0;p<r;p++)for(h=t.get(p)-u.get(p),s[p]=h,i[p]+=h*h,o[p]=ze(i[p]/f),l=o[p],d=0;d<p;d++)c=a.get(p,d)+h*s[d],a.set(p,d,c),a.set(d,p,c),e=1-c/f/(l*o[d]),n.set(p,d,e),n.set(d,p,e);return n}}!function(t,e){var r=lr(t);if(r)throw r;if(r=lr(e))throw r;if(void 0===e.prototype)throw new TypeError("invalid argument. Second argument must have a prototype from which another object can inherit. Value: `"+e.prototype+"`.");t.prototype=dr(e.prototype),f(t.prototype,"constructor",{configurable:!0,enumerable:!1,writable:!0,value:t})}(Nr,Ye),c(Nr,"name","ndarray"),c(Nr.prototype,"get",(function(){var t,e,r,n;if(arguments.length!==this._ndims)throw new RangeError("invalid arguments. Number of indices must match the number of dimensions. ndims: "+this._ndims+". nargs: "+arguments.length+".");for(t=this._offset,r=this._submode.length,n=0;n<arguments.length;n++){if(!x(arguments[n]))throw new TypeError("invalid argument. Indices must be integer valued. Argument: "+n+". Value: `"+arguments[n]+"`.");e=mr(arguments[n],this._shape[n]-1,this._submode[n%r]),t+=this._strides[n]*e}return this._accessors?this._buffer.get(t):this._buffer[t]})),c(Nr.prototype,"iget",(function(t){if(this._ndims>0){if(!x(t))throw new TypeError("invalid argument. Index must be an integer value. Value: `"+t+"`.");return t=mr(t,this._length-1,this._mode),_r.call(this,t)}return _r.call(this)})),c(Nr.prototype,"set",(function(){var t,e,r,n;if(this._flags.READONLY)throw new Error("invalid invocation. Cannot write to a read-only array.");if(arguments.length!==this._ndims+1)throw new RangeError("invalid arguments. Number of indices must match the number of dimensions. ndims: "+this._ndims+". nargs: "+arguments.length+".");for(t=this._offset,r=this._submode.length,n=0;n<arguments.length-1;n++){if(!x(arguments[n]))throw new TypeError("invalid argument. Indices must be integer valued. Argument: "+n+". Value: `"+arguments[n]+"`.");e=mr(arguments[n],this._shape[n]-1,this._submode[n%r]),t+=this._strides[n]*e}return this._accessors?this._buffer.set(arguments[n],t):this._buffer[t]=arguments[n],this})),c(Nr.prototype,"iset",(function(t,e){if(this._flags.READONLY)throw new Error("invalid invocation. Cannot write to a read-only array.");if(this._ndims>0){if(!x(t))throw new TypeError("invalid argument. Index must be an integer value. Value: `"+t+"`.");t=mr(t,this._length-1,this._mode),br.call(this,t,e)}else br.call(this,t);return this}));export{Rr as default};
//# sourceMappingURL=mod.js.map
