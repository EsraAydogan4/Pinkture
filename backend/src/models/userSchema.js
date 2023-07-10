// userPage.js

const mongoose = require('mongoose');

userPageSchema.set('id', true);

const userPageSchema = new mongoose.Schema(
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

const UserPage = mongoose.model('UserPage', userPageSchema);

module.exports = UserPage;
