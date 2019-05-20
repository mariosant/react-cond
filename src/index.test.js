import 'jest-dom/extend-expect'; // eslint-disable-line import/no-unassigned-import
import React from 'react';
import {render, cleanup} from 'react-testing-library';
import {
	ComplexComponent,
	SimpleComponent,
	WithHocComplexComponent,
	WithHocSimpleComponent,
} from '../fixtures/complex-component';

afterEach(cleanup);

test('works as expected', () => {
	const {queryByText} = render(<ComplexComponent />);
	const result = queryByText('Not authorized. Please sign in first.');

	expect(result).not.toBe(null);
});

test('default component', () => {
	const {queryByText} = render(<SimpleComponent data={1} />);
	const result = queryByText('It seems there is an error!');

	expect(result).not.toBe(null);
});

test('props are passed correctly', () => {
	const {queryByText} = render(<SimpleComponent data={[1, 2, 3]} />);
	const result = queryByText('This is the actual data: 1,2,3');

	expect(result).not.toBe(null);
});

test('hoc works as expected', () => {
	const {queryByText} = render(<WithHocComplexComponent />);
	const result = queryByText('Not authorized. Please sign in first.');

	expect(result).not.toBe(null);
});

test('hoc default component', () => {
	const {queryByText} = render(<WithHocSimpleComponent data={1} />);
	const result = queryByText('It seems there is an error!');

	expect(result).not.toBe(null);
});

test('hoc props are passed correctly', () => {
	const {queryByText} = render(<WithHocSimpleComponent data={[1, 2, 3]} />);
	const result = queryByText('This is the actual data: 1,2,3');

	expect(result).not.toBe(null);
});
