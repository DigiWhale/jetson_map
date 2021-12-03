const dataFolder = '/home/msrs/msrs_jetson/logs/';
const fs = require('fs');
const csv2geojson = require('csv2geojson');

const getDataFiles = () => {
  fs.readdir(dataFolder, (err, files) => {
    files.forEach(file => {
      if (!file.includes('._') && file.includes('.csv')) {
        console.log(dataFolder + file);
        var geoJson = csv2geojson.csv2geojson(dataFolder + file, {latfield: 'rpi_lat',lonfield: 'rpi_lon',delimiter: ','}, function(err, data) {
          console.log(data, err)
        });
      }
    });
  });
};

module.exports = getDataFiles;