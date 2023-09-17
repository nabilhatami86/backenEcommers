const jwt = require('../utils/jwt')
const { getToken } = require('../utils/getToken')

module.exports = (req, res, next) => {
    try {
        const token = getToken(req)
        if (!token) return res.status(401).json({ error: true, message: 'authrntication failed' })

        const vaildeToken = jwt.verifyToken(token)
        if (!vaildeToken) return res.status(401).json({ error: true, message: 'authorization failed' })

        req.user = vaildeToken
        next()
    } catch (error) {
        next(error)
    }
}