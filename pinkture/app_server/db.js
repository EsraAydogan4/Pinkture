import React, { useEffect } from 'react';
import mongoose from 'mongoose';

//import './mekansema'; // mekansema dosyasının yolunu doğru şekilde ayarlayın

const dbURI = "mongodb+srv://mekan32:0842@mekanbul.6s0yzws.mongodb.net/mekanbul?retryWrites=true&w=majority";

function App() {
  useEffect(() => {
    mongoose.connect(dbURI);

    function kapat(msg, callback) {
      mongoose.connection.close(() => {
        console.log(msg);
        callback();
      });
    }

    process.on("SIGINT", function() {
      kapat("Uygulama kapatıldı!", function() {
        process.exit(0);
      });
    });

    mongoose.connection.on("connected", function() {
      console.log(dbURI + " adresteki veri tabanına bağlandı!\n");
    });

    mongoose.connection.on("error", function() {
      console.log("Bağlantı hatası\n");
    });

    mongoose.connection.on("disconnected", function() {
      console.log("Bağlantı koptu!\n");
    });

    // Kapatma işlemini bileşenin ayrılmadan önce yapması için dinleyicileri temizleyin
    return () => {
      mongoose.connection.removeAllListeners();
    };
  }, []);

  return <div>React uygulaması</div>;
}

export default App;