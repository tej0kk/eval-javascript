const Jalan = require("../models/Jalan");

module.exports = {
    index: async (req, res) => {
        try {
            const jalan = await Jalan.find();
            res.status(200).json({ jalan });
        } catch (error) {
            res.status(400).json({message: error.message});
        }
    },

    store: async (req, res) => {
        try {
            const { nama, panjang, lebar, permukaan, kondisi } = req.body;
            await Jalan.create({ nama, panjang, lebar, permukaan, kondisi });
            const newJalan = await Jalan.findOne({nama: nama})
            res.status(200).json({ newJalan });
        } catch (error) {
            res.status(400).json({message: error.message});
        }
    },

    update: async (req, res) => {
        try {
            const { id, nama, panjang, lebar, permukaan, kondisi } = req.body;
            await Jalan.updateOne({ _id: id }, {
                nama : nama,
                panjang : panjang,
                lebar : lebar,
                permukaan : permukaan,
                kondisi : kondisi,
            });
            const editJalan = await Jalan.findOne({ _id: id });
            res.status(201).json({ editJalan });
        } catch (error) {
            res.status(400).json({message: error.message});
        }
    },
    
    delete: async (req, res) => {
        try{
            const { id } = req.params;
            const deleteJalan = await Jalan.findOne({ _id: id });
            await Jalan.deleteOne({ _id: id });
            res.status(201).json({ deleteJalan });
        } catch (error) {
            res.status(400).json({message: error.message});
        }
    }
}