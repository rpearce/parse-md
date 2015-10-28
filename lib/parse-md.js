import marked from 'marked';
import yaml from 'js-yaml';

function findMetadataIndices(mem, item, i) {
  if (/^---/.test(item)) {
    mem.push(i);
  }
  return mem;
}

function parseMetadata({ lines, metadataIndices }) {
  if (metadataIndices.length > 0) {
    let metadata = lines.slice(metadataIndices[0] + 1, metadataIndices[1]);
    return yaml.safeLoad(metadata.join('\n'));
  }
  return {};
}

function parseContent({ lines, metadataIndices }) {
  if (metadataIndices.length > 0) {
    lines = lines.slice(metadataIndices[1] + 1, lines.length);
  }
  return marked(lines.join('\n'));
}

export default function(contents) {
  const lines = contents.split('\n').map(line => line.trim()),
        metadataIndices = lines.reduce(findMetadataIndices, []),
        metadata = parseMetadata({ lines, metadataIndices }),
        content = parseContent({ lines, metadataIndices });
  return { metadata, content };
}
