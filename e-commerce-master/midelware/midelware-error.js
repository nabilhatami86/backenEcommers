module.exports = (err, req, res, next) => {
    console.log(err)
    const validateError = {
        error: true,
        url: req.url,
        method: req.method
    }

    if (err.name === 'JsonWebTokenError') return res.status(401).json({ ...validateError, message: 'authentication failed' })

    if (err.code && err.message) return res.status(err.code).json({ ...validateError, message: err.message })

    res.status(500).json({ ...validateError, message: 'internal server error', error: err.errors })
}