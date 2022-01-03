import parseMD from '../source'

type ExpectedMetadata = { title: string, description: string }

test('returns meta & raw content when meta present', () => {
  const metaTitle = 'Glorious Title'
  const metaDescription = 'ABC123'
  const body = '# This is our house'
  const markdown = `---
title: ${metaTitle}
description: ${metaDescription}
---
${body}`
  const { metadata, content } = parseMD(markdown)
  const { title, description } = metadata as ExpectedMetadata

  expect(title).toEqual(metaTitle)
  expect(description).toEqual(metaDescription)
  expect(content).toEqual(body)
})

test('returns raw content when meta absent', () => {
  const markdown = '# This is our house'
  const { metadata, content } = parseMD(markdown)

  expect(metadata).toEqual({})
  expect(content).toEqual(markdown)
})
