'use strict';

var readFiles = require('read-files-promise');
var test = require('tape');

test('broccoli-esnext', function(t) {
  t.plan(2);

  readFiles([
    'test/actual/one.css',
    'test/expected/one.css'
  ])
  .then(function(bufs) {
    t.strictEqual(
      bufs[0].toString(),
      bufs[1].toString(),
      'should transpile CSS using cssnext.'
    );
  });

  readFiles([
    'test/actual/foo.css',
    'test/expected/foo.css'
  ])
  .then(function(bufs) {
    t.strictEqual(
      bufs[0].toString(),
      bufs[1].toString(),
      'should look for files from another path, using `path` option.'
    );
  });
});
