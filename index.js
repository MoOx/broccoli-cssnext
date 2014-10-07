'use strict';

var path = require('path');

var cssnext = require('cssnext');
var Filter = require('broccoli-filter');
var xtend = require('xtend');

function CssnextFilter(inputTree, options) {
  if (!(this instanceof CssnextFilter)) {
    return new CssnextFilter(inputTree, options);
  }

  this.inputTree = inputTree;
  this.options = options || {};
}

CssnextFilter.prototype = Object.create(Filter.prototype);
CssnextFilter.prototype.constructor = CssnextFilter;

CssnextFilter.prototype.extensions = ['css'];
CssnextFilter.prototype.targetExtension = 'css';

CssnextFilter.prototype.processString = function(str, relativePath) {
  var options = xtend(this.options, {
    from: this.options.from || path.join(this.inputTree, relativePath)
  });

  return cssnext(str, options);
};

module.exports = CssnextFilter;
