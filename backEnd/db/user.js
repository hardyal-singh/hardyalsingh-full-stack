const mongoose = require("mongoose");

const user_schema=mongoose.Schema({
  name: { type: "string", required: true },
  email: { type: "string", required: true },
  message: { type: "string", required: true },
});

const user=mongoose.model("MESSAGE",user_schema);

module.exports=user;
