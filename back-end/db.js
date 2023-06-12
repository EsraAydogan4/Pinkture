var mongoose = require("mongoose");
var dbURI = "mongodb+srv://pinkture:pink1234@cluster0.jjybg2r.mongodb.net/";
//var dbURI = "mongodb://localhost/pinkture";
mongoose.connect(dbURI);

mongoose.connection.on("connected", function () {
    console.log(dbURI + " adresindeki veritabanina bağlanildi!\n");
});

mongoose.connection.on("error", function () {
    console.log("Bağlantı hatası: ");
});


mongoose.connection.on("disconnected", function () {
    console.log("Baglanti kesildi!");
});

function kapat(msg, callback) {
    mongoose.connection.close(function () {
        console.log(msg);
        callback();
    });
}
process.on("SIGINT", function () {
    kapat("Uygulama Kapatıldı!", function () {
        process.exit(0);
    });
});
// require("../models/UrunSema");
// require("../models/SiparisSema");
// require("../models/KullaniciSema");