const express = require('express');
const app = express();
const port = 3000;

const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/evaluasi')

const JalanController = require('./controllers/JalanController')

app.get('/', (req, res) => {
    res.send('Express JS');
});

//endpoint
app.get('/jalan', JalanController.index);
app.post('/jalan', JalanController.store);
app.put('/jalan', JalanController.update);
app.delete('/jalan/:id', JalanController.delete);

app.listen(port, () => {
    console.log(`Server dijalankan pada http://127.0.0.1:${port}`);
})