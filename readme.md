# reverse-dns [![Build Status](https://travis-ci.org/lukeed/reverse-dns.svg?branch=master)](https://travis-ci.org/lukeed/reverse-dns)

> Get the [reverse domain name notation](https://en.wikipedia.org/wiki/Reverse_domain_name_notation) (or "reverse DNS") for a site.


## Install

```
$ npm install --save reverse-dns
```


## Usage

```js
const reverseDns = require('reverse-dns');

reverseDns('https://foo.example.com');
//=> 'com.example.foo'

reverseDns('https://example.com');
//=> 'com.example.www'

reverseDns('https://example.com', {name: 'bar'});
//=> 'com.example.bar'

reverseDns('https://bar.example.com', {name: 'hello'});
//=> 'com.example.hello'

reverseDns('https://example.com', {glue: '-'});
//=> 'com-example-www'
```


## API

### reverseDns(input, [options])

#### input

Type: `string`

The website URL to parse.

#### options.glue

Type: `string`<br>
Default: `.`

The delimiter for joining domain segments.

#### options.name

Type: `string`<br>
Default: `www`

The "name" of the domain product. Defaults to the subdomain (or "www") if found. Setting this will overwrite the value obtained from the `input`'s subdomain.


## License

MIT © [Luke Edwards](https://lukeed.com)
