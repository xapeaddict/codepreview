import mongoose = require('mongoose');

export default (db: string) => {
  const connect = () => {
    mongoose
      .connect(db, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
      })
      .then(() => {
        return console.log(`Successfully connected to ${db}`);
      })
      .catch((err) => {
        console.log('Error connecting to database: ', err);
        return process.exit(1);
      });
  };
  connect();

  mongoose.connection.on('disconnected', connect);
};
