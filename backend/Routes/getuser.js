const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const mongoURI =
  "mongodb://cloudcompare:cloudcompare@ac-veqngqf-shard-00-00.ltrgyjy.mongodb.net:27017,ac-veqngqf-shard-00-01.ltrgyjy.mongodb.net:27017,ac-veqngqf-shard-00-02.ltrgyjy.mongodb.net:27017/CloudCompare?ssl=true&replicaSet=atlas-wvkdjw-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0";

router.post(
  "/getuser",

  async (req, res) => {
    try {
      await mongoose.connect(mongoURI);
      console.log("MongoDb connected...");

      const user_data = await mongoose.connection.db
        .collection("users")
        .find({})
        .toArray(async (err) => {
          if (err) console.log("fetch error : ", err);
        });
      global.user_data = user_data;
      // console.log("data is : ", user_data);
      res.send(user_data);
    } catch (error) {
      console.log("MongoDB connection error:", error);
    }
  }
);

module.exports = router;
