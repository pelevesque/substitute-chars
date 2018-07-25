[![Build Status](https://travis-ci.org/pelevesque/substitute-chars.svg?branch=master)](https://travis-ci.org/pelevesque/substitute-chars)
[![Coverage Status](https://coveralls.io/repos/github/pelevesque/substitute-chars/badge.svg?branch=master)](https://coveralls.io/github/pelevesque/substitute-chars?branch=master)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

# substitute-chars

Substitutes chars in a string.

## Node Repository

[https://www.npmjs.com/package/@pelevesque/substitute-chars](https://www.npmjs.com/package/@pelevesque/substitute-chars)

## Installation

`npm install @pelevesque/substitute-chars`

## Tests

### Standard Style & Unit Tests

`npm test`

### Unit Tests & Coverage

`npm run cover`

## Usage

```js
const substituteChars = require('@pelevesque/substitute-chars')
const str = 'abbcabcc'
const substitutions = [
  ['a', '1'],
  ['b', '2'],
  ['c', '3']
]
const result = substituteChars(str, substitutions)
// result === '12231233'
```
