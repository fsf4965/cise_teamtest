const express = require('express');
const connectDB = require('./config/db');
var cors = require('cors');

//
/* This code have issue
const entry = require('./routes/api/entries');
*/
const app = express();

// Connect Database
connectDB();

app.use(express.json({ extended: false }));

app.use(cors({ origin: true, credentials: true }));

app.get('/', (req, res) => res.send('Hello world!'));

app.use('/api/entries', entry);

const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on port ${port}`));