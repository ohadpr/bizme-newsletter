// Include our 'js-yaml' module.
var yaml = require("js-yaml");
var fs = require('fs');
var fsPath = require('fs-path');
var mustache = require('mustache');

var newsletterDir = 'newsletters';
var outputDir = 'web/newsletters/';

// scan the 'newsletters' folder
var files = fs.readdirSync(newsletterDir);
var newsletters = [];

for (var i in files) {
    var fileName = newsletterDir + '/' + files[i];
    console.log('processing ' + fileName)
    var data = fs.readFileSync(fileName);
    doc = yaml.safeLoadAll(data)[0];
    newsletters.push(doc);
}

// render listing
var template = fs.readFileSync('templates/newsletters.html').toString();
var result = mustache.render(template, {newsletters:newsletters});
fsPath.writeFileSync(outputDir + 'index.html', result);

// render newsletters
template = fs.readFileSync('templates/bizme-newsletter.html').toString();
for (var i in newsletters) {
    // convert the 'closing' field from a string to an array of strings based on line breaks
    var data = newsletters[i];
    data['closing'] = data['closing'].split(/[\r\n]+/)
                        .map(function(line) { return line });

    var result = mustache.render(template, data);
    fsPath.writeFileSync(outputDir + data['id'] + '.html', result);
}
