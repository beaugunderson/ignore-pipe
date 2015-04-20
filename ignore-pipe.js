#!/usr/bin/env node

'use strict';

var byline = require('byline');
var ignore = require('ignore');
var path = require('path');

require('epipebomb')();

var gitIgnore = ignore();

gitIgnore.addIgnoreFile(path.join(process.env.HOME, '.gitignore'));

byline(process.stdin).on('data', function (line) {
  gitIgnore.filter([line]).forEach(function (passed) {
    process.stdout.write(passed + '\n');
  });
});
