var fs = require('fs');

/**
 * This file exports the content of your website, as a bunch of concatenated
 * Markdown files. By doing this explicitly, you can control the order
 * of content without any level of abstraction.
 *
 * Using the brfs module, fs.readFileSync calls in this file are translated
 * into strings of those files' content before the file is delivered to a
 * browser: the content is read ahead-of-time and included in bundle.js.
 */
var docs = fs.readdirSync('./arches/docbox/');
var content = '# Introduction\n#' + fs.readFileSync('./arches/README.md', 'utf8') + '\n';

content += fs.readFileSync('./arches/docbox/001_system_design.md', 'utf8') + '\n';
content += fs.readFileSync('./arches/docbox/002_installation.md', 'utf8') + '\n';
content += fs.readFileSync('./arches/docbox/003_configuration_customization.md', 'utf8') + '\n';
content += fs.readFileSync('./arches/docbox/004_api.md', 'utf8') + '\n';
content += fs.readFileSync('./arches/docbox/005_user_guides.md', 'utf8') + '\n';
content += fs.readFileSync('./arches/docbox/006_glossary.md', 'utf8') + '\n';

module.exports = content;
