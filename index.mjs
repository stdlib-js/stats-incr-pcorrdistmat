// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import{isPrimitive as e}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-integer@v0.1.0-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-square-matrix@v0.1.0-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-vector-like@v0.1.0-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/array-float64@v0.1.1-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@v0.1.1-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-sqrt@v0.1.1-esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-ctor@esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-ctor@v0.1.0-esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-numel@v0.1.1-esm/index.mjs";function d(e,t){return(t?o:a)("float64",new s(e*e),[e,e],[e,1],0,"row-major")}function l(e){var t;return t=new s(e),o("float64",t,[e],[1],0,"row-major")}function u(a,o){var u,h,c,f,p,g,v,j;if(j=0,e(a))h=d(u=a,!1);else{if(!t(a))throw new TypeError(n("invalid argument. First argument must either specify the order of the correlation distance matrix or be a square two-dimensional ndarray for storing the correlation distance matrix. Value: `%s`.",a));u=a.shape[0],h=a}if(v=new s(u),c=new s(u),f=new s(u),g=d(u,!0),arguments.length>1){if(!r(o))throw new TypeError(n("invalid argument. Second argument must be a one-dimensional ndarray. Value: `%s`.",o));if(m(o.shape)!==u)throw new Error(n("invalid argument. The number of elements (means) in the second argument must match correlation distance matrix dimensions. Expected: `%u`. Actual: `%u`.",u,m(o.shape)));return p=o,x}return p=l(u),w;function w(e){var t,s,a,o,m,d,l,w,x,b,y,E;if(0===arguments.length)return 0===j?null:h;if(!r(e))throw new TypeError(n("invalid argument. Must provide a one-dimensional ndarray. Value: `%s`.",e));if(e.shape[0]!==u)throw new Error(n("invalid argument. Vector length must match correlation matrix dimensions. Expected: `%u`. Actual: `%u`.",u,e.shape[0]));if(b=(x=j)/(j+=1),t=x||1,1===j)for(y=0;y<u;y++)for(l=e.get(y),w=p.get(y),w+=(d=l-w)/j,p.set(y,w),v[y]=d,c[y]+=d*(l-w),f[y]=i(c[y]/t),s=b*v[y],E=0;E<=y;E++)a=g.get(y,E)+s*v[E],g.set(y,E,a),g.set(E,y,a);else for(y=0;y<u;y++)for(l=e.get(y),w=p.get(y),w+=(d=l-w)/j,p.set(y,w),v[y]=d,c[y]+=d*(l-w),f[y]=i(c[y]/t),s=b*v[y],m=f[y],E=0;E<y;E++)a=g.get(y,E)+s*v[E],g.set(y,E,a),g.set(E,y,a),o=1-a/t/(m*f[E]),h.set(y,E,o),h.set(E,y,o);return h}function x(e){var t,s,a,o,m,d;if(0===arguments.length)return 0===j?null:h;if(!r(e))throw new TypeError(n("invalid argument. Must provide a one-dimensional ndarray. Value: `%s`.",e));if(e.shape[0]!==u)throw new Error(n("invalid argument. Vector length must match correlation distance matrix dimensions. Expected: `%u`. Actual: `%u`.",u,e.shape[0]));for(j+=1,m=0;m<u;m++)for(o=e.get(m)-p.get(m),v[m]=o,c[m]+=o*o,f[m]=i(c[m]/j),a=f[m],d=0;d<m;d++)s=g.get(m,d)+o*v[d],g.set(m,d,s),g.set(d,m,s),t=1-s/j/(a*f[d]),h.set(m,d,t),h.set(d,m,t);return h}}export{u as default};
//# sourceMappingURL=index.mjs.map