const dataFolder = '/home/msrs/msrs_jetson/log_maps';
const fs = require('fs');

const getDataFiles = () => {
  fs.readdir(dataFolder, (err, files) => {
    files.forEach(file => {
      if (!file.includes('._')) {
        console.log(file);
      }
      // console.log(file);
    });
  });
};

module.exports = getDataFiles;