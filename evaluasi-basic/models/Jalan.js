const mongoose = require('mongoose');

const jalanSchema = new mongoose.Schema({
    nama: {
        type: String,
        require: true
    },
    panjang: {
        type: String,
        require: true
    },
    lebar: {
        type: String,
        require: true
    },
    permukaan: {
        type: String,
        enum: ['aspal', 'beton', 'tanah']
    },
    kondisi: {
        type: String,
        enum: ['baik', 'sedang', 'rusak_ringan', 'rusak_berat']
    },
});

module.exports = mongoose.model('Jalan', jalanSchema);