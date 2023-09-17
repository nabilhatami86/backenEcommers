const mongoose = require('mongoose')

const modelUsers = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'name harus di isi'],
        maxlength: [250, 'max karakter adalah 250'],
        minlength: [3, 'min karakter adalah 3']
    },
    email: {
        type: String,
        required: [true, 'email harus di isi'],
        validate: {
            validator: (value) => {
                const emailRegex = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-]+)(\.[a-zA-Z]{2,5}){1,2}$/
                return emailRegex.test(value)
            },
            message: (props) => `${props.value} email tidak valid`
        }
    },
    password: {
        type: String,
        required: [true, '[password harus di isi'],
        maxlength: [250, 'max karakter adalah 250'],
        minlength: [3, 'min karakter adalah 3']
    },
    no_telepon: {
        type: String,
        required: [true, 'no telepon harus di isi'],
        validate: {
            validator: (value) => {
                const regexNoTelpon = /^(\+62|62)?[\s-]?0?8[1-9]{1}\d{1}[\s-]?\d{4}[\s-]?\d{2,5}$/
                return regexNoTelpon.test(value)
            }
        },
        message: (props) => `${props.value} 'Format nomor telepon harus sesuai dengan +6281234567890'`
    },
    alamat: {
        type: String,
        required: [true, 'alamat harus di isi'],
    },
    role: {
        type: String,
        enum: ['user', 'admin'],
        message: '{VALUE} is not suport',
        default: 'user'
    }
}, { timestamps: true })

const Users = mongoose.model('Users', modelUsers)

module.exports = Users