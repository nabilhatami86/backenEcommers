const jwt = require('jsonwebtoken')

const config = require('../APP/config')

module.exports = {
    createToken: (token) => {
        return jwt.sign(token, config.secreetKey)
    },
    verifyToken: (token) => {
        try {
            return jwt.verify(token, config.secreetKey)
        } catch (error) {
            if (error.name === 'TokenExpiredError') {
                throw new Error('Token has Expired')
            } else {
                throw new Error('Invalid Token')
            }
        }
    }
}