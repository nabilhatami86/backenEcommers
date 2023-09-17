const CartItem = require('../models/model.cart')

const getCartItem = async (req, res, next) => {
    try {
        const newCartItem = await CartItem.find({ user: req.user.id }).populate('user', 'name email alamat role')
            .populate({
                path: 'productId',
                populate: {
                    path: 'category',
                    select: 'name'
                }

            })

        res.status(200).json({
            error: false,
            message: 'get data Cart Item success',
            datas: newCartItem
        })
    } catch (error) {
        next(error)
    }
}

const createCartItem = async (req, res, next) => {
    try {
        const { productId, qty } = req.body

        const newCartItem = await CartItem.create({ user: req.user.id, productId, qty })

        res.status(201).json({
            error: false,
            message: 'create data success',
            datas: newCartItem
        })
    } catch (error) {
        next(error)
    }
}

const updateCartItem = async (req, res, next) => {
    try {
        const { productId, qty } = req.body

        if (qty === 0) return res.status(401).json({ error: true, message: 'qty tidak boleh kurang dari 1' })

        const newCartItem = await CartItem.updateOne({ _id: req.params.id }, { productId, qty })

        if (newCartItem.modifiedCount === 1) {
            return res.status(201).json({
                error: false,
                message: 'update data success',
                datas: newCartItem
            })
        }

        res.status(200).json({
            error: false,
            message: 'data tidak ada yang di update',
            datas: newCartItem
        })
    } catch (error) {
        next(error)
    }
}

const deleteCartItem = async (req, res, next) => {
    try {
        const newCartItem = await CartItem.deleteOne({ _id: req.params.id }, { user: req.user.id })

        if (newCartItem.deletedCount === 0) {
            return res.status(404).json({ error: true, message: 'data not found' })
        }

        res.status(200).json({
            error: false,
            message: 'delete data success',
        })
    } catch (error) {
        next(error)
    }
}

module.exports = { getCartItem, createCartItem, updateCartItem, deleteCartItem }