const mongoose = require('mongoose');

const connectMongo = (mongoURI) => {

  mongoose.connect(mongoURI, { autoIndex: true});
  mongoose.connection.on('error', (err) => {
    console.log(err);
    process.exit();
  });

};

module.exports = {
  connectMongo,
};