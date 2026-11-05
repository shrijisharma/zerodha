const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const { UserModel } = require("../model/UsersModel");

// ✅ OTP generate route
router.post("/send-otp", async (req, res) => {
  try {
      console.log(" Body:", req.body);
    const { phone } = req.body;
    if (!phone) {
      return res.status(400).json({ error: "Phone number is required" });
    }

    // 4-digit random OTP
    const otp = Math.floor(1000 + Math.random() * 9000).toString();

    const otpExpiry = Date.now() + 5 * 60 * 1000; // 5 min expiry

    let user = await UserModel.findOne({ phone });
    if (user) {
      user.otp = otp;
      user.otpExpiry = otpExpiry;
      await user.save();
    } else {
      user = new UserModel({ phone, otp, otpExpiry });
      await user.save();
    }

    // 🚨 NOTE: Abhi ke liye OTP ko API response me bhej raha hun
    // Production me SMS service (Twilio, Fast2SMS, etc) use karna
    res.json({ success: true, otp }); 
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Something went wrong" });
  }
});

// ✅ OTP verify route
router.post("/verify-otp", async (req, res) => {
  try {
    const { phone, otp } = req.body;
    const user = await UserModel.findOne({ phone });

    if (!user) {
      return res.status(400).json({ error: "User not found" });
    }

    if (user.otp !== otp || Date.now() > user.otpExpiry) {
      return res.status(400).json({ error: "Invalid or expired OTP" });
    }

    // ✅ Generate JWT token
    const token = jwt.sign(
      { id: user._id, phone: user.phone },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    // ✅ Cookie me token set karo
    res.cookie("token", token, {
      httpOnly: true,   // browser JS se access nahi kar paayega
      secure: false,    // agar https ho to true karna
      sameSite: "strict"
    });

    // ✅ Response bhejo
    return res.json({ success: true, message: "OTP verified & cookie set!" });

  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Something went wrong" });
  }
});

module.exports = router;

