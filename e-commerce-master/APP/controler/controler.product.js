const Product = require('../models/model.product')
const Category = require('../models/model.category')

const getProduct = async (req, res, next) => {
    try {
        const { searchName, searchCategory } = req.query

        let search = {}

        if (searchName) {
            search = { ...search, name: { $regex: searchName, $options: 'i' } }
        }

        if (searchCategory.length) {
            const newCategory = await Category.findOne({ name: { $regex: searchCategory, $options: 'i' } })

            search = { ...search, category: newCategory._id }
        }

        const newProduct = await Product.find(search).populate('category', 'name')

        res.status(200).json({
            error: false,
            message: 'get data product success',
            datas: newProduct
        })
    } catch (error) {
        next(error)
    }
}

const getProductById = async (req, res, next) => {
    try {
        const newProduct = await Product.findById({ _id: req.params.id }).populate('category', 'name')

        if (!newProduct) return res.status(404).json({ error: true, message: 'data not found' })

        res.status(200).json({
            error: false,
            message: 'get data by id success',
            datas: newProduct
        })
    } catch (error) {
        next(error)
    }
}

const createProduct = async (req, res, next) => {
    try {
        const { name, description, price, stock, category } = req.body

        let categoryId = null
        if (category) {
            const newCategory = await Category.findOne({ name: { $regex: category, $options: 'i' } })

            if (newCategory) {
                categoryId = newCategory._id
            }
        }

        const newProduct = await Product.create({ name, description, price, stock, category: categoryId })

        res.status(201).json({
            error: false,
            message: 'create data success',
            datas: newProduct
        })
    } catch (error) {
        next(error)
    }
}

const updateProduct = async (req, res, next) => {
    try {
        const { name, description, price, stock, category } = req.body

        if (stock === 0) {
            return res.status(401).json({ error: true, message: 'stock tidak boleh kosong atau 0' })
        }

        let categoryId = null
        if (category) {
            const newCategory = await Category.findOne({ name: { $regex: category, $options: 'i' } })

            if (newCategory) {
                categoryId = newCategory._id
            }
        }

        const newProduct = await Product.updateOne({ _id: req.params.id }, { name, description, price, stock, category: categoryId })

        if (newProduct.modifiedCount === 0) {
            return res.status(201).json({
                error: false,
                message: 'data tidak ada yang di Update',
                datas: newProduct
            })
        } else {
            return res.status(200).json({
                error: false,
                message: 'update data berhasil',
                datas: newProduct
            })
        }
    } catch (error) {
        next(error)
    }
}

const deleteProduct = async (req, res, next) => {
    try {
        const newProduct = await Product.deleteOne({ _id: req.params.id })

        if (newProduct.deletedCount === 0) {
            return res.status(404).json({ error: true, message: 'data not found' })
        }

        res.status(200).json({
            error: false,
            message: 'delete data by id success'
        })
    } catch (error) {
        next(error)
    }
}

module.exports = { getProduct, getProductById, createProduct, updateProduct, deleteProduct }