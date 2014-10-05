# whitespace-remove
[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]
[![Downloads][downloads-image]][downloads-url]

Strip all whitespace from the given string. This is different from
[`String.prototype.trim()`][trim-url] which only removes whitespaces from the beginning and
end of a string.

## Installation
```bash
$ npm i --save whitespace-remove
```

## Overview
```js
var removeWhitespace = require('whitespace-remove');

removeWhitespace('foo\n bar\n');
// => 'foo\nbar\n'
```

## License
[MIT](https://tldrlegal.com/license/mit-license) ©
[Yoshua Wuyts](http://yoshuawuyts.com)

[npm-image]: https://img.shields.io/npm/v/whitespace-remove.svg?style=flat-square
[npm-url]: https://npmjs.org/package/whitespace-remove
[travis-image]: https://img.shields.io/travis/yoshuawuyts/whitespace-remove.svg?style=flat-square
[travis-url]: https://travis-ci.org/yoshuawuyts/whitespace-remove
[coveralls-image]: https://img.shields.io/coveralls/yoshuawuyts/whitespace-remove.svg?style=flat-square
[coveralls-url]: https://coveralls.io/r/yoshuawuyts/whitespace-remove?branch=master
[downloads-image]: http://img.shields.io/npm/dm/whitespace-remove.svg?style=flat-square
[downloads-url]: https://npmjs.org/package/whitespace-remove

[trim-url]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/Trim
