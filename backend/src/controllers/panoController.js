// const Board = require("../models/Board");
const Pano = require("../models/panoSchema");
// Pano sayfasını getir
const getPanoPage = async (req, res) => {
  try {
    // Pano verisini veritabanından al
    const board = await Board.findById(req.params.boardId);

    // Pano sayfasını render et
    res.render("pano", { board });
  } catch (error) {
    console.log(error);
    res.status(500).send("Bir hata oluştu");
  }
};

// Pano ayarlarını güncelle
const updateBoardSettings = async (req, res) => {
  try {
    // Pano verisini veritabanından güncelle
    const updatedBoard = await Board.findByIdAndUpdate(
      req.params.boardId,
      req.body,
      { new: true }
    );

    // Güncellenmiş pano verisini geri dön
    res.json(updatedBoard);
  } catch (error) {
    console.log(error);
    res.status(500).send("Bir hata oluştu");
  }
};

//create pano
const createBoard = async (req, res) => {
  try {
    const { title, pins } = req.body;

    // Pano nesnesini oluştur
    const pano = new Pano({ title, pins });

    // Pano nesnesini kaydet
    const savedPano = await pano.save();

    res.json(savedPano);
  } catch (error) {
    console.log(error);
    res.status(500).send("Bir hata oluştu");
  }
};

module.exports = {
  getPanoPage,
  updateBoardSettings,
  createBoard,
};
