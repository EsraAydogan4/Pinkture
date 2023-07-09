var mongoose = require("mongoose");
var Register = mongoose.model("register");

//import Register from "../models/registerSchema";

// const cevapOlustur =function(res,status,content){
//   res.status(status).json(content);
// };

// const kayitolustur=function(req,res){
//   cevapOlustur(res,200,{"durum":"basarili"});
// }

// module.exports={
//   kayitolustur
// }




// const kayitol = (req, res) => {
//   const { name, surname, email, username, password } = req.body;

//   // Yeni bir Register belgesi oluşturur
//   const newRegister = new Register({
//     name,
//     surname,
//     email,
//     username,
//     password
//   });

//   // Yeni kaydı veritabanına kaydeder
//   newRegister.save((err, savedRegister) => {
//     if (err) {
//       // Veritabanına kaydetme sırasında bir hata oluşursa
//       console.error(err);
//       return res.status(500).json({ error: "Kayıt oluşturulurken bir hata oluştu" });
//     }

//     // Başarılı bir şekilde kaydedildiğinde bir yanıt döndürür
//     return res.status(200).json({ message: "Kayıt başarıyla oluşturuldu", register: savedRegister });
//   });
// };

// export default kayitol;


const kayitOl= function(req,res){
  Register.create({
      name: req.body.name,
      surname:req.body.surname,
      email:req.body.email,
      username:req.body.username,
      password:req.body.password,
  }, function(hata, Register) {
    if(hata){
      cevapolustur
    }
  }
  )
}
module.exports={
  kayitOl
}