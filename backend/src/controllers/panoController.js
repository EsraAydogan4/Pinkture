const Board = require('../models/Board');

// Pano sayfasını getir
const getPanoPage = async (req, res) => {
  try {
    // Pano verisini veritabanından al
    const board = await Board.findById(req.params.boardId);

    // Pano sayfasını render et
    res.render('pano', { board });
  } catch (error) {
    console.log(error);
    res.status(500).send('Bir hata oluştu');
  }
};

// Pano ayarlarını güncelle
const updateBoardSettings = async (req, res) => {
  try {
    // Pano verisini veritabanından güncelle
    const updatedBoard = await Board.findByIdAndUpdate(req.params.boardId, req.body, { new: true });

    // Güncellenmiş pano verisini geri dön
    res.json(updatedBoard);
  } catch (error) {
    console.log(error);
    res.status(500).send('Bir hata oluştu');
  }
};

module.exports = {
  getPanoPage,
  updateBoardSettings,
};
