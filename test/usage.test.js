/**
 * Module dependencies
 */

var moment = require('moment');
var setDateout = require('../');



describe('present: `new Date()` (i.e. "now")', function (){

  it('should not throw', function () {
    setDateout(function noop(){}, new Date());
  });

  it('should not throw after a couple of seconds', function (done) {
    // instruct mocha to wait 2.5 seconds (overrides the default 2s)
    this.timeout(2500);
    setTimeout(function after_a_couple_of_seconds () {
      done();
    }, 2000);

    setDateout(function noop(){}, new Date());
  });

  it('should run the function within 1ms', function (done){
    var isDone;

    setDateout(function should_run_within_1ms(){
      if (isDone) return;
      isDone = true;
      done();
    }, new Date());

    setTimeout(function(){
      if (isDone) return;
      isDone = true;
      return done(new Error('Did not run function in time!'));
    }, 1);
  });

});




describe('past: new Date((new Date().getTime()-1000))', function (){

  it('should not throw', function () {
    setDateout(function noop(){}, new Date((new Date().getTime()-1000)));
  });

  it('should not throw after a couple of seconds', function (done) {
    // instruct mocha to wait 2.5 seconds before timing out
    // (overrides the default 2s)
    this.timeout(2500);

    setTimeout(function after_a_couple_of_seconds () {
      done();
    }, 2000);

    setDateout(function noop(){}, new Date((new Date().getTime()-1000)));
  });

  it('should run the function within 1ms', function (done){
    var isDone;

    setDateout(function should_run_within_1ms(){
      if (isDone) return;
      isDone = true;
      done();
    }, new Date((new Date().getTime()-1000)));

    setTimeout(function(){
      if (isDone) return;
      isDone = true;
      return done(new Error('Did not run function in time!'));
    }, 1);
  });

});




describe('future: new Date((new Date().getTime()+1000))', function (){

  it('should not throw', function () {
    setDateout(function noop(){}, new Date((new Date().getTime()+1000)));
  });

  it('should not throw after a couple of seconds', function (done) {
    // instruct mocha to wait 2.5 seconds before timing out
    // (overrides the default 2s)
    this.timeout(2500);

    setTimeout(function after_a_couple_of_seconds () {
      done();
    }, 2000);

    setDateout(function noop(){}, new Date((new Date().getTime()+1000)));
  });

  it('should run the function in exactly 1 second', function (done){
    var isDone;
    var minTimeElapsed;

    setDateout(function should_run_within_1ms(){
      if (isDone) return;
      isDone = true;
      if (!minTimeElapsed) {
        return done(new Error('Function fired too early!'));
      }
      done();
    }, new Date((new Date().getTime()+1000)));

    setTimeout(function(){
      if (isDone) return;
      isDone = true;
      return done(new Error('Did not run function in time!'));
    }, 1001);

    setTimeout(function(){
      minTimeElapsed = true;
    }, 999);
  });

});





describe('future: new Date((new Date().getTime()+2000))', function (){

  // instruct mocha to wait 2.5 seconds before timing out
  // (overrides the default 2s)
  this.timeout(2500);

  it('should not throw', function () {
    setDateout(function noop(){}, new Date((new Date().getTime()+2000)));
  });

  it('should not throw after a couple of seconds', function (done) {

    setTimeout(function after_a_couple_of_seconds () {
      done();
    }, 2000);

    setDateout(function noop(){}, new Date((new Date().getTime()+2000)));
  });

  it('should run the function in exactly 2 seconds', function (done){
    var isDone;
    var minTimeElapsed;

    setDateout(function should_run_within_1ms(){
      if (isDone) return;
      isDone = true;
      if (!minTimeElapsed) {
        return done(new Error('Function fired too early!'));
      }
      done();
    }, new Date((new Date().getTime()+2000)));

    setTimeout(function(){
      if (isDone) return;
      isDone = true;
      return done(new Error('Did not run function in time!'));
    }, 2001);

    setTimeout(function(){
      minTimeElapsed = true;
    }, 1999);
  });

});
