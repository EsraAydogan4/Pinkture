// var mongoose = require('mongoose');
// const userSettings = require('../models/userSettingsSchema');


// exports.create = (req, res) => {
//     // Validate request
//     if (!req.body.email) {
//       res.status(400).send({ message: "Content can not be empty!" });
//       return;
//     }
//     if (!req.body.username) {
//       res.status(400).send({ message: "Content can not be empty!" });
//       return;
//     }
//     if (!req.body.password) {
//       res.status(400).send({ message: "Content can not be empty!" });
//       return;
//     }
  
//     // Create a Tutorial
//     const userSettings = new UserSettings({
//       name: req.body.name,
//       email: req.body.email,
//       username: req.body.username,
//       password: req.body.password,
//       bio: req.body.bio,
//       interests: req.body.interests
//     });
  
//     // Save Tutorial in the database
//     userSettings
//       .save(userSettings)
//       .then(data => {
//         res.send(data);
//       })
//       .catch(err => {
//         res.status(500).send({
//           message:
//             err.message || "Some error occurred while creating the Tutorial."
//         });
//       });
//   };

// module.exports = {
//     userSettings
// }