const express = require("express");
const app = express();
const cors = require("cors");
require("./config/config.js");

const User = require("./db/user.js");
app.use(cors());
require("dotenv").config();

app.use(express.json());

const port = process.env.PORT;

app.post("/message", async (req, res) => {
  const { name, email, message } = req.body;
  let data=await User.findOne({email:email});
  if(data){ 
    res.send({massage:"massage alredy send"})
  }else{const user = new User({ name: name, email: email, message: message });
    await user
    .save()
    .then((result) => {
      res.send({ message: "send message successfully" ,result});
    })
    .catch((err) => {
      res.send({ message: "message not send" });
    });}
  
});

app.listen(port, () => {
  console.log(`its working on ${port}`);
});
