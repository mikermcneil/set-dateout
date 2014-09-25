/**
 * setDateout()
 *
 * Solves the 32-bit integer overflow issue.
 * (code modified from http://stackoverflow.com/a/18182660)
 *
 * @param  {Function} fn
 * @param  {Date}   date
 * @return {Timeout}
 */

module.exports = function setDateout(fn, date) {

  // Cast `date` to a javascript Date
  if (typeof date !== 'object' || !date instanceof Date) {
    date = new Date(date);
  }

  var now = (new Date()).getTime();
  var then = date.getTime();
  var msDiff = Math.max((then - now), 0);


  //setTimeout limit is MAX_INT32=(2^31-1)
  if (msDiff > 0x7FFFFFFF) {
    // console.log('Scheduling a timer for %s', date);
    return setTimeout(function() {setDateout(fn, date);}, 0x7FFFFFFF);
  }
  else {
    // console.log('Scheduling a timer in %s ms', msDiff);
    return setTimeout(fn, msDiff);
  }
};
