const mongoose = require("mongoose");

const MONGO_URL = `mongodb+srv://mukhammadalime:1220711212131118@nasa-cluster.x5qk4.mongodb.net/nasa?retryWrites=true&w=majority`;

mongoose.connection.once("open", () =>
  console.log("MongoDB connection ready!")
);

mongoose.connection.on("error", (err) => console.error(err));

async function mongoConnect() {
  await mongoose.connect(MONGO_URL);
}

async function mongoDisconnect() {
  await mongoose.disconnect();
}

module.exports = {
  mongoConnect,
  mongoDisconnect,
};
