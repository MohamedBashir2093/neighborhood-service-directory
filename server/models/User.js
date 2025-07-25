const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['resident', 'provider'], required: true },
  profilePic: { type: String }, // optional, for advanced feature
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema); 