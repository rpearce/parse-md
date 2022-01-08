import { load } from 'js-yaml'

// =============================================================================
type Content      = string
type EmptyObject  = Record<string, never>
type InputContent = string
type Line         = string
type MetaIndex    = number

// =============================================================================
interface FindMetaIndices {
  (mem: MetaIndex[], item: Line, i: MetaIndex): MetaIndex[]
}

const findMetaIndices: FindMetaIndices = (mem, item, i) => {
  if (/^---/.test(item)) {
    mem.push(i)
  }

  return mem
}

// =============================================================================
interface ParseMeta {
  ({ lines, metaIndices }: {
    lines:        Line[],
    metaIndices:  MetaIndex[],
  }): EmptyObject | unknown
}

const emptyObject = {}

const parseMeta: ParseMeta = ({ lines, metaIndices }) => {
  if (metaIndices.length > 0) {
    const metadata = lines.slice(metaIndices[0] + 1, metaIndices[1])
    return load(metadata.join('\n'))
  }

  return emptyObject
}

// =============================================================================
interface ParseContent {
  ({ lines, metaIndices }: {
    lines:        Line[],
    metaIndices:  MetaIndex[],
  }): Content
}

const parseContent: ParseContent = ({ lines, metaIndices }) => {
  if (metaIndices.length > 0) {
    lines = lines.slice(metaIndices[1] + 1, lines.length)
  }

  return lines.join('\n')
}

// =============================================================================
export interface ParseMD {
  (contents: InputContent): {
    metadata:  ReturnType<typeof parseMeta>,
    content:   ReturnType<typeof parseContent>,
  }
}

const parseMD: ParseMD = contents => {
  const lines       = contents.split('\n')
  const metaIndices = lines.reduce(findMetaIndices, [])
  const metadata    = parseMeta({ lines, metaIndices })
  const content     = parseContent({ lines, metaIndices })

  return { metadata, content }
}

export default parseMD
