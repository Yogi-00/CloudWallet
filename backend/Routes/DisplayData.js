const express = require("express");
const router = express.Router();

router.post("/CloudData", (req, res) => {
  try {
    res.send([
      global.cloud_data,
      global.cloud_companies,
      global.cloud_provider,
      global.cloud_locations,
      global.cloud_storages,
    ]);
  } catch (err) {
    console.error(err);
    res.send("server error");
  }
});

module.exports = router;
