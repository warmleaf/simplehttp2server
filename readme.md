# simplehttp2server [![Build Status](https://travis-ci.org/1000ch/simplehttp2server.svg?branch=master)](https://travis-ci.org/1000ch/simplehttp2server)

> simplehttp2server serves the current directory on an HTTP/2.0 capable server. This server is for development purposes only.

## Change log

### 2.1.0
- cancel fetch sh2s when has downloaded

## Install

```
$ npm install --save wl-simplehttp2server
```


## Usage

```js
const execFile = require('child_process').execFile;
const simplehttp2server = require('simplehttp2server');

execFile(simplehttp2server, err => {
  console.log('Simple http2 server is starting!');
});
```


## CLI

```
$ npm install --global simplehttp2server
```

```
$ simplehttp2server --help
```


## License

Apache 2
