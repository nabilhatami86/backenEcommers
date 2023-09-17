const router = require('express').Router()
const midelwareAuthorization = require('../../midelware/midelware.authorization')

const controlOrder = require('../controler/controler.order')
router.get('/order', controlOrder.getOrder)
router.post('/order',midelwareAuthorization, controlOrder.postOrder)
router.put('/order/:id', midelwareAuthorization,controlOrder.updateOrder )
module.exports=router;