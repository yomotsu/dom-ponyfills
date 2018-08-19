# tiny-dom-utils

DOM utils and polyfills for closest, matches

[![Latest NPM release](https://img.shields.io/npm/v/tiny-dom-utils.svg)](https://www.npmjs.com/package/tiny-dom-utils)
![MIT License](https://img.shields.io/npm/l/tiny-dom-utils.svg)

## Usage

### with NPM

```shell
$ npm install --save tiny-dom-utils
```

```shell
import { closest, matches } from 'tiny-dom-utils';

const matched: boolean = matches( el: Element, selector: string );
const element: Element | null = closest( el: Element, selector: string );
```
