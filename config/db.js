const redis = require('ioredis');
const dotenv = require('dotenv');
dotenv.config({ path: './config/config.env' });
host = process.env.REDIS_HOST;
port = process.env.REDIS_PORT;
password = process.env.REDIS_PASSWORD;
database = process.env.REDIS_DB;
const client = new redis({port: port, host: host, password: password, db: database});

const connectDB = () => {
  try {
    client.on('connect', () => {
      console.log('Redis connected.');
    });
    client.on('error', err => {
      console.log('Error ' + err);
    });
  } catch (err) {
      console.log(err);
  }
};

const getValue = (key) => {
  client.get(key, function(err,result){
    if (err) {
      return reject(err);
    }
    return resolve(result);
  });
};

module.exports = {connectDB, getValue};