const jwt = require("jsonwebtoken");

const auth = async (req, res, next) => {
  const token = req.header("Authorization");

  // Check if not token
  if (!token) {
    return res.status(401).json({ msg: "No token, authorization denied" });
  }

  // Verify token
  try {
    jwt.verify(
      token.replace("Bearer ", ""),
      process.env["jwtSecret"],
      (error, decoded) => {
        if (error) {
          return res.status(401).json({ msg: "Token is not valid" });
        } else {
          req.user = decoded.user;
          next();
        }
      }
    );
  } catch (err) {
    console.error("something wrong with auth middleware");
    res.status(500).json({ msg: "Server Error" });
  }
};

module.exports = auth;
