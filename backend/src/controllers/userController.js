// const User = require('../models/User');

// Kullanıcı sayfasını getir
const getUserPage = async (req, res) => {
  try {
    // Kullanıcıyı veritabanından al
    const user = await User.findById(req.params.userId);

    // Kullanıcı sayfasını render et
    res.render('userPage', { user });
  } catch (error) {
    console.log(error);
    res.status(500).send('Bir hata oluştu');
  }
};

// Kullanıcı ayarlarını getir
const getUserSettings = async (req, res) => {
  try {
    // Kullanıcıyı veritabanından al
    const user = await User.findById(req.params.userId);

    // Kullanıcı ayarlarını render et
    res.render('userSettings', { user });
  } catch (error) {
    console.log(error);
    res.status(500).send('Bir hata oluştu');
  }
};

// Kullanıcı ayarlarını güncelle
const updateUserSettings = async (req, res) => {
  try {
    // Kullanıcıyı veritabanından güncelle
    const updatedUser = await User.findByIdAndUpdate(req.params.userId, req.body, { new: true });

    // Güncellenmiş kullanıcıyı geri dön
    res.json(updatedUser);
  } catch (error) {
    console.log(error);
    res.status(500).send('Bir hata oluştu');
  }
};

module.exports = {
  getUserPage,
  getUserSettings,
  updateUserSettings,
};
