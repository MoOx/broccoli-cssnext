'use strict';

var readFiles = require('read-files-promise');
var test = require('tape');

test('broccoli-cssnext', function(t) {
  t.plan(3);

  readFiles([
    'test/actual/one.css',
    'test/expected/one.css'
  ])
  .then(function(bufs) {
    t.strictEqual(
      bufs[0].toString().trim(),
      bufs[1].toString().trim(),
      'should transpile CSS using cssnext.'
    );
  });

  readFiles([
    'test/actual/simple.css',
    'test/expected/simple.css'
  ])
  .then(function(bufs) {
    t.strictEqual(
      bufs[0].toString().trim(),
      bufs[1].toString().trim(),
      'should set `map.inline` option `true`.'
    );
  });

  readFiles([
    'test/actual/foo.css',
    'test/expected/foo.css'
  ])
  .then(function(bufs) {
    t.strictEqual(
      bufs[0].toString().trim(),
      bufs[1].toString().trim(),
      'should look for files from another path, using postcss-import feature.'
    );
  });
});
