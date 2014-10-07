'use strict';

var mergeTrees = require('broccoli-merge-trees');
var cssnext = require('./');

module.exports = mergeTrees([
  cssnext('test/fixtures/cssnext-features', {
    sourcemap: true
  }),
  cssnext('test/fixtures/other-path', {
    path: 'test/fixtures/cssnext-features',
  })
], {overwrite: true});
