const mongoose = require('mongoose')

const modelProduct = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'name harus di isi'],
        maxlength: [250, 'max karakter adalah 250']
    },
    description: {
        type: String,
        required: [true, 'description harus di isi'],
    },
    price: {
        type: Number,
        required: [true, 'price harus di isi']
    },
    stock: {
        type: Number,
        required: [true, 'stock harus di isi'],
        min: [1, 'min stock adalah 1']
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
    }
})

const Product = mongoose.model('Product', modelProduct)

module.exports = Product