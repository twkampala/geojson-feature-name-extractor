#!/usr/bin/env node

var fs = require('fs');
var config = require('./config.js');

fs.readFile(__dirname + '/' + config().geoJSONFileName, 'utf8', function(err, districts) {
    if (err) {
        return console.log(err);
    }
    var districtNames = JSON.parse(districts).features.map(function(feature){
        return feature.properties.District;
    }).join(',');

    fs.writeFile('./district_names.json', districtNames, function(err) {
        if(err) {
            console.log(err);
        }
    });
});
