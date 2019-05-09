import {cond, init, last, map, T} from 'ramda';
import {createElement} from 'react';

const render = component => ({children, ...props}) =>
	createElement(component, props, children);

const getCases = args =>
	map(([predicate, component]) => [predicate, render(component)], init(args));

const getDefaultCase = args => [T, render(last(args))];

/**
 * Create a component based on conditions.
 *
 * @example
 * cond([predicate, Component], DefaultComponent)
 *
 * @returns {Function} React Component
 */
const conditionFn = (...args) => {
	const cases = getCases(args);
	const defaultCase = getDefaultCase(args);

	return cond([...cases, defaultCase]);
};

export default conditionFn;
