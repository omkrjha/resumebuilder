const express = require('express');
const app = express();
require('dotenv').config();
const dbConnect = require('./dbConnect');
app.use(express.json());

const port = process.env.PORT || 5034;

const userRoute = require('./routes/userRoute');
const path = require('path');

app.use('/api/user/', userRoute);

// static files
if (process.env.NODE_ENV === 'production') {
  app.use('/', express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client/build/index.html'));
  });
}

app.get('/', (req, res) => res.send('Hello World'));
app.listen(port, () => console.log(`server is running on port ${port}`));
