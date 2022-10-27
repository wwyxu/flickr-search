import * as express from 'express';
import validation from "../middleware/validation";
import checkUserExists from "../middleware/checkUserExists";
import { User } from "../models/user";

const bcrypt = require("bcrypt");
const jwtGenerator = require("../utils/jwtGenerator");
const router = express.Router();

router.get("/", async (_, res) => {
  try {
    const users = await User.find({}, { password: 0 });
    return res.json(users);
  } catch (err) {
    res.status(500).send(err);
  }
});

router.post("/verify", async (_, res) => {
  try {
    return res.json('ok')
  } catch (err) {
    res.status(500).send(err);
  }
});

router.post("/register", validation, checkUserExists, async (req, res) => {
  const { email, name, password } = req.body;

  try {
    const salt = await bcrypt.genSalt(10);
    const bcryptPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      name: name,
      email: email,
      password: bcryptPassword,
    });

    await newUser.save();

    return res.json('ok');
  } catch (err) {
    res.status(500).send(err);
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    let response;
    const user = await User.findOne({ email: email });

    if (user) {
      const isMatch = await bcrypt.compare(password, user.password);

      response = isMatch ? { jwt: jwtGenerator(user._id)} : "Password is not correct";
    } else {
      response = "User not found";
    }

    return res.json(response);
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;