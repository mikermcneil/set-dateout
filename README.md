# set-dateout

Like `setTimeout`, but for dates in the far future.
(specifically, this module overcomes the 32-bit integer overflow issue)


## Install

```shell
$ npm install set-dateout
```


## Use

```javascript
var setDateout = require('set-dateout');

setDateout(new Date('January 1, 2100'), function (){
  console.log('yeah!! it\'s a new century, baby!!');
});
```


## License

MIT

> solution modified from http://stackoverflow.com/a/18182660
