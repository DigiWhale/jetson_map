const path = require('path');
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
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
connectDB();
getDataFiles()

app.listen(PORT, () => console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`));
