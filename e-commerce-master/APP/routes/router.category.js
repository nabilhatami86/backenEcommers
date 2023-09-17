const router = require('express').Router()

const controlerCategory = require('../controler/controler.category')

const midelwareAuthorization = require('../../midelware/midelware.authorization')

router.get('/category', midelwareAuthorization, controlerCategory.getCategory)
router.post('/category', midelwareAuthorization, controlerCategory.createCategory)
router.put('/category/:id', midelwareAuthorization, controlerCategory.updateCategory)
router.delete('/category/:id', midelwareAuthorization, controlerCategory.deleteCategory)

module.exports = router