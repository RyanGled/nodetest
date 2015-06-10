var mach = require('mach');
var app  = mach.stack();
var Q    = require('q');

function sleep(millis) {
  var deferredResult = Q.defer();
  setTimeout(function() {
      deferredResult.resolve();
  }, millis);
  return deferredResult.promise;
};

app.run(Q.async(function* (request) {
  yield sleep(2000);
  return 'Good day to you sir';
}));

mach.serve(app, 3333);