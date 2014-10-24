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

  if (options.map) {
    options.map.inline = true;
  }

  var result = cssnext(str, options);

  if (typeof result === 'string') {
    return result;
  }

  var css = result.css;
  if (result.map) {
    css += '\n' + result.map;
  }
  return css;
};

module.exports = CssnextFilter;
