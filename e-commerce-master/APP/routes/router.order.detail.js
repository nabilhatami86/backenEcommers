const router = require('express').Router()

const controlerOrderDetail = require('../controler/controler.order.detail')

router.get('/order-detail', controlerOrderDetail.getOrderDetail)
router.post('/order-detail', controlerOrderDetail.postOrderDetail)

module.exports = router