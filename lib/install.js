'use strict';

const suffix = require('./suffix.js');
const fs = require('fs');
const path = require('path');
const bin = require('.');

const extension = process.platform === 'win32' ? '.exe' : '';
const filename = `simplehttp2server${suffix()}${extension}`;
try {
    const file = fs.readFileSync(path.resolve(__dirname, '../vendor/', filename))
} catch (error) {
    bin.download();
}