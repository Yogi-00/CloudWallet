const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const jwtSecret = "ThisIsSYJFoodApp";

router.post(
  "/createuser",
  [
    body("name", "name should be min 5 characters").isLength({ min: 5 }),
    body("email").isEmail(),
    body("password", "password should be min 5 characters").isLength({
      min: 5,
    }),
  ],
  async (req, res) => {
    const err = validationResult(req);
    if (!err.isEmpty()) {
      return res.status(400).json({ errors: err.array() });
    }

    const salt = await bcrypt.genSalt(10);
    let secPassword = await bcrypt.hash(req.body.password, salt);

    try {
      response = await User.create({
        name: req.body.name,
        password: secPassword,
        email: req.body.email,
        role: req.body.role,
      }).then(() => {
        res.json({ success: true });
      });
      // if (response.ok) {
      //   res.json({ success: true });
      // } else {
      //   res.json({ success: false });
      // }
    } catch (error) {
      console.log(error);
      res.json({ success: false });
    }
  }
);

router.post(
  "/loginuser",
  [
    body("email").isEmail(),
    body("password", "password should be min 5 characters").isLength({
      min: 5,
    }),
  ],
  async (req, res) => {
    const err = validationResult(req);
    if (!err.isEmpty()) {
      return res.status(400).json({ errors: err.array() });
    }
    let email = req.body.email;
    let password = req.body.password;
    try {
      let userdata = await User.findOne({ email });
      const pwdCompare = await bcrypt.compare(password, userdata.password);
      if (!userdata) {
        return res.status(400).json({ errors: "Email not matched" });
      } else if (!pwdCompare) {
        return res.status(400).json({ errors: "Wrong Password" });
      } else {
        const data = {
          user: {
            id: userdata.id,
          },
        };
        const authToken = jwt.sign(data, jwtSecret);
        res.json({ success: true, authToken: authToken });
      }
    } catch (error) {
      console.log(error);
      res.json({ success: false });
    }
  }
);

// router.post('/addfav',

//   async (req,res) => {

//       const { email, roleName, fieldName } = req.body;
//       const mongoURI =
//       "mongodb://cloudcompare:cloudcompare@ac-veqngqf-shard-00-00.ltrgyjy.mongodb.net:27017,ac-veqngqf-shard-00-01.ltrgyjy.mongodb.net:27017,ac-veqngqf-shard-00-02.ltrgyjy.mongodb.net:27017/CloudCompare?ssl=true&replicaSet=atlas-wvkdjw-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0";

//       if (!email || !roleName ) {
//           console.log(roleName)
//           return res.status(400).send('email and roleName are required');
//       }

//       try {
//           await mongoose.connect(mongoURI);
//           const result = await mongoose.connection.db.collection('users').findOneAndUpdate(
//               { email: email },
//               { $addToSet: { favorites: {role : roleName, field : fieldName}} },
//               { returnOriginal: false }
//           )
//           .then(
//               () => {
//                   res.status(200).send({success : true})
//               }
//           )

//       } catch (error) {
//           console.error('Error adding item to favorites', error);
//           res.status(500).send('Internal Server Error');
//       }
//   })

module.exports = router;
