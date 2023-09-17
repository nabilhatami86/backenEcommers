const dotenv = require('dotenv')

dotenv.config()

module.exports = {
    secreetKey: process.env.SECRET_KEY
}