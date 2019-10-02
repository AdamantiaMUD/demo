const fs = require('fs-extra');
const path = require('path');

const dataDest = path.join(__dirname, '..', 'build', 'data');
const dataSrc = path.join(__dirname, '..', 'src', 'data');

fs.mkdirSync(dataDest, {recursive: true});
fs.copySync(dataSrc, dataDest);
