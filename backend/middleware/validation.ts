import { validEmail } from "../utils/string";

const validate = async (req, res, next) => {
  const { email, name, password, password2 } = req.body;

  if (req.path === "/register") {
    if (![email, name, password, password2].every(Boolean)) {
      return res.json("Missing Credentials");
    } else if (!validEmail(email)) {
      return res.json("Invalid Email");
    } else if (password !== password2) {
      return res.json("Passwords must match");
    }
  }

  if (req.path === "/login") {
    if (![email, password].every(Boolean)) {
      return res.json("Missing Credentials");
    } else if (!validEmail(email)) {
      return res.json("Invalid Email");
    }
  }

  next();
};

export default validate;