/**
 * Solves the 32-bit integer overflow issue.
 * (code modified from http://stackoverflow.com/a/18182660)
 *
 * @param  {[type]}   date [description]
 * @param  {Function} fn   [description]
 * @return {[type]}        [description]
 */

module.exports = function runAtDate(date, fn) {
  // console.log('runAtDate()', date, fn);

  // Cast `date` to a javascript Date
  if (typeof date !== 'object' || !date instanceof Date) {
    date = new Date(date);
  }

  var now = (new Date()).getTime();
  var then = date.getTime();
  var diff = Math.max((then - now), 0);


  //setTimeout limit is MAX_INT32=(2^31-1)
  if (diff > 0x7FFFFFFF) {
    // console.log('Scheduling a timer for %s', date);
    return setTimeout(function() {runAtDate(date, fn);}, 0x7FFFFFFF);
  }
  else {
    // console.log('Scheduling a timer in %s ms', diff);
    return setTimeout(fn, diff);
  }
};
