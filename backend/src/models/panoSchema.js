//pano.js

var mongoose = require("mongoose");

const { Schema } = mongoose;

const panoSchema = new Schema(
    {
      title: {
        type: String,
        required: true
      },
      pins: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Pin'
        }
      ]
    },
    { timestamps: true }
  );

const Pano= mongoose.model("Pano", panoSchema);

module.exports = Pano;

