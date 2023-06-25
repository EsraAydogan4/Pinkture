var mongoose = require("mongoose");

var Register = mongoose.model("register");

import Register from "../models/registerSchema";

const kayitol = (req, res) => {
  const { name, surname, email, username, password } = req.body;

  // Yeni bir Register belgesi oluşturur
  const newRegister = new Register({
    name,
    surname,
    email,
    username,
    password
  });

  // Yeni kaydı veritabanına kaydeder
  newRegister.save((err, savedRegister) => {
    if (err) {
      // Veritabanına kaydetme sırasında bir hata oluşursa
      console.error(err);
      return res.status(500).json({ error: "Kayıt oluşturulurken bir hata oluştu" });
    }

    // Başarılı bir şekilde kaydedildiğinde bir yanıt döndürür
    return res.status(200).json({ message: "Kayıt başarıyla oluşturuldu", register: savedRegister });
  });
};

export default kayitol;
