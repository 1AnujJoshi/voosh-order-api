const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

//get the sign up data and create a user
module.exports.addUser = async function (req, res) {
  try {
    let { name, phone, password, confirmPassword } = req.body;

    // validate

    if (!phone || !password || !confirmPassword)
      return res.status(400).json({ msg: "Not all fields have been entered." });

    if (password !== confirmPassword)
      return res
        .status(400)
        .json({ msg: "Enter the same password twice for verification." });

    const existingUser = await User.findOne({ phone: phone });
    if (existingUser)
      return res
        .status(400)
        .json({ msg: "An account with this phone number already exists." });

    const newUser = await User.create(req.body);

    res.json({ newUser, message: "You can now login with the credentials" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports.login = async function (req, res) {
  try {
    const { phone, password } = req.body;

    // validate
    if (!phone || !password)
      return res.status(400).json({ msg: "Not all fields have been entered." });

    const user = await User.findOne({ phone: phone });
    if (!user)
      return res
        .status(400)
        .json({ msg: "No account with this phone has been registered." });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ msg: "Invalid credentials." });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    console.log("token", token);
    res.json({
      token,
      user: {
        id: user._id,
        name: user.name,
        message: "send the token received alog with other requests",
      },
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
