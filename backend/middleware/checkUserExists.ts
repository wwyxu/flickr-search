import { User } from "../models/user";

const checkUserExists = async (req, res, next) => {
  const { email } = req.body;

  try {
    const user = await User.findOne({ email: email });

    if (user) {
      return res.status(401).json("User already exists!");
    }
  } catch (err) {
    res.status(500).send("Server error");
  }

  next();
};

export default checkUserExists;