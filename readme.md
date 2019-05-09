# React Cond

> Create components based on conditions, with ease.

[![NPM version](https://img.shields.io/npm/v/@mariosant/react-cond.svg)](https://www.npmjs.com/package/@mariosant/react-cond)
[![Build Status](https://travis-ci.org/mariosant/react-cond.svg?branch=master)](https://travis-ci.org/mariosant/react-cond)

## Installation

Add `@mariosant/react-cond` to your `package.json`.

```bash
$ npm install @mariosant/react-cond
```

You can now import the module and use it like

```javascript
import cond from '@mariosant/react-cond';

// Components
const Pending = () => 'Loading. Please wait...';
const NonIdeal = () => 'It seems there is an error!';
const Component = ({data}) => `This is the actual data: ${data}`;

// Predicates
const isPending = ({pending}) => pending;
const hasError = ({error}) => error;
const isUnauthorized = ({user}) => !user;
const isOk = ({error, pending, data}) => !error && !pending && data;

// Final complex component
export const ComplexComponent = cond(
	[isPending, Pending],
	[hasError, NonIdeal],
	[isOk, Component],
	NonIdeal,
);
```

## Usage

WIP

## Development

WIP

## Meta

Marios Antonoudiou – [@marios_ant](https://twitter.com/marios_ant) – mariosant@sent.com

Distributed under the MIT license.

[https://github.com/mariosant/react-cond](https://github.com/mariosant/react-cond)

## Contributing

1. Fork it (<https://github.com/mariosant/react-cond/fork>)
2. Create your feature branch (`git checkout -b feature/fooBar`)
3. Commit your changes using a semantic commit message.
4. Push to the branch (`git push origin feature/fooBar`)
5. Create a new Pull Request
