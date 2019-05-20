import cond, {hoc} from '../src';

const Pending = () => 'Loading. Please wait...';
const NonIdeal = () => 'It seems there is an error!';
const Empty = () => 'Please create something.';
const Unauthorized = () => 'Not authorized. Please sign in first.';
const Component = ({data}) => `This is the actual data: ${data}`;

const isPending = ({pending}) => pending;
const hasError = ({error}) => error;
const isEmpty = ({data = []}) =>
	typeof data.length !== 'undefined' && data.length === 0;
const isUnauthorized = ({user}) => !user;
const isOk = ({error, pending, data}) => !error && !pending && data.length > 0;

export const ComplexComponent = cond(
	[isPending, Pending],
	[hasError, NonIdeal],
	[isUnauthorized, Unauthorized],
	[isEmpty, Empty],
	[isOk, Component],
	NonIdeal,
);

export const SimpleComponent = cond([isOk, Component], NonIdeal);

export const WithHocComplexComponent = hoc(
	[isPending, Pending],
	[hasError, NonIdeal],
	[isUnauthorized, Unauthorized],
	[isEmpty, Empty],
	[isOk, Component],
)(NonIdeal);

export const WithHocSimpleComponent = hoc([isOk, Component])(NonIdeal);
