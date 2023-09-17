const mongoose = require('mongoose')

const modelOrderDetail = mongoose.Schema({
    cart: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Cart'
    }],
    order: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Order'
    },
    total_price: {
        type: Number,
        required: [true, 'total price harus di isi']
    }
})

const OrderDetail = mongoose.model('OrderDetail', modelOrderDetail)

module.exports = OrderDetail