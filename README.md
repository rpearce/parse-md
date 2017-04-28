# parseMD

![](https://img.shields.io/npm/dm/parse-md.svg)
![](https://img.shields.io/npm/v/parse-md.svg)

This library exists as a way to pass a markdown file's content and have its metadata and markdown returned as an object containing `metadata` and `content` keys.

Note that it is not trying to do anything but solve the markdown metadata vs. content parsing problem and is _not parsing the markdown body, itself._ You can use something like [marked](https://github.com/chjj/marked) for that.

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

_Note: This tool expects that your Markdown metadata has `---` boundaries, as shown above._

## Usage

### Node/CommonJS
First, install it via NPM and save it to your project:

```sh
$ npm install parse-md --save
```

Import it where you need it:

```js
import parseMD from 'parse-md';
```

or if you are using < ES2015,

```js
var parseMD = require('parse-md');
```

and then pass it a Markdown file's content. Here is one method by which
you might do so:

```js
const fileContents = fs.readFileSync('posts/first.md', 'utf8');
const { metadata, content } = parseMD(fileContents);

console.log(metadata); // { title: 'Great first post', description: 'This is my first great post. Rawr' }
console.log(content); // "# My first post..."
```

## Contribute

1. Check out the [issues](https://github.com/rpearce/parse-md/issues)
1. Fork this repository
1. Clone your fork
1. Check out a feature branch (`$ git checkout -b my-feature`)
1. Make your changes and push your branch to your GitHub repo
1. Create a pull request from your branch to this repo's master
1. When all is merged, pull down the upstream changes to your master
