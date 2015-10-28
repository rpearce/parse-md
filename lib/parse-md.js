import marked from 'marked';
import yaml from 'js-yaml';

function getMetadataIndices(mem, item, i) {
  if (/^---/.test(item)) {
    mem.push(i);
  }
  return mem;
}

function getMetadata({ lines, metadataIndices }) {
  if (metadataIndices.length > 0) {
    let tempMetadata = lines.slice(metadataIndices[0] + 1, metadataIndices[1]);
    return yaml.safeLoad(tempMetadata.join('\n'));
  }
  return {};
}

function getContent({ lines, metadataIndices }) {
  if (metadataIndices.length > 0) {
    lines = lines.slice(metadataIndices[1] + 1, lines.length);
  }
  return marked(lines.join('\n'));
}

export default function(contents) {
  const lines = contents.split('\n').map(line => line.trim());
  const metadataIndices = lines.reduce(getMetadataIndices, []);
  const metadata = getMetadata({ lines, metadataIndices });
  const content = getContent({ lines, metadataIndices });
  return { metadata, content };
}
