var mongoose = require("mongoose");
var Login = mongoose.model("login");

import Login from "../models/loginSchema.js";

const girisyap = (req, res) => {
  const { username, password } = req.body; // Assuming you're expecting the username and password in the request body

  // Find the user in the Login model based on the provided username
  Login.findOne({ username }, (err, user) => {
    if (err) {
      // Handle any errors that occurred during the database operation
      console.error(err);
      return res.status(500).json({ error: "An error occurred" });
    }

    if (!user) {
      // If the user doesn't exist, return an error response
      return res.status(404).json({ error: "User doesn't exist" });
    }

    // Check if the provided password matches the one stored in the database
    if (user.password !== password) {
      return res.status(401).json({ error: "Invalid password" });
    }

    // If everything is valid, return a success response
    return res.status(200).json({ message: "Login successful" });
  });
};

export default girisyap;
