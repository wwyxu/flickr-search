const jwt = require("jsonwebtoken");

function jwtGenerator(user_id) {
  const payload = {
    user: {
      id: user_id,
    },
  };

  return jwt.sign(payload, "secret", { expiresIn: "3h" }); // should use process.env, this is for demo purposes
}

module.exports = jwtGenerator;