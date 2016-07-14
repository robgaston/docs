var fs = require('fs-extra');
var mustache = require('mustache');

var contentTemplate = fs.readFileSync('./custom/content-template.js', 'utf8');
var docs = fs.readdirSync('./arches/docbox/');
var i = docs.indexOf('img');
if (i !== -1) docs.splice(i, 1);

var content = mustache.render(contentTemplate, {
    docs: docs
});

fs.writeFileSync('./custom/content.js', content);
fs.removeSync('./img');
fs.copySync('./arches/docbox/img/', './img');
