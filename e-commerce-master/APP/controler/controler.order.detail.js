const OrderDetail = require('../models/model.order.detail')

const getOrderDetail = async (req, res, next) => {
    try {
        const newOrderDetail = await OrderDetail.find()

        res.status(200).json({
            error: false,
            message: 'get data order detail success',
            datas: newOrderDetail
        })
    } catch (error) {
        next(error)
    }
}

const postOrderDetail = async (req, res, next) => {
    try {
        const { cart, order, total_price } = req.body

        const newOrderDetail = await OrderDetail.create({ cart, order, total_price })

        res.status(201).json({
            error: false,
            message: 'create data order detail success',
            datas: newOrderDetail
        })
    } catch (error) {
        next(error)
    }
}

module.exports = { getOrderDetail, postOrderDetail }