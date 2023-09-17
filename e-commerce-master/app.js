require('./databases/mongoose')
const express = require('express')
const logger = require('morgan')
const cookieParser = require('cookie-parser')
const cors = require('cors')

const routerUsers = require('./APP/routes/router.user')
const routerProduct = require('./APP/routes/router.product')
const routerCategory = require('./APP/routes/router.category')
const routerCart = require('./APP/routes/router.cart')
const routerOrderDetail = require('./APP/routes/router.order.detail')
const routerOrder = require('./APP/routes/router.order')


const app = express()
app.use(cors())
app.use(logger('dev'))
app.use(express.json())
app.use(cookieParser())
app.use(express.urlencoded({ extended: true }))

app.use('/', routerUsers)
app.use('/', routerProduct)
app.use('/', routerCategory)
app.use('/', routerCart)
app.use('/', routerOrderDetail)
app.use('/', routerOrder)


// midelware error
app.use(require('./midelware/midelware-error'))

app.listen(4000, () => console.log('4000 databases running'))