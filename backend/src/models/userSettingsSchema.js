// userSettings.js

const mongoose = require('mongoose');

const userSettingsSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    username: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    bio: {
      type: String
    },
    interests: [
      {
        type: String
      }
    ]
  },
  { timestamps: true }
);


const userSettings = mongoose.model('UserSettings', userSettingsSchema);

module.exports = {
  userSettings
};