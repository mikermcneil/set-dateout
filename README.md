# [<img title="set-dateout" src="http://static-ws1.storeseen.net/nauticalbookstore/images/partnumber/thumb/BAC3130.gif" width="75px" alt="icon of a life preserver"/>](https://github.com/mikermcneil/set-dateout) set-dateout

[![Bower version](https://badge.fury.io/bo/set-dateout.png)](http://badge.fury.io/bo/set-dateout)
[![NPM version](https://badge.fury.io/js/set-dateout.png)](http://badge.fury.io/js/set-dateout) &nbsp; &nbsp;
[![Build Status](https://travis-ci.org/mikermcneil/set-dateout.svg?branch=master)](https://travis-ci.org/mikermcneil/set-dateout)

Like `setTimeout`, but for dates in the far future.
(specifically, this module overcomes the 32-bit integer overflow issue)


## Install

```shell
$ npm install set-dateout
```


## Use

```javascript
var setDateout = require('set-dateout');

setDateout(function (){
  console.log('yeah!! it\'s a new century, baby!!');
}, new Date('January 1, 2100'));
```


## License

MIT

> solution modified from http://stackoverflow.com/a/18182660
