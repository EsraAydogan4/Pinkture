var mongoose = require('mongoose' );
// require("./"); //buraya bir sema verilcek
 var dbURI = "mongodb+srv://pnr:pinar123@cluster0.xtjizw0.mongodb.net/";
 //var dbURI = "mongodb://localhost/pinkture";


mongoose.connect(dbURI);

function kapat(msg,callback){
mongoose.connection.close(function(){
    console.log(msg);
    callback();
});
}
process.on("SIGINT", function () {
    kapat("uygulama kapatıldı", function(){
        process.exit(0);
    });
});


mongoose.connection.on("connected", function(){
    console.log(dbURI + "adresindeki veritabanına bağlanıldı\n");
});
mongoose.connection.on("error", function(){
    console.log("Baglantı hatası\n");
});
mongoose.connection.on("disconnected", function(){
    console.log("baglantı kesildi\n");
});

require("./pinsema");