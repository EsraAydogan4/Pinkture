const express = require('express');
const path = require('path');
const app = express();
const port = 3000;
require("./db.js")

// Static dosyaları servis etmek için middleware kullanımı
app.use(express.static(path.join(__dirname, '../frontend')));

// Örnek bir endpoint tanımlama
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/index.html'));
});

// Diğer endpointleri ve işlemleri burada tanımlayabilirsiniz

// Sunucuyu belirli bir portta çalıştırma
app.listen(port, () => {
  console.log(`Sunucu ${port} numaralı portta çalışıyor.`);
});
