const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');

app.use(cors());
app.use(express.json());

// MongoDB bağlantısı
mongoose
  .connect('mongodb+srv://pinart:pinart@cluster0.uswwgnc.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('MongoDB bağlantısı başarılı.');

    // Kullanıcı modelini burada tanımlayabilirsin
    // const User = mongoose.model('User', userSchema);

    app.post('/pages/register', (req, res) => {
      const { name, surname, username, email, password } = req.body;

      // Kullanıcı kaydı işlemleri burada gerçekleştir
      // veritabanına kaydetme işlemi
      // const newUser = new User({ name, surname, username, email, password });
      // newUser.save();

      res.json({ success: true, message: 'Kullanıcı başarıyla kaydedildi.' });
    });

    app.listen(3000, () => {
      console.log('Sunucu çalışıyor...');
    });
  })
  .catch((err) => {
    console.error('MongoDB bağlantı hatası:', err);
  });
