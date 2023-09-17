const Users = require('../models/model.users')
const bcrypt = require('../../utils/bcrypt')
const jwt = require('../../utils/jwt')

const register = async (req, res, next) => {
    try {
        const { name, email, password, no_telepon, alamat, role } = req.body

        const validateEmail = await Users.exists({ email })
        if (validateEmail) return res.status(401).json({ error: true, message: 'Email sudah terdaftars' })

        const validateNoTelepon = await Users.exists({ no_telepon })
        if (validateNoTelepon) return res.status(401).json({ error: true, message: 'No Telepon sudah terdaftar' })

        const createUser = await Users.create({ name, email, password: await bcrypt.hashPassword(password), no_telepon, alamat, role })

        res.status(201).json({
            error: false,
            message: 'register successdylly',
            datas: createUser
        })
    } catch (error) {
        next(error)
    }
}

const login = async (req, res, next) => {
    try {
        const { email, password } = req.body

        const newUser = await Users.findOne({ email })
        if (!newUser) return res.status(401).json({ error: true, message: 'Email dan Password anda salah' })

        const validatePassword = await bcrypt.verifyPassword(password, newUser.password)
        if (!validatePassword) return res.status(401).json({ error: true, message: 'Email dan Password anda salah' })

        const payloadToken = {
            id: newUser._id,
            name: newUser.name,
            email: newUser.email,
            no_telepon: newUser.no_telepon,
            alamat: newUser.alamat,
            role: newUser.role
        }

        const token = jwt.createToken(payloadToken)

        res.status(200).json({
            error: false,
            message: 'login success',
            datas: {
                name: newUser.name,
                email: newUser.email,
                no_telepon: newUser.no_telepon,
                alamat: newUser.alamat,
                role: newUser.role,
                token: token

            }
        })
    } catch (error) {
        next(error)
    }
}

module.exports = {
    register,
    login
}