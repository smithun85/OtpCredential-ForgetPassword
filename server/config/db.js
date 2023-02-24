const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
const connectDatabase = async () => {
  const { connection } = await mongoose.connect(process.env.MONGO_URI);
  try {
    console.log(`connection stablished: ${connection.host}`);
  } catch (err) {
    console.log(err);
  }
};

module.exports = connectDatabase;
