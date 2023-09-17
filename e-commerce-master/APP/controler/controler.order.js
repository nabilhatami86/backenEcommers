const Order = require('../models/model.order')

const getOrder = async (req, res, next) =>{
    try {
const newOrder = await Order.find()

res.status(200).json({
    error: false,
    message: 'get order succes',
    datas: newOrder
})
    } catch (error){
        next(error)
    }
} 

const postOrder = async (req, res, next) =>{
    try {
        const{ status} = req.body

        const newOrder = await Order.create({
            user: req.user.id,
            tanggal_order : new Date() ,
            status  :   status
        })
        res.status(201).json({
            error     :false,
            message    :"post order success",
            datas      : newOrder
        })
        
    } catch (error) {
        next(error)
        
    }
}

const updateOrder = async(req, res, next) =>{
    try{
        const {status} = req.body
        const {id} = req.params
        const newOrder = await Order.updateOne({id}, {status})

       if(newOrder.modifiedCound === 1){
        res.status(201).json({
            error : false,
            message : 'order updated success',
            datas :newOrder
        })
       }else{
        res.status(200).json({
            error : false,
            message : 'date tidak ada yang di update',
            datas :newOrder
        })
       }

    } catch(error){
        next(error);
    }
}

module.exports = {getOrder, postOrder, updateOrder}