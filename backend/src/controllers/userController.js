// var mongoose = require('mongoose');
// const User = require('../models/UserSettings');

// // Kullanıcı sayfasını getir
// const getUserPage = async (req, res) => {
//   try {
//     // Kullanıcıyı veritabanından al
//     const user = await User.findById(req.params.userId);

//     // Kullanıcı sayfasını render et
//     res.render('userPage', { user });
//   } catch (error) {
//     console.log(error);
//     res.status(500).send('Bir hata oluştu');
//   }
// };

// // Kullanıcı ayarlarını getir
// const getUserSettings = async (req, res) => {
//   try {
//     // Kullanıcıyı veritabanından al
//     const user = await User.findById(req.params.userId);

//     // Kullanıcı ayarlarını render et
//     res.render('userSettings', { user });
//   } catch (error) {
//     console.log(error);
//     res.status(500).send('Bir hata oluştu');
//   }
// };

// // Kullanıcı ayarlarını güncelle
// const updateUserSettings = async (req, res) => {
//   try {
//     // Kullanıcıyı veritabanından güncelle
//     const updatedUser = await User.findByIdAndUpdate(req.params.userId, req.body, { new: true });

//     // Güncellenmiş kullanıcıyı geri dön
//     res.json(updatedUser);
//   } catch (error) {
//     console.log(error);
//     res.status(500).send('Bir hata oluştu');
//   }
// };

// module.exports = {
//   getUserPage,
//   getUserSettings,
//   updateUserSettings,
// };
// Express ve diğer gerekli modüllerin import edilmesi
const express = require('express');
const bodyParser = require('body-parser');
var mongoose = require('mongoose'); 

// Express uygulamasının oluşturulması
const app = express();

// JSON verileri için body-parser kullanımı
app.use(bodyParser.json());

// Kullanıcı ayarları için bir mock veritabanı
let userSettings = {
  name: 'John Doe',
  email: 'johndoe@example.com',
  username: 'JohnDoe',
  password: '123456',
  bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  interests: ['JavaScript', 'Node.js', 'Express', 'MongoDB', 'React', 'Vue.js', 'Angular'],
  
  
};

// Kullanıcı ayarlarını güncellemek için bir endpoint
app.put('/pages/userSettings', (req, res) => {
  const {  name, email, username, password, bio, interests } = req.body;

  // Güncelleme işlemlerinin yapılması
  userSettings.name = name;
  userSettings.email = email;
  userSettings.username = username;
  userSettings.password = password;
  userSettings.bio = bio;
  userSettings.interests = interests;
  


  res.status(200).json({ message: 'Kullanıcı ayarları güncellendi.' });
});

// Kullanıcı ayarlarını döndüren bir endpoint
app.get('/pages/userSettings/:id', (req, res) => {
  res.status(200).json(userSettings);
});

// Express uygulamasının belirli bir portta dinlemesi
app.listen(3000, () => {
  console.log('Sunucu 3000 portunda çalışıyor.');
});

module.exports = {app, userSettings};
