'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsYaml = require('js-yaml');

var findMetadataIndices = function findMetadataIndices(mem, item, i) {
  if (/^---/.test(item)) {
    mem.push(i);
  }
  return mem;
};

var parseMetadata = function parseMetadata(_ref) {
  var lines = _ref.lines;
  var metadataIndices = _ref.metadataIndices;

  if (metadataIndices.length > 0) {
    var metadata = lines.slice(metadataIndices[0] + 1, metadataIndices[1]);
    return (0, _jsYaml.safeLoad)(metadata.join('\n'));
  }
  return {};
};

var parseContent = function parseContent(_ref2) {
  var lines = _ref2.lines;
  var metadataIndices = _ref2.metadataIndices;

  if (metadataIndices.length > 0) {
    lines = lines.slice(metadataIndices[1] + 1, lines.length);
  }
  return lines.join('\n');
};

var parseMD = function parseMD(contents) {
  var lines = contents.split('\n');
  var metadataIndices = lines.reduce(findMetadataIndices, []);
  var metadata = parseMetadata({ lines: lines, metadataIndices: metadataIndices });
  var content = parseContent({ lines: lines, metadataIndices: metadataIndices });
  return { metadata: metadata, content: content };
};

exports.default = parseMD;
