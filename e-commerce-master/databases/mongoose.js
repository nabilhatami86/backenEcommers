const mongoose = require('mongoose')

mongoose.connect('mongodb://0.0.0.0:27017/e-commerce')

const db = mongoose.connection

db.on('error', console.log.bind(console, 'conection error'))
db.on('open', () => console.log('databases conect success'))