# dom-ponyfills

DOM [ponyfills](https://github.com/sindresorhus/ponyfill) for closest, matches with d.ts.

[![Latest NPM release](https://img.shields.io/npm/v/dom-ponyfills.svg)](https://www.npmjs.com/package/dom-ponyfills)
![MIT License](https://img.shields.io/npm/l/dom-ponyfills.svg)

## Usage

### with NPM

```shell
$ npm install --save dom-ponyfills
```

```shell
import { closest, matches } from 'dom-ponyfills';

const matched: boolean = matches( el: Element, selector: string );
const element: Element | null = closest( el: Element, selector: string );
```
