const mongoose = require("mongoose");

mongoose.set("strictQuery", false);

mongoose.connect(process.env.MONGODB_URI || "mongodb+srv://joeprathap123:joeprathap123@cluster0.qgfc2.mongodb.net/fitness", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}, err => {
  if (err) throw err;
  console.log('Connected to MongoDB!')
}

);

module.exports = mongoose.connection;


// mongodb+srv://sivasriram1206:siva1206@fitness.pzycuer.mongodb.net
//siva db