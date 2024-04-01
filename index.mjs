// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import{isPrimitive as e}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-integer@v0.2.1-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-square-matrix@v0.2.1-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-vector-like@v0.2.1-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/array-float64@v0.2.1-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.2.1-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-sqrt@v0.2.1-esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-ctor@v0.2.1-esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-ctor@v0.2.1-esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-numel@v0.2.1-esm/index.mjs";function f(e,r){return(r?d:o)("float64",new s(e*e),[e,e],[e,1],0,"row-major")}function h(o,h){var a,l,p,j,g,v,w,c;if(c=0,e(o))l=f(a=o,!1);else{if(!r(o))throw new TypeError(n("1JdDe",o));a=o.shape[0],l=o}if(w=new s(a),p=new s(a),j=new s(a),v=f(a,!0),arguments.length>1){if(!t(h))throw new TypeError(n("1JdDc",h));if(m(h.shape)!==a)throw new Error(n("1Jd9f",a,m(h.shape)));return g=h,function(e){var r,s,o,d,m,f;if(0===arguments.length)return 0===c?null:l;if(!t(e))throw new TypeError(n("1JdDd",e));if(e.shape[0]!==a)throw new Error(n("1Jd9h",a,e.shape[0]));for(c+=1,m=0;m<a;m++)for(d=e.get(m)-g.get(m),w[m]=d,p[m]+=d*d,j[m]=i(p[m]/c),o=j[m],f=0;f<m;f++)s=v.get(m,f)+d*w[f],v.set(m,f,s),v.set(f,m,s),r=1-s/c/(o*j[f]),l.set(m,f,r),l.set(f,m,r);return l}}return g=function(e){var r;return r=new s(e),d("float64",r,[e],[1],0,"row-major")}(a),function(e){var r,s,o,d,m,f,h,u,b,x,y,E;if(0===arguments.length)return 0===c?null:l;if(!t(e))throw new TypeError(n("1JdDd",e));if(e.shape[0]!==a)throw new Error(n("1Jd9g",a,e.shape[0]));if(x=(b=c)/(c+=1),r=b||1,1===c)for(y=0;y<a;y++)for(h=e.get(y),u=g.get(y),u+=(f=h-u)/c,g.set(y,u),w[y]=f,p[y]+=f*(h-u),j[y]=i(p[y]/r),s=x*w[y],E=0;E<=y;E++)o=v.get(y,E)+s*w[E],v.set(y,E,o),v.set(E,y,o);else for(y=0;y<a;y++)for(h=e.get(y),u=g.get(y),u+=(f=h-u)/c,g.set(y,u),w[y]=f,p[y]+=f*(h-u),j[y]=i(p[y]/r),s=x*w[y],m=j[y],E=0;E<y;E++)o=v.get(y,E)+s*w[E],v.set(y,E,o),v.set(E,y,o),d=1-o/r/(m*j[E]),l.set(y,E,d),l.set(E,y,d);return l}}export{h as default};
//# sourceMappingURL=index.mjs.map
