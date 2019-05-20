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

The package exports two main components you can use.

```javascript
import cond, {hoc} from '@mariosant/react-cond';
```

The `cond` function takes a list of predicates and a default component if everything else fails.

```javascript
const CommentsList = cond(
	[isPending, Pending], // Will render Pending if isPending returns true.
	[hasError, NonIdeal], // Will render NonIdeal if hasError returns true.
	[isOk, Component], // Will render Component if isOk returns true.
	NonIdeal, // If everything above fails, NonIdeal component will be rendered instead.
);
```

A predicate is a function. It will receive `props` and if it returns a truthy result, the associated component will be rendered.

For example,

```javascript
import cond from '@mariosant/react-cond'

const isPending = ({pending}) => pending;
const Pending = () => <div>'Loading. Please wait.'</div>;

return cond(
	[isPending, Pending],
	...
);
```

For the developer's ease, a high order component version has been included. It can be easily combined with Recompose's `compose`.

```javascript
import {hoc as cond} from '@mariosant/react-cond';
import {compose, withProps} from 'recompose';

return compose(
	withProps({something: true}),
	cond([isPending, Pending], [isOk, Component]),
)(DefaultComponent);
```

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
