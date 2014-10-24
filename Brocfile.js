'use strict';

var mergeTrees = require('broccoli-merge-trees');
var cssnext = require('./');

module.exports = mergeTrees([
  cssnext('test/fixtures/cssnext-features', {
    sourcemap: true
  }),
  cssnext('test/fixtures/simple', {
    map: {
      'sourcesContent': false
    }
  }),
  cssnext('test/fixtures/other-path', {
    features: {
      'import': {
        path: 'test/fixtures/cssnext-features'
      }
    }
  })
], {overwrite: true});
