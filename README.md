# ParseMD
This library exists as a way to pass a read markdown file, have its metadata returned as an object and its content returned as HTML.

Note that it is not trying to do anything but solve the markdown metadata vs. content parsing problem.

Thanks to the [marked project](https://github.com/chjj/marked) for making it easy for us to compile Markdown to HTML.

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
  content: "<h1>Title of my great post</h1><p>Lorem ipsum dolor...</p>"
}
```

## Usage

### Node/Browserify/CommonJS
First, install it via NPM and save it to your project:

```sh
$ npm install parse-md --save
```

Import it where you need it:

```js
import ParseMD from 'parse-md';
```

or if you are using < ES2015,

```js
var ParseMD = require('parse-md');
```

and then pass it a Markdown file's content. Here is one method by which
you might do so:

```js
const fileContents = fs.readFileSync('posts/first.md', 'utf8'),
      { metadata, content } = ParseMD(fileContents);

console.log(metadata); // { title: 'Great first post', description: 'This is my first great post. Rawr' }
console.log(content); // "<h1>...</h1>"
```

### Global Variable
Simply include the `dist` script on the page to gain access to it. There are development & production builds in the `dist` folder.

```html
<!DOCTYPE html>
<html>
  <head></head>
  <body>
    <script src="path/to/parse-md.js"></script>
  </body>
</html>
```

## Contribute

1. Check out the [issues](https://github.com/rpearce/parse-md/issues)
1. Fork this repository
1. Clone your fork
1. Check out a feature branch (`$ git checkout -b my-feature`)
1. Make your changes and push your branch to your GitHub repo
1. Create a pull request from your branch to this repo's master
1. When all is merged, pull down the upstream changes to your master
