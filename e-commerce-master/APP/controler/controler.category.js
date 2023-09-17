const Category = require('../models/model.category')

const getCategory = async (req, res, next) => {
    try {
        const necategory = await Category.find()

        res.status(200).json({
            error: false,
            message: 'get data category success',
            datas: necategory
        })
    } catch (error) {
        next(error)
    }
}

const createCategory = async (req, res, next) => {
    try {
        const newcategory = await Category.create({ name: req.body.name })

        res.status(201).json({
            error: false,
            message: 'create data success',
            datas: newcategory
        })
    } catch (error) {
        next(error)
    }
}

const updateCategory = async (req, res, next) => {
    try {
        const newcategory = await Category.updateOne({ _id: req.params.id }, { name: req.body.name })

        if (newcategory.modifiedCount === 1) {
            res.status(201).json({
                error: false,
                message: 'update data category success',
                datas: newcategory
            })
        } else {
            res.status(200).json({
                error: false,
                message: 'data tidak ada yang di update',
                datas: newcategory
            })
        }
    } catch (error) {
        next(error)
    }
}

const deleteCategory = async (req, res, next) => {
    try {
        const newcategory = await Category.deleteOne({ _id: req.params.id })

        if (newcategory.deletedCount === 0) return res.status(404).json({ error: true, message: 'data category id not found' })

        res.status(200).json({
            error: false,
            message: 'delete data category success'
        })
    } catch (error) {
        next(error)
    }
}

module.exports = { getCategory, createCategory, updateCategory, deleteCategory }