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

const getValue = (keyword) => {
  try {
        client.get(keyword, function(err, reply) {
          console.log("reply", reply);
        }).then(function(reply) {
          return reply;
        });
    } catch (err) {
        console.log(err);
    }
};

module.exports = {connectDB, getValue};