const mongoose = require('mongoose')

const modelOrder = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users'
    },
    tanggal_order: {
        type: Date,
        required: [true, 'tanggal order harus di isi']
    },
    status: {
        type: String,
        enum: ['pemrosesan', 'selesai', 'dibatalkan'],
        message: '{VALUE} is not suport',
        default: 'pemrosesan'
    }
})

const Order = mongoose.model('Order', modelOrder)

module.exports = Order