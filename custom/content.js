var fs = require('fs');

var docPath = './arches/docbox/'
var docs = fs.readdirSync(docPath);
var content = '# Introduction\n#' + fs.readFileSync('./arches/README.md', 'utf8') + '\n';
for (var i = 0; i < docs.length; i++) {
    content += fs.readFileSync(docPath + docs[i], 'utf8') + '\n';
}

module.exports = content;
