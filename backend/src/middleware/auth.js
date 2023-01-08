const jwt = require("jsonwebtoken");
const User = require("../models/user");

const auth = async (req, res, next) => {
  try {
    const token = req.header("Authorization").replace("Bearer ", "");
    console.log(token);
    const dedcoded = jwt.verify(token, "shivang");

    const user = await User.findOne({
      _id: dedcoded._id,
      "tokens.token": token,
    });
    if (!user) {
      throw new Error();
    }
    req.token = token;
    req.user = user;
    next();
  } catch (error) {
    res.status(401).send({ error: "please authenticate" });
  }
  console.log("auth middle ware working");
};

module.exports = auth;
