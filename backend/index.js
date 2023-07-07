const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const port = 3001;

app.use(cors());
app.use(express.json());

// MongoDB bağlantısı
// mongoose 
//   .connect('mongodb+srv://pinart:pinart@cluster0.uswwgnc.mongodb.net/?retryWrites=true&w=majority', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
  mongoose 
  .connect('mongodb://localhost/test', {
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
      //newUser.save();
      res.json({ success: true, message: 'Kullanıcı başarıyla kaydedildi.' });
    });

    app.post('/pages/login', (req, res) => {
      const { username, password } = req.body;
      res.json({ success: true, message: 'Kullanıcı girişi başak-rılı.' });
    });


// Profil paylaşma
app.post('/frontend/pages/user', (req, res) => {
  // Profil paylaşma işlemini gerçekleştir
  // Gerekli validasyonları yap
  // Paylaşılan profilin bilgilerini veritabanına kaydet
  // Başarılı bir yanıt döndür
  res.json({ success: true, message: 'Profil paylaşıldı' });
});

// Profil Ayarlarını Güncelleme
app.put('/frontend/pages/userSettings', (req, res) => {
  // Profil ayarlarını güncelleme işlemini gerçekleştir
  // Gerekli validasyonları yap
  // Veritabanında profil ayarlarını güncelle
  // Başarılı bir yanıt döndür
  res.json({ success: true, message: 'Profil ayarları güncellendi' });
});

// Pano'dan Pin Silme
app.delete('/api/boards/:boardId/pins/:pinId', (req, res) => {
  const { boardId, pinId } = req.params;
  // Belirtilen boardId ve pinId'ye sahip pini bul
  // Gerekli izin kontrolünü yap
  // Pin'i veritabanından sil
  // Başarılı bir yanıt döndür
  res.json({ success: true, message: 'Pin silindi' });
});

// Pano Düzenleme
app.put('/api/boards/:boardId', (req, res) => {
  const { boardId } = req.params;
  // Belirtilen boardId'ye sahip panoyu bul
  // Gerekli izin kontrolünü yap
  // Pano bilgilerini güncelle
  // Başarılı bir yanıt döndür
  res.json({ success: true, message: 'Pano düzenlendi' });
});

// Pano Oluşturma
app.post('/api/boards', (req, res) => {
  // Yeni pano oluşturma işlemini gerçekleştir
  // Gerekli validasyonları yap
  // Yeni oluşturulan panonun bilgilerini veritabanına kaydet
  // Başarılı bir yanıt döndür
  res.json({ success: true, message: 'Yeni pano oluşturuldu' });
});


app.listen(3001, () => {
  console.log('Sunucu çalışıyor...');
});
})
.catch((err) => {
console.error('MongoDB bağlantı hatası:', err);
});





