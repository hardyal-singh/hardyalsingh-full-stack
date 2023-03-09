const mongoose = require("mongoose");
require("dotenv").config();
const database = process.env.DATABASE;
mongoose
  .connect(database)
  .then(() => {
    console.log("database connect");
  })
  .catch(() => {
    console.log("not connect");
  });
