const express = require("express");
const app = express();
const port = 5000;
const mongoDb = require("./mongodb");
// const cors = require("cors");
mongoDb();

// app.use(cors());
try {
  app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:5173");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  });
} catch (err) {
  console.log("CORS_Cloud_ERROR : " + err);
}

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use(express.json());
app.use("/api", require("./Routes/DisplayData"));
app.use("/api", require("./Routes/CreateUser"));
app.use("/api", require("./Routes/addfav"));
app.use("/api", require("./Routes/getuser"));

app.listen(port, () => {
  console.log(`connected to port ${port}`);
});
