const router = require('express').Router()

const controlerProduct = require('../controler/controler.product')

const midelwareAuthorization = require('../../midelware/midelware.authorization')

router.get('/product', controlerProduct.getProduct)
router.get('/product/:id', controlerProduct.getProductById)
router.post('/product', midelwareAuthorization, controlerProduct.createProduct)
router.put('/product/:id', midelwareAuthorization, controlerProduct.updateProduct)
router.delete('/product/:id', midelwareAuthorization, controlerProduct.deleteProduct)

module.exports = router