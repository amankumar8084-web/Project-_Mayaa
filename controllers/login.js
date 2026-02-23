const bcrypt = require("bcryptjs");

const ADMIN_EMAIL = "admin@mayaa.com";
const ADMIN_HASHED_PASSWORD =
  "$2b$10$KF.yRuxwhv4mq82WwdOg3.T.z8Rq8hpOGJf0iDp4zItjyq8989spm";



exports.login= async (req, res) => {
  try {
    const { email, password } = req.body;

    if (email !== ADMIN_EMAIL) {
      return res.status(401).json({
        message: "Invalid email or password"
      });
    }

    const isMatch = await bcrypt.compare(password, ADMIN_HASHED_PASSWORD);

    if (!isMatch) {
      return res.status(401).json({
        message: "Invalid email or password"
      });

    }

  res.redirect("/api/superadmin/dashboard");
  } catch (error) {
    res.status(500).json({
      message: "Server Error"
    });
  }
};