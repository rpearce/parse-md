# parseMD

[![All Contributors](https://img.shields.io/badge/all_contributors-3-orange.svg?style=flat-square)](#contributors-) [![npm version](https://img.shields.io/npm/v/parse-md.svg?style=flat-square)](https://www.npmjs.com/package/parse-md) [![npm downloads](https://img.shields.io/npm/dm/parse-md.svg?style=flat-square)](https://www.npmjs.com/package/parse-md) [![bundlephobia size](https://flat.badgen.net/bundlephobia/minzip/parse-md)](https://bundlephobia.com/result?p=parse-md)

This library exists as a way to pass a markdown file's content and have its
metadata and markdown returned as an object containing `metadata` and `content`
keys.

Note that it is not trying to do anything but solve the markdown metadata vs.
content parsing problem and is _not parsing the markdown body, itself._ You can
use something like [marked](https://github.com/chjj/marked) for that.

## What It Does

For example,

```md
---
title: This is a test
description: Once upon a time...
---
# Title of my great post
Lorem ipsum dolor...
```

would be parsed as

```js
{
  metadata: {
    title: "This is a test",
    description: "Once upon a time..."
  },
  content: "# Title of my great post\nLorem ipsum dolor..."
}
```

_Note: This tool expects that your Markdown metadata has `---` boundaries, as
shown above._

## Usage

Installation:

```sh
npm i parse-md
```

Import it where you need it, and then pass it a Markdown file's content:

```javascript
import fs from 'fs'
import parseMD from 'parse-md'

const fileContents = fs.readFileSync('posts/first.md', 'utf8')
const { metadata, content } = parseMD(fileContents)

console.log(metadata) // { title: 'Great first post', description: 'This is my first great post. Rawr' }
console.log(content) // "# My first post..."
```

## Links

* [`Changelog`](./CHANGELOG.md)
* [`Contributing`](./CONTRIBUTING.md)
* [`Code of Conduct`](./CODE_OF_CONDUCT.md)

## Note about CommonJS

If you need to CommonJS module support, use version `2.x`, and require it like
this:

```javascript
const parseMD = require('parse-md').default
```

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):
<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://robertwpearce.com"><img src="https://avatars2.githubusercontent.com/u/592876?v=4" width="100px;" alt=""/><br /><sub><b>Robert Pearce</b></sub></a><br /><a href="https://github.com/Robert Pearce <me@robertwpearce.com>/parse-md/commits?author=rpearce" title="Code">💻</a> <a href="https://github.com/Robert Pearce <me@robertwpearce.com>/parse-md/commits?author=rpearce" title="Documentation">📖</a> <a href="#example-rpearce" title="Examples">💡</a> <a href="#ideas-rpearce" title="Ideas, Planning, & Feedback">🤔</a> <a href="https://github.com/Robert Pearce <me@robertwpearce.com>/parse-md/commits?author=rpearce" title="Tests">⚠️</a></td>
    <td align="center"><a href="https://www.justinchan.ca"><img src="https://avatars3.githubusercontent.com/u/45015017?v=4" width="100px;" alt=""/><br /><sub><b>Justin Chan</b></sub></a><br /><a href="https://github.com/Robert Pearce <me@robertwpearce.com>/parse-md/issues?q=author%3Ajustinchan23" title="Bug reports">🐛</a></td>
    <td align="center"><a href="https://www.alexghr.me"><img src="https://avatars.githubusercontent.com/u/3816165?v=4" width="100px;" alt=""/><br /><sub><b>Alex Gherghisan</b></sub></a><br /><a href="https://github.com/Robert Pearce <me@robertwpearce.com>/parse-md/commits?author=alexghr" title="Code">💻</a> <a href="https://github.com/Robert Pearce <me@robertwpearce.com>/parse-md/issues?q=author%3Aalexghr" title="Bug reports">🐛</a> <a href="#ideas-alexghr" title="Ideas, Planning, & Feedback">🤔</a></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
