const mongoose = require("mongoose");
const mongoURI =
  "mongodb://cloudcompare:cloudcompare@ac-veqngqf-shard-00-00.ltrgyjy.mongodb.net:27017,ac-veqngqf-shard-00-01.ltrgyjy.mongodb.net:27017,ac-veqngqf-shard-00-02.ltrgyjy.mongodb.net:27017/CloudCompare?ssl=true&replicaSet=atlas-wvkdjw-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0";
const mongoDb = async () => {
  try {
    await mongoose.connect(mongoURI, { useNewUrlParser: true });
    console.log("MongoDB connected...");

    const fetched_data = await mongoose.connection.db
      .collection("data")
      .find({})
      .toArray(async (err) => {
        if (err) console.log(err);
        else {
          //   console.log(fetched_data);
        }
      });
    global.cloud_data = fetched_data;

    const fetched_companies = await mongoose.connection.db
      .collection("companies")
      .find({})
      .toArray((err) => {
        if (err) console.log(err);
        else {
          //   console.log(fetched_companies);
        }
      });
    global.cloud_companies = fetched_companies;

    const fetched_provider = await mongoose.connection.db
      .collection("companies")
      .find({})
      .toArray((err) => {
        if (err) console.log(err);
        else {
          // console.log(fetched_provider);
        }
      });
    global.cloud_provider = fetched_provider;

    const fetched_locations = await mongoose.connection.db
      .collection("location")
      .find({})
      .toArray((err) => {
        if (err) console.log(err);
        else {
          // console.log(fetched_locations);
        }
      });
    global.cloud_locations = fetched_locations;

    const fetched_storages = await mongoose.connection.db
      .collection("storages")
      .find({})
      .toArray((err) => {
        if (err) console.log(err);
        else {
          console.log(fetched_storages);
        }
      });
    global.cloud_storages = fetched_storages;
  } catch (error) {
    console.error("MongoDB connection error:", error);
  }
};

module.exports = mongoDb;
