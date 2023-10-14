const mongoose = require('mongoose');

mongoose.set('strictQuery', false);
mongoose.connect(process.env.MONGO_URL, { useUnifiedTopology: true, useNewUrlParser: true });

const connection = mongoose.connection;

connection.on('connected', () => {
  console.log('Mongo DB Connection Successfull');
});
connection.on('error', (error) => {
  console.log(error);
});
