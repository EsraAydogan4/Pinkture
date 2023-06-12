

// Pin ekleme formunu seçin
const pinEkleForm = document.getElementById("pinEkleForm");

// Form gönderildiğinde gerçekleşecek olay dinleyicisi
pinEkleForm.addEventListener("submit", function(event) {
  event.preventDefault(); // Sayfanın yeniden yüklenmesini engelle

  // Formdaki verileri al
  const resimURL = document.getElementById("resimURL").value;
  const baslik = document.getElementById("baslik").value;
  const aciklama = document.getElementById("aciklama").value;

  // Resim ekleme fonksiyonunu çağır
  resimEkle(resimURL, baslik, aciklama);
});

// Resim ekleme fonksiyonu
function resimEkle(resimURL, baslik, aciklama) {
  // Burada resmi backend'e gönderme işlemini gerçekleştirebilirsiniz.
  // Örneğin, bir API isteği göndererek veriyi backend'e iletebilirsiniz.
  // Bu örnekte, sadece konsola log olarak yazdıracağız.

  // Örnek bir API isteği
  fetch('/api/resimEkle', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ resimURL, baslik, aciklama })
  })
  .then(response => response.json())
  .then(data => {
    console.log('Resim başarıyla eklendi:', data);
    // Başarılı bir şekilde eklendiğinde kullanıcıyı bir sayfaya yönlendirebilirsiniz veya başka bir işlem gerçekleştirebilirsiniz.
  })
  .catch(error => {
    console.error('Resim eklenirken bir hata oluştu:', error);
    // Hata durumunda kullanıcıya bir hata mesajı gösterebilirsiniz veya başka bir işlem gerçekleştirebilirsiniz.
  });
}
