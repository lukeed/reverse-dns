const test = require('tape');
const fn = require('../');

const foo = 'https://example.com';
const bar = 'http://bar.example.com';
const baz = 'http://example.com/abc/123';

test('must be string', t => {
	t.plan(1);
	t.throws(fn, /TypeError/);
});

test('basic: default `www`', t => {
	t.equal(fn(foo), 'com.example.www');
	t.end();
});

test('basic: subdomain', t => {
	t.equal(fn(bar), 'com.example.bar');
	t.end();
});

test('basic: ignore pathnames', t => {
	t.equal(fn(baz), 'com.example.www');
	t.end();
});

test('options: `name`', t => {
	t.equal(fn(foo, {name: 'foo'}), 'com.example.foo');
	t.end();
});

test('options: `name` overwrite', t => {
	t.equal(fn(bar, {name: 'hello'}), 'com.example.hello');
	t.end();
});

test('options: `glue`', t => {
	t.equal(fn(foo, {glue: '-'}), 'com-example-www');
	t.end();
});
