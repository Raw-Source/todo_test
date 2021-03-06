const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const cors = require('cors')

dotenv.config({ path: './config/config.env' });

const connectDB = require('./config/db');
connectDB();


const list = require('./routes/list');


const app = express();
app.use(express.json())
app.use(cors())

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}


app.use('/api/v1/list', list);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));