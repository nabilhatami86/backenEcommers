const router = require('express').Router()

const controlerCart = require('../controler/controler.Cart')

const midelwareAuthorization = require('../../midelware/midelware.authorization')

router.get('/cart', midelwareAuthorization, controlerCart.getCartItem)
router.post('/cart', midelwareAuthorization, controlerCart.createCartItem)
router.put('/cart/:id', midelwareAuthorization, controlerCart.updateCartItem)
router.delete('/cart/:id', midelwareAuthorization, controlerCart.deleteCartItem)

module.exports = router