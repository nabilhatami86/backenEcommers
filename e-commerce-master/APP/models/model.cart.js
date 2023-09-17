const mongoose = require('mongoose')

const modelCart = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users'
    },
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product'
    },
    qty: {
        type: Number,
        require: [true, 'qty harus di isi'],
        min: [1, 'minimal qty adalah 1 qty']
    }
})

const CartItem = mongoose.model('Cart', modelCart)

module.exports = CartItem