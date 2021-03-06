# DEPRECATED. Use broccoli-postcss instead.

---

# broccoli-cssnext

[![NPM version](https://badge.fury.io/js/broccoli-cssnext.svg)](https://www.npmjs.org/package/broccoli-cssnext)
[![Build Status](https://travis-ci.org/cssnext/broccoli-cssnext.svg?branch=master)](https://travis-ci.org/cssnext/broccoli-cssnext)
[![Dependency Status](https://david-dm.org/cssnext/broccoli-cssnext.svg)](https://david-dm.org/cssnext/broccoli-cssnext)
[![devDependency Status](https://david-dm.org/cssnext/broccoli-cssnext/dev-status.svg)](https://david-dm.org/cssnext/broccoli-cssnext#info=devDependencies)

[cssnext](https://github.com/cssnext/cssnext) plugin for [Broccoli](https://github.com/broccolijs/broccoli)

```css
:root {
  --font-size: 16px;
}

@custom-media --mobile screen and (max-width: 320px);

@media (--mobile) {
  a {
    font-size: calc(var(--font-size) - 2px);
    color: hwb(270, 20%, 40%);
  }
}
```

↓

```css
@media screen and (max-width: 320px) {
  a {
    font-size: 14px;
    color: rgb(102, 51, 153);
  }
}
```

## Installation

[Use npm](https://www.npmjs.org/doc/cli/npm-install.html).

```console
$ npm install --save-dev broccoli-cssnext
```

## Usage

```js
var cssnext = require('broccoli-cssnext');
tree = cssnext(tree, options);
```

## API

### cssnext(tree, options)

[All cssnext options](http://cssnext.io/usage/) are available.

[`from` option](http://cssnext.io/usage/#from) is automatically specified using source file path by default.

And `map.inline` option is always `true` if [`map` option](http://cssnext.io/usage/#map) is enabled.

---

## License

Copyright (c) 2014 [Shinnosuke Watanabe](https://github.com/shinnn)

Licensed under [the MIT License](./LICENSE).
