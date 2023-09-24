<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# incrpcorrdistmat

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Compute a [sample Pearson product-moment correlation distance matrix][pearson-correlation] incrementally.

<section class="intro">

A [sample Pearson product-moment correlation distance matrix][pearson-correlation] is an M-by-M matrix whose elements specified by indices `j` and `k` are the [sample Pearson product-moment correlation distances][pearson-correlation] between the jth and kth data variables. The [sample Pearson product-moment correlation distance][pearson-correlation] is defined as

<!-- <equation class="equation" label="eq:pearson_distance" align="center" raw="d_{x,y} = 1 - r_{x,y} = 1 - \frac{\operatorname{cov_n(x,y)}}{\sigma_x \sigma_y}" alt="Equation for the Pearson product-moment correlation distance."> -->

```math
d_{x,y} = 1 - r_{x,y} = 1 - \frac{\mathop{\mathrm{cov_n(x,y)}}}{\sigma_x \sigma_y}
```

<!-- <div class="equation" align="center" data-raw-text="d_{x,y} = 1 - r_{x,y} = 1 - \frac{\operatorname{cov_n(x,y)}}{\sigma_x \sigma_y}" data-equation="eq:pearson_distance">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@49d8cabda84033d55d7b8069f19ee3dd8b8d1496/lib/node_modules/@stdlib/stats/incr/pcorrdistmat/docs/img/equation_pearson_distance.svg" alt="Equation for the Pearson product-moment correlation distance.">
    <br>
</div> -->

<!-- </equation> -->

where `r` is the [sample Pearson product-moment correlation coefficient][pearson-correlation], `cov(x,y)` is the sample covariance, and `σ` corresponds to the sample standard deviation. As `r` resides on the interval `[-1,1]`, `d` resides on the interval `[0,2]`.

</section>

<!-- /.intro -->



<section class="usage">

## Usage

