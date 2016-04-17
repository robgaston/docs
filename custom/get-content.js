var fs = require('fs');
var mustache = require('mustache');

var contentTemplate = fs.readFileSync('./custom/content-template.js', 'utf8');
var docs = fs.readdirSync('./arches/docbox/');
var content = mustache.render(contentTemplate, {
    docs: docs
});

fs.writeFileSync('./custom/content.js', content);
