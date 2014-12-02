#!/usr/bin/env node

'use strict';

var byline = require('byline');
var ignore = require('ignore');
var path = require('path');

var gitIgnore = ignore();

gitIgnore.addIgnoreFile(path.join(process.env.HOME, '.gitignore'));

process.stdin.resume();
process.stdin.setEncoding('utf8');

byline(process.stdin).on('data', function (line) {
  gitIgnore.filter([line]).forEach(function (passed) {
    process.stdout.write(passed + '\n');
  });
});
