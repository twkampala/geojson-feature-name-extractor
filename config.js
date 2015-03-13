var fs = require('fs');

module.exports = function() {
    var rawJson = fs.readFileSync(__dirname + '/config.json');
    return JSON.parse(rawJson);
}