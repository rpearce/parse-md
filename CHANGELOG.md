# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [3.0.2] - 2022-01-08

### Fixed

* Actually drop commonjs support
* Drop `tslib` dependency
* Fix typescript declaration importing `js-yaml`

## [3.0.1] - 2022-01-04

### Fixed

* Conditional exports fields not pointing to the right files
* Set `"type": "module"` in package.json since we can't output `.mjs` with TS

## [3.0.0] - 2022-01-02

### Changed

* Rewrote in TypeScript (PR #27)
* BREAKING CHANGE: commonjs no longer outputted in v3.x

## [2.0.5] - 2021-12-31

### Fixed

* Can't use properly inside a node ESM package (#24)

## [2.0.4] - 2020-01-05

### Changed

* bump devDependencies

## [2.0.3] - 2019-12-05

### Changed

* `dist/` output now contains `esm/` and `cjs/` folders with `index.js` (and
  `index.map.js`) instead of `.cjs.js` and `.esm.js` files
* fixed copy-paste issues in `rollup.config.js` & `package.json`
* bumped a number of dev dependencies

## [2.0.1] - 2019-09-11

### Changed

* bumped `sspk` for security fix

## [2.0.0] - 2019-09-11

### Changed

* using rollup to built ESM & commonjs output to `dist/` folder
* security fixes
* new dev experience
