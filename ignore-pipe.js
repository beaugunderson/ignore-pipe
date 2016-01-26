#!/usr/bin/env node

'use strict';

var byline = require('byline');
var ignore = require('ignore');
var path = require('path');

require('epipebomb')();

var gitIgnore = ignore();

var thePath = '.gitignore';
if (process.argv.indexOf("-l") === -1) {
  thePath = path.join(process.env.HOME, thePath);
}

gitIgnore.addIgnoreFile(thePath);

byline(process.stdin).on('data', function (line) {
  gitIgnore.filter([line]).forEach(function (passed) {
    process.stdout.write(passed + '\n');
  });
});
