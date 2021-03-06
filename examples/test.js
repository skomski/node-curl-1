// Generated by ToffeeScript 1.2.0-0
(function() {
  var curl, fs, p, url, util,
    _this = this;

  curl = require('../index');

  fs = require('fs');

  util = require('util');

  p = console.info;

  url = 'www.google.com';

  curl(url, {
    HTTPHEADER: 'BAR',
    VERBOSE: 1,
    COOKIEFILE: 'node-curl-cookie.txt'
  }, function(_$$_err, _$$_res) {
    var err, res;
    err = _$$_err;
    res = _$$_res;
    p("\x1b[33m" + util.inspect(res.info('COOKIELIST')) + "\x1b[0m");
    url = 'www.yahoo.com';
    return curl(url, {
      HTTPHEADER: ['foo', 'bar'],
      VERBOSE: 1,
      COOKIEFILE: 'node-curl-cookie.txt',
      RAW: 1
    }, function(_$$_err, _$$_res) {
      err = _$$_err;
      res = _$$_res;
      p("\x1b[33m" + util.inspect(res.info('COOKIELIST')) + "\x1b[0m");
      p(res.body);
      return fs.unlink('node-curl-cookie.txt');
    });
  });

}).call(this);
