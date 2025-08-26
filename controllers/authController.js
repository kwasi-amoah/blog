const crypto = require('crypto');
const User = require('../models/User');
const sendEmail = require('../utils/email');

exports.requestPasswordReset = async (req, res) => {
  try {
    const { email } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ msg: 'User not found' });

    const token = crypto.randomBytes(20).toString('hex');
    user.resetPasswordToken = token;
    user.resetPasswordExpires = Date.now() + 3600000; // 1 hr
    await user.save();

    const resetURL = `http://localhost:5000/api/auth/reset-password/${token}`;

    await sendEmail(
      user.email,
      'Password Reset Request',
      `You requested a password reset. Click here: ${resetURL}`,
      `<p>You requested a password reset.</p><p>Click <a href="${resetURL}">here</a> to reset your password.</p>`
    );

    res.json({ msg: 'Password reset email sent' });
  } catch (err) {
    res.status(500).json({ msg: 'Server error', error: err.message });
  }
};
