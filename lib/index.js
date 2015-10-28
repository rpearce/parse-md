'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _marked = require('marked');

var _marked2 = _interopRequireDefault(_marked);

var _jsYaml = require('js-yaml');

var _jsYaml2 = _interopRequireDefault(_jsYaml);

function getMetadataIndices(mem, item, i) {
  if (/^---/.test(item)) {
    mem.push(i);
  }
  return mem;
}

function getMetadata(_ref) {
  var lines = _ref.lines;
  var metadataIndices = _ref.metadataIndices;

  if (metadataIndices.length > 0) {
    var tempMetadata = lines.slice(metadataIndices[0] + 1, metadataIndices[1]);
    return _jsYaml2['default'].safeLoad(tempMetadata.join('\n'));
  }
  return {};
}

function getContent(_ref2) {
  var lines = _ref2.lines;
  var metadataIndices = _ref2.metadataIndices;

  if (metadataIndices.length > 0) {
    lines = lines.slice(metadataIndices[1] + 1, lines.length);
  }
  return (0, _marked2['default'])(lines.join('\n'));
}

exports['default'] = function (contents) {
  var lines = contents.split('\n').map(function (line) {
    return line.trim();
  });
  var metadataIndices = lines.reduce(getMetadataIndices, []);
  var metadata = getMetadata({ lines: lines, metadataIndices: metadataIndices });
  var content = getContent({ lines: lines, metadataIndices: metadataIndices });
  return { metadata: metadata, content: content };
};

module.exports = exports['default'];
