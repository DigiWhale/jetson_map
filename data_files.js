const dataFolder = '/home/msrs/msrs_jetson/log_maps';
const fs = require('fs');
const csv2geojson = require('csv2geojson');

const getDataFiles = () => {
  fs.readdir(dataFolder, (err, files) => {
    files.forEach(file => {
      if (!file.includes('._')) {
        console.log(file);
        var geoJson = csv2geojson.csv2geojson(dataFolder + file, function(err, data) {
          console.log(data)
        });
      }
    });
  });
};

module.exports = getDataFiles;