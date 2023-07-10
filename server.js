const express = require('express');
const path = require('path');
const app = express();

// Middleware
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.get('/api/example', (req, res) => {
  // Örnek bir API rotası
  res.json({ message: 'Merhaba, dünya!' });
});

// React uygulamasının ana sayfasını sunma
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

// Form verilerini alacak olan POST rotasını tanımlayın
app.post('/pages/register', (req, res) => {
  // Form verilerini alın
  const name = req.body.name;
  const lastname = req.body.surname;
  const username = req.body.username;
  const email = req.body.email;
  const password = req.body.password;

  // Alınan verileri kullanarak istediğiniz işlemleri yapın
  // Örneğin, verileri veritabanına kaydetmek gibi

  // İşlemler tamamlandıktan sonra uygun bir yanıt döndürün
  res.send('Kayıt başarıyla tamamlandı.');
});

// Sunucuyu başlatma
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Sunucu ${port} portunda çalışıyor.`);
});

app.post('/login', (req, res) => {
    // Form verilerini alın
    const username = req.body.uname;
    const password = req.body.psw;
  
    // Alınan verileri kullanarak istediğiniz işlemleri yapın
    // Örneğin, kullanıcı doğrulama gibi
  
    // İşlemler tamamlandıktan sonra uygun bir yanıt döndürün
    res.send('Giriş başarılı.');
  });