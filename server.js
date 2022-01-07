const path = require('path');
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const database = require('./config/db');
const getDataFiles = require('./data_files');

// Load env variables
dotenv.config({ path: './config/config.env' });

const app = express();

// Body parser
app.use(express.json());

// Enable CORS
app.use(cors());

const PORT = process.env.PORT || 5000;

// Connect to database
database.connectDB();

//get list of data files
// getDataFiles()

app.listen(PORT, () => console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`));

app.get('/', function (req, res) {
  database.getValue('jetson_rpi_lat').then(lat => {
    database.getValue('jetson_rpi_lng').then(lng => {
      res.json({"lat":lat, "lon":lng})
    })
  })
})