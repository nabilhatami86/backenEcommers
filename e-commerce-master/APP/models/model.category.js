const mongoose = require('mongoose')

const modelCategory = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'category harus di isi'],
    }
})

const Category = mongoose.model('Category', modelCategory)

module.exports = Category