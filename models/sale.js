const mongoose = require('mongoose');

const saleSchema = new mongoose.Schema({
  saleID: {
    type: String,
    required: true,
    unique: true,
  },
  saleDate: {
    type: Date,
    default: Date.now,
  },

  custormer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Custormer',
  },
});

module.exports = mongoose.model('Sale', saleSchema);
