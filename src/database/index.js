const mongoose = require("mongoose");

const connect = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1/hoc_be", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected!");
  } catch (error) {
    console.log("Connect db is fail!");
    throw error;
  }
};

module.exports = { connect };
