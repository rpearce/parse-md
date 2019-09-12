import test from 'ava'
import parseMD from '../source'

test('returns meta & raw content when meta present', t => {
  const metaTitle = 'Glorious Title'
  const metaDescription = 'ABC123'
  const body = '# This is our house'
  const markdown = `---
title: ${metaTitle}
description: ${metaDescription}
---
${body}`
  const { metadata, content } = parseMD(markdown)
  const { title, description } = metadata

  t.is(title, metaTitle)
  t.is(description, metaDescription)
  t.is(content, body)
})

test('returns raw content when meta absent', t => {
  const markdown = '# This is our house'
  const { metadata, content } = parseMD(markdown)

  t.deepEqual(metadata, {})
  t.is(content, markdown)
})