```javascript
import incrpcorrdistmat from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-incr-pcorrdistmat@deno/mod.js';
```
The previous example will load the latest bundled code from the deno branch. Alternatively, you may load a specific version by loading the file from one of the [tagged bundles](https://github.com/stdlib-js/stats-incr-pcorrdistmat/tags). For example,

```javascript
import incrpcorrdistmat from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-incr-pcorrdistmat@v0.1.0-deno/mod.js';
```

#### incrpcorrdistmat( out\[, means] )

Returns an accumulator `function` which incrementally computes a [sample Pearson product-moment correlation distance matrix][pearson-correlation].

```javascript
// Create an accumulator for computing a 2-dimensional correlation distance matrix:
var accumulator = incrpcorrdistmat( 2 );
```

The `out` argument may be either the order of the [correlation distance matrix][pearson-correlation] or a square 2-dimensional [`ndarray`][@stdlib/ndarray/ctor] for storing the [correlation distance matrix][pearson-correlation].

```javascript
import Float64Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-float64@deno/mod.js';
import ndarray from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-ctor@deno/mod.js';

var buffer = new Float64Array( 4 );
var shape = [ 2, 2 ];
var strides = [ 2, 1 ];

// Create a 2-dimensional output correlation distance matrix:
var dist = ndarray( 'float64', buffer, shape, strides, 0, 'row-major' );

var accumulator = incrpcorrdistmat( dist );
```

When means are known, the function supports providing a 1-dimensional [`ndarray`][@stdlib/ndarray/ctor] containing mean values.

```javascript
import Float64Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-float64@deno/mod.js';
import ndarray from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-ctor@deno/mod.js';

var buffer = new Float64Array( 2 );
var shape = [ 2 ];
var strides = [ 1 ];

var means = ndarray( 'float64', buffer, shape, strides, 0, 'row-major' );

means.set( 0, 3.0 );
means.set( 1, -5.5 );

var accumulator = incrpcorrdistmat( 2, means );
```

#### accumulator( \[vector] )

If provided a data vector, the accumulator function returns an updated [sample Pearson product-moment distance correlation matrix][pearson-correlation]. If not provided a data vector, the accumulator function returns the current [sample Pearson product-moment correlation distance matrix][pearson-correlation].

```javascript
import Float64Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-float64@deno/mod.js';
import ndarray from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-ctor@deno/mod.js';

var buffer = new Float64Array( 4 );
var shape = [ 2, 2 ];
var strides = [ 2, 1 ];
var dist = ndarray( 'float64', buffer, shape, strides, 0, 'row-major' );

buffer = new Float64Array( 2 );
shape = [ 2 ];
strides = [ 1 ];
var vec = ndarray( 'float64', buffer, shape, strides, 0, 'row-major' );

var accumulator = incrpcorrdistmat( dist );

vec.set( 0, 2.0 );
vec.set( 1, 1.0 );

var out = accumulator( vec );
// returns <ndarray>

var bool = ( out === dist );
// returns true

vec.set( 0, 1.0 );
vec.set( 1, -5.0 );

out = accumulator( vec );
// returns <ndarray>

vec.set( 0, 3.0 );
vec.set( 1, 3.14 );

out = accumulator( vec );
// returns <ndarray>

out = accumulator();
// returns <ndarray>
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   Due to limitations inherent in representing numeric values using floating-point format (i.e., the inability to represent numeric values with infinite precision), the [correlation distance][pearson-correlation] between perfectly correlated random variables may **not** be `0` or `2`. In fact, the [correlation distance][pearson-correlation] is **not** guaranteed to be strictly on the interval `[0,2]`. Any computed distance should, however, be within floating-point roundoff error.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
import randu from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-base-randu@deno/mod.js';
import ndarray from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-ctor@deno/mod.js';
import Float64Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-float64@deno/mod.js';
import incrpcorrdistmat from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-incr-pcorrdistmat@deno/mod.js';

var dist;
var dxy;
var dyx;
var dx;
var dy;
var i;

// Initialize an accumulator for a 2-dimensional correlation distance matrix:
var accumulator = incrpcorrdistmat( 2 );

// Create a 1-dimensional data vector:
var buffer = new Float64Array( 2 );
var shape = [ 2 ];
var strides = [ 1 ];

var vec = ndarray( 'float64', buffer, shape, strides, 0, 'row-major' );

// For each simulated data vector, update the sample correlation distance matrix...
for ( i = 0; i < 100; i++ ) {
    vec.set( 0, randu()*100.0 );
    vec.set( 1, randu()*100.0 );
    dist = accumulator( vec );

    dx = dist.get( 0, 0 ).toFixed( 4 );
    dy = dist.get( 1, 1 ).toFixed( 4 );
    dxy = dist.get( 0, 1 ).toFixed( 4 );
    dyx = dist.get( 1, 0 ).toFixed( 4 );

    console.log( '[ %d, %d\n  %d, %d ]', dx, dxy, dyx, dy );
}
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/stats-incr/pcorrdist`][@stdlib/stats/incr/pcorrdist]</span><span class="delimiter">: </span><span class="description">compute a sample Pearson product-moment correlation distance.</span>
-   <span class="package-name">[`@stdlib/stats-incr/pcorrmat`][@stdlib/stats/incr/pcorrmat]</span><span class="delimiter">: </span><span class="description">compute a sample Pearson product-moment correlation matrix incrementally.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2023. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/stats-incr-pcorrdistmat.svg
[npm-url]: https://npmjs.org/package/@stdlib/stats-incr-pcorrdistmat

[test-image]: https://github.com/stdlib-js/stats-incr-pcorrdistmat/actions/workflows/test.yml/badge.svg?branch=v0.1.0
[test-url]: https://github.com/stdlib-js/stats-incr-pcorrdistmat/actions/workflows/test.yml?query=branch:v0.1.0

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/stats-incr-pcorrdistmat/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/stats-incr-pcorrdistmat?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/stats-incr-pcorrdistmat.svg
[dependencies-url]: https://david-dm.org/stdlib-js/stats-incr-pcorrdistmat/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/stats-incr-pcorrdistmat/tree/deno
[umd-url]: https://github.com/stdlib-js/stats-incr-pcorrdistmat/tree/umd
[esm-url]: https://github.com/stdlib-js/stats-incr-pcorrdistmat/tree/esm
[branches-url]: https://github.com/stdlib-js/stats-incr-pcorrdistmat/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/stats-incr-pcorrdistmat/main/LICENSE

[pearson-correlation]: https://en.wikipedia.org/wiki/Pearson_correlation_coefficient

[@stdlib/ndarray/ctor]: https://github.com/stdlib-js/ndarray-ctor/tree/deno

<!-- <related-links> -->

[@stdlib/stats/incr/pcorrdist]: https://github.com/stdlib-js/stats-incr-pcorrdist/tree/deno

[@stdlib/stats/incr/pcorrmat]: https://github.com/stdlib-js/stats-incr-pcorrmat/tree/deno

<!-- </related-links> -->

</section>

<!-- /.links -->
